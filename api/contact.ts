// Vercel Serverless Function — proxies the contact form to the private webhook.
// The webhook URL + secret live ONLY in server-side env vars, never in the repo
// and never shipped to the client bundle.
//
// Required env vars (set in Vercel → Settings → Environment Variables):
//   WEBHOOK_URL    — full n8n webhook endpoint (kept out of source on purpose)
//   WEBHOOK_TOKEN  — (optional) shared secret; sent as "Authorization: Bearer <token>"
//
// The n8n webhook should validate the Authorization header against WEBHOOK_TOKEN.

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const url = process.env.WEBHOOK_URL;
  const token = process.env.WEBHOOK_TOKEN;

  if (!url) {
    res.status(500).json({ error: "Webhook no configurado" });
    return;
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { nombre, email, telefono, fecha, mensaje } = body;

    if (!nombre || !email) {
      res.status(400).json({ error: "Faltan campos obligatorios" });
      return;
    }

    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        nombre,
        email,
        telefono: telefono || "",
        fecha: fecha || "",
        mensaje: mensaje || "",
        source: "bodas-en-el-bosque-web",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!upstream.ok) {
      res
        .status(502)
        .json({ error: "El webhook respondió con error", status: upstream.status });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: "Error interno" });
  }
}
