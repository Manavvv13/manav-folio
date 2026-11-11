import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface IntroStatementProps {
  onMoreAbout?: () => void;
}

export const IntroStatement: React.FC<IntroStatementProps> = ({ onMoreAbout }) => {
  const paragraphText =
    "I combine Creative Design, Web Development, and Digital Marketing to build visually engaging and strategically driven digital experiences. My approach focuses on blending Aesthetics with Functionality, ensuring every website is thoughtfully designed, technically refined, and optimized to create meaningful user experiences.";

  return (
    <section
      id="intro"
      data-bg="#FFFFFF"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 relative z-10 overflow-hidden flex flex-col items-center justify-center bg-transparent"
    >
      <div id="about" className="absolute -top-20" />
      <div className="max-w-3xl sm:max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Continuous Justified Statement with Butter-Smooth Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-14 select-none w-full"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-relaxed md:leading-[1.7] text-[#000000] font-heading font-medium text-justify [text-align-last:center]">
            {paragraphText}
          </p>
        </motion.div>

        {/* CTA Button: More About Me ↗ (Permanent Espresso Brown #452800) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#about"
            onClick={(e) => {
              if (onMoreAbout) {
                e.preventDefault();
                onMoreAbout();
              }
            }}
            className="inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#452800] text-white hover:bg-[#523000] hover:scale-[1.02] transition-all duration-300 font-heading font-normal sm:font-medium text-[16px] sm:text-[18px] tracking-tight shadow-[0_10px_25px_rgba(69,40,0,0.22)] hover:shadow-[0_14px_30px_rgba(69,40,0,0.32)] group cursor-pointer"
          >
            <span>More About Me</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
