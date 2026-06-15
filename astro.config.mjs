import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],

  // 1. ELIMINA por completo la línea de output o déjala como 'static'
  output: 'static', 

  // 2. El adaptador se encarga de dejar viva tu API automáticamente
  adapter: netlify(),

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  },

  server: {
    host: true,
    port: 4321,
  }
});