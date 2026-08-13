import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-[#28e98c] border-t border-[#2D3139] w-full py-12 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-headline text-2xl font-bold text-[#28e98c]">
        {PERSONAL_INFO.shortName}
      </div>

      <div className="font-body text-xs text-[#999999] text-center md:text-left order-3 md:order-2">
        © 2024 Descartes Tuyishime. Built with Cybernetic Logic.
      </div>

      <div className="flex gap-6 order-2 md:order-3">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-code-label text-xs text-[#999999] hover:text-[#28e98c] transition-colors duration-200 hover:underline underline-offset-4"
        >
          GitHub
        </a>
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-code-label text-xs text-[#999999] hover:text-[#28e98c] transition-colors duration-200 hover:underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href={PERSONAL_INFO.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="font-code-label text-xs text-[#999999] hover:text-[#28e98c] transition-colors duration-200 hover:underline underline-offset-4"
        >
          Twitter
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="font-code-label text-xs text-[#999999] hover:text-[#28e98c] transition-colors duration-200 hover:underline underline-offset-4"
        >
          Email
        </a>
      </div>
    </footer>
  );
};
