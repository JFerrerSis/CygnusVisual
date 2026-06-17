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

  try {
    // 1. Correo para TI (Administrador)
    await transporter.sendMail({
      from: `"Cygnus Visual" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.EMAIL_TO,
      subject: `📩 Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border-top: 4px solid #2563eb;">
          <h2 style="color: #000;">CYGNUS<span>VISUAL</span></h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        </div>`
    });

    // 2. Correo de CONFIRMACIÓN para el CLIENTE
    const isEs = language === 'es';
    await transporter.sendMail({
      from: `"Cygnus Visual" <${import.meta.env.SMTP_USER}>`,
      to: email,
      subject: isEs ? '✨ ¡Hemos recibido tu mensaje!' : '✨ We received your message!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border-top: 4px solid #2563eb; background: #f9fafb; border-radius: 8px;">
          <h2 style="color: #000;">CYGNUS<span>VISUAL</span></h2>
          <p style="font-size: 16px;">${isEs ? 'Hola' : 'Hello'} <strong>${name}</strong>,</p>
          <p>${isEs 
            ? 'Gracias por contactarnos. Hemos recibido tu mensaje correctamente y uno de nuestros asesores te responderá a la brevedad posible.' 
            : 'Thank you for contacting us. We have received your message and one of our advisors will get back to you as soon as possible.'}</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            ${isEs ? 'Este es un mensaje automático, por favor no responder.' : 'This is an automated message, please do not reply.'}
          </p>
        </div>`
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
};