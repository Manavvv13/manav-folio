import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PolaroidItem {
  id: string;
  name: string;
  logo: React.ReactNode;
  normX: number; // -1 to +1 relative to center
  normY: number; // -1 to +1 relative to center
  rotate: number;
}

export const CreativeToolkit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playAreaRef = useRef<HTMLDivElement>(null);

  // Synchronous safe bounds calculation for initial frame
  const getInitialBounds = () => {
    if (typeof window === 'undefined') return { left: -500, right: 500, top: -280, bottom: 280 };
    const width = Math.min(window.innerWidth, 1280);
    const height = 760;
    const maxX = Math.max(120, width / 2 - 75);
    const maxY = Math.max(180, height / 2 - 85);
    return { left: -maxX, right: maxX, top: -maxY, bottom: maxY };
  };

  const [bounds, setBounds] = useState(getInitialBounds);

  // Keep bounds precisely measured to actual playArea container and viewport resize
  useEffect(() => {
    const updateBounds = () => {
      if (!playAreaRef.current) return;
      const rect = playAreaRef.current.getBoundingClientRect();
      const cardHalfWidth = 55;
      const cardHalfHeight = 65;
      const maxX = Math.max(120, rect.width / 2 - cardHalfWidth - 20);
      const maxY = Math.max(180, rect.height / 2 - cardHalfHeight - 20);
      setBounds({
        left: -maxX,
        right: maxX,
        top: -maxY,
        bottom: maxY,
      });
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  // Parallax scroll tracking for section heading
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const textScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 1.02]);
  const textOpacity = useTransform(scrollYProgress, [0.12, 0.32, 0.85, 0.98], [0.1, 1, 1, 0.35]);

  const tools: PolaroidItem[] = [
    {
      id: 'figma',
      name: 'Figma',
      rotate: -12,
      normX: -0.78,
      normY: -0.65,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
    },
    {
      id: 'photoshop',
      name: 'Photoshop',
      rotate: 8,
      normX: -0.35,
      normY: -0.78,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#001E36" />
          <path d="M17 18h13.5c4.7 0 8.5 3.3 8.5 8s-3.8 8-8.5 8H23v12h-6V18zm6 11h7.2c2 0 3.8-1.3 3.8-3s-1.8-3-3.8-3H23v6z" fill="#31A8FF"/>
          <path d="M47.2 30.5c-1-.7-2.3-1.2-3.8-1.5-2.2-.5-3.2-1.2-3.2-2.3 0-1.2 1.3-2 3.3-2 2 0 3.7.8 4.8 1.8l3.2-3.8c-2-1.8-4.8-2.7-8-2.7-5.5 0-9.2 3.2-9.2 7.5 0 3.2 2 5.5 6 6.4 2.5.6 3.6 1.4 3.6 2.6 0 1.4-1.5 2.3-3.8 2.3-2.6 0-4.8-1-6.2-2.5l-3.3 4c2.2 2.3 5.5 3.6 9.5 3.6 6.2 0 9.8-3.3 9.8-8 0-3.3-2-5.4-6.2-6.4z" fill="#31A8FF"/>
        </svg>
      ),
    },
    {
      id: 'illustrator',
      name: 'Illustrator',
      rotate: -8,
      normX: 0.35,
      normY: -0.75,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#330000" />
          <path d="M26.2 18h-4.6l-9.6 28h5.8l2.2-6.8h9.8l2.2 6.8h6L26.2 18zm-4.7 16.5l3.2-10 3.2 10h-6.4z" fill="#FF9A00"/>
          <path d="M45.5 24h5.5v22h-5.5V24zm0-6h5.5v4.5h-5.5V18z" fill="#FF9A00"/>
        </svg>
      ),
    },
    {
      id: 'react',
      name: 'React.js',
      rotate: 14,
      normX: 0.78,
      normY: -0.62,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      rotate: 10,
      normX: -0.82,
      normY: -0.05,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.086L61.7928 44.5H45.5V135.5H59.5V64.2929L138.868 165.733C142.613 163.091 146.177 160.192 149.508 157.086Z" fill="white"/>
          <rect x="121.5" y="44.5" width="14" height="91" fill="white"/>
        </svg>
      ),
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      rotate: -9,
      normX: 0.82,
      normY: 0.05,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 54 33" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38BDF8"/>
        </svg>
      ),
    },
    {
      id: 'motion',
      name: 'Framer Motion',
      rotate: -6,
      normX: -0.52,
      normY: 0.22,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
        </svg>
      ),
    },
    {
      id: 'webflow',
      name: 'Webflow',
      rotate: 9,
      normX: 0.52,
      normY: 0.18,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none">
          <path d="M22.95 4.8c-.1-.05-.22-.05-.32 0l-5.63 2.8-2.63-4.55a.38.38 0 0 0-.64 0l-4.1 7.1-2.9-5.02a.37.37 0 0 0-.64 0L.1 15.65a.37.37 0 0 0 .32.55h5.8a.37.37 0 0 0 .32-.19l2.7-4.7 2.8 4.84a.37.37 0 0 0 .32.19h5.6a.37.37 0 0 0 .32-.19l4.8-8.35a.37.37 0 0 0-.13-.5z" fill="#146EF5"/>
        </svg>
      ),
    },
    {
      id: 'premiere',
      name: 'Premiere Pro',
      rotate: -14,
      normX: -0.76,
      normY: 0.72,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#00005B" />
          <path d="M18 18h11.5c4.5 0 7.8 3 7.8 7.2s-3.3 7.2-7.8 7.2H23.5V46H18V18zm5.5 9.8h5.5c1.8 0 3-1.1 3-2.6s-1.2-2.6-3-2.6h-5.5v5.2z" fill="#EA77FF"/>
          <path d="M40 28h5.2v3.2h.2c1-2.2 3.2-3.6 5.6-3.6 1 0 1.8.2 2.4.5l-1.5 5.2c-.8-.4-1.8-.6-2.8-.6-2.8 0-4.8 2.2-4.8 5.8V46H40V28z" fill="#EA77FF"/>
        </svg>
      ),
    },
    {
      id: 'aftereffects',
      name: 'After Effects',
      rotate: 7,
      normX: -0.32,
      normY: 0.76,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#00005B" />
          <path d="M25.5 18h-4.8l-9.8 28h5.6l2.3-6.8h9.8l2.3 6.8h5.8L25.5 18zm-5 16.5l3.3-10 3.3 10h-6.6z" fill="#9999FF"/>
          <path d="M49.2 34.5c0-1.8-.8-3.4-2.8-3.4-1.8 0-3 1.4-3.2 3.4h6zm-6 3.2c.2 2.4 1.8 3.8 4 3.8 1.6 0 2.8-.8 3.6-1.8l3.6 3c-1.8 2.2-4.2 3.4-7.4 3.4-5.6 0-9.4-4-9.4-9.6s3.8-9.6 9-9.6c5.4 0 8.6 3.8 8.6 9v1.8H43.2z" fill="#9999FF"/>
        </svg>
      ),
    },
    {
      id: 'blender',
      name: 'Blender 3D',
      rotate: -9,
      normX: 0.34,
      normY: 0.74,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12.5 15a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" fill="#265787"/>
          <path d="M12.5 7a8 8 0 1 0 8 8 7.94 7.94 0 0 0-1.87-5.11l3-1.74a1 1 0 1 0-1-1.73l-4 2.31A7.94 7.94 0 0 0 12.5 7zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" fill="#EA7600"/>
          <path d="M2 11h6a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm3.29-4.71a1 1 0 0 0 1.42 0l4.24-4.24a1 1 0 0 0-1.42-1.42L5.29 4.87a1 1 0 0 0 0 1.42z" fill="#EA7600"/>
        </svg>
      ),
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      rotate: 12,
      normX: 0.78,
      normY: 0.68,
      logo: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#3178C6"/>
          <path d="M30 22H14v5.5h5V46h6V27.5h5V22zm19.8 7.5c-1.5-1.2-3.8-2-6.5-2-3.5 0-5.8 1.8-5.8 4.5 0 2.8 2 4 5.8 5.2 4.2 1.4 6.8 3 6.8 6.5 0 4-3.2 6.5-8.5 6.5-3.8 0-6.8-1.4-8.8-3.2l2.5-4.8c1.8 1.5 4.2 2.5 6.5 2.5 2.5 0 4.2-1.2 4.2-2.8 0-2-1.8-3-5.2-4.2-4.5-1.5-7.2-3.2-7.2-6.8 0-4 3.2-6.5 8-6.5 3.2 0 6 1 7.8 2.5l-2.7 4.8z" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="toolkit"
      data-bg="#000000"
      ref={containerRef}
      className="pt-16 sm:pt-20 pb-2 sm:pb-4 px-4 sm:px-6 lg:px-8 relative z-10 min-h-[660px] sm:min-h-[720px] lg:min-h-[760px] flex flex-col items-center justify-center bg-transparent select-none overflow-visible"
    >
      {/* Interactive Play Area: Constrains all logos safely inside the visible screen boundaries */}
      <div
        ref={playAreaRef}
        className="relative w-full max-w-7xl h-[620px] sm:h-[680px] lg:h-[720px] mx-auto rounded-3xl flex items-center justify-center"
      >
        {/* Center Content: Parallax Heading (z-10, sits BEHIND logos so logos render ON TOP) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
          <motion.div
            style={{
              y: textY,
              scale: textScale,
              opacity: textOpacity,
            }}
            className="text-center max-w-2xl mx-auto px-4 will-change-transform"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black text-white font-heading tracking-tight leading-[0.95]">
              My Creative
              <br />
              Toolkit
            </h2>
          </motion.div>
        </div>

        {/* Scattered, Draggable & Throwable Polaroid Logos (z-20, sits ON TOP of heading) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {tools.map((item) => {
            const initialX = Math.round(item.normX * bounds.right * 0.85);
            const initialY = Math.round(item.normY * bounds.bottom * 0.85);

            return (
              <motion.div
                key={item.id}
                drag
                dragConstraints={bounds}
                dragElastic={0}
                dragMomentum={true}
                dragTransition={{
                  power: 0.25,
                  timeConstant: 200,
                  bounceStiffness: 450,
                  bounceDamping: 30,
                }}
                initial={{
                  x: initialX,
                  y: initialY,
                  rotate: item.rotate,
                  scale: 0.85,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.45, ease: 'easeOut' },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.06,
                  zIndex: 40,
                  transition: { duration: 0.2 },
                }}
                whileDrag={{
                  scale: 1.12,
                  rotate: 0,
                  zIndex: 60,
                  cursor: 'grabbing',
                  boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.95)',
                }}
                onClick={(e) => e.stopPropagation()}
                className="absolute z-20 pointer-events-auto w-22 sm:w-26 lg:w-28 bg-white rounded-[3px] pt-2 sm:pt-2.5 px-2 sm:px-2.5 pb-5 sm:pb-6 shadow-[0_12px_28px_rgba(0,0,0,0.7)] border border-neutral-200/90 flex flex-col items-center cursor-grab active:cursor-grabbing will-change-transform touch-none select-none"
              >
                {/* Square Polaroid Photo Area (With less rounded corners) */}
                <div className="w-full aspect-square rounded-[2px] bg-[#F5F5F7] border border-black/5 flex items-center justify-center p-2 sm:p-2.5 select-none pointer-events-none shadow-inner">
                  <div className="w-full h-full flex items-center justify-center drop-shadow-xs">
                    {item.logo}
                  </div>
                </div>
                {/* The iconic blank Polaroid bottom chin is formed naturally by pb-5 sm:pb-6 */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};