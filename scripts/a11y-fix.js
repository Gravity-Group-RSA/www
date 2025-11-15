/**
 * Auto-fix accessibility issues:
 * - Missing alt tags
 * - Empty links
 * - Missing aria-label
 */

import fs from "fs";
import path from "path";
import cheerio from "cheerio";

const ROOT = "./out";

function getHTML(dir) {
  const out = [];
  const files = fs.readdirSync(dir);

  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) out.push(...getHTML(full));
    else if (f.endsWith(".html")) out.push(full);
  }
  return out;
}

function fixFile(file) {
  const html = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(html);

  $("img").each((_, img) => {
    if (!$(img).attr("alt")) $(img).attr("alt", "Roadside assistance image");
  });

  $("a").each((_, a) => {
    const text = $(a).text().trim();
    if (!text && !$(a).attr("aria-label")) {
      $(a).attr("aria-label", "navigation link");
    }
  });

  fs.writeFileSync(file, $.html());
}

function run() {
  console.log("♿ Fixing accessibility…");
  const pages = getHTML(ROOT);
  for (const p of pages) fixFile(p);
}
run();
