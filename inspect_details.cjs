const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

// Nav content
const navMatch = html.match(/<nav[\s\S]*?<\/nav>/gi);
console.log('NAV MATCHES:', navMatch?.length);
if (navMatch) {
  fs.writeFileSync('extracted_nav.html', navMatch.join('\n\n---NAV---\n\n'));
}

// Footer content
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/gi);
console.log('FOOTER MATCHES:', footerMatch?.length);
if (footerMatch) {
  fs.writeFileSync('extracted_footer.html', footerMatch.join('\n\n---FOOTER---\n\n'));
}

// Check custom styles or Elementor CSS
const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
fs.writeFileSync('extracted_styles.css', styleMatches.map(s => s.replace(/<style[^>]*>/, '').replace(/<\/style>/, '')).join('\n\n'));

// Let's also check all sections/containers in Elementor
const sections = [];
const sectionRegex = /<section[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/section>/gi;
let sm;
let idx = 0;
while ((sm = sectionRegex.exec(html)) !== null) {
  const preview = sm[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150);
  sections.push(`Section ${++idx} [${sm[1]}]:\n${preview}`);
}
console.log('SECTIONS count:', sections.length);
fs.writeFileSync('extracted_sections.txt', sections.join('\n\n'));
