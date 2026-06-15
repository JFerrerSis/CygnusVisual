import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // 1. Asegúrate de importar esto
export default defineConfig({
  integrations: [tailwind()],

  // 'server' es la opción correcta para API routes
  output: 'server',

  server: {
    host: true,
    port: 4321,
    adapter: vercel(),
  },

  adapter: vercel()
});