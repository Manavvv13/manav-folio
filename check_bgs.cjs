const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

const matches = html.match(/class="[^"]*e-parent[^"]*"[^>]*data-id="([^"]+)"/g) || [];
matches.forEach(m => {
  const id = m.match(/data-id="([^"]+)"/)?.[1];
  console.log('Parent ID:', id);
});

// Let's check css_0.css for background-color of these containers
const css = fs.readFileSync('css_0.css', 'utf8');
matches.forEach(m => {
  const id = m.match(/data-id="([^"]+)"/)?.[1];
  const reg = new RegExp(`\\.elementor-element-${id}[^}]*\\}`, 'g');
  const cssM = css.match(reg) || [];
  console.log(`CSS for ${id}:`, cssM);
});
