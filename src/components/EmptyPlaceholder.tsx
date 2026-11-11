import React from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

interface EmptyPlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectDesc?: string;
  theme?: 'offwhite' | 'dark' | 'emerald' | 'blue';
  className?: string;
  icon?: React.ReactNode;
  showGuides?: boolean;
  imageUrl?: string;
}

export const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = ({
  label = 'Design Asset Placeholder',
  sublabel = 'Insert High-Res Mockup / Design File',
  aspectDesc = 'Aspect 16:10',
  theme = 'offwhite',
  className = '',
  icon,
  showGuides = true,
  imageUrl,
}) => {
  if (imageUrl) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <img src={imageUrl} alt={label} className="w-full h-full object-cover" />
      </div>
    );
  }

  const themeStyles = {
    offwhite: {
      bg: 'bg-[#F2EFE9]',
      border: 'border-[#18181B]',
      text: 'text-[#18181B]',
      sub: 'text-neutral-500',
      badge: 'bg-[#18181B] text-[#F8F7F4]',
      grid: 'rgba(0, 0, 0, 0.05)',
      bracket: 'text-neutral-600',
      accentDot: 'bg-[#1D4ED8]',
    },
    dark: {
      bg: 'bg-[#121214]',
      border: 'border-[#27272A]',
      text: 'text-[#F8F7F4]',
      sub: 'text-neutral-400',
      badge: 'bg-white text-black font-semibold',
      grid: 'rgba(255, 255, 255, 0.04)',
      bracket: 'text-neutral-500',
      accentDot: 'bg-[#22C55E]',
    },
    emerald: {
      bg: 'bg-[#064E3B]',
      border: 'border-[#033024]',
      text: 'text-emerald-50',
      sub: 'text-emerald-200/70',
      badge: 'bg-emerald-400 text-emerald-950 font-bold',
      grid: 'rgba(255, 255, 255, 0.06)',
      bracket: 'text-emerald-300/60',
      accentDot: 'bg-emerald-300',
    },
    blue: {
      bg: 'bg-[#1E3A8A]',
      border: 'border-[#172554]',
      text: 'text-blue-50',
      sub: 'text-blue-200/70',
      badge: 'bg-blue-300 text-blue-950 font-bold',
      grid: 'rgba(255, 255, 255, 0.06)',
      bracket: 'text-blue-300/60',
      accentDot: 'bg-blue-400',
    },
  }[theme];

  return (
    <div
      className={`relative w-full h-full min-h-[170px] flex flex-col items-center justify-center p-6 border ${themeStyles.bg} ${themeStyles.border} select-none overflow-hidden group transition-all duration-300 ${className}`}
      style={{
        backgroundImage: `radial-gradient(${themeStyles.grid} 1.5px, transparent 1.5px)`,
        backgroundSize: '20px 20px',
      }}
    >
      {/* Corner Registration Brackets */}
      {showGuides && (
        <>
          <span className={`absolute top-2.5 left-2.5 text-[11px] font-mono leading-none ${themeStyles.bracket}`}>
            ┌
          </span>
          <span className={`absolute top-2.5 right-2.5 text-[11px] font-mono leading-none ${themeStyles.bracket}`}>
            ┐
          </span>
          <span className={`absolute bottom-2.5 left-2.5 text-[11px] font-mono leading-none ${themeStyles.bracket}`}>
            └
          </span>
          <span className={`absolute bottom-2.5 right-2.5 text-[11px] font-mono leading-none ${themeStyles.bracket}`}>
            ┘
          </span>

          {/* Center Subtle Grid Ticks */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-25">
            <div className="w-8 h-[1px] bg-current"></div>
            <div className="h-8 w-[1px] bg-current"></div>
          </div>
        </>
      )}

      {/* Top Meta Tag */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
        <span className={`w-1.5 h-1.5 rounded-full ${themeStyles.accentDot}`}></span>
        <span className="text-[10px] font-semibold opacity-80">
          Asset Canvas
        </span>
      </div>

      {aspectDesc && (
        <div className="absolute top-3 right-3 z-10">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${themeStyles.badge}`}>
            {aspectDesc}
          </span>
        </div>
      )}

      {/* Central Content */}
      <div className="flex flex-col items-center text-center max-w-[85%] z-10 transition-transform duration-300 group-hover:scale-102">
        <div className="w-11 h-11 rounded-full border border-current flex items-center justify-center mb-2.5 opacity-80 group-hover:opacity-100 transition-all duration-300">
          {icon || <ImageIcon className="w-5 h-5 stroke-[1.5]" />}
        </div>

        <p className={`text-xs font-bold mb-0.5 ${themeStyles.text}`}>
          [ {label} ]
        </p>
        <p className={`text-[11px] ${themeStyles.sub} mb-2 leading-relaxed`}>
          {sublabel}
        </p>

        <span className="inline-flex items-center gap-1 text-[10px] opacity-60 border-t border-current/20 pt-1 font-medium">
          <Maximize2 className="w-2.5 h-2.5" /> Ready for Manav's asset
        </span>
      </div>

      {/* Bottom Technical Bar */}
      <div className="absolute bottom-2.5 inset-x-4 flex justify-between items-center text-[9px] font-mono opacity-40 pointer-events-none">
        <span>Raw / Vector / Raster</span>
        <span>Delhi Studio MM-2026</span>
      </div>
    </div>
  );
};
