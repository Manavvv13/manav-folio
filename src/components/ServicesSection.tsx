import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position through this section for fluid choreography
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Direct scroll tracking without double-smoothing delay
  // (Lenis is already providing 60fps silky smooth scrolling)
  // Parallax for the big text "What I can Help you with?" emerging from behind cards
  const textY = useTransform(scrollYProgress, [0.08, 0.44, 0.88], [85, 0, -80]);
  const textScale = useTransform(scrollYProgress, [0.08, 0.44, 0.88], [0.94, 1, 1.02]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.22, 0.82, 0.96], [0.35, 1, 1, 0.35]);

  // Overall cards vertical flow
  const cardsY = useTransform(scrollYProgress, [0, 1], [60, -40]);

  // Dynamic Scroll Rotation & Tilt:
  // 1. Before (0.05 -> 0.35): completely tilted in an overlapping fan (-14deg, -6deg, +6deg, +14deg)
  // 2. Center (0.40 -> 0.60): completely straight (0deg on all cards)
  // 3. After (0.65 -> 0.92): completely tilted again as you scroll down (-11deg, +6deg, -6deg, +12deg)
  // Dynamic Scroll Rotation & Enhanced Tilt:
  // Card 1 tilts to -22deg, Card 4 tilts to +22deg, fanning out dramatically
  const rotate1 = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [-22, -4, -4, -18]);
  const rotate2 = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [-10, -1.5, -1.5, 8]);
  const rotate3 = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [10, 1.5, 1.5, -8]);
  const rotate4 = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [22, 4, 4, 18]);

  // Horizontal X translation with distinct gap between cards
  const card1X = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [-28, -12, -12, -22]);
  const card2X = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [-10, -4, -4, -8]);
  const card3X = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [10, 4, 4, 8]);
  const card4X = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [28, 12, 12, 22]);

  // Vertical staggering
  const card1Y = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [35, 8, 8, -15]);
  const card2Y = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [-35, -16, -16, -45]);
  const card3Y = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [20, 4, 4, -20]);
  const card4Y = useTransform(scrollYProgress, [0.08, 0.38, 0.60, 0.90], [40, 10, 10, -10]);

  const cardsData = [
    {
      id: 'branding',
      num: '01',
      title: 'Branding & Visual Designing',
      subtitle: 'Identity Systems & Art Direction',
      description: 'Enduring visual systems, custom typography, logomarks, and comprehensive brand guidelines.',
      tags: ['Brand Identity', 'Logotypes', 'Vector Systems'],
      image: '/cards/card1.png',
      rotate: rotate1,
      x: card1X,
      y: card1Y,
      zIndex: 'z-15',
      // Gradient matching prathamfolio: #022CB0 -> #00C6FF
      gradient: 'from-[#022CB0] to-[#00C6FF]',
      borderGlow: 'hover:border-cyan-400/40',
      arrowBg: 'group-hover:bg-[#0070F3]',
    },
    {
      id: 'web',
      num: '02',
      title: 'Web Designing & Development',
      subtitle: 'High-Impact Interactive Frontend',
      description: 'Custom landing pages built with React, Next.js, and fluid GSAP/Framer motion choreography.',
      tags: ['React & Next.js', 'Tailwind CSS', 'Fluid Motion'],
      image: '/cards/card2.png',
      rotate: rotate2,
      x: card2X,
      y: card2Y,
      zIndex: 'z-30', // Elevated higher and overlapping cards 1 & 3
      // Gradient matching prathamfolio: #00B160 -> #01B0EA
      gradient: 'from-[#00B160] to-[#01B0EA]',
      borderGlow: 'hover:border-emerald-400/40',
      arrowBg: 'group-hover:bg-[#00C48C]',
    },
    {
      id: 'marketing',
      num: '03',
      title: 'Marketing & Communication',
      subtitle: 'Strategic Digital Campaigns',
      description: 'High-converting visual collaterals, pitch decks, and ad creatives designed for clear ROI.',
      tags: ['Digital Collaterals', 'Ad Creatives', 'Pitch Decks'],
      image: '/cards/card3.png',
      rotate: rotate3,
      x: card3X,
      y: card3Y,
      zIndex: 'z-20', // Overlaps card 4
      // Gradient matching prathamfolio: #F728AC -> #FB662E
      gradient: 'from-[#F728AC] to-[#FB662E]',
      borderGlow: 'hover:border-pink-400/40',
      arrowBg: 'group-hover:bg-[#FF007A]',
    },
    {
      id: 'strategy',
      num: '04',
      title: 'Performance & Strategy Marketing',
      subtitle: 'Growth Architecture & Art Direction',
      description: 'Performance-focused visual funnels, conversion rate optimization, and brand alignment.',
      tags: ['Growth Funnels', 'CRO Strategy', 'Visual Architecture'],
      image: '/cards/card4.png',
      rotate: rotate4,
      x: card4X,
      y: card4Y,
      zIndex: 'z-10',
      // Gradient matching prathamfolio: #FE5914 -> #FFF10A
      gradient: 'from-[#FE5914] to-[#FFF10A]',
      borderGlow: 'hover:border-amber-400/40',
      arrowBg: 'group-hover:bg-[#FF8200]',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      data-bg="#F2E7DA"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden bg-transparent min-h-[110vh] flex flex-col justify-center items-center"
    >
      <div className="max-w-[1450px] w-full mx-auto relative flex flex-col items-center justify-center min-h-[580px] sm:min-h-[680px]">
        
        {/* 1. Large Parallax Text: sits directly BEHIND the cards and emerges upwards */}
        <motion.div
          style={{
            y: textY,
            scale: textScale,
            opacity: textOpacity,
          }}
          className="absolute top-2 sm:top-6 md:top-8 left-0 right-0 text-center pointer-events-none select-none z-0 will-change-transform"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[116px] font-black text-[#A4988B] font-heading tracking-tight leading-[0.93]">
            What I can
            <br />
            Help you with?
          </h2>
        </motion.div>

        {/* 2. Kinetic Tilted & Straightening Overlapping Cards in front (z-10 to z-30) */}
        <motion.div
          style={{ y: cardsY }}
          className="relative z-10 w-full max-w-7xl mt-24 sm:mt-28 md:mt-32"
        >
          {/* Responsive container: horizontal fanned cards with clean gap between each */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-6 lg:gap-7 px-4">
            {cardsData.map((card) => (
              <motion.div
                key={card.id}
                style={{
                  rotate: card.rotate,
                  x: card.x,
                  y: card.y,
                }}
                whileHover={{
                  scale: 1.04,
                  zIndex: 50,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className={`group relative w-full sm:w-[46%] lg:w-[23%] max-w-[280px] rounded-[30px] sm:rounded-[34px] overflow-hidden bg-[#0C0C0C] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.28)] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.4)] transition-shadow duration-300 flex flex-col justify-between cursor-pointer will-change-transform border-0 outline-none ring-0 ${card.zIndex}`}
              >
                {/* Inner Box holding the artwork & details (No outlines, no numbers, no arrows) */}
                <div className="relative p-5 sm:p-6 flex flex-col justify-between aspect-[4/4.4] sm:aspect-[4/4.6]">
                  {/* Artwork Image */}
                  <div className="w-full flex-1 flex items-center justify-center py-2">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-[82%] sm:w-[86%] aspect-square object-contain select-none group-hover:scale-106 transition-transform duration-500"
                      draggable={false}
                    />
                  </div>

                  {/* Subtitle / Details */}
                  <div className="pt-2 text-center">
                    <p className="text-[11px] font-mono text-white/60 tracking-wider uppercase line-clamp-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Banner Title on the Gradient (Keeps the colorful bottom) */}
                <div className={`py-3.5 sm:py-4 px-3 text-center bg-gradient-to-r ${card.gradient}`}>
                  <h3 className="text-base sm:text-[17px] font-bold font-heading text-white leading-tight">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};