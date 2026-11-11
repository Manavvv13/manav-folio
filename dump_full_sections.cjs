const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

// Let's inspect the sections in depth
const containers = [
  'ddd8040', // Hero
  'e60925f', // Intro Statement / About
  '9d1643e', // What I can Help you with
  '05f083c', // Visual Archive
  'e7bf2c1', // Creative Toolkit & Beyond the Visuals
  '338c244', // Great Things Begin Together (CTA)
  '1710'     // Footer
];

let report = '';
containers.forEach(id => {
  const reg = new RegExp(`class="[^"]*elementor-element-${id}[^"]*"[\\s\\S]*?(?=(class="[^"]*elementor-element-(?:ddd8040|e60925f|9d1643e|05f083c|e7bf2c1|338c244|1710)|<\\/main|<\\/body|$))`, 'i');
  const m = html.match(reg);
  if (m) {
    report += `\n=========================================\nCONTAINER ${id}\n=========================================\n`;
    report += m[0].slice(0, 4000) + '\n...\n';
  }
});

fs.writeFileSync('full_sections_report.html', report);
console.log('Saved full_sections_report.html, size:', report.length);
