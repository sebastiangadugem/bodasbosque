// Vercel Serverless Function — proxies the contact form to the private webhook.
// The secret token lives ONLY here (server-side env var, never shipped to the client).
//
// Required env vars (set in Vercel → Settings → Environment Variables):
//   WEBHOOK_TOKEN  — shared secret; sent as "Authorization: Bearer <token>"
//   WEBHOOK_URL    — (optional) overrides the default endpoint below
//
// The n8n webhook should validate the Authorization header against WEBHOOK_TOKEN.

const DEFAULT_WEBHOOK_URL =
  "https://lowcode.morelos.gob.mx/webhook-test/4d7a115f-efc7-4f23-897b-683353d4faf4";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const url = process.env.WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
  const token = process.env.WEBHOOK_TOKEN;

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { nombre, email, fecha, mensaje } = body;

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
