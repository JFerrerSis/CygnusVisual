// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { url, request } = context;

  // 1. Si la ruta ya tiene idioma, dejar pasar
  if (url.pathname.startsWith('/es') || url.pathname.startsWith('/en')) {
    return next();
  }

  // 2. Si es la raíz, redirigir según idioma
  if (url.pathname === "/") {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const preferredLang = acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'es';
    
    return context.redirect(`/${preferredLang}`, 302);
  }

  return next();
});