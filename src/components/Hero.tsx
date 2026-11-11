import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MANAV_PROFILE } from '../data/portfolioData';
import { Navbar } from './Navbar';

interface HeroProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeTab = 'home', onNavigate }) => {
  const { scrollY } = useScroll();

  // Sunflower parallax rotations on scroll
  const rotateTl = useTransform(scrollY, [0, 600], [-5, 45]);
  const rotateBl = useTransform(scrollY, [0, 600], [10, -35]);
  const rotateTr = useTransform(scrollY, [0, 600], [5, -45]);
  const rotateBr = useTransform(scrollY, [0, 600], [-10, 35]);

  // Sunflower parallax floating translateY
  const ySunflowerTl = useTransform(scrollY, [0, 600], [0, -50]);
  const ySunflowerBl = useTransform(scrollY, [0, 600], [0, -40]);
  const ySunflowerTr = useTransform(scrollY, [0, 600], [0, -60]);
  const ySunflowerBr = useTransform(scrollY, [0, 600], [0, -40]);

  // Subtle sunflower inwards translateX on scroll (gentle inward drift)
  const xSunflowerTl = useTransform(scrollY, [0, 600], [0, 32]);
  const xSunflowerBl = useTransform(scrollY, [0, 600], [0, 26]);
  const xSunflowerTr = useTransform(scrollY, [0, 600], [0, -38]);
  const xSunflowerBr = useTransform(scrollY, [0, 600], [0, -28]);

  // Subtle background text & person parallax
  const yText = useTransform(scrollY, [0, 600], [0, -25]);
  const yPerson = useTransform(scrollY, [0, 600], [0, 20]);

  return (
    <section
      id="hero"
      data-bg="#F2E7DA"
      className="relative min-h-screen pt-28 sm:pt-32 pb-0 overflow-hidden flex flex-col justify-between bg-transparent"
    >
      {/* 0. Navbar: Part of Hero Section (Stays where it is at top of Hero) */}
      <Navbar activeTab={activeTab} onNavigate={onNavigate} />

      {/* 1. Giant Background Watermark Text: "Manav" (Smooth entrance on page load) */}
      <motion.div
        style={{ y: yText }}
        className="absolute top-[10%] sm:top-[8%] lg:top-[6%] inset-x-0 flex justify-center items-center pointer-events-none select-none z-0"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-[23vw] sm:text-[21vw] leading-none text-[#A89C8E] tracking-tight whitespace-nowrap block"
        >
          Manav
        </motion.span>
      </motion.div>

      {/* 2. Main Hero Content Container */}
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10 flex-1 flex flex-col justify-end">
        <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-end justify-center">

          {/* Left Text Block (Smooth staggered entrance on page load) */}
          <div className="absolute left-1 sm:left-2 md:left-4 lg:left-5 xl:left-7 top-[43%] sm:top-[41%] lg:top-[37%] z-30 max-w-md sm:max-w-lg pointer-events-auto">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#111111] font-heading mb-1"
              >
                Hello I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-black text-[#0A0A0A] font-heading tracking-tight mb-3 sm:mb-4"
              >
                {MANAV_PROFILE.firstName}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg lg:text-[19px] font-heading text-[#4A443E] leading-snug font-medium"
              >
                I Design to Get Noticed.
                <br />
                And Market to be Chosen.
              </motion.p>
            </div>
          </div>

          {/* Central Character & Floating Tech Icons Composite Area */}
          <div className="relative w-full max-w-3xl flex justify-center items-end">
            
            {/* Top-Left Icon (React - Behind left shoulder - gentle bloom on load) */}
            <motion.div
              style={{
                rotate: rotateTl,
                y: ySunflowerTl,
                x: xSunflowerTl,
              }}
              className="absolute left-[8%] sm:left-[12%] lg:left-[14%] bottom-[32%] sm:bottom-[36%] w-32 sm:w-44 lg:w-52 z-10 pointer-events-none will-change-transform"
            >
              <motion.img
                src="/react-icon.webp"
                alt="React"
                initial={{ opacity: 0, scale: 0.75, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.85, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-auto drop-shadow-md select-none"
                draggable={false}
              />
            </motion.div>

            {/* Top-Right Icon (Claude - Behind right shoulder - gentle bloom on load) */}
            <motion.div
              style={{
                rotate: rotateTr,
                y: ySunflowerTr,
                x: xSunflowerTr,
              }}
              className="absolute -right-[6%] sm:-right-[2%] lg:right-[1%] bottom-[28%] sm:bottom-[32%] w-44 sm:w-56 lg:w-64 z-10 pointer-events-none will-change-transform"
            >
              <motion.img
                src="/claude-icon.svg"
                alt="Claude"
                initial={{ opacity: 0, scale: 0.75, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-auto drop-shadow-md select-none"
                draggable={false}
              />
            </motion.div>

            {/* Manav Cutout Video with Alpha Mask Fade (Smooth rise on load) */}
            <motion.div
              style={{
                y: yPerson,
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 99%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 99%)',
              }}
              className="relative z-20 w-[370px] sm:w-[540px] md:w-[610px] lg:w-[670px] max-h-[780px] select-none flex justify-center items-end"
            >
              <motion.video
                src="/Manav%20Folio%20Video.webm"
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-auto max-h-[760px] object-contain select-none pointer-events-none"
              >
                <source src="/Manav%20Folio%20Video.webm" type="video/webm" />
              </motion.video>
            </motion.div>

            {/* Bottom-Left Icon (VS Code - Foreground left - gentle bloom on load) */}
            <motion.div
              style={{
                rotate: rotateBl,
                y: ySunflowerBl,
                x: xSunflowerBl,
              }}
              className="absolute -left-[4%] sm:left-[0%] lg:left-[2%] bottom-[4%] sm:bottom-[6%] w-24 sm:w-36 lg:w-44 z-25 pointer-events-none will-change-transform"
            >
              <motion.img
                src="/vscode-icon.webp"
                alt="VS Code"
                initial={{ opacity: 0, scale: 0.75, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-auto drop-shadow-xl select-none"
                draggable={false}
              />
            </motion.div>

            {/* Bottom-Right Icon (Antigravity - Foreground right - gentle bloom on load) */}
            <motion.div
              style={{
                rotate: rotateBr,
                y: ySunflowerBr,
                x: xSunflowerBr,
              }}
              className="absolute -right-[2%] sm:right-[2%] lg:right-[4%] bottom-[1%] sm:bottom-[2%] w-32 sm:w-44 lg:w-52 z-25 pointer-events-none will-change-transform"
            >
              <motion.img
                src="/antigravity-icon.svg"
                alt="Google Antigravity"
                initial={{ opacity: 0, scale: 0.75, rotate: 12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-auto drop-shadow-lg select-none"
                draggable={false}
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
