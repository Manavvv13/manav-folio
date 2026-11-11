const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

// Let's print out what each part has
function getMatches(regex, str) {
  const matches = [];
  let m;
  while ((m = regex.exec(str)) !== null) {
    matches.push(m);
  }
  return matches;
}

// 1. Hero text and layout
console.log('--- HERO SECTION ---');
// Looking for "Hello I'm", "Pratham", "I Design to Get Noticed", etc.
const heroArea = html.slice(html.indexOf('Hello I&#039;m') || html.indexOf("Hello I'm"), (html.indexOf('Hello I&#039;m') || html.indexOf("Hello I'm")) + 3000);
console.log('Hero snippet:', heroArea.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 500));

// 2. Services / "What I can Help you with"
console.log('\n--- WHAT I CAN HELP YOU WITH ---');
const helpIdx = html.indexOf('What I can');
const helpArea = html.slice(helpIdx, helpIdx + 4000);
console.log('Help snippet:', helpArea.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 800));

// 3. Visual Archive
console.log('\n--- VISUAL ARCHIVE ---');
const archIdx = html.indexOf('Visual Archive');
const archArea = html.slice(archIdx, archIdx + 5000);
// Find images in visual archive
const archImgs = [];
const imRegex = /src=["']([^"']+)["']/gi;
let im;
while ((im = imRegex.exec(archArea)) !== null) {
  archImgs.push(im[1]);
}
console.log('Archive images:', archImgs);

// 4. Toolkit & Projects tabs
console.log('\n--- TOOLKIT & PROJECTS ---');
const toolIdx = html.indexOf('My Creative Toolkit');
const toolArea = html.slice(toolIdx, toolIdx + 12000);
console.log('Toolkit snippet:', toolArea.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1000));

// 5. CTA banner
console.log('\n--- CTA BANNER ---');
const ctaIdx = html.indexOf('Great Things');
const ctaArea = html.slice(ctaIdx, ctaIdx + 2000);
console.log('CTA snippet:', ctaArea.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 500));
