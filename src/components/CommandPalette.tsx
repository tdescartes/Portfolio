import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, Sparkles, Folder, User, Briefcase, Mail, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenAi: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Actions' | 'Social';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenAi,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: CommandItem[] = [
    {
      id: 'resume',
      category: 'Actions',
      title: 'View & Download Resume PDF',
      subtitle: 'Open official resume document',
      icon: <FileText className="w-4 h-4 text-[#10b981]" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'ai',
      category: 'Actions',
      title: 'Ask AI Assistant',
      subtitle: 'Query background, tech stack, and experience',
      icon: <Sparkles className="w-4 h-4 text-[#b9f1ff]" />,
      action: () => {
        onClose();
        onOpenAi();
      },
    },
    {
      id: 'about',
      category: 'Navigation',
      title: 'Jump to About Section',
      subtitle: 'Background summary & competencies',
      icon: <User className="w-4 h-4 text-[#10b981]" />,
      action: () => {
        onClose();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'experience',
      category: 'Navigation',
      title: 'Jump to Experience & Education',
      subtitle: 'Work history, Marist College & certifications',
      icon: <Briefcase className="w-4 h-4 text-[#10b981]" />,
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'projects',
      category: 'Navigation',
      title: 'Jump to Featured Work',
      subtitle: '10+ engineering projects & live demos',
      icon: <Folder className="w-4 h-4 text-[#10b981]" />,
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'contact',
      category: 'Navigation',
      title: 'Jump to Contact Section',
      subtitle: 'Get in touch for SWE opportunities',
      icon: <Mail className="w-4 h-4 text-[#10b981]" />,
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'github',
      category: 'Social',
      title: 'Open GitHub Profile',
      subtitle: PERSONAL_INFO.github,
      icon: <Github className="w-4 h-4 text-[#999999]" />,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'linkedin',
      category: 'Social',
      title: 'Open LinkedIn Profile',
      subtitle: PERSONAL_INFO.linkedin,
      icon: <Linkedin className="w-4 h-4 text-[#999999]" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer');
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    `${item.title} ${item.subtitle} ${item.category}`
      .toLowerCase()
      .includes(query.toLowerCase().trim())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#111317] border border-[#2D3139] rounded-xl max-w-xl w-full overflow-hidden flex flex-col shadow-2xl font-body relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="bg-[#1A1D23] px-4 py-3 border-b border-[#2D3139] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#28e98c] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g., resume, projects, github)..."
            className="flex-1 bg-transparent text-white font-code-label text-xs sm:text-sm focus:outline-none placeholder-[#999999]"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-[#999999] hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="font-code-label text-[10px] bg-[#111317] text-[#999999] px-2 py-1 rounded border border-[#2D3139]">
              ESC
            </kbd>
          )}
        </div>

        {/* Command Items List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors text-left cursor-pointer ${
                    isSelected ? 'bg-[#1A1D23] border border-[#10b981]/40 text-white' : 'text-[#e2e2e8] hover:bg-[#1A1D23]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-[#111317] border border-[#2D3139] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-white flex items-center gap-2">
                        {item.title}
                        <span className="font-code-label text-[10px] text-[#999999] font-normal uppercase tracking-wider">
                          [{item.category}]
                        </span>
                      </div>
                      <div className="font-code-label text-[11px] text-[#999999]">{item.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-[#10b981] transition-transform ${isSelected ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs font-code-label text-[#999999]">
              No matching commands found for &quot;<span className="text-white">{query}</span>&quot;
            </div>
          )}
        </div>

        {/* Command Palette Footer */}
        <div className="bg-[#1A1D23] px-4 py-2 border-t border-[#2D3139] flex justify-between items-center text-[11px] font-code-label text-[#999999]">
          <div className="flex items-center gap-3">
            <span><kbd className="bg-[#111317] px-1.5 py-0.5 rounded border border-[#2D3139] text-white">↑↓</kbd> Navigate</span>
            <span><kbd className="bg-[#111317] px-1.5 py-0.5 rounded border border-[#2D3139] text-white">↵</kbd> Select</span>
          </div>
          <span>Descartes Command Palette</span>
        </div>
      </div>
    </div>
  );
};
