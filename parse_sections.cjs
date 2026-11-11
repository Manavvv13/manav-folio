const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

// Find all top-level containers inside elementor-9903 (the home page)
const matchHome = html.match(/<div data-elementor-type="wp-page" data-elementor-id="9903"[\s\S]*?<\/footer>/);
if (!matchHome) {
  console.log('Could not find elementor-9903');
} else {
  console.log('Found elementor page content');
}

// Let's extract all widgets and containers
const widgets = [];
const wRegex = /class="[^"]*elementor-widget-([^" ]*)[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
let m;
// Let's write a script that breaks down the page into its visual sections
const lines = [];

// Match all elements with data-id
const elemRegex = /<div [^>]*class="[^"]*e-parent[^"]*"[^>]*data-id="([^"]+)"[\s\S]*?<\/div>(?=\s*<div [^>]*class="[^"]*e-parent|$)/gi;
let em;
let pCount = 0;
while ((em = elemRegex.exec(html)) !== null) {
  pCount++;
  const raw = em[0];
  const text = raw.replace(/<style[\s\S]*?<\/style>/gi, '')
                  .replace(/<script[\s\S]*?<\/script>/gi, '')
                  .replace(/<[^>]+>/g, ' ')
                  .replace(/\s+/g, ' ')
                  .trim();
  
  const imgs = [];
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let im;
  while ((im = imgRegex.exec(raw)) !== null) {
    imgs.push(im[1]);
  }

  lines.push(`=== PARENT CONTAINER ${pCount} (ID: ${em[1]}) ===\nTEXT: ${text.slice(0, 300)}\nIMAGES: ${imgs.join(', ')}\n`);
}

fs.writeFileSync('sections_breakdown.txt', lines.join('\n'));
console.log('Saved', pCount, 'parent containers');
