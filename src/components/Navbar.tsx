import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MANAV_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab = 'home', onNavigate }) => {
  const [activeSection, setActiveSection] = useState(activeTab);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About Me', href: '#about', id: 'about' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Centered Pill Navbar: Sits naturally at the top of Hero with zero scroll behavior */}
      <header className="absolute top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto bg-[#0A0A0A] text-white rounded-full pl-6 sm:pl-8 lg:pl-10 pr-2 sm:pr-2.5 py-1.5 sm:py-2 flex items-center justify-between gap-6 sm:gap-8 lg:gap-10 shadow-[0_16px_36px_rgba(0,0,0,0.28)] border border-white/12">
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`text-[14px] sm:text-[15px] transition-colors tracking-tight font-heading leading-none cursor-pointer ${
                  activeSection === item.id
                    ? 'text-white font-medium'
                    : 'text-white/80 hover:text-white font-normal'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Brand indicator */}
          <div className="md:hidden flex items-center gap-2 py-0.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]"></span>
            <span className="text-xs sm:text-sm font-normal text-white tracking-tight font-heading">
              {MANAV_PROFILE.firstName}
            </span>
          </div>

          {/* Right: Orange Pill CTA Button */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact', '#contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-heading font-medium text-[13px] sm:text-[14px] transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-md"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.2] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 inset-x-4 z-40 bg-[#0A0A0A] text-white rounded-3xl p-6 shadow-2xl border border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`text-left text-lg py-2.5 px-4 rounded-xl transition-colors font-heading ${
                    activeSection === item.id
                      ? 'bg-white/15 text-white font-medium'
                      : 'text-white/80 hover:bg-white/5 font-normal'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`mailto:${MANAV_PROFILE.email}`}
                  className="text-xs text-white/70 hover:text-white"
                >
                  {MANAV_PROFILE.email}
                </a>
                <a
                  href={`tel:${MANAV_PROFILE.phone}`}
                  className="text-xs text-white/70 hover:text-white"
                >
                  {MANAV_PROFILE.phoneDisplay} · Delhi, India
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
