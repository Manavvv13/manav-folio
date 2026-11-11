const fs = require('fs');
const html = fs.readFileSync('prathamfolio.html', 'utf8');

console.log('--------------------------------------------------');
console.log('PRATHAMFOLIO DETAILED ARCHITECTURE & CONTENT');
console.log('--------------------------------------------------');

// 1. Navigation
console.log('\n[NAVBAR]');
console.log('- Floating pill navbar: Home, Projects, About Me, and Orange Button: "Let\'s Connect ↗"');

// 2. Hero
console.log('\n[HERO]');
const heroImgs = html.slice(35000, 55000).match(/src=["'][^"']+["']/g) || [];
console.log('- Hero images count:', heroImgs.length);

// 3. Intro Statement
console.log('\n[INTRO STATEMENT]');
console.log('- Statement: "I Combine Design Expertise with Digital Marketing insight to Deliver Visually Strong, Strategically aligned Digital Experiences. My work focuses on Clarity, Consistency, and Structure ensuring every Solution is both Aesthetically Refined and Effective in its Intent."');
console.log('- CTA Button: "More About Me ↗"');

// 4. Services: "What I can Help you with?"
console.log('\n[SERVICES: "What I can Help you with?"]');
const servicesSlice = html.slice(62000, 90000);
const serviceTitles = servicesSlice.match(/<(?:h2|h3|h4)[^>]*>([^<]+)<\/(?:h2|h3|h4)>/gi) || [];
console.log('- Service Headings:', serviceTitles.map(s => s.replace(/<[^>]+>/g, '').trim()));

// 5. Visual Archive
console.log('\n[VISUAL ARCHIVE]');
const vaSlice = html.slice(90000, 131000);
const vaImgs = vaSlice.match(/src=["'][^"']+["']/g) || [];
console.log('- Visual Archive Images count:', vaImgs.length);

// 6. Toolkit
console.log('\n[MY CREATIVE TOOLKIT]');
const tkSlice = html.slice(131000, 150000);
const tkItems = tkSlice.match(/<h5[^>]*>([^<]+)<\/h5>/gi) || [];
console.log('- Toolkit items:', tkItems.map(s => s.replace(/<[^>]+>/g, '').trim()));

// 7. Beyond the Visuals (Projects)
console.log('\n[BEYOND THE VISUALS / PROJECTS]');
const projSlice = html.slice(150000, 183000);
console.log('- Project Tabs:', projSlice.match(/(?:Digital Marketing Projects|Brochures\/ Pitch Deck Designing|Website Designing|Packaging &amp; Label Designing)/g));
console.log('- Featured Project Names:', projSlice.match(/(?:Arihant Stores|Lifconv \(Beingloop\)|Pacote \(Beingloop\)|My Portfolio)/g));

// 8. CTA Banner
console.log('\n[CTA BANNER: "Great Things Begin Together"]');
console.log('- "Great Things Begin Together."');
console.log('- "From Creative Collaborations to New Opportunities, Let’s make Something Meaningful happen."');
console.log('- Button: "Let\'s Connect ↗"');

// 9. Footer
console.log('\n[FOOTER]');
console.log('- Left: "Creative Mindset. Digital Skillset. Marketing Vision."');
console.log('- Middle 1: "Quick Links" -> Home, Projects, About Me');
console.log('- Middle 2: "Connect Me On" -> Instagram, LinkedIn');
console.log('- Huge signature watermark');
console.log('- Bottom bar: "Proudly Crafted in India", Copyright, All Rights Reserved');
