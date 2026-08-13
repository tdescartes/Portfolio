import React, { useState } from 'react';
import { Menu, X, Terminal, Code, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onOpenCodeInspector: () => void;
  onOpenAiAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenTerminal,
  onOpenCodeInspector,
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
    <nav className="bg-[#111317]/90 backdrop-blur-md text-[#28e98c] sticky top-0 z-50 border-b border-[#2D3139] w-full px-4 sm:px-8 md:px-16 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full">
        <a 
          href="#" 
          className="font-headline text-xl md:text-2xl font-bold text-[#28e98c] tracking-tighter hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#28e98c] rounded-full animate-pulse"></span>
          {PERSONAL_INFO.name}
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-code-label text-[13px] text-[#999999] hover:text-[#28e98c] transition-colors duration-200 tracking-wide"
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
            className="hidden sm:flex items-center gap-1.5 font-code-label text-[13px] text-[#000000] bg-[#28e98c] px-4 py-2 rounded font-medium hover:bg-[#59ffa3] transition-colors shadow-sm cursor-pointer"
            title="View & Download Resume"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>

          {/* Icon Controls */}
          <div className="flex items-center gap-1.5 text-[#28e98c]">
            <button
              onClick={onOpenAiAssistant}
              className="p-2 rounded hover:bg-[#1A1D23] hover:text-[#59ffa3] transition-colors relative cursor-pointer"
              title="Ask AI Assistant about Descartes"
              aria-label="Open AI Assistant"
            >
              <Sparkles className="w-5 h-5 text-[#b9f1ff]" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b9f1ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b9f1ff]"></span>
              </span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="p-2 rounded hover:bg-[#1A1D23] hover:text-[#59ffa3] transition-colors cursor-pointer"
              title="Open Terminal Shell (Ctrl+K)"
              aria-label="Open Terminal"
            >
              <Terminal className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCodeInspector}
              className="p-2 rounded hover:bg-[#1A1D23] hover:text-[#59ffa3] transition-colors cursor-pointer"
              title="View AST & Source Inspector"
              aria-label="Open Code Inspector"
            >
              <Code className="w-5 h-5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-[#28e98c] hover:bg-[#1A1D23] cursor-pointer"
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
                className="font-code-label text-[14px] text-[#999999] hover:text-[#28e98c] py-2 px-1 transition-colors"
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
              className="w-full flex items-center justify-center gap-2 font-code-label text-[13px] text-[#000000] bg-[#28e98c] py-2.5 rounded font-medium"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 font-code-label text-[13px] text-[#28e98c] border border-[#28e98c] py-2.5 rounded font-medium"
            >
              <Terminal className="w-4 h-4" />
              Launch Terminal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
