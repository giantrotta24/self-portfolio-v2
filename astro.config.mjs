// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://giantrotta.dev',
  integrations: [sitemap({ filter: (page) => !page.includes('/checkup/') && !page.includes('/ai-consulting/') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
