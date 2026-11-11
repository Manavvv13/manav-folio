export interface ProjectItem {
  id: string;
  title: string;
  category: 'websites' | 'branding' | 'packaging' | 'photography' | 'digital-marketing' | 'brochures';
  categoryLabel: string;
  year: string;
  client: string;
  scope: string;
  summary: string;
  accentColor: string;
  tagColor: string;
  image: string;
  secondaryImage?: string;
  aspectDesc: string;
  features: string[];
  deliverables: string[];
  status: 'Completed' | 'Case Study Ready' | 'Featured';
  liveUrl?: string;
}

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  textColor: string;
  rotation: string;
  image: string;
  tags: string[];
}

export interface ToolkitItem {
  name: string;
  category: string;
  icon: string;
  link?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  location: string;
  year: string;
  specs: string;
  aspectRatio: string;
  category: string;
  description: string;
  image: string;
}

export const MANAV_PROFILE = {
  name: 'Manav Mehta',
  firstName: 'Manav',
  role: 'Creative Visual Designer',
  tagline: "I Design to Get Noticed. And Build to be Chosen.",
  subTagline: "Visual Designer & Frontend Crafter based in Delhi, India",
  introStatement: "I Combine Design Expertise with Frontend Engineering insight to Deliver Visually Strong, Strategically aligned Digital Experiences. My work focuses on Clarity, Consistency, and Structure ensuring every Solution is both Aesthetically Refined and Effective in its Intent.",
  location: 'Delhi, India',
  coordinates: '28.6139° N, 77.2090° E',
  availability: 'Available for Q2/Q3 Commissions',
  email: 'manavmehta0813@gmail.com',
  phone: '+91 7303803216',
  phoneDisplay: '+91 73038 03216',
  whatsappUrl: 'https://wa.me/917303803216?text=Hi%20Manav,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  avatarCutout: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  bio: 'Creative visual designer shaping high-impact digital landing pages, brand identity systems, editorial graphics, and 35mm street photography. Rooted in Delhi, collaborating worldwide.',
};

export const SERVICES_LIST: ServiceCard[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding & Visual Designing',
    subtitle: 'Identity Systems & Art Direction',
    description: 'Transforming brand visions into recognizable, enduring design identities. From bespoke logos to comprehensive design guidelines.',
    gradient: 'from-[#3D2612] via-[#2A1808] to-[#170C03]',
    textColor: 'text-[#F5EBE1]',
    rotation: '-rotate-2',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    tags: ['Brand Identity', 'Logotypes', 'Visual Systems', 'Guidelines'],
  },
  {
    id: 'web',
    number: '02',
    title: 'Web Designing & Development',
    subtitle: 'Interactive Frontend Landing Pages',
    description: 'High-conversion, art-directed landing pages built with React, Next.js, and fluid GSAP/Framer motion choreography.',
    gradient: 'from-[#0C2B24] via-[#081E19] to-[#04100D]',
    textColor: 'text-[#E0F2E9]',
    rotation: 'rotate-1',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['React & Next.js', 'Tailwind CSS', 'Smooth Motion', 'High Conversion'],
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Marketing & Communication',
    subtitle: 'High-Impact Digital Creatives',
    description: 'Strategic visual content engineered to capture attention, communicate value propositions, and drive audience action.',
    gradient: 'from-[#1E1E28] via-[#14141B] to-[#0A0A0E]',
    textColor: 'text-[#E6E8F2]',
    rotation: '-rotate-1',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    tags: ['Editorial Graphics', 'Ad Campaigns', 'Pitch Decks', 'Collaterals'],
  },
  {
    id: 'photography',
    number: '04',
    title: 'Art Direction & Photography',
    subtitle: '35mm Street & Architecture',
    description: 'Authentic 35mm documentary photography, capturing raw Delhi streetscapes, architectural geometry, and visual narratives.',
    gradient: 'from-[#2B1B17] via-[#1E1210] to-[#120A08]',
    textColor: 'text-[#F3E8E2]',
    rotation: 'rotate-2',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80',
    tags: ['35mm Documentary', 'Street Frames', 'Monochrome Light', 'Atmosphere'],
  },
];

