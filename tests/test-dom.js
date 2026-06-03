const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const possiblePaths = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ].filter(Boolean);

  const launchOpts = {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: 'new'
  };

  for (const p of possiblePaths) {
    try {
      fs.accessSync(p);
      launchOpts.executablePath = p;
      break;
    } catch (e) {
      // not found, continue
    }
  }

  const browser = await puppeteer.launch(launchOpts);
  const page = await browser.newPage();
  page.setDefaultTimeout(20000);

  try {
    await page.goto('http://localhost:8000/', { waitUntil: 'networkidle2' });

    // Wait for menu or add button to appear
    await page.waitForSelector('button[data-add], .add-button, .menu-card, .recommend-card', { timeout: 15000 });

    // Click the first available add-to-cart button via page.evaluate
    const addCount = await page.$$eval('button[data-add], .add-button', (els) => els.length);
    console.log('ADD_BUTTONS:' + addCount);
    const exists = await page.$('button[data-add], .add-button');
    if (!exists) {
      console.error('No add button found');
      await browser.close();
      process.exit(2);
    }
    // Check if addToCart is exposed, then call it
    const hasAddFn = await page.evaluate(() => typeof window.addToCart);
    console.log('HAS_ADD_FUNC:' + hasAddFn);

    const before = await page.evaluate(() => ({
      cartCountText: document.querySelector('#cartCount')?.textContent.trim() || null,
      fabText: document.querySelector('#cartFabCount')?.textContent.trim() || null,
    }));
    console.log('BEFORE:' + JSON.stringify(before));

    await page.evaluate(() => {
      const btn = document.querySelector('button[data-add]') || document.querySelector('.add-button');
      if (!btn) throw new Error('No add button found');
      const id = btn.dataset.add || btn.getAttribute('data-add');
      const card = btn.closest('[data-menu-card]');
      if (typeof window.addToCart === 'function') {
        window.addToCart(id, card);
      } else {
        btn.click();
      }
    });

    const after = await page.evaluate(() => ({
      cartCountText: document.querySelector('#cartCount')?.textContent.trim() || null,
      fabText: document.querySelector('#cartFabCount')?.textContent.trim() || null,
    }));
    console.log('AFTER:' + JSON.stringify(after));

    // Wait for FAB count to update (allow slight delay)
    try {
      await page.waitForFunction(() => {
        const el = document.querySelector('#cartFabCount');
        return el && Number(el.textContent.trim()) > 0;
      }, { timeout: 3000 });
    } catch (e) {
      // allow test to continue to record what we saw
    }

    // Read FAB count and badge presence
    const fabCount = await page.$eval('#cartFabCount', (el) => el.textContent.trim());
    const badgeExists = await page.evaluate(() => !!document.querySelector('.badge'));

    console.log('FAB_COUNT:' + fabCount);
    console.log('BADGE:' + (badgeExists ? 'yes' : 'no'));

    await browser.close();

    const ok = badgeExists && Number(fabCount) >= 1;
    process.exit(ok ? 0 : 2);
  } catch (err) {
    console.error(err);
    await browser.close();
    process.exit(3);
  }
})();
