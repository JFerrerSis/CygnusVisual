import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify'; // Cambiado a Netlify

export default defineConfig({
  integrations: [tailwind()],

  // Usamos 'hybrid' para que todo el sitio sea estático (rápido) 
  // y SOLO la API de contacto corra en el servidor.
  output: 'hybrid',

  // El adaptador se declara aquí, en la raíz del objeto, NO dentro de 'server'
  adapter: netlify(),

  server: {
    host: true,
    port: 4321,
  }
});