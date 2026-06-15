import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // 'server' es la opción correcta para API routes
  server: {
    host: true,
    port: 4321
  }
});