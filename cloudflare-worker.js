const LIFF_MENU_URL = "https://liff.line.me/2010801863-UI4v4GzG";
const recentReplies = new Map();
const REPLY_DEDUP_MS = 2 * 60 * 60 * 1000;
const REPLY_DEDUP_SECONDS = 2 * 60 * 60;

export default {
  async fetch(request, env) {
    if (request.method === "GET") {
      return json({ ok: true, service: "somtam-line-order" });
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405);
    }

    const body = await request.json();

    if (body.events) {
      await handleLineWebhook(body, env);
      return json({ ok: true });
    }

    const message = buildOrderMessage(body);
    const lineResponse = await pushLineMessage(env, env.LINE_ADMIN_TO_ID, message);
    let customerResponse = null;

    if (body.lineUserId) {
      customerResponse = await pushLineMessage(env, body.lineUserId, buildCustomerMessage(body));
    }

    return json({
      ok: lineResponse.ok,
      status: lineResponse.status,
      customerStatus: customerResponse ? customerResponse.status : null,
    });
  },
};

function pushLineMessage(env, to, text) {
  return fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to,
      messages: [{ type: "text", text }],
    }),
  });
}

async function handleLineWebhook(body, env) {
  const replyEvent = body.events.find(shouldReplyToEvent);
  if (!replyEvent) return;

  const userId = replyEvent.source.userId;
  const now = Date.now();
  const replyKey = `reply:${userId}`;
  const lastReplyAt = await getLastReplyAt(env, replyKey);
  if (lastReplyAt && now - lastReplyAt < REPLY_DEDUP_MS) return;

  const response = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      replyToken: replyEvent.replyToken,
      messages: [{ type: "text", text: buildWelcomeMenuMessage() }],
    }),
  });

  if (response.ok) {
    await rememberReply(env, replyKey, now);
  }

  console.log("LINE reply status", response.status, await response.text());
}

async function getLastReplyAt(env, key) {
  if (env.SOMTAM_REPLY_STATE) {
    const value = await env.SOMTAM_REPLY_STATE.get(key);
    return Number(value) || 0;
  }

  return recentReplies.get(key) || 0;
}

async function rememberReply(env, key, timestamp) {
  if (env.SOMTAM_REPLY_STATE) {
    await env.SOMTAM_REPLY_STATE.put(key, String(timestamp), {
      expirationTtl: REPLY_DEDUP_SECONDS,
    });
    return;
  }

  recentReplies.set(key, timestamp);
}

function shouldReplyToEvent(event) {
  if (!event.replyToken || !event.source || !event.source.userId) return false;
  if (event.type === "follow") return true;
  return event.type === "message" && Boolean(event.message);
}

function buildWelcomeMenuMessage() {
  return [
    "สวัสดีจ้าา 💚",
    "",
    "พ่อค้าพร้อมตำให้แซ่บนัวทุกครก 🌶️🥗",
    "ฝากท้องไว้กับ #ส้มตำสมใจ ได้เลยน้า 😋",
    "",
    "อยากแซ่บ กดลิงก์นี้เพื่อดูเมนูและสั่งอาหารได้เลยจ้า",
    "👇👇👇",
    LIFF_MENU_URL,
  ].join("\n");
}

function buildOrderMessage(order) {
  const itemLines = order.items.map((item) => {
    const toppings = item.toppings && item.toppings.length ? `\n   เพิ่ม: ${item.toppings.join(", ")}` : "";
    return `• ${item.name} (${item.variantName}) x${item.quantity} = ฿${item.subtotal}\n   🌶️ เผ็ด: ${item.spice}${toppings}`;
  }).join("\n\n");

  return [
    `🧾 ออเดอร์ใหม่ ${order.orderId}`,
    "",
    `👤 ลูกค้า: ${order.customerName}`,
    `📞 โทร: ${order.phone}`,
    `💬 LINE: ${order.lineDisplayName || order.lineUserId || "-"}`,
    `🛵 วิธีรับอาหาร: ${order.fulfillment}`,
    `💳 ชำระเงิน: ${order.paymentMethod || "-"}`,
    "",
    itemLines,
    "",
    `💰 รวม: ฿${order.total}`,
    `📝 หมายเหตุ: ${order.note || "-"}`,
  ].join("\n");
}

function buildCustomerMessage(order) {
  const itemLines = order.items.map((item) => {
    const toppings = item.toppings && item.toppings.length ? `\n   เพิ่ม: ${item.toppings.join(", ")}` : "";
    return `• ${item.name} (${item.variantName}) x${item.quantity} = ฿${item.subtotal}\n   🌶️ เผ็ด: ${item.spice}${toppings}`;
  }).join("\n\n");

  return [
    "✅ รับออเดอร์เรียบร้อยครับ",
    `🧾 เลขออเดอร์: ${order.orderId}`,
    "",
    `👤 ลูกค้า: ${order.customerName}`,
    `📞 โทร: ${order.phone}`,
    `💬 LINE: ${order.lineDisplayName || order.lineUserId || "-"}`,
    `🛵 วิธีรับอาหาร: ${order.fulfillment}`,
    `💳 ชำระเงิน: ${order.paymentMethod || "-"}`,
    "",
    itemLines,
    "",
    `💰 ยอดรวม: ฿${order.total}`,
    "",
    "🙏 พ่อค้าจะติดต่อกลับเพื่อยืนยันรายการอีกครั้งครับ",
    order.fulfillment === "ส่งเดลิเวอรี่" ? "📍 กรณีส่งเดลิเวอรี่ รบกวนส่งตำแหน่งปัจจุบันเข้ามาในแชทนี้ได้เลยครับ" : "",
    `📝 หมายเหตุ: ${order.note || "-"}`,
  ].filter(Boolean).join("\n");
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
