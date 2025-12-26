/**
 * Generate sitemap.xml
 */

import fs from "fs";
import path from "path";

const ROOT = "./out";
const DOMAIN = "https://gravitygrouprsa.co.za";

function getHTML(dir) {
  const urls = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      urls.push(...getHTML(full));
    } else if (file.endsWith(".html")) {
      const relative = full
        .replace(ROOT, "")
        .replace("/index.html", "/")
        .replace(".html", "/");
      urls.push(relative);
    }
  }
  return urls;
}

function run() {
  console.log("🗺️ Generating sitemap.xml…");

  const urls = getHTML(ROOT);
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ];

  urls.forEach((u) => {
    xml.push(
      `<url><loc>${DOMAIN}${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    );
  });

  xml.push("</urlset>");

  fs.writeFileSync(`${ROOT}/sitemap.xml`, xml.join(""));
  console.log("✔ sitemap.xml updated.");
}

run();
