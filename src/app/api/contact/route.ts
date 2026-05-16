import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const dynamic = "force-dynamic";

const subjectLabels: Record<string, string> = {
  privacidad: "Privacidad de Datos",
  ciberseguridad: "Ciberseguridad",
  ip: "Propiedad Intelectual",
  otro: "Otro",
};

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  message: z.string().trim().min(10).max(2000),
  company: z.string().trim().max(100).optional(),
  subject: z.string().trim().max(50).optional(),
  website: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ ok: false, error: "Server misconfigured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Body inválido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Datos inválidos" },
      { status: 400 }
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message, company, subject } = parsed.data;
  const subjectLabel = subject ? subjectLabels[subject] ?? subject : null;
  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#0a0a0a">Nuevo mensaje desde Altius Lexia</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ""}
      ${subjectLabel ? `<p><strong>Asunto:</strong> ${escapeHtml(subjectLabel)}</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:4px">${escapeHtml(message)}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: `Altius Lexia <${from}>`,
    to,
    replyTo: email,
    subject: subjectLabel ? `Nuevo contacto (${subjectLabel}): ${name}` : `Nuevo contacto: ${name}`,
    html,
  });

  if (error) {
    console.error("[contact-form] resend error:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c
  );
}
