/**
 * Generate robots.txt
 */

import fs from "fs";

const DOMAIN = "https://gravitygrouprsa.co.za";

const content = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

fs.writeFileSync("./out/robots.txt", content);
console.log("🤖 robots.txt generated.");
