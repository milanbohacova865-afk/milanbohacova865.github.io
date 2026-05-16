/**
 * GitHub Pages 对 SPA（BrowserRouter）不返回 index.html。
 * 将 index.html 复制为 404.html，使任意路径刷新时由 404 页加载同一入口。
 * @see https://github.com/rafgraph/spa-github-pages
 */
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const index = join(root, "docs", "index.html");
const fallback = join(root, "docs", "404.html");

if (!existsSync(index)) {
  console.error("Missing docs/index.html — run vite build first.");
  process.exit(1);
}

copyFileSync(index, fallback);
console.log("Wrote docs/404.html (SPA fallback for GitHub Pages).");

const nojekyll = join(root, "docs", ".nojekyll");
if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, "");
  console.log("Wrote docs/.nojekyll (disable Jekyll on GitHub Pages).");
}
