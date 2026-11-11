import React from 'react';
import { MANAV_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: string, href: string) => {
    if (onNavigate) onNavigate(id);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      data-bg="#FFFFFF"
      className="bg-transparent pt-20 sm:pt-28 pb-8 px-6 sm:px-12 lg:px-20 relative z-10 overflow-hidden text-[#111111]"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top 3-Column Section (Exact match to reference frame) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
          
          {/* Left Column: Creative Mindset / Digital Skillset / Marketing Vision */}
          <div className="md:col-span-6 lg:col-span-7">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#111111] leading-[1.18] tracking-tight">
              Creative Mindset.
              <br />
              Digital Skillset.
              <br />
              Marketing Vision.
            </h3>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-base sm:text-lg font-medium font-heading text-[#FF6B00] mb-4 sm:mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-heading text-sm sm:text-base text-[#111111]">
              <li>
                <button
                  onClick={() => handleNav('home', '#hero')}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects', '#projects')}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about', '#about')}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  About Me
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Connect Me On */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-base sm:text-lg font-medium font-heading text-[#FF6B00] mb-4 sm:mb-5">
              Connect Me On
            </h4>
            <ul className="flex flex-col gap-3 font-heading text-sm sm:text-base text-[#111111]">
              <li>
                <a
                  href={MANAV_PROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6B00] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={MANAV_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6B00] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Giant Watermark Name: "Manav" in Title Case matching "Pratham" in reference screenshot */}
        <div className="w-full text-center select-none overflow-hidden -mb-4 sm:-mb-6">
          <span className="font-heading font-black text-[21vw] sm:text-[22vw] leading-[0.8] text-[#EAE6E1] tracking-tight block pointer-events-none">
            Manav
          </span>
        </div>

        {/* Bottom Bar: Proudly Crafted in India / Copyright / All Rights Reserved */}
        <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-sans text-neutral-800">
          <div>
            <span>Proudly Crafted in India</span>
          </div>
          <div>
            <span>©2026 Manav Mehta</span>
          </div>
          <div>
            <span>All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
