const fs = require('fs');

const html = fs.readFileSync('prathamfolio.html', 'utf8');

// Title
const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
console.log('TITLE:', title);

// Headings
const headings = [];
const hRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
let match;
while ((match = hRegex.exec(html)) !== null) {
  const text = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text) headings.push(match[1] + ': ' + text);
}
fs.writeFileSync('extracted_headings.txt', headings.join('\n'));
console.log('Extracted', headings.length, 'headings');

// Images
const imgs = [];
const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
while ((match = imgRegex.exec(html)) !== null) {
  imgs.push(match[1]);
}
fs.writeFileSync('extracted_images.txt', [...new Set(imgs)].join('\n'));
console.log('Extracted', imgs.length, 'images');

// Links
const links = [];
const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
while ((match = linkRegex.exec(html)) !== null) {
  const text = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  links.push(`${text} -> ${match[1]}`);
}
fs.writeFileSync('extracted_links.txt', [...new Set(links)].join('\n'));

// Fonts
const fonts = html.match(/fonts\.googleapis\.com\/css2\?[^"']+/g) || [];
console.log('FONTS:', fonts);

// Sections & text structure
const textClean = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<nav[\s\S]*?<\/nav>/gi, ' [NAV] ')
  .replace(/<footer[\s\S]*?<\/footer>/gi, ' [FOOTER] ')
  .replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map(s => s.trim())
  .filter(Boolean)
  .join('\n');

fs.writeFileSync('extracted_text.txt', textClean);
console.log('Extracted text lines:', textClean.split('\n').length);
