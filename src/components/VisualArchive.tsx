import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ArchiveCard {
  id: string;
  title: string;
  category: string;
  image: string;
  rotate?: number;
  width?: string;
  aspect?: string;
}

// Individual Archive Card with Camera Focus / Depth-of-Field Effect:
// Images go out of focus (blur) when scrolled up or downwards;
// Snap into sharp focus when centered in viewport.
const ArchiveCardItem: React.FC<{
  item: ArchiveCard;
  onClick: () => void;
}> = ({ item, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track each card's scroll progression across the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Subtle out-of-focus blur (softened for natural depth-of-field):
  // 0.0 = entered bottom of screen (subtly softened)
  // 0.35 - 0.65 = centered in active viewport (razor sharp focus: 0px)
  // 1.0 = leaving top of screen (subtly softened)
  const blurAmount = useTransform(
    scrollYProgress,
    [0, 0.22, 0.38, 0.62, 0.78, 1],
    [6, 2.5, 0, 0, 2.5, 6]
  );
  const filter = useTransform(blurAmount, (b) => `blur(${b}px)`);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.38, 0.62, 1],
    [1.03, 1, 1, 1.03]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0.85, 1, 1, 0.85]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotate: item.rotate,
        opacity,
      }}
      whileHover={{ scale: 1.04, y: -8, rotate: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className="group relative rounded-[26px] sm:rounded-[32px] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.28)] border border-black/8 cursor-pointer transition-shadow duration-300 will-change-transform"
    >
      <motion.img
        src={item.image}
        alt={item.title}
        loading="lazy"
        draggable={false}
        style={{
          filter,
          scale: imageScale,
        }}
        className="w-full h-auto object-cover select-none will-change-[filter,transform] transition-transform duration-500"
      />
    </motion.div>
  );
};

export const VisualArchive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<ArchiveCard | null>(null);

  // Track scroll position through the tall gallery container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Sticky background watermark text subtle scale
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.03]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.7]);

  // Staggered parallax for columns creating the organic random floating grid
  const col1Y = useTransform(scrollYProgress, [0, 1], [100, -180]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [220, -320]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [150, -240]);

  // Column 1 Items (Left Column)
  const col1Items: ArchiveCard[] = [
    {
      id: 'ar1',
      title: 'Visual Design 01',
      category: 'Creative Artwork',
      image: '/archive/ar1.jpeg',
      rotate: -1.5,
    },
    {
      id: 'ar2',
      title: 'Brand Identity 02',
      category: 'Brand Design',
      image: '/archive/ar2.png',
      rotate: 2,
    },
    {
      id: 'ar3',
      title: 'Art Direction 03',
      category: 'Commercial Creative',
      image: '/archive/ar3.png',
      rotate: -2,
    },
  ];

  // Column 2 Items (Center / Staggered Lower Column)
  const col2Items: ArchiveCard[] = [
    {
      id: 'ar4',
      title: 'Poster Design 04',
      category: 'Social Media Campaign',
      image: '/archive/ar4.png',
      rotate: 2,
    },
    {
      id: 'ar5',
      title: 'Digital Graphics 05',
      category: 'Editorial Design',
      image: '/archive/ar5.png',
      rotate: -2,
    },
    {
      id: 'ar6',
      title: 'Creative Visual 06',
      category: 'Campaign Identity',
      image: '/archive/ar6.png',
      rotate: 1.5,
    },
  ];

  // Column 3 Items (Right Column)
  const col3Items: ArchiveCard[] = [
    {
      id: 'ar7',
      title: 'Typography Showcase 07',
      category: 'Visual Direction',
      image: '/archive/ar7.png',
      rotate: -2.5,
    },
    {
      id: 'ar8',
      title: 'Editorial Graphic 08',
      category: 'Brand Collateral',
      image: '/archive/ar8.png',
      rotate: 2,
    },
    {
      id: 'ar9',
      title: 'Modern Creative 09',
      category: 'Commercial Art',
      image: '/archive/ar9.webp',
      rotate: -1,
    },
  ];

  return (
    <section
      id="archive"
      data-bg="#FFFFFF"
      ref={containerRef}
      className="relative bg-transparent z-10 overflow-x-clip"
    >
      {/* 1. Sticky Watermark Headline: "Design" (Moved upwards for full visibility) */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start pt-14 sm:pt-16 md:pt-20 lg:pt-24 pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          style={{
            scale: textScale,
            opacity: textOpacity,
          }}
          className="text-center px-4 will-change-transform translate-x-[4vw] sm:translate-x-[8vw] lg:translate-x-[14vw]"
        >
          <h2 className="text-[16vw] sm:text-[14vw] md:text-[13vw] lg:text-[150px] xl:text-[175px] font-black text-[#DFDFDF] font-heading tracking-tight leading-[0.88] select-none">
            Design
          </h2>
        </motion.div>
      </div>

      {/* 2. Floating Random Grid of Images (Starting lower with ample breathing space for headline) */}
      <div className="relative z-10 -mt-[100vh] w-full max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 pb-20 sm:pb-28 lg:pb-36">
        
        {/* Mobile View: 2-column masonry */}
        {/* Desktop View: 3-column staggered parallax grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          
          {/* Column 1 (Left, 4 cols) */}
          <motion.div
            style={{ y: col1Y }}
            className="sm:col-span-1 lg:col-span-4 flex flex-col gap-10 sm:gap-14 lg:gap-16 pt-32 sm:pt-40 lg:pt-48 will-change-transform"
          >
            {col1Items.map((item) => (
              <ArchiveCardItem
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </motion.div>

          {/* Column 2 (Center-Right, 5 cols, staggered lower) */}
          <motion.div
            style={{ y: col2Y }}
            className="sm:col-span-1 lg:col-span-5 flex flex-col gap-10 sm:gap-14 lg:gap-16 pt-48 sm:pt-64 lg:pt-80 will-change-transform"
          >
            {col2Items.map((item) => (
              <ArchiveCardItem
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </motion.div>

          {/* Column 3 (Far Right, 3 cols) */}
          <motion.div
            style={{ y: col3Y }}
            className="hidden lg:flex lg:col-span-3 flex-col gap-10 sm:gap-14 lg:gap-16 pt-36 sm:pt-48 lg:pt-56 will-change-transform relative"
          >
            {col3Items.map((item) => (
              <ArchiveCardItem
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </motion.div>

        </div>
      </div>

      {/* 3. Full-Screen Lightbox Modal on Click */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-[#111111] text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden flex-1 flex items-center justify-center bg-black p-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[75vh] w-auto object-contain rounded-xl select-none"
                />
              </div>

              <div className="p-6 bg-[#161616] flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading">{selectedItem.title}</h3>
                  <p className="text-xs text-white/60 font-mono mt-1">{selectedItem.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};