export const VISUAL_ARCHIVE_ITEMS = [
  {
    id: 'va-1',
    title: 'Kinetic Sound Identity',
    category: 'Poster Design',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'va-2',
    title: 'Architectural Typo-Study',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'va-3',
    title: 'Tokyo Nocturne Series',
    category: 'Visual Art',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'va-4',
    title: 'Delhi Brutalist Monograph',
    category: '35mm Film',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'va-5',
    title: 'Aura Packaging Concept',
    category: 'Label Design',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'va-6',
    title: 'Echoes of Chandni Chowk',
    category: 'Street Documentary',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'va-7',
    title: 'Nehru Place Hardware Poster',
    category: 'Digital Creative',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'va-8',
    title: 'Minimal Geometric Identity',
    category: 'Brand Book',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=700&q=80',
  },
];

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  { name: 'Figma', category: 'UI & Systems', icon: '🎨' },
  { name: 'Adobe Photoshop', category: 'Image Retouching', icon: '🖼️' },
  { name: 'Adobe Illustrator', category: 'Vector & Logos', icon: '📐' },
  { name: 'React / Next.js', category: 'Frontend Engineering', icon: '⚡' },
  { name: 'Tailwind CSS', category: 'Styling Architecture', icon: '✨' },
  { name: 'GSAP / Motion', category: 'Choreography', icon: '🎬' },
  { name: 'Canva Pro', category: 'Social Collaterals', icon: '🪄' },
  { name: 'CapCut / Premiere', category: 'Video Narrative', icon: '🎞️' },
  { name: 'WordPress / Elementor', category: 'CMS Development', icon: '🌐' },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'paper-boat',
    title: 'Consumer Behaviour Assignment',
    category: 'digital-marketing',
    categoryLabel: 'Digital Creative',
    year: '2025',
    client: 'Paper Boat',
    scope: 'Brand Psychology & Digital Advertising Creative',
    summary: 'High-impact commercial creative suite exploring consumer behaviour and nostalgic memory cues for Paper Boat beverages.',
    accentColor: '#FF5500',
    tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    image: '/archive/creatives1.png',
    secondaryImage: '/archive/orange.png',
    aspectDesc: 'Vibrant color grading, tactile product rendering, and nostalgic childhood storytelling.',
    features: [
      'Strategic visual narrative tuned for FMCG consumer emotional hooks',
      'High-resolution multi-format advertising assets for omni-channel deployment',
      'Tailored typography pairing brand heritage with playful modern layouts',
    ],
    deliverables: ['Digital Ad Creatives', 'Visual Strategy', 'Social Campaign Assets'],
    status: 'Featured',
  },
  {
    id: 'tvs-iqube',
    title: 'TVS iQube Campaign',
    category: 'digital-marketing',
    categoryLabel: 'Product Campaign',
    year: '2025',
    client: 'TVS Motor Company',
    scope: 'EV Mobility Campaign & Nocturnal Visuals',
    summary: 'Electrifying product marketing campaign capturing smart mobility, nocturnal urban aesthetics, and next-generation scooter tech.',
    accentColor: '#0066FF',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    image: '/archive/creatives2.png',
    secondaryImage: '/archive/boat.png',
    aspectDesc: 'High-contrast studio lighting, moody ambient glow, and technological precision.',
    features: [
      'Dramatic studio lighting emphasizing aerodynamic industrial curves',
      'High-impact social launch creatives targeted at urban commuters',
      'Integrated branding highlighting silent torque and smart connectivity',
    ],
    deliverables: ['Campaign Collaterals', 'Product Art Direction', 'Social Ad Suite'],
    status: 'Featured',
  },
  {
    id: 'arihant-khandvi',
    title: 'Fresh & Tasty Khandvi',
    category: 'digital-marketing',
    categoryLabel: 'Commercial Creative',
    year: '2025',
    client: 'Arihant Sweets',
    scope: 'Culinary Art Direction & Social Campaign',
    summary: 'Mouth-watering commercial advertisement visuals celebrating traditional culinary craftsmanship and pure ingredients.',
    accentColor: '#EAB308',
    tagColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    image: '/archive/khandvi.png',
    aspectDesc: 'Gourmet macro food styling, authentic textures, and clean brand framing.',
    features: [
      'Appetizing food styling capturing freshness and authenticity',
      'Localized festive campaign creative for Delhi NCR',
    ],
    deliverables: ['Digital Creative', 'Commercial Photography Styling'],
    status: 'Case Study Ready',
  },
  {
    id: 'boat-airdopes',
    title: 'boAt Airdopes 161',
    category: 'digital-marketing',
    categoryLabel: 'Product Launch',
    year: '2025',
    client: 'boAt Lifestyle',
    scope: 'Audio Hardware Creative & Launch Visuals',
    summary: 'Punchy product launch creative showcasing high-bass acoustic tuning, ergonomic fit, and IPX water resistance.',
    accentColor: '#DC2626',
    tagColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    image: '/archive/boat.png',
    aspectDesc: 'Floating product physics, dynamic neon lighting, and high audio energy.',
    features: [
      'Dynamic 3D depth and acoustic blast visualization',
      'Fast-paced social advertising assets optimized for high CTR',
    ],
    deliverables: ['Launch Banner Suite', 'Product Creative'],
    status: 'Case Study Ready',
  },
  {
    id: 'solace-deck',
    title: 'Solace Brand Pitch Deck',
    category: 'brochures',
    categoryLabel: 'Pitch Deck & Brochure',
    year: '2025',
    client: 'Solace Organic Living',
    scope: 'Investor Presentation & Brand Collaterals',
    summary: 'Clean editorial brochure and investor presentation deck highlighting clean botanical formulations and sustainable market expansion.',
    accentColor: '#10B981',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Sophisticated typography, balanced whitespace, and tactile organic aesthetic.',
    features: [
      '30-slide pitch deck designed for Series A venture funding',
      'Tactile print brochure specifications with debossed detailing',
    ],
    deliverables: ['Investor Pitch Deck', 'Corporate Brochure', 'Print Guidelines'],
    status: 'Case Study Ready',
  },
  {
    id: 'delhi-monograph',
    title: 'Delhi Brutalist Monograph',
    category: 'brochures',
    categoryLabel: 'Editorial Publication',
    year: '2025',
    client: 'Architectural Editorial Series',
    scope: 'Editorial Layout, Monograph & Print Collaterals',
    summary: 'A 64-page architectural publication documenting post-independence brutalist monuments across Delhi through monochrome imagery.',
    accentColor: '#6B7280',
    tagColor: 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Rigid grid alignments, heavy sans-serif typography, and textured uncoated paper.',
    features: [
      'Custom typographic grid system inspired by architectural blueprints',
      'Comprehensive layout curation and museum exhibition catalog',
    ],
    deliverables: ['Editorial Book', 'Exhibition Brochure', 'Print Production'],
    status: 'Completed',
  },
  {
    id: 'citrus-packaging',
    title: 'Citrus Sensation Packaging',
    category: 'packaging',
    categoryLabel: 'Label & Packaging',
    year: '2025',
    client: 'Citrus Beverage Co.',
    scope: 'Label Architecture & FMCG Packaging Design',
    summary: 'Vibrant retail packaging and can wrap design engineered for instant shelf standout in modern beverage coolers.',
    accentColor: '#FF6B00',
    tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    image: '/archive/orange.png',
    aspectDesc: 'High-contrast citrus color palette, tactile foil stamping, and punchy typography.',
    features: [
      'Complete label dielines compliant with food & beverage regulations',
      '3D can wrap mockups and retail shelf simulation',
    ],
    deliverables: ['Packaging Wrap', 'Print Dielines', '3D Visuals'],
    status: 'Featured',
  },
  {
    id: 'blomac',
    title: 'Blomac Custom PC',
    category: 'websites',
    categoryLabel: 'Live Website',
    year: '2026',
    client: 'Blomac Technologies Delhi',
    scope: 'Frontend Engineering & Hardware Configurator',
    summary: 'High-performance bespoke PC configurator and e-commerce platform built for Delhi’s premier custom rig builder in Nehru Place.',
    accentColor: '#FF5500',
    tagColor: 'bg-orange-100 text-orange-800 border-orange-200',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Real-time part compatibility validator, responsive catalog, and lightning-fast checkout flow.',
    features: [
      'Interactive 3D component selector with instant thermal calculations',
      'Direct WhatsApp order dispatch integration for custom quotations',
      'Dynamic inventory management and automated price calculation',
      'Sub-second page loads engineered for high user conversion',
    ],
    deliverables: ['Responsive Web App', 'Design System', 'Configurator UI', 'Performance Optimization'],
    status: 'Featured',
    liveUrl: 'https://www.blomaccustompc.com/',
  },
  {
    id: 'eud-group',
    title: 'EUD Group Platform',
    category: 'websites',
    categoryLabel: 'Live Website',
    year: '2026',
    client: 'EUD Group Infrastructure',
    scope: 'Corporate Real Estate & Architectural Showcase',
    summary: 'Sophisticated corporate web platform presenting high-end engineering, industrial properties, and architectural developments across India.',
    accentColor: '#064E3B',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Refined architectural typography, interactive floorplan viewer, and curated property portfolio.',
    features: [
      'Editorial magazine layout pairing structural photography with metadata',
      'Interactive project timeline spanning blueprint to handover',
      'Ultra-clean contact and investor inquiry channels',
      'Optimized asset delivery pipeline for architectural imagery',
    ],
    deliverables: ['Complete Corporate Website', 'Interactive Portfolio', 'Editorial Typography', 'Brand Alignment'],
    status: 'Featured',
    liveUrl: 'https://eudgroup.in/',
  },
  {
    id: 'nikhil-kun',
    title: 'NikhilKun Creator Hub',
    category: 'websites',
    categoryLabel: 'Live Website',
    year: '2026',
    client: 'NikhilKun Media',
    scope: 'Bilingual Media Platform & Community Hub',
    summary: 'Dynamic media platform bridging Indian and Japanese cross-cultural creator narratives, connecting an engaged audience of 700,000+ followers.',
    accentColor: '#EA580C',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Bilingual typography (Kanji + Latin), custom media stream, and merchandise showcase.',
    features: [
      'Seamless English-Japanese typographic harmony and layout',
      'Embedded video and podcast streaming integration',
      'Community newsletter & Discord gateway integration',
      'Responsive mobile-first speed optimized for global audiences',
    ],
    deliverables: ['Bilingual Web Platform', 'Media Embeds', 'Community Funnels', 'Creator Brand Identity'],
    status: 'Featured',
    liveUrl: 'https://nikhilkun.com/',
  },
  {
    id: 'solace-brand',
    title: 'Solace Botanical Identity',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    year: '2025',
    client: 'Solace Organic Living',
    scope: 'Brand Mark, Typography & Label Packaging',
    summary: 'A minimalist organic skincare identity crafted for conscious consumers. Minimalist serif letterforms balanced with muted earth pigments.',
    accentColor: '#452800',
    tagColor: 'bg-stone-200 text-stone-900 border-stone-300',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Zero plastic aesthetic with tactile debossed label treatments.',
    features: [
      'Custom bespoke logomark and botanical sub-marks',
      'Sustainable kraft and recycled glass packaging specifications',
      'Pantone earth tone palette documentation',
    ],
    deliverables: ['Brand Manual', 'Custom Logomark', 'Cosmetic Packaging', 'Iconography'],
    status: 'Case Study Ready',
  },
  {
    id: 'chronicle-posters',
    title: 'Delhi Kinetic Posters',
    category: 'packaging',
    categoryLabel: 'Graphic Design',
    year: '2025',
    client: 'Self-Initiated Cultural Series',
    scope: 'Editorial Poster Architecture & Risograph Studies',
    summary: 'Experimental poster series documenting Delhi’s transit grid and architectural rhythm through brutalist grid alignments.',
    accentColor: '#172554',
    tagColor: 'bg-blue-100 text-blue-900 border-blue-200',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Limited edition risograph print run exhibited at Delhi Design Week.',
    features: [
      'Bespoke typographic arrangements inspired by Hindi and Latin letterforms',
      'Hand-crafted texture overlays and halftone separations',
      'Print-ready vector architecture for large-format exhibition',
    ],
    deliverables: ['12-Piece Poster Series', 'Exhibition Print Files', 'Digital Collaterals'],
    status: 'Completed',
  },
  {
    id: 'delhi-35mm',
    title: 'Old Delhi at Dawn (35mm)',
    category: 'photography',
    categoryLabel: 'Photography',
    year: '2025',
    client: 'Documentary Visual Series',
    scope: '35mm Film Photography & Curation',
    summary: 'Intimate visual studies of Old Delhi, Chandni Chowk, and the Yamuna Ghats captured on natural 35mm film in morning mist.',
    accentColor: '#064E3B',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85',
    aspectDesc: 'Natural grain, cinematic framing, and unfiltered morning light.',
    features: [
      '35mm natural grain scan workflows',
      'Editorial exhibition sequencing',
      'Architectural perspective corrections',
    ],
    deliverables: ['Photographic Monograph', 'Curated Prints', 'Exhibition Archive'],
    status: 'Featured',
  },
];

// Compatibility aliases for legacy components
export const PROJECTS = PORTFOLIO_PROJECTS;
export const ARCHIVE_LIST = PORTFOLIO_PROJECTS;
export const PHILOSOPHY_STEPS = [
  { number: '01', title: 'Design', text: 'Good design begins with understanding the idea, the people, & the purpose behind it.' },
  { number: '02', title: 'Defined', text: 'Combining strategy and frontend engineering to shape thoughtful digital experiences.' },
  { number: '03', title: 'Delivered', text: 'Turning vision into meaningful work, paying attention to every detail.' }
];
export const PHOTOGRAPHY_COLLECTION = [
  {
    id: 'p1',
    title: 'Yamuna Morning Mist',
    location: 'Nigambodh Ghat, Old Delhi',
    year: '2025',
    specs: 'Leica M6 · 35mm Summicron · Tri-X 400',
    aspectRatio: 'aspect-[3/4]',
    category: 'Monochrome Street',
    description: 'Early morning light piercing winter fog across the river.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85',
  }
];

