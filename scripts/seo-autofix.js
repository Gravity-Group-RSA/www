/**
 * Auto-fix SEO metadata in exported HTML
 */

import fs from "fs";
import path from "path";
import cheerio from "cheerio";

const ROOT = "./out";

function getAllHTML(dir) {
  const files = fs.readdirSync(dir);
  const htmlFiles = [];

  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) htmlFiles.push(...getAllHTML(full));
    else if (f.endsWith(".html")) htmlFiles.push(full);
  }

  return htmlFiles;
}

function ensure(tag, selector, content, $) {
  let el = $(selector);
  if (el.length === 0) {
    $("head").append(`<${tag} ${selector.split("[")[1]} content="${content}"/>`);
  } else {
    el.attr("content", content);
  }
}

function fixSEO(file) {
  const html = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(html);

  const title = $("title").text().trim() || "Gravity Group RSA – Roadside Assistance";

  if (!$("title").length)
    $("head").prepend(`<title>${title}</title>`);

  ensure("meta", 'name="description"]', "24/7 towing, locksmith, roadside assistance across South Africa.", $);
  ensure("meta", 'property="og:title"]', title, $);
  ensure("meta", 'property="og:description"]', "Professional roadside assistance anywhere in South Africa.", $);

  fs.writeFileSync(file, $.html(), "utf8");
}

function run() {
  console.log("🔧 Fixing SEO metadata…");
  const pages = getAllHTML(ROOT);

  for (const file of pages) fixSEO(file);

  console.log("✔ SEO fixes applied.");
}

run();
