// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = context.url;

  // Si ya estamos en /es o /en, no hacer nada
  if (url.pathname !== "/") {
    return next();
  }

  // Detectar idioma
  const acceptLanguage = context.request.headers.get('accept-language') || '';
  const preferredLang = acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'es';

  // Redirigir
  return context.redirect(`/${preferredLang}`, 302);
});