const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

const cssLinks = [];
const linkRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi;
let lm;
while ((lm = linkRegex.exec(html)) !== null) {
  cssLinks.push(lm[1]);
}
console.log('CSS LINKS:', cssLinks);
fs.writeFileSync('css_links.txt', cssLinks.join('\n'));
