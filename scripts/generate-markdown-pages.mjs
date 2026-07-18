// Post-build step: generates a `.md` sibling for every rendered page in dist/,
// so AI assistants and crawlers that prefer markdown over HTML have a clean
// source to read (the GEO layer referenced in the site's llms.txt).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const SITE = 'https://giantrotta.dev';
const DIST = new URL('../dist/', import.meta.url).pathname;
const SKIP = new Set(['404.html']);

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(full)));
    } else if (entry.name.endsWith('.html') && !SKIP.has(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

// dist/about/index.html -> dist/about.md ; dist/index.html -> dist/index.md
function markdownPathFor(htmlPath) {
  const relative = path.relative(DIST, htmlPath);
  const trimmed = relative.endsWith(path.join('index.html'))
    ? relative.slice(0, -'index.html'.length).replace(/\/$/, '')
    : relative.replace(/\.html$/, '');
  return path.join(DIST, trimmed === '' ? 'index.md' : `${trimmed}.md`);
}

function urlFor(htmlPath) {
  const relative = path.relative(DIST, htmlPath);
  const urlPath = relative.endsWith('index.html')
    ? relative.slice(0, -'index.html'.length)
    : relative.replace(/\.html$/, '/');
  return `${SITE}/${urlPath}`;
}

function frontmatterValue(value) {
  return `"${value.replace(/"/g, '\\"')}"`;
}

async function convert(htmlPath) {
  const html = await readFile(htmlPath, 'utf-8');
  const $ = cheerio.load(html);

  const title = $('title').first().text().trim();
  const description = $('meta[name="description"]').attr('content')?.trim() ?? '';
  const main = $('main').first();
  const markdown = turndown.turndown(main.html() ?? '').trim();

  const frontmatter = [
    '---',
    `title: ${frontmatterValue(title)}`,
    `description: ${frontmatterValue(description)}`,
    `source: ${frontmatterValue(urlFor(htmlPath))}`,
    '---',
  ].join('\n');

  return `${frontmatter}\n\n${markdown}\n`;
}

const htmlFiles = await findHtmlFiles(DIST);
let count = 0;
for (const htmlPath of htmlFiles) {
  const markdown = await convert(htmlPath);
  await writeFile(markdownPathFor(htmlPath), markdown, 'utf-8');
  count += 1;
}
console.log(`[generate-markdown-pages] wrote ${count} .md file(s)`);
