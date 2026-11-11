import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, Globe, Monitor } from 'lucide-react';

interface BeyondVisualsProps {
  onSelectProject: (project: ProjectItem) => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onViewAllProjects?: () => void;
}

interface WebsiteProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  tags: string[];
  urlPlaceholder: string;
  colSpan: string;
  aspectRatio: string;
  accent: string;
  image?: string;
}

const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    id: 'web-1',
    number: '01',
    title: 'E-Commerce & Digital Experience',
    tagline: 'High-conversion interactive shopping experience with bespoke typography and fluid micro-interactions.',
    category: 'Website Design & Development',
    year: '2026',
    tags: ['Next.js', 'Tailwind CSS', 'Shopify Headless', 'Framer Motion'],
    urlPlaceholder: 'clientbrand.com',
    colSpan: 'col-span-12 lg:col-span-7',
    aspectRatio: 'aspect-[16/10] sm:aspect-[16/9] min-h-[320px] sm:min-h-[400px]',
    accent: '#FF5500',
  },
  {
    id: 'web-2',
    number: '02',
    title: 'Creative Studio & Agency Portal',
    tagline: 'Immersive portfolio portal featuring smooth GSAP transitions and 3D web interactions.',
    category: 'Full-stack Portfolio & Direction',
    year: '2026',
    tags: ['React', 'GSAP', 'WebGL', 'Lenis'],
    urlPlaceholder: 'studiomedia.agency',
    colSpan: 'col-span-12 lg:col-span-5',
    aspectRatio: 'aspect-[4/3] lg:aspect-auto min-h-[320px] sm:min-h-[400px]',
    accent: '#3B82F6',
  },
  {
    id: 'web-3',
    number: '03',
    title: 'SaaS Platform & Product Landing',
    tagline: 'Conversion-driven SaaS marketing site with interactive product previews and animated charts.',
    category: 'UI/UX & Web Craft',
    year: '2025',
    tags: ['TypeScript', 'Design Systems', 'Tailwind CSS'],
    urlPlaceholder: 'cloudpulse.io',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectRatio: 'aspect-[16/11] min-h-[260px]',
    accent: '#10B981',
  },
  {
    id: 'web-4',
    number: '04',
    title: 'Luxury Editorial & Fashion Showcase',
    tagline: 'Minimalist editorial digital experience celebrating contemporary aesthetics and photography.',
    category: 'Editorial Showcase',
    year: '2025',
    tags: ['Next.js', 'Editorial Design', 'Dynamic CMS'],
    urlPlaceholder: 'maisoneditorial.com',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectRatio: 'aspect-[16/11] min-h-[260px]',
    accent: '#A855F7',
  },
  {
    id: 'web-5',
    number: '05',
    title: 'Interactive Web Experience & Campaign',
    tagline: 'Award-winning interactive brand experience with custom sound design and physics-based navigation.',
    category: 'Interactive Campaign',
    year: '2026',
    tags: ['Creative Development', 'Three.js', 'Framer Motion'],
    urlPlaceholder: 'experiencehorizon.live',
    colSpan: 'col-span-12 lg:col-span-4',
    aspectRatio: 'aspect-[16/11] min-h-[260px]',
    accent: '#F59E0B',
  },
];

