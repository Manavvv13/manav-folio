const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

const heroIdx = html.indexOf('data-id="ddd8040"');
if (heroIdx !== -1) {
  const heroHtml = html.slice(heroIdx, heroIdx + 12000);
  fs.writeFileSync('hero_full.html', heroHtml);
  console.log('Saved hero_full.html');
}
