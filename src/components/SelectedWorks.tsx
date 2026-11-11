import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, Globe } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface SelectedWorksProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'landing', label: 'Live Frontend' },
    { id: 'graphics', label: 'Graphic Design' },
    { id: 'logos', label: 'Brand Identity' },
  ];

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold text-[#FF5500] uppercase tracking-wider block mb-2">
              Featured Portfolio // 2024 — 2026
            </span>
            <h2 className="font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              Selected Projects <span className="text-neutral-400 font-light text-3xl sm:text-5xl">⌝</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:text-black border border-black/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Random Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Asymmetric column calculation for visual rhythm
              const colSpan =
                idx === 0
                  ? 'md:col-span-8'
                  : idx === 1
                  ? 'md:col-span-4'
                  : idx === 2
                  ? 'md:col-span-5'
                  : idx === 3
                  ? 'md:col-span-7'
                  : 'md:col-span-6';

              const isWide = idx === 0 || idx === 3;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpan} bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
                >
                  {/* Top Bar: Category Pill & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] text-neutral-700 border border-black/[0.04]">
                        {project.categoryLabel}
                      </span>
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FF5500] bg-orange-50 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]"></span>
                          LIVE PRODUCTION
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono text-neutral-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Image Frame */}
                  {project.image && (
                    <div className={`w-full ${isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'} rounded-2xl overflow-hidden bg-neutral-900 mb-5 relative group/img`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/img:scale-104 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                      {project.liveUrl && (
                        <div className="absolute top-3 right-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-3.5 py-1.5 bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-semibold rounded-full shadow-md flex items-center gap-1 transition-all active:scale-95"
                          >
                            <span>Visit Site</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card Content */}
                  <div>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111111] group-hover:text-[#FF5500] transition-colors tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>

                    {/* Bottom Meta */}
                    <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs">
                      <span className="text-neutral-500 font-medium truncate max-w-[65%]">
                        Client: <strong className="text-neutral-800">{project.client}</strong>
                      </span>

                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-3 py-1 bg-[#111111] hover:bg-[#FF5500] text-white rounded-full font-semibold text-[11px] inline-flex items-center gap-1 transition-colors"
                          >
                            <span>Live ↗</span>
                          </a>
                        )}

                        <div className="w-8 h-8 rounded-full bg-[#FAF7F2] group-hover:bg-[#FF5500] group-hover:text-white transition-all flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