export const BeyondVisuals: React.FC<BeyondVisualsProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll into this section for the continuous horizontal entrance
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 15%'],
  });

  // Starts COMPLETELY OUTSIDE on the right (100vw), gliding in as user scrolls
  const headingX = useTransform(scrollYProgress, [0, 1], ['100vw', '-25vw']);

  return (
    <section
      ref={sectionRef}
      id="projects"
      data-bg="#000000"
      className="pt-2 sm:pt-4 pb-16 sm:pb-24 bg-transparent relative z-10 overflow-x-clip text-white"
    >
      {/* Giant Thin Headline: Full-bleed edge-to-edge track without max-w-7xl restriction */}
      <div className="w-full overflow-hidden select-none pointer-events-none py-1 mb-8 sm:mb-12">
        <motion.div
          style={{ x: headingX }}
          className="whitespace-nowrap will-change-transform"
        >
          <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[170px] font-heading font-[150] text-white tracking-[-0.03em] leading-none">
            Beyond the Visuals
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Subhead & Filter Descriptor */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF5500] font-semibold">
              Selected Work
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
              Websites & Digital Experiences
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            5 Featured Web Projects · Interactive Bento Showcase
          </p>
        </div>

        {/* 5-Item Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {WEBSITE_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => {
                onSelectProject({
                  id: project.id,
                  title: project.title,
                  category: 'websites',
                  categoryLabel: 'Website Designing',
                  year: project.year,
                  client: project.title,
                  scope: project.category,
                  summary: project.tagline,
                  accentColor: project.accent,
                  tagColor: project.accent,
                  image: project.image || '',
                  aspectDesc: 'Desktop Web Application',
                  features: project.tags,
                  deliverables: [
                    'UI/UX Architecture',
                    'Full Responsive Development',
                    'Motion & Micro-interactions',
                    'Performance Optimization',
                  ],
                  status: 'Featured',
                });
              }}
              className={`${project.colSpan} group relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#0D0D10] border border-white/10 hover:border-white/25 transition-all duration-500 flex flex-col shadow-2xl cursor-pointer will-change-transform`}
            >
              {/* Browser Window Chrome Top Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/5 bg-[#121216] select-none">
                {/* 3 macOS style window dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/70 group-hover:bg-[#FF5F56] transition-colors" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70 group-hover:bg-[#FFBD2E] transition-colors" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/70 group-hover:bg-[#27C93F] transition-colors" />
                </div>

                {/* Minimalist URL Address Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[11px] text-white/50 font-mono max-w-[200px] sm:max-w-none truncate">
                  <Globe className="w-3 h-3 text-white/40 shrink-0" />
                  <span className="truncate">{project.urlPlaceholder}</span>
                </div>

                {/* Index badge */}
                <span className="text-xs font-mono font-medium text-white/40 group-hover:text-white/80 transition-colors">
                  #{project.number}
                </span>
              </div>

              {/* Image / Wireframe Placeholder Canvas */}
              <div
                className={`relative w-full ${project.aspectRatio} overflow-hidden bg-gradient-to-b from-[#131317] to-[#0A0A0D] flex flex-col items-center justify-center p-6 sm:p-8 border-b border-white/5`}
              >
                {/* Subtle Radial Dot Matrix Grid Background */}
                <div
                  className="absolute inset-0 opacity-[0.14] pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                ) : (
                  /* Editorial Wireframe Placeholder Mockup */
                  <div className="relative z-10 w-full max-w-[340px] flex flex-col items-center text-center">
                    
                    {/* Visual website skeleton */}
                    <div className="w-full bg-white/[0.025] border border-white/10 rounded-xl p-3 sm:p-4 mb-4 backdrop-blur-sm group-hover:border-white/20 transition-all duration-300 shadow-inner">
                      {/* Nav bar */}
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/5">
                        <div className="w-14 h-2 rounded-full bg-white/20" />
                        <div className="flex gap-2">
                          <div className="w-6 h-1.5 rounded-full bg-white/10" />
                          <div className="w-6 h-1.5 rounded-full bg-white/10" />
                          <div className="w-6 h-1.5 rounded-full bg-white/10" />
                        </div>
                      </div>
                      
                      {/* Hero content lines */}
                      <div className="flex flex-col items-center gap-2 py-3">
                        <div className="w-3/4 h-3 rounded-full bg-white/15" />
                        <div className="w-1/2 h-2 rounded-full bg-white/10" />
                      </div>
                      
                      {/* 3 cards skeleton */}
                      <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-white/5">
                        <div className="h-8 rounded bg-white/[0.04] border border-white/5" />
                        <div className="h-8 rounded bg-white/[0.04] border border-white/5" />
                        <div className="h-8 rounded bg-white/[0.04] border border-white/5" />
                      </div>
                    </div>

                    {/* Placeholder pill tag */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-dashed border-white/25 text-white/70 text-xs font-mono group-hover:border-[#FF5500]/60 group-hover:text-white transition-colors">
                      <Monitor className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FF5500] transition-colors" />
                      <span>Website Screenshot Slot</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Metadata & Info Area */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#0D0D10]">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF5500] font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#FF5500] transition-colors mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Circular Action Arrow */}
                    <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-white text-white/60 group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 mt-1">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 font-heading leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech stack badge pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
