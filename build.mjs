import { cpSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir, { recursive: true });

const items = ['index.html', 'games.html', 'about.html', 'news.html', 'contact.html', 'privacy.html', 'terms.html', 'robots.txt', 'sitemap.xml', 'README.md', 'css', 'js', 'assets'];

for (const item of items) {
  const src = join(__dirname, item);
  if (existsSync(src)) {
    cpSync(src, join(distDir, item), { recursive: true });
  }
}

console.log('Build complete — static site copied to dist/');
