import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './components/Hero';
import { IntroStatement } from './components/IntroStatement';
import { ServicesSection } from './components/ServicesSection';
import { VisualArchive } from './components/VisualArchive';
import { CreativeToolkit } from './components/CreativeToolkit';
import { BeyondVisuals } from './components/BeyondVisuals';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { SmoothCursor } from './components/SmoothCursor';
import { useLenis } from './utils/smoothScroll';
import { ProjectItem } from './data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  // Initialize Lenis + GSAP smooth scroll
  useLenis();

  // Active section tab & active modal project
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projectsTab, setProjectsTab] = useState('digital-marketing');

  const handleViewAllProjects = () => {
    setProjectsTab('all');
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Seamless & continuous background color fade across ALL sections
  useEffect(() => {
    const appEl = document.getElementById('app-container');
    if (!appEl) return;

    let currentColor = '#F2E7DA';

    const updateColor = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-bg]'));
      if (sections.length === 0) return;

      const vh = window.innerHeight;
      let activeColor = '#F2E7DA';

      // Find the active section based on the focal reading point
      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        const bg = sec.getAttribute('data-bg');
        if (!bg) continue;

        const rect = sec.getBoundingClientRect();
        // Custom thresholds for focal points
        const threshold = sec.id === 'toolkit' ? vh * 0.40 : sec.id === 'contact' ? vh * 0.45 : vh * 0.50;

        if (rect.top <= threshold && rect.bottom >= threshold) {
          activeColor = bg;
          break;
        }
      }

      // If active color changed, smoothly fade the container background
      if (activeColor !== currentColor) {
        currentColor = activeColor;
        gsap.to(appEl, {
          backgroundColor: activeColor,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    };

    // Run on initial load
    updateColor();
    const timer = setTimeout(updateColor, 100);

    // Sync with GSAP ticker so it checks on every smooth scroll frame
    gsap.ticker.add(updateColor);
    window.addEventListener('resize', updateColor);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateColor);
      window.removeEventListener('resize', updateColor);
    };
  }, []);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    const targetMap: Record<string, string> = {
      home: '#hero',
      projects: '#projects',
      about: '#about',
      contact: '#contact',
    };
    const target = targetMap[tab];
    if (target) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      id="app-container"
      className="min-h-screen bg-[#F2E7DA] text-[#111111] selection:bg-[#FF5500] selection:text-white relative font-sans"
    >
      {/* 1. Trailing Black Dot Cursor */}
      <SmoothCursor />

      <main>
        {/* 2. Hero Section with Navbar (Part of ONLY Hero section) */}
        <Hero activeTab={activeTab} onNavigate={handleNavigate} />

        {/* 4. Intro Statement Section (Fades to White #FFFFFF when moving halfway out of Hero) */}
        <IntroStatement onMoreAbout={() => handleNavigate('about')} />

        {/* 5. What I can Help you with? (Fades into Brownish #F2E7DA) */}
        <ServicesSection />

        {/* 6. Visual Archive (Fades into White #FFFFFF) */}
        <VisualArchive />

        {/* 7. My Creative Toolkit (Fades into Black #000000) */}
        <CreativeToolkit />

        {/* 8. Beyond the Visuals (Deep Black #000000) */}
        <BeyondVisuals
          onSelectProject={setSelectedProject}
          activeTab={projectsTab}
          onTabChange={setProjectsTab}
          onViewAllProjects={handleViewAllProjects}
        />

        {/* 9. Great Things Begin Together (CTA Section - Blends from Black #000000 into Light Olive #7E8C58) */}
        <CtaBanner />
      </main>

      {/* 10. Footer (Pure White #FFFFFF with giant "Manav") */}
      <Footer onNavigate={handleNavigate} />

      {/* 12. Case Study Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
