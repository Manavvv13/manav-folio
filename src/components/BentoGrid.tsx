import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, MapPin, Code, Layers, Aperture, Sparkles } from 'lucide-react';
import { MANAV_PROFILE } from '../data/portfolioData';

export const BentoGrid: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(MANAV_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="overview" className="py-24 bg-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-[#1D4ED8] block mb-2">
              Overview & Disciplines
            </span>
            <h2 className="font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              Portfolio <span className="text-neutral-400 font-light text-3xl sm:text-5xl">⌝</span>
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-md leading-relaxed">
            A restrained, modular breakdown of core creative capabilities, local roots in Delhi, and deliberate design benchmarks.
          </p>
        </div>

        {/* Asymmetric Random Grid (No harsh outlines, soft off-white surfaces) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Tile 1: Profile & Identity Card (5 cols) */}
          <div className="md:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF8F5] text-neutral-600 border border-black/[0.04]">
                  Visual Designer
                </span>
                <span className="text-xs font-mono text-neutral-400">Delhi, India</span>
              </div>

              {/* Minimal Portrait & Typographic Heading */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt="Manav Mehta"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Hello, I'm</p>
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                    Manav Mehta
                  </h3>
                </div>
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-normal">
                {MANAV_PROFILE.bio}
              </p>
            </div>

            {/* Copy Email Button */}
            <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F2EB] hover:bg-[#EEEBE1] text-xs font-semibold text-neutral-800 rounded-full transition-all"
                title="Click to copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{MANAV_PROFILE.email}</span>
                  </>
                )}
              </button>

              <span className="text-xs font-mono text-neutral-400">IST +5:30</span>
            </div>
          </div>

          {/* Tile 2: Large Typographic Manifesto & Disciplines (7 cols) */}
          <div className="md:col-span-7 bg-[#111111] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div>
              <span className="text-xs font-bold text-emerald-400 block mb-3">
                Design Philosophy
              </span>
              <h3 className="font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight max-w-xl">
                Bridging the tension between structured frontend code and intuitive visual poetry.
              </h3>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs text-neutral-400 block mb-3 font-medium">Core Capabilities:</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
                  Frontend Landing Pages
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
                  Visual & Graphic Design
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
                  Logos & Brand Identity
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
                  35mm Street Photography
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Asymmetric Metric & Architectural Cards */}
          {/* Tile 3: Stat Card (4 cols) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <span className="text-xs font-semibold text-neutral-400">Finished Projects</span>
            <div className="my-4">
              <span className="font-extrabold text-5xl text-[#111111] tracking-tight">45+</span>
              <p className="text-sm font-bold text-neutral-800 mt-1">Design & Code Deliveries</p>
            </div>
            <p className="text-xs text-neutral-500">Every project hand-crafted with custom layouts.</p>
          </div>

          {/* Tile 4: Bespoke Craft Card (4 cols) */}
          <div className="md:col-span-4 bg-[#EAE7DD] rounded-3xl p-6 border border-black/[0.04] flex flex-col justify-between">
            <span className="text-xs font-semibold text-neutral-700">Art Direction</span>
            <div className="my-4">
              <span className="font-extrabold text-5xl text-neutral-900 tracking-tight">100%</span>
              <p className="text-sm font-bold text-neutral-900 mt-1">Tailored Aesthetic</p>
            </div>
            <p className="text-xs text-neutral-600">No generic templates or AI artifacts. Pure intentional craft.</p>
          </div>

          {/* Tile 5: Location Card (4 cols) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-400">Studio Base</span>
              <MapPin className="w-4 h-4 text-[#1D4ED8]" />
            </div>
            <div className="my-4">
              <span className="font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">Delhi, IN</span>
              <p className="text-xs font-mono text-neutral-500 mt-1">28.6139° N, 77.2090° E</p>
            </div>
            <p className="text-xs text-neutral-500">Working locally across NCR, collaborating with clients globally.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
