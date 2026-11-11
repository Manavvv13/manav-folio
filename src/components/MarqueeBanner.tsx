import React from 'react';

interface MarqueeBannerProps {
  text?: string;
  theme?: 'dark' | 'light';
  reverse?: boolean;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  text = 'Manav Mehta — Frontend Landing Pages — Graphic Design — Brand Identity — 35mm Street Lens — Delhi, India — ',
  theme = 'light',
  reverse = false,
}) => {
  const styles =
    theme === 'dark'
      ? 'bg-[#111111] text-[#FAF8F5] border-y border-black/[0.1]'
      : 'bg-[#F3F0E8] text-[#111111] border-y border-black/[0.05]';

  return (
    <div className={`w-full overflow-hidden py-3 select-none ${styles}`}>
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-[marquee_38s_linear_infinite_reverse]' : 'animate-marquee'}`}>
        <div className="flex items-center gap-8 text-xs sm:text-sm font-bold uppercase tracking-wider px-4">
          <span>{text}</span>
          <span className="opacity-40">·</span>
          <span>{text}</span>
          <span className="opacity-40">·</span>
        </div>
        <div className="flex items-center gap-8 text-xs sm:text-sm font-bold uppercase tracking-wider px-4">
          <span>{text}</span>
          <span className="opacity-40">·</span>
          <span>{text}</span>
          <span className="opacity-40">·</span>
        </div>
      </div>
    </div>
  );
};
