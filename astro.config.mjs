import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://echoes-io.github.io',
  base: '/website',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
