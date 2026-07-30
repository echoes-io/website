import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://echoes-io.github.io',
  base: '/website',
  vite: {
    plugins: [tailwindcss()],
  },
});
