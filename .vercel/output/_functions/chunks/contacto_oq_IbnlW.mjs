import nodemailer from 'nodemailer';

const prerender = false;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: Number("587"),
  secure: false,
  auth: {
    user: "jorgeferrercohen@gmail.com",
    pass: "duki dwve hrpu gdil"
  }
});
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Error de conexión SMTP:", error);
  } else {
    console.log("✅ Servidor de correo listo");
  }
});
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message, language } = body;
    console.log("📩 Recibido:", { name, email, language });
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const adminMailOptions = {
      from: `"Cygnus Visual" <${"jorgeferrercohen@gmail.com"}>`,
      to: "xullojavi@gmail.com",
      subject: `📩 Nuevo mensaje de ${name}`,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: #f5f5f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 20px; }
        .email-container { max-width: 550px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
        .logo-area { text-align: center; padding: 35px 20px 20px; border-bottom: 1px solid #f0f0f0; }
        .logo-cygnus { font-size: 32px; font-weight: 800; letter-spacing: -1px; color: #000000; }
        .logo-cygnus span { color: #0033A0; }
        .logo-line { width: 50px; height: 2px; background: #0033A0; margin: 15px auto 0; border-radius: 2px; }
        .content { padding: 30px; }
        .badge { display: inline-block; background: #0033A0; color: white; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 20px; margin-bottom: 25px; letter-spacing: 0.5px; }
        .info-card { margin-bottom: 20px; }
        .info-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 5px; }
        .info-value { font-size: 16px; color: #333; font-weight: 500; margin: 0; }
        .divider { height: 1px; background: #f0f0f0; margin: 20px 0; }
        .message-box { background: #fafafa; border-radius: 12px; padding: 20px; margin-top: 10px; }
        .message-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 12px; }
        .message-text { color: #555; line-height: 1.6; font-size: 14px; }
        .footer { background: #fafafa; padding: 20px; text-align: center; border-top: 1px solid #f0f0f0; }
        .footer-text { color: #aaa; font-size: 11px; margin: 5px 0; }
        .services { margin-top: 10px; }
        .services span { color: #0033A0; font-size: 11px; margin: 0 5px; }
      </style>
    </head>
    <body>
      <div class="email-container">
        
        <div class="logo-area">
          <div class="logo-cygnus">CYGNUS<span>VISUAL</span></div>
          <div class="logo-line"></div>
        </div>
        
        <div class="content">
          <div style="text-align: center;">
            <span class="badge">📩 NUEVO MENSAJE</span>
          </div>
          
          <div class="info-card">
            <div class="info-label">👤 NOMBRE</div>
            <p class="info-value">${name}</p>
          </div>
          
          <div class="info-card">
            <div class="info-label">📧 CORREO ELECTRÓNICO</div>
            <p class="info-value">${email}</p>
          </div>
          
          <div class="divider"></div>
          
          <div class="message-box">
            <div class="message-label">💬 MENSAJE</div>
            <div class="message-text">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p class="footer-text">© ${(/* @__PURE__ */ new Date()).getFullYear()} Cygnus Visual</p>
          <p class="footer-text">Agencia de Marketing Audiovisual</p>
          <div class="services">
            <span>🎬 Producción</span> • <span>📱 RRSS</span> • <span>📊 Marketing</span>
          </div>
        </div>
        
      </div>
    </body>
    </html>
  `
    };
    const userMailOptions = {
      from: `"Cygnus Visual" <${"jorgeferrercohen@gmail.com"}>`,
      to: email,
      subject: language === "es" ? "✨ Hemos recibido tu mensaje - Cygnus Visual" : "✨ We received your message - Cygnus Visual",
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: #f5f5f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 20px; }
        .email-container { max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
        .logo-area { text-align: center; padding: 35px 20px 20px; border-bottom: 1px solid #f0f0f0; }
        .logo-cygnus { font-size: 28px; font-weight: 800; letter-spacing: -1px; color: #000000; }
        .logo-cygnus span { color: #0033A0; }
        .logo-line { width: 40px; height: 2px; background: #0033A0; margin: 12px auto 0; border-radius: 2px; }
        .content { padding: 30px; text-align: center; }
        .icon { font-size: 50px; margin-bottom: 15px; }
        .title { font-size: 22px; font-weight: 700; color: #000; margin-bottom: 8px; }
        .subtitle { color: #888; font-size: 13px; margin-bottom: 25px; }
        .greeting { text-align: left; font-size: 15px; color: #333; margin-bottom: 15px; }
        .greeting strong { color: #0033A0; }
        .message-text { text-align: left; color: #555; line-height: 1.6; margin-bottom: 20px; font-size: 14px; }
        .preview-box { background: #fafafa; border-radius: 12px; padding: 15px; text-align: left; margin: 20px 0; border-left: 3px solid #0033A0; }
        .preview-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 8px; }
        .preview-text { color: #555; font-style: italic; font-size: 13px; line-height: 1.5; }
        .contact-box { background: #f0f7ff; border-radius: 12px; padding: 15px; text-align: center; margin: 20px 0; }
        .contact-box p { margin: 0; color: #0033A0; font-size: 13px; }
        .whatsapp { font-weight: 700; font-size: 16px; margin-top: 5px !important; }
        .footer { background: #fafafa; padding: 20px; text-align: center; border-top: 1px solid #f0f0f0; }
        .footer-text { color: #aaa; font-size: 10px; margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="email-container">
        
        <div class="logo-area">
          <div class="logo-cygnus">CYGNUS<span>VISUAL</span></div>
          <div class="logo-line"></div>
        </div>
        
        <div class="content">
          <div class="icon">✨</div>
          <div class="title">${language === "es" ? "¡Mensaje recibido!" : "Message received!"}</div>
          <div class="subtitle">${language === "es" ? "Gracias por contactarnos" : "Thank you for contacting us"}</div>
          
          <div class="greeting">
            ${language === "es" ? "Hola" : "Hello"} <strong>${name}</strong>,
          </div>
          
          <div class="message-text">
            ${language === "es" ? "Hemos recibido tu mensaje correctamente. Uno de nuestros asesores te responderá a la brevedad posible." : "We have received your message. One of our advisors will get back to you as soon as possible."}
          </div>
          
          <div class="preview-box">
            <div class="preview-label">${language === "es" ? "📝 TU MENSAJE" : "📝 YOUR MESSAGE"}</div>
            <div class="preview-text">"${message.substring(0, 150)}${message.length > 150 ? "..." : ""}"</div>
          </div>
          
          <div class="contact-box">
            <p>📱 ${language === "es" ? "¿Necesitas una respuesta más rápida?" : "Need a faster response?"}</p>
            <p class="whatsapp">+58 414-1586749</p>
          </div>
        </div>
        
        <div class="footer">
          <p class="footer-text">© ${(/* @__PURE__ */ new Date()).getFullYear()} Cygnus Visual</p>
          <p class="footer-text">${language === "es" ? "Este es un correo automático, por favor no responder." : "This is an automated email, please do not reply."}</p>
        </div>
        
      </div>
    </body>
    </html>
  `
    };
    await transporter.sendMail(adminMailOptions);
    console.log("✅ Email enviado a admin");
    await transporter.sendMail(userMailOptions);
    console.log("✅ Email de confirmación enviado a usuario");
    return new Response(
      JSON.stringify({
        success: true,
        message: language === "es" ? "Mensaje enviado correctamente" : "Message sent successfully"
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Error:", error);
    return new Response(
      JSON.stringify({ error: "Error al enviar el mensaje" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
