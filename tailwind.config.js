/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'azul-rey': '#0033A0',
        'azul-rey-oscuro': '#002277',
        'azul-rey-claro': '#1a4db8',
      }
    },
  },
  plugins: [],
}
