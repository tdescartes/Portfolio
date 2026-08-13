import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Bot, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { synthesizeRagAnswer } from '../data/ragKnowledgeBase';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Hello! I am Descartes' AI Assistant. Ask me anything about his software engineering background, Microsoft & Google internships, Marist College degree, or featured projects like SheltRise, Poruta, and ThermaGuard!",
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What is Descartes' tech stack?",
    "Tell me about his Microsoft internship.",
    "When does he graduate from Marist?",
    "What is his ThermaGuard IoT project?",
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const generateAnswer = (question: string): string => {
    return synthesizeRagAnswer(question);
  };

  const handleSend = async (userText: string) => {
    if (!userText.trim()) return;

    const newMsgs = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMsgs);
    setInputVal('');
    setIsLoading(true);

    try {
      // Send to server API if available or generate response locally
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages([...newMsgs, { sender: 'ai', text: data.reply }]);
      } else {
        const localAnswer = generateAnswer(userText);
        setMessages([...newMsgs, { sender: 'ai', text: localAnswer }]);
      }
    } catch {
      const localAnswer = generateAnswer(userText);
      setMessages([...newMsgs, { sender: 'ai', text: localAnswer }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="bg-[#111317] border border-[#2D3139] rounded-xl max-w-2xl w-full h-[600px] flex flex-col relative shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A1D23] px-6 py-4 border-b border-[#2D3139] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#b9f1ff]/20 text-[#b9f1ff] rounded border border-[#b9f1ff]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline text-base font-bold text-white">Ask Descartes AI Assistant</h2>
              <p className="font-code-label text-xs text-[#28e98c]">Interactive Q&amp;A &amp; Background Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#999999] hover:text-white rounded hover:bg-[#111317] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 font-body text-sm bg-[#0c0e12]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded bg-[#1A1D23] border border-[#2D3139] text-[#b9f1ff] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3.5 rounded-lg max-w-[80%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#28e98c] text-black font-medium'
                    : 'bg-[#1A1D23] text-[#e2e2e8] border border-[#2D3139]'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded bg-[#28e98c] text-black flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded bg-[#1A1D23] border border-[#2D3139] text-[#b9f1ff] flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 animate-bounce" />
              </div>
              <div className="p-3 bg-[#1A1D23] text-[#28e98c] border border-[#2D3139] rounded-lg font-code-label text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28e98c] animate-ping"></span>
                Querying Descartes knowledge base...
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Quick Prompts */}
        <div className="p-3 bg-[#111317] border-t border-[#2D3139] flex flex-wrap gap-2">
          {quickPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p)}
              className="font-code-label text-[11px] bg-[#1A1D23] hover:bg-[#28e98c] hover:text-black text-[#999999] px-2.5 py-1 rounded border border-[#2D3139] transition-colors cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputVal);
          }}
          className="p-4 bg-[#1A1D23] border-t border-[#2D3139] flex gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask anything about Descartes..."
            className="flex-1 bg-[#111317] border border-[#2D3139] rounded px-4 py-2.5 text-white font-body text-sm focus:border-[#b9f1ff] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#28e98c] text-black px-5 py-2.5 rounded font-bold hover:bg-[#59ffa3] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
