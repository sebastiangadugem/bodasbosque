// Vercel Serverless Function — proxies the Tendencias 2027 campaign form to n8n.
// Fields sent to n8n: nombres, email, telefono, ubicacion, submittedAt (→ enviado).
const WEBHOOK = "https://lowcode.morelos.gob.mx/webhook/91d44fd2-572b-4a9c-ad2b-72d2e5ea0faa";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { nombres, email, telefono, ubicacion } = body;

    if (!nombres || !email) {
      res.status(400).json({ error: "Faltan campos obligatorios" });
      return;
    }

    const upstream = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombres,
        email,
        telefono: telefono || "",
        ubicacion: ubicacion || "",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!upstream.ok) {
      res.status(502).json({ error: "Webhook error", status: upstream.status });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: "Error interno" });
  }
}
