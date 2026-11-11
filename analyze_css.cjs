const fs = require('fs');
const css = fs.readFileSync('css_0.css', 'utf8');

// Find all background-color or background
const bgColors = css.match(/background(?:-color)?:\s*([^;]+);/gi) || [];
console.log('UNIQUE BACKGROUNDS:', [...new Set(bgColors)].slice(0, 20));

// Find all colors
const colors = css.match(/color:\s*([^;]+);/gi) || [];
console.log('UNIQUE COLORS:', [...new Set(colors)].slice(0, 20));

// Find all font-family
const fonts = css.match(/font-family:\s*([^;]+);/gi) || [];
console.log('FONTS:', [...new Set(fonts)]);

// Find all border-radius
const radius = css.match(/border-radius:\s*([^;]+);/gi) || [];
console.log('BORDER RADIUS:', [...new Set(radius)].slice(0, 20));
