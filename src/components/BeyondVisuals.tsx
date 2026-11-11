import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface BeyondVisualsProps {
  onSelectProject?: (project: ProjectItem) => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onViewAllProjects?: () => void;
}

interface WebsiteProject {
  id: string;
  number: string;
  colSpan: string;
  aspectClass: string;
  image?: string;
}

const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    id: 'web-1',
    number: '01',
    colSpan: 'col-span-12 lg:col-span-7',
    aspectClass: 'aspect-[16/10] sm:aspect-[16/9] min-h-[300px] sm:min-h-[420px]',
  },
  {
    id: 'web-2',
    number: '02',
    colSpan: 'col-span-12 lg:col-span-5',
    aspectClass: 'aspect-[4/3] lg:aspect-auto min-h-[300px] sm:min-h-[420px]',
  },
  {
    id: 'web-3',
    number: '03',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectClass: 'aspect-[16/11] min-h-[260px] sm:min-h-[320px]',
  },
  {
    id: 'web-4',
    number: '04',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectClass: 'aspect-[16/11] min-h-[260px] sm:min-h-[320px]',
  },
  {
    id: 'web-5',
    number: '05',
    colSpan: 'col-span-12 lg:col-span-4',
    aspectClass: 'aspect-[16/11] min-h-[260px] sm:min-h-[320px]',
  },
];

export const BeyondVisuals: React.FC<BeyondVisualsProps> = () => {
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
        
        {/* Section Subhead (clean without extra descriptor paragraph) */}
        <div className="mb-8 sm:mb-12 pb-4 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF5500] font-semibold">
            Selected Work
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
            Websites & Digital Experiences
          </h3>
        </div>

        {/* 5-Item Pure Image Box Bento Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {WEBSITE_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`${project.colSpan} ${project.aspectClass} group relative rounded-[22px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#131317] to-[#0A0A0D] border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl flex flex-col justify-center items-center cursor-pointer will-change-transform`}
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
                  alt={`Website ${project.number}`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              ) : (
                /* Pure Image Placeholder Box */
                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-white/25 flex items-center justify-center text-white/40 group-hover:text-white transition-all duration-300 mb-3 shadow-inner">
                    <Monitor className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-dashed border-white/20 text-white/50 text-xs font-mono group-hover:border-white/40 group-hover:text-white/80 transition-colors">
                    <span>Image Placeholder {project.number}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
