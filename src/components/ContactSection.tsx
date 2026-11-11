import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Mail, Phone, MessageSquare, MapPin, Clock, ArrowUp, Send } from 'lucide-react';
import { MANAV_PROFILE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(MANAV_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(MANAV_PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#FAF7F2] text-[#111111] pt-32 pb-16 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Massive Editorial Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFEAE2] text-xs font-semibold text-neutral-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]"></span>
            <span>{MANAV_PROFILE.availability}</span>
          </div>

          <h2 className="font-extrabold text-5xl sm:text-7xl lg:text-[5.5rem] text-[#111111] tracking-tight leading-[1.04] max-w-4xl">
            Have an ambitious project? <br />
            <span className="text-[#FF5500] underline decoration-[#FF5500]/25 decoration-4 underline-offset-8">
              Let's connect.
            </span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg max-w-xl mt-8 leading-relaxed font-normal">
            Whether you need a high-conversion frontend landing page, an enduring brand identity system, editorial graphic art, or architectural photography in Delhi—reach out directly. No forms, pure direct access.
          </p>
        </div>

        {/* Contact Cards Grid (Zero forms) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 mb-24">

          {/* Card 1: Direct Email (6 cols) */}
          <div className="md:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Direct Inbox</span>
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#FF5500]" />
                </div>
              </div>

              <a
                href={`mailto:${MANAV_PROFILE.email}`}
                className="font-extrabold text-2xl sm:text-3xl text-[#111111] hover:text-[#FF5500] transition-colors break-all block mb-4 tracking-tight"
              >
                {MANAV_PROFILE.email}
              </a>

              <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                Send your brief, project vision, or inquiries directly to my personal inbox. Typical response time is within 24 hours.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-black/[0.05] flex items-center gap-3">
              <a
                href={`mailto:${MANAV_PROFILE.email}`}
                className="px-6 py-2.5 bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs sm:text-sm font-semibold rounded-full transition-all inline-flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#EAE4DC] text-neutral-800 text-xs sm:text-sm font-semibold rounded-full border border-black/[0.05] transition-colors inline-flex items-center gap-1.5"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-neutral-500" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp (6 cols) */}
          <div className="md:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Direct Phone & WhatsApp</span>
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              <a
                href={`tel:${MANAV_PROFILE.phone}`}
                className="font-extrabold text-2xl sm:text-3xl text-[#111111] hover:text-[#FF5500] transition-colors block mb-4 tracking-tight"
              >
                {MANAV_PROFILE.phoneDisplay}
              </a>

              <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                Available for direct phone calls, quick audio consults, and messaging over WhatsApp during IST working hours.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-black/[0.05] flex items-center gap-3">
              <a
                href={`https://wa.me/917303803216?text=${encodeURIComponent('Hi Manav, I saw your portfolio and would like to discuss a project.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-[#047857] hover:bg-[#065F46] text-white text-xs sm:text-sm font-semibold rounded-full transition-all inline-flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Message</span>
              </a>

              <button
                onClick={copyPhone}
                className="px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#EAE4DC] text-neutral-800 text-xs sm:text-sm font-semibold rounded-full border border-black/[0.05] transition-colors inline-flex items-center gap-1.5"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-neutral-500" />}
                <span>{copiedPhone ? 'Copied' : 'Copy Number'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: Location (6 cols) */}
          <div className="md:col-span-6 bg-[#F4EFEA] rounded-3xl p-7 sm:p-8 border border-black/[0.04] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Studio Base</span>
              <MapPin className="w-4 h-4 text-[#FF5500]" />
            </div>

            <div>
              <h3 className="font-extrabold text-2xl text-[#111111] tracking-tight">Delhi, India</h3>
              <p className="text-xs font-mono text-neutral-500 mt-1">{MANAV_PROFILE.coordinates}</p>
            </div>

            <p className="text-xs text-neutral-600 mt-4 leading-relaxed font-normal">
              Based in Delhi NCR, available for local client meetings across Delhi/NCR and remote collaborations globally.
            </p>
          </div>

          {/* Card 4: Digital Channels (6 cols) */}
          <div className="md:col-span-6 bg-[#F4EFEA] rounded-3xl p-7 sm:p-8 border border-black/[0.04] flex flex-col justify-between">
            <span className="text-xs font-semibold text-neutral-500 block mb-4 uppercase tracking-wider">Digital Spaces</span>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-800 transition-colors border border-black/[0.03] shadow-sm"
              >
                <span className="font-semibold">Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-800 transition-colors border border-black/[0.03] shadow-sm"
              >
                <span className="font-semibold">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-800 transition-colors border border-black/[0.03] shadow-sm"
              >
                <span className="font-semibold">LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-800 transition-colors border border-black/[0.03] shadow-sm"
              >
                <span className="font-semibold">Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <span>© 2026 Manav Mehta. Visual Designer, Delhi, India.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-600 font-medium">manavmehta0813@gmail.com · +91 73038 03216</span>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-[#EFEAE2] hover:bg-[#E5DFD5] text-neutral-800 flex items-center gap-1.5 transition-colors font-medium"
              title="Scroll to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
