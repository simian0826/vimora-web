import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { productDetailList } from './src/data/productData.js';

// 兼容 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadImage(url, dest) {
  try {
    const writer = fs.createWriteStream(dest);
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (err) {
    console.error(`Failed to download ${url}: ${err.message}`);
  }
}

function getAllImageUrls(product) {
  const urls = [];

  // 1. Top-level images
  if (product.heroBgUrl) urls.push(product.heroBgUrl);
  if (product.heroBgUrlMobile) urls.push(product.heroBgUrlMobile);

  // 2. details
  if (Array.isArray(product.details)) {
    product.details.forEach(d => d.img && urls.push(d.img));
  }

  // 3. productBigImages, productBigImages_m, productSmallImages
  ['productBigImages', 'productBigImages_m', 'productSmallImages'].forEach(key => {
    if (Array.isArray(product[key])) {
      urls.push(...product[key]);
    }
  });

  // 4. structure.mainImage
  if (product.structure && product.structure.mainImage) {
    urls.push(product.structure.mainImage);
  }
  // 5. structure.subImages
  if (product.structure && Array.isArray(product.structure.subImages)) {
    product.structure.subImages.forEach(imgObj => imgObj.image && urls.push(imgObj.image));
  }

  // 6. properties
  if (Array.isArray(product.properties)) {
    product.properties.forEach(prop => {
      if (Array.isArray(prop.content)) {
        prop.content.forEach(item => {
          if (item.img) urls.push(item.img);
        });
      } else if (prop.content && prop.content.categoryItems) {
        prop.content.categoryItems.forEach(cat => {
          if (Array.isArray(cat.list)) {
            cat.list.forEach(item => item.img && urls.push(item.img));
          }
        });
      }
    });
  }

  return urls;
}

async function main() {
  for (const product of productDetailList) {
    const folder = path.join(__dirname, 'downloaded', product.id);
    await fs.ensureDir(folder);

    const urls = getAllImageUrls(product);
    for (const url of urls) {
      const filename = url.split('/').pop().split('?')[0];
      const dest = path.join(folder, filename);
      if (await fs.pathExists(dest)) {
        console.log(`Already exists: ${dest}`);
        continue;
      }
      console.log(`Downloading ${url} -> ${dest}`);
      await downloadImage(url, dest);
    }
  }
}

main();
