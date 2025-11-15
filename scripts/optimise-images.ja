/**
 * Optimise all images inside /public and /out
 * Requires: npm install sharp
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const TARGET_DIRS = ["public", "out"];

function getAllImages(dir) {
  const files = fs.readdirSync(dir);
  let images = [];

  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      images = images.concat(getAllImages(full));
    } else if (/\.(png|jpg|jpeg)/i.test(full)) {
      images.push(full);
    }
  }
  return images;
}

async function optimiseImage(file) {
  const outWebp = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  try {
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outWebp);

    console.log(`Optimised → ${outWebp}`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}

async function run() {
  console.log("🔧 Optimising images...");
  for (const dir of TARGET_DIRS) {
    if (!fs.existsSync(dir)) continue;

    const images = getAllImages(dir);
    for (const img of images) await optimiseImage(img);
  }
}
run();
