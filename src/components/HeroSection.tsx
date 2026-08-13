import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Maximize2, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onOpenAiAssistant: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal, onOpenAiAssistant }) => {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  return (
    <section className="px-4 sm:px-8 md:px-16 py-16 md:py-24 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content Column */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1D23] border border-[#2D3139] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#28e98c] animate-pulse"></span>
          <span className="font-code-label text-[12px] text-[#28e98c]">Actively Seeking New Grad Software Engineer Roles</span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
          Hi! I am Descartes,<br />
          <span className="text-[#28e98c]">Seeking New Grad Software Engineer Roles</span><br />
          <span className="text-xl sm:text-2xl text-[#e2e2e8]/80 font-semibold">Ex-Microsoft &amp; Google Intern</span>
        </h1>

        <p className="font-body text-base md:text-lg mb-8 max-w-xl text-[#999999] leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Key Metrics */}
        <div className="flex items-center gap-6 sm:gap-8 mb-8 pb-4 border-b border-[#2D3139]/60">
          <div>
            <div className="font-headline text-2xl sm:text-3xl font-extrabold text-[#28e98c]">
              {PERSONAL_INFO.projectCount}
            </div>
            <div className="font-code-label text-[11px] sm:text-[12px] uppercase tracking-wider text-[#999999]">
              Projects Built
            </div>
          </div>
          <div className="w-px h-10 bg-[#2D3139]"></div>
          <div>
            <div className="font-headline text-2xl sm:text-3xl font-extrabold text-[#b9f1ff]">
              Ex-Microsoft &amp; Google
            </div>
            <div className="font-code-label text-[11px] sm:text-[12px] uppercase tracking-wider text-[#999999]">
              Internship Background
            </div>
          </div>
          <div className="w-px h-10 bg-[#2D3139]"></div>
          <div>
            <div className="font-headline text-2xl sm:text-3xl font-extrabold text-white">
              May 2025
            </div>
            <div className="font-code-label text-[11px] sm:text-[12px] uppercase tracking-wider text-[#999999]">
              Marist CS
            </div>
          </div>
        </div>

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="font-code-label text-[13px] bg-[#28e98c] text-[#000000] px-6 py-3 rounded font-medium hover:bg-[#59ffa3] transition-colors inline-flex items-center gap-2 group shadow-lg"
          >
            View Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="font-code-label text-[13px] border border-[#28e98c] text-[#28e98c] px-6 py-3 rounded font-medium hover:bg-[#28e98c]/10 transition-colors inline-block"
          >
            Contact Me
          </a>

          <button
            onClick={onOpenAiAssistant}
            className="font-code-label text-[13px] border border-[#2D3139] bg-[#1A1D23] text-[#b9f1ff] px-4 py-3 rounded font-medium hover:border-[#b9f1ff] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#b9f1ff]" />
            Ask AI
          </button>
        </div>
      </div>

      {/* Right Column Portrait */}
      <div className="relative flex justify-center">
        <div className="relative z-10 w-full max-w-md">
          <div className="relative rounded-xl overflow-hidden border border-[#2D3139] bg-[#1A1D23] shadow-2xl">
            <img
              src={PERSONAL_INFO.heroImage}
              alt="Descartes Tuyishime"
              className="w-full h-auto object-contain cursor-pointer block"
              onClick={() => setImageModalOpen(true)}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/portrait.png';
              }}
            />
          </div>

          {/* Badge banner positioned BELOW the image */}
          <div className="mt-3 bg-[#1A1D23] p-3.5 rounded-lg border border-[#2D3139] flex justify-between items-center shadow-lg">
            <div>
              <p className="font-headline text-sm font-bold text-white">{PERSONAL_INFO.name}</p>
              <p className="font-code-label text-[11px] text-[#28e98c]">Software Engineer &amp; AI Developer</p>
            </div>
            <button
              onClick={onOpenTerminal}
              className="font-code-label text-[11px] bg-[#111317] hover:bg-[#28e98c] hover:text-black text-[#28e98c] border border-[#2D3139] px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Open Command Palette (Cmd+K)"
            >
              <Terminal className="w-3.5 h-3.5" />
              Cmd+K
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#000000]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setImageModalOpen(false)}
        >
          <div className="relative max-w-2xl w-full bg-[#1A1D23] rounded-lg border border-[#2D3139] p-2 overflow-hidden shadow-2xl">
            <img
              src={PERSONAL_INFO.heroImage}
              alt="Descartes Tuyishime Portrait"
              className="w-full h-auto rounded max-h-[85vh] object-contain"
            />
            <div className="p-4 flex justify-between items-center bg-[#111317]">
              <div>
                <h3 className="font-headline text-lg font-bold text-[#28e98c]">{PERSONAL_INFO.name}</h3>
                <p className="font-code-label text-xs text-[#999999]">Software Engineer &amp; AI Developer</p>
              </div>
              <button
                onClick={() => setImageModalOpen(false)}
                className="font-code-label text-xs bg-[#28e98c] text-black px-3 py-1.5 rounded font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
