import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://readechoes.ink',
  base: '/',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
