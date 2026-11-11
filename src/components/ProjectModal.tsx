import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#F2E7DA] rounded-3xl shadow-2xl border border-black/10 flex flex-col overflow-hidden my-auto"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-black/10 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F2E7DA] text-neutral-800 border border-black/5 font-mono">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-neutral-500">
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#F2E7DA] hover:bg-[#E8DACB] text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="font-black text-3xl sm:text-5xl text-[#111111] font-heading tracking-tight">
                  {project.title}
                </h2>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#FF5500] hover:bg-[#E64D00] text-white text-sm font-semibold rounded-full transition-colors inline-flex items-center gap-2 shadow-md shrink-0 font-heading self-start sm:self-auto"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 p-4 bg-white rounded-2xl border border-black/5 text-xs">
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono uppercase">Client</span>
                  <span className="font-bold text-[#111111] font-heading">{project.client}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono uppercase">Year</span>
                  <span className="font-bold text-[#111111] font-heading">{project.year}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono uppercase">Category</span>
                  <span className="font-bold text-[#111111] font-heading">{project.categoryLabel}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] font-mono uppercase">Location</span>
                  <span className="font-bold text-[#111111] font-heading">Delhi / Global</span>
                </div>
              </div>
            </div>

            {/* Main Project Hero Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-900 border border-black/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/5">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#FF5500] uppercase mb-2">
                Project Overview
              </h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-sans mb-4">
                {project.summary}
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                {project.aspectDesc}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/5">
                <h3 className="text-xs font-mono font-bold tracking-widest text-[#FF5500] uppercase mb-4">
                  Key Deliverables & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Secondary Project Screenshot */}
            {project.secondaryImage && (
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-900 border border-black/5">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} secondary`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Live Site Direct CTA if exists */}
            {project.liveUrl && (
              <div className="p-6 bg-[#0A0A0A] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FF5500]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-white">Experience Live Deployment</h4>
                    <p className="text-xs font-mono text-neutral-400">{project.liveUrl}</p>
                  </div>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold text-xs tracking-tight inline-flex items-center gap-1.5 transition-colors font-heading"
                >
                  <span>Open Live Website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
