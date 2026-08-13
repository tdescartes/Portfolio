import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, COMPETENCY_CATEGORIES, PROJECTS } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenAi: () => void;
}

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenAi,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'system.init',
      output: (
        <div className="text-[#28e98c] space-y-1">
          <div>Cybernetic OS v4.2.0 [x86_64-descartes-linux-gnu]</div>
          <div>Type <span className="text-[#b9f1ff] font-bold">help</span> to list available commands.</div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs">
            <div className="text-[#28e98c] font-bold">Available Commands:</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">whoami</span> - Developer background &amp; summary</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">skills</span> - Technical competencies breakdown</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">projects</span> - List featured engineering work</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">contact</span> - Get direct email and social links</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">resume</span> - Open formal CV sheet</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">matrix</span> - Toggle cybernetic stream</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">ai</span> - Launch AI Assistant modal</div>
            <div><span className="text-[#b9f1ff] w-24 inline-block font-bold">clear</span> - Wipe terminal output</div>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="text-xs text-[#999999] space-y-2">
            <p className="text-[#28e98c] font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.title})</p>
            <p>{PERSONAL_INFO.bioParagraphs[0]}</p>
            <p>Degree: BS Computer Science @ Marist College (May 2025) | Status: Seeking Full-Time New Grad Software Engineer Roles</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs space-y-2">
            {COMPETENCY_CATEGORIES.map((c) => (
              <div key={c.title}>
                <span className="text-[#28e98c] font-bold">{c.title}: </span>
                <span className="text-[#999999]">{c.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs space-y-2">
            <div className="text-[#28e98c] font-bold">Featured Engineering Work:</div>
            {PROJECTS.map((p) => (
              <div key={p.id} className="pl-2 border-l border-[#2D3139]">
                <span className="text-white font-bold">{p.title}</span> ({p.category})
                <p className="text-[#999999]">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs text-[#999999] space-y-1">
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#28e98c] underline">{PERSONAL_INFO.email}</a></div>
            <div>GitHub: {PERSONAL_INFO.github}</div>
            <div>LinkedIn: {PERSONAL_INFO.linkedin}</div>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        response = <div className="text-[#28e98c]">Opening Resume Modal...</div>;
        break;

      case 'ai':
        onOpenAi();
        response = <div className="text-[#b9f1ff]">Launching Ask Descartes AI Assistant...</div>;
        break;

      case 'matrix':
        response = (
          <div className="text-[#28e98c] font-mono text-xs leading-none opacity-80 overflow-hidden">
            01000100 01100101 01110011 01100011 01100001 01110010 01110100 01100101 01110011<br />
            01010100 01110101 01111001 01101001 01110011 01101000 01101001 01101101 01100101<br />
            [SYSTEM STACK: REASONING ENGINE ONLINE]
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = (
          <div className="text-[#ffb4ab] text-xs">
            Command not recognized: '<span className="font-bold">{cleanCmd}</span>'. Type '<span className="text-[#28e98c]">help</span>' for options.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-[#000000] border-l border-[#2D3139] shadow-2xl flex flex-col font-code-label">
      {/* Top Bar */}
      <div className="bg-[#111317] px-4 py-3 border-b border-[#2D3139] flex justify-between items-center text-xs">
        <div className="flex items-center gap-2 text-[#28e98c]">
          <TerminalIcon className="w-4 h-4" />
          <span className="font-bold">DESCARTES_CLI_SHELL</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAi}
            className="text-[11px] bg-[#1A1D23] hover:bg-[#b9f1ff] hover:text-black text-[#b9f1ff] px-2 py-1 rounded border border-[#2D3139] flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            AI Mode
          </button>
          <button
            onClick={onClose}
            className="p-1 text-[#999999] hover:text-white rounded hover:bg-[#1A1D23] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Terminal Logs Output */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-[#999999]">
              <span className="text-[#28e98c]">$</span>
              <span className="text-white font-bold">{item.command}</span>
            </div>
            <div className="pl-3">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt Footer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="p-3 bg-[#111317] border-t border-[#2D3139] flex items-center gap-2"
      >
        <span className="text-[#28e98c] font-bold text-xs">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command (e.g., help, skills, projects)..."
          className="flex-1 bg-transparent text-white font-code-label text-xs focus:outline-none placeholder-[#999999]"
        />
        <button type="submit" className="text-[#28e98c] hover:text-[#59ffa3] cursor-pointer">
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
