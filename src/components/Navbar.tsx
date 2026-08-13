import React, { useState } from 'react';
import { Menu, X, Terminal, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onOpenAiAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenTerminal,
  onOpenAiAssistant,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-[#111317]/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-[#2D3139] w-full px-4 sm:px-8 md:px-16 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full">
        <a 
          href="#" 
          className="font-headline text-xl md:text-2xl font-bold text-white tracking-tighter hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#10b981] rounded-full animate-pulse"></span>
          {PERSONAL_INFO.name}
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-code-label text-[13px] text-[#999999] hover:text-[#10b981] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 font-code-label text-[13px] text-[#000000] bg-[#10b981] px-4 py-2 rounded font-bold hover:bg-[#34d399] transition-colors shadow-sm cursor-pointer"
            title="View & Download Resume"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>

          {/* Icon Controls */}
          <div className="flex items-center gap-1.5 text-[#10b981]">
            <button
              onClick={onOpenAiAssistant}
              className="p-2 rounded hover:bg-[#1A1D23] hover:text-[#34d399] transition-colors relative cursor-pointer"
              title="Ask AI Assistant about Descartes"
              aria-label="Open AI Assistant"
            >
              <Sparkles className="w-5 h-5 text-[#b9f1ff]" />
            </button>

            <button
              onClick={onOpenTerminal}
              className="p-2 rounded hover:bg-[#1A1D23] hover:text-[#34d399] transition-colors cursor-pointer"
              title="Command Palette (Cmd+K)"
              aria-label="Open Command Palette"
            >
              <Terminal className="w-5 h-5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-[#10b981] hover:bg-[#1A1D23] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-[#2D3139] mt-3 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-code-label text-[14px] text-[#999999] hover:text-[#10b981] py-2 px-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 font-code-label text-[13px] text-[#000000] bg-[#10b981] py-2.5 rounded font-bold hover:bg-[#34d399]"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 font-code-label text-[13px] text-[#10b981] border border-[#10b981] py-2.5 rounded font-medium"
            >
              <Terminal className="w-4 h-4" />
              Command Palette
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
