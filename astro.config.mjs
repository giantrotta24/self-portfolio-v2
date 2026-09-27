// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeScrollableTables from './src/plugins/rehype-scrollable-tables.mjs';

export default defineConfig({
  site: 'https://giantrotta.dev',
  integrations: [sitemap({ filter: (page) => !page.includes('/checkup/') && !page.includes('/ai-consulting/') })],
  markdown: {
    rehypePlugins: [rehypeScrollableTables],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
