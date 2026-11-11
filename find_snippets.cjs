const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

function findSnippet(phrase) {
  const re = new RegExp(phrase, 'i');
  const m = html.search(re);
  if (m === -1) {
    console.log(`NOT FOUND: ${phrase}`);
    return;
  }
  console.log(`=== FOUND: ${phrase} (at ${m}) ===`);
  const chunk = html.slice(m, m + 2000);
  console.log(chunk.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 400));
}

findSnippet('Hello');
findSnippet('Combine Design');
findSnippet('Help you');
findSnippet('Visual');
findSnippet('Toolkit');
findSnippet('Great Things');
findSnippet('Creative Mindset');
