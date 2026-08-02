const puppeteer = require("puppeteer");
const fs = require("fs");
const http = require("http");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PORT = Number(process.env.PORT || 8000);
const BASE = `http://127.0.0.1:${PORT}/`;

function mime(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) return "image/jpeg";
  return "application/octet-stream";
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const rel = urlPath === "/" ? "index.html" : urlPath.replace(/^\//, "");
      const filePath = path.normalize(path.join(ROOT, rel));
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end();
        return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end();
          return;
        }
        res.writeHead(200, { "Content-Type": mime(filePath) });
        res.end(data);
      });
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function addFirstItemViaModal(page) {
  await page.evaluate(() => document.querySelector("button[data-add]").click());
  await page.waitForSelector("#itemModal.is-open");
  await page.evaluate(() => document.querySelector("#itemModalConfirm").click());
  await page.waitForFunction(() => Number(document.querySelector("#cartCount").textContent) > 0);
}

(async () => {
  const possiblePaths = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ].filter(Boolean);

  const launchOpts = {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  };

  for (const chromePath of possiblePaths) {
    try {
      fs.accessSync(chromePath);
      launchOpts.executablePath = chromePath;
      break;
    } catch {
      // continue
    }
  }

  const server = await startStaticServer();
  const browser = await puppeteer.launch(launchOpts);
  const page = await browser.newPage();
  page.setDefaultTimeout(20000);

  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(String(err)));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  try {
    await page.goto(BASE, { waitUntil: "networkidle2" });
    await page.waitForSelector(".menu-card", { timeout: 15000 });

    const initialCards = await page.$$eval(".menu-card", (els) => els.length);
    assert(initialCards > 0, "featured menu should render cards");

    const filterCount = await page.$$eval(".filter-button", (els) => els.length);
    assert(filterCount >= 5, "category filters should exist");

    await page.evaluate(() => document.querySelector('.filter-button[data-category="drink"]').click());
    await page.waitForFunction(() => document.querySelectorAll(".menu-card").length > 0);
    const drinkTitle = await page.$eval("#menuTitle", (el) => el.textContent.trim());
    assert(drinkTitle.length > 0, "drink filter should update menu title");

    await page.evaluate(() => document.querySelector('.filter-button[data-category="all"]').click());
    await page.waitForSelector(".menu-card");

    await addFirstItemViaModal(page);

    const cardHasNoInlineSelect = await page.evaluate(
      () => !document.querySelector(".menu-card select[data-variant], .menu-card select[data-spice]")
    );
    assert(cardHasNoInlineSelect, "menu cards should not show variant/spice dropdowns");

    const afterAdd = await page.evaluate(() => ({
      count: document.querySelector("#cartCount").textContent,
      total: document.querySelector("#cartTotal").textContent,
      fab: document.querySelector("#cartFabCount").textContent,
    }));
    assert(Number(afterAdd.count) === 1, "cart count should be 1 after add");
    assert(afterAdd.total !== "฿0", "cart total should update");

    await page.evaluate(() => document.querySelector("[data-increase]").click());
    const afterIncrease = await page.evaluate(() => document.querySelector("#cartCount").textContent);
    assert(Number(afterIncrease) === 2, "quantity increase should work");

    await page.evaluate(() => document.querySelector("[data-decrease]").click());
    const afterDecrease = await page.evaluate(() => document.querySelector("#cartCount").textContent);
    assert(Number(afterDecrease) === 1, "quantity decrease should work");

    await page.select("#paymentMethod", "โอนบัญชี QR Cod");
    const paymentVisible = await page.$eval("#paymentDetails", (el) => el.classList.contains("is-visible"));
    assert(paymentVisible, "payment details should show for transfer");

    await page.select("#paymentMethod", "เงินสด");
    const paymentHidden = await page.$eval(
      "#paymentDetails",
      (el) => !el.classList.contains("is-visible")
    );
    assert(paymentHidden, "payment details should hide for cash");

    await page.evaluate(() => document.querySelector("[data-remove]").click());
    const emptyCart = await page.evaluate(() => document.querySelector("#cartCount").textContent);
    assert(Number(emptyCart) === 0, "remove item should empty cart");

    await addFirstItemViaModal(page);

    await page.evaluate(() => {
      document.querySelector("#cartFab").click();
      window.__orderPayload = null;
      window.fetch = async (url, options) => {
        window.__orderPayload = JSON.parse(options.body);
        return { ok: true, type: "basic" };
      };
    });

    await page.type('input[name="customerName"]', "ทดสอบ");
    await page.type('input[name="phone"]', "0812345678");
    await page.evaluate(() => document.querySelector(".submit-button").click());
    await page.waitForSelector("#successModal.is-open");

    const payload = await page.evaluate(() => window.__orderPayload);
    assert(payload && payload.items.length === 1, "order payload should include cart items");
    assert(payload.customerName === "ทดสอบ", "order payload should include customer name");

    const blockingErrors = consoleErrors.filter(
      (line) => !line.includes("Failed to load resource") && !line.includes("404")
    );
    assert(blockingErrors.length === 0, `console errors: ${blockingErrors.join(" | ")}`);

    console.log("ALL_CHECKS_PASSED");
    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    if (consoleErrors.length) console.error("PAGE_ERRORS:", consoleErrors.join("\n"));
    await browser.close();
    server.close();
    process.exit(1);
  }
})();
