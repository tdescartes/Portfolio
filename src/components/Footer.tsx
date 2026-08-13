import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0c0f] border-t border-[#2D3139] mt-auto">
      <div className="max-w-[1200px] mx-auto py-8 sm:py-12 px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 text-[#e2e2e8]">
        <div className="font-headline text-2xl font-bold text-white">
          {PERSONAL_INFO.shortName}
        </div>

        <div className="font-body text-xs text-[#999999] text-center md:text-left order-3 md:order-2">
          © 2026 Descartes Tuyishime.
        </div>

        <div className="flex gap-6 order-2 md:order-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code-label text-xs text-[#999999] hover:text-[#10b981] transition-colors duration-200 hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code-label text-xs text-[#999999] hover:text-[#10b981] transition-colors duration-200 hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code-label text-xs text-[#999999] hover:text-[#10b981] transition-colors duration-200 hover:underline underline-offset-4"
          >
            Twitter
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="font-code-label text-xs text-[#999999] hover:text-[#10b981] transition-colors duration-200 hover:underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
