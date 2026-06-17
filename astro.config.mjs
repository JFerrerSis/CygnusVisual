import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // Cambiamos el import

export default defineConfig({
  integrations: [tailwind()],

  // Vercel soporta tanto 'static' (SSG) como 'server' (SSR). 
  // Si tu formulario SMTP necesita ejecutarse en el servidor, usa 'server'.
  output: 'server', 

  adapter: vercel(), // Usamos el adaptador de Vercel

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      strategy: 'prefix' // Esto es más seguro para Vercel
    }
  },

  server: {
    host: true,
    port: 4321,
  }
});