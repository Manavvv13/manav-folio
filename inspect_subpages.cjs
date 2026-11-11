const fs = require('fs');

function inspectPage(file, name) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ${name} ===================`);
  
  // Headings
  const headings = [];
  const hRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = hRegex.exec(html)) !== null) {
    const text = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (text) headings.push(match[1] + ': ' + text);
  }
  console.log('Headings:', headings);

  // Clean text lines
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean);
  
  console.log('Text preview (first 40 lines):', clean.slice(0, 40));
}

inspectPage('page_about.html', 'ABOUT ME');
inspectPage('page_projects.html', 'PROJECTS');
