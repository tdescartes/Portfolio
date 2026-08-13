import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Bot, User } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, COMPETENCY_CATEGORIES, PROJECTS } from '../data/portfolioData';

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
      text: "Hello! I am Descartes' AI Assistant. Ask me anything about his software engineering background, Microsoft internship, Marist College coursework, or featured projects like ThermaGuard and xCompiler!",
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
    const q = question.toLowerCase();

    if (q.includes('stack') || q.includes('skill') || q.includes('language')) {
      return `Descartes is proficient in Python, TypeScript/JavaScript, C++/C, Java, and SQL. His core framework stack includes React/Next.js, Node.js/Express, Django/FastAPI, PyTorch, TensorFlow, AWS/Azure, Docker, and Linux.`;
    }

    if (q.includes('microsoft') || q.includes('intern') || q.includes('experience')) {
      const ms = EXPERIENCES[0];
      return `At Microsoft (May 2022 - Aug 2022), Descartes served as a Software Engineer Intern. He engineered highly scalable backend services for enterprise cloud infrastructure using C#, .NET, and Azure, optimizing data processing pipelines to reduce latency by 30%.`;
    }

    if (q.includes('marist') || q.includes('graduate') || q.includes('degree') || q.includes('education')) {
      return `Descartes is pursuing his Bachelor of Science in Computer Science at Marist College, with an expected graduation date of May 2025. His relevant coursework includes Data Structures & Algorithms, Operating Systems, Artificial Intelligence, Database Management, and Software Engineering.`;
    }

    if (q.includes('thermaguard') || q.includes('iot') || q.includes('hardware')) {
      const tg = PROJECTS.find((p) => p.id === 'thermaguard')!;
      return `${tg.title} is an advanced environmental monitoring system built with ESP32 microcontrollers and C++. It features real-time telemetry over MQTT, predictive anomaly detection with custom Kalman filtering, and a reactive dashboard for industrial applications.`;
    }

    if (q.includes('poruta') || q.includes('ai') || q.includes('customs')) {
      return `Poruta is an intelligent customs declaration platform leveraging NLP (Python, Transformers, PyTorch) to automate document classification and risk assessment for international shipping manifests with over 94.8% first-pass accuracy.`;
    }

    if (q.includes('xcompiler') || q.includes('compiler') || q.includes('parser')) {
      return `xCompiler is a custom lexical analyzer and parser built entirely in TypeScript. It parses a functional programming language, generating abstract syntax trees (AST) and intermediate code representation at over 50,000 tokens/sec.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire')) {
      return `You can reach Descartes directly at ${PERSONAL_INFO.email}. He is actively open to full-time software engineering and AI development roles!`;
    }

    return `${PERSONAL_INFO.name} is a Software Engineer & AI Developer pursuing his BS in Computer Science at Marist College (May 2025). He has interned at Microsoft, created 10+ projects across IoT, AI/ML, and Systems Programming, and specializes in high-performance backends. Feel free to ask specific questions about his work!`;
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
