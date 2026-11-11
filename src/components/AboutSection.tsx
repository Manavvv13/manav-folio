import React from 'react';
import { motion } from 'framer-motion';
import { MANAV_PROFILE } from '../data/portfolioData';
import { MapPin, Sparkles, Compass, Lightbulb, Eye } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const philosophies = [
    {
      title: 'Clarity Over Clutter.',
      description: 'The strongest ideas communicate clearly without trying to say everything at once.',
      icon: Eye,
    },
    {
      title: 'Purpose Over Decoration.',
      description: 'Every creative decision should have a reason, contributing to the bigger idea rather than distracting from it.',
      icon: Compass,
    },
    {
      title: 'Curiosity Over Assumptions.',
      description: 'Better ideas begin with asking questions, exploring perspectives, and understanding the problem before finding a solution.',
      icon: Lightbulb,
    },
  ];

  const approaches = [
    {
      step: '01',
      title: 'Design.',
      text: 'Good design begins with understanding the idea, the audience, and the human purpose behind it.',
    },
    {
      step: '02',
      title: 'Defined.',
      text: 'Combining visual strategy with clean frontend code to shape thoughtful and purposeful digital architecture.',
    },
    {
      step: '03',
      title: 'Delivered.',
      text: 'Turning vision into reality with obsession over performance, typography, and microscopic details.',
    },
  ];

  return (
    <section id="about" data-bg="#FFFFFF" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#FF5500] font-semibold block mb-2">
            Background & Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] font-heading tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-xl sm:text-2xl text-[#4A443E] font-heading max-w-3xl leading-relaxed">
            Hello, I’m <span className="font-bold text-[#111111]">{MANAV_PROFILE.name}</span>. A creative visual designer and frontend crafter rooted in New Delhi, India.
          </p>
        </motion.div>

        {/* 2-Column Editorial Grid: Portrait & Core Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">
          
          {/* Left Column: Stylized Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-[36px] overflow-hidden bg-[#E8DACB] shadow-xl border border-black/5 aspect-[4/5] relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85"
                alt="Manav Mehta"
                className="w-full h-full object-cover filter grayscale contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono uppercase text-white/70">Creative Visual Designer</p>
                  <p className="text-lg font-bold font-heading">Delhi, India</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>28.6139° N</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & What Matters to Me (Exact prathamfolio about section) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-semibold block mb-2">
                Core Philosophy
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-[#111111] mb-6">
                What Matters to Me.
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {philosophies.map((phil, i) => {
                const Icon = phil.icon;
                return (
                  <motion.div
                    key={phil.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-3xl p-7 shadow-xs border border-black/5 flex items-start gap-5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F2E7DA] text-[#FF5500] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-heading text-[#111111] mb-1.5">
                        {phil.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#4A443E] leading-relaxed">
                        {phil.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Always Exploring pill */}
            <div className="p-6 rounded-2xl bg-[#0A0A0A] text-white flex items-center justify-between shadow-lg">
              <span className="font-heading font-bold text-base sm:text-lg">
                Always Exploring. Always Evolving.
              </span>
              <Sparkles className="w-5 h-5 text-[#FF5500]" />
            </div>
          </div>

        </div>

        {/* My Approach: Design. Defined. Delivered. (Matching prathamfolio) */}
        <div className="pt-16 border-t border-black/10">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-semibold block mb-2">
              Work Methodology
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-[#111111]">
              My Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((app, idx) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-[28px] p-8 shadow-xs border border-black/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF5500] block mb-4">
                    PHASE {app.step}
                  </span>
                  <h4 className="text-3xl font-black font-heading text-[#111111] mb-3">
                    {app.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#4A443E] leading-relaxed">
                    {app.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
