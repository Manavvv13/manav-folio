import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { PHOTOGRAPHY_COLLECTION, PhotoItem } from '../data/portfolioData';

export const PhotographySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  // Curate top 4 evocative street & architecture captures
  const selectedPhotos = PHOTOGRAPHY_COLLECTION.slice(0, 4);

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = selectedPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % selectedPhotos.length;
    setActivePhoto(selectedPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = selectedPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + selectedPhotos.length) % selectedPhotos.length;
    setActivePhoto(selectedPhotos[prevIndex]);
  };

  return (
    <section id="photography" className="py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-[#FF5500] uppercase tracking-wider block mb-2">
              Analogue & Digital Lens
            </span>
            <h2 className="font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight">
              Photography <span className="text-neutral-400 font-light text-3xl sm:text-5xl">⌖</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
              A selective documentary lens exploring Delhi's brutalist overpasses, morning river mist, and colonial architectural geometry. Preserving natural light and deep shadows.
            </p>
          </div>
        </div>

        {/* Asymmetric Random Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
          {selectedPhotos.map((photo, idx) => {
            const spanClass =
              idx === 0
                ? 'md:col-span-7'
                : idx === 1
                ? 'md:col-span-5'
                : idx === 2
                ? 'md:col-span-5'
                : 'md:col-span-7';

            const aspectClass = idx === 0 || idx === 3 ? 'aspect-[16/10]' : 'aspect-[4/5]';

            return (
              <motion.div
                key={photo.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActivePhoto(photo)}
                className={`${spanClass} bg-white rounded-3xl p-5 sm:p-6 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-pointer flex flex-col justify-between`}
              >
                <div className={`w-full ${aspectClass} rounded-2xl overflow-hidden bg-neutral-900 mb-4 relative`}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/95 text-black text-xs font-semibold rounded-full shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF5500]" /> Enlarge Frame
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF5500]" />
                      <span>{photo.location}</span>
                    </span>
                    <span className="font-mono text-[11px]">{photo.year}</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-[#111111] group-hover:text-[#FF5500] transition-colors tracking-tight">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-2">
                    {photo.specs}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative max-w-5xl w-full bg-[#121212] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10">
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0A0A0A]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]"></span>
                  <span className="text-sm text-white font-bold tracking-tight">{activePhoto.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-400 hidden sm:inline">{activePhoto.location}</span>
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Photo Display */}
              <div className="w-full aspect-[16/10] bg-black flex items-center justify-center overflow-hidden relative">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-[#0A0A0A] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <p className="text-neutral-300">{activePhoto.description}</p>
                <span className="text-[#FF5500] font-mono font-semibold whitespace-nowrap">{activePhoto.specs}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
