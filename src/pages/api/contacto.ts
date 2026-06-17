export const prerender = false;
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, message, language = 'es' } = body;

  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT),
    auth: { user: import.meta.env.SMTP_USER, pass: import.meta.env.SMTP_PASS },
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border-top: 4px solid #2563eb; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 20px; }
        .logo { font-size: 24px; font-weight: 900; color: #000; }
        .logo span { color: #2563eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
        .value { background: #f9fafb; padding: 10px; border-radius: 6px; margin-top: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header"><div class="logo">CYGNUS<span>VISUAL</span></div></div>
        <div class="field"><div class="label">Nombre</div><div class="value">${name}</div></div>
        <div class="field"><div class="label">Correo</div><div class="value">${email}</div></div>
        <div class="field"><div class="label">Mensaje</div><div class="value">${message.replace(/\n/g, '<br>')}</div></div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Cygnus Visual" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.EMAIL_TO,
      subject: `📩 Nuevo mensaje de ${name}`,
      html: htmlContent
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
};