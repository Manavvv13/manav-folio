import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MANAV_PROFILE } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll tracking across the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Multi-layered parallax floating translations
  const yHeading = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [60, -45]);
  const yButton = useTransform(scrollYProgress, [0, 1], [30, -25]);
  const scaleHeading = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      data-bg="#7E8C58"
      className="min-h-[85vh] sm:min-h-screen py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center will-change-transform">
        
        {/* Parallax Main Headline */}
        <motion.h2
          style={{ y: yHeading, scale: scaleHeading }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[118px] font-heading font-black tracking-[-0.035em] leading-[0.96] text-[#1F2814] text-center select-none"
        >
          Great Things
          <br />
          Begin Together.
        </motion.h2>

        {/* Parallax Subtitle */}
        <motion.p
          style={{ y: ySubtitle }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-medium text-[#2D391F] max-w-2xl mx-auto leading-relaxed text-center px-4 mt-6 sm:mt-8 mb-8 sm:mb-12"
        >
          From Creative Collaborations to New Opportunities,
          <br className="hidden sm:inline" />
          {' '}Let’s make Something Meaningful happen.
        </motion.p>

        {/* Parallax White Capsule Button: "Let's Connect ↗" (Zero border/shadow) */}
        <motion.div style={{ y: yButton }}>
          <a
            href={MANAV_PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-[#111111] hover:bg-neutral-100 font-sans font-semibold text-sm sm:text-base shadow-none border-0 outline-none ring-0 transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98] cursor-pointer"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] text-[#111111]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
