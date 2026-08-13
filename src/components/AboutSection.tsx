import React, { useState } from 'react';
import { COMPETENCY_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Network, Cpu, Cloud, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onSelectSkillFilter?: (skill: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectSkillFilter }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#28e98c]" />;
      case 'hub':
        return <Network className="w-5 h-5 text-[#28e98c]" />;
      case 'memory':
        return <Cpu className="w-5 h-5 text-[#28e98c]" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-[#28e98c]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#28e98c]" />;
    }
  };

  return (
    <section id="about" className="bg-[#1A1D23]/30 py-12 md:py-16 border-y border-[#2D3139]">
      <div className="px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
        <h2 className="font-headline text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#28e98c] flex items-center gap-3">
          <span className="text-[#2D3139] font-code-label text-lg">01.</span> About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Bio text */}
          <div className="font-body text-sm md:text-base space-y-4 text-[#999999] leading-relaxed">
            {PERSONAL_INFO.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-[#e2e2e8]/90">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-[#2D3139] flex flex-wrap gap-2.5 font-code-label text-xs">
              <span className="bg-[#1A1D23] px-3 py-1.5 rounded border border-[#2D3139] text-[#28e98c] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> BS Computer Science ('25)
              </span>
              <span className="bg-[#1A1D23] px-3 py-1.5 rounded border border-[#2D3139] text-[#e2e2e8] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#28e98c]" /> Ex-Microsoft &amp; Google Intern
              </span>
              <span className="bg-[#1A1D23] px-3 py-1.5 rounded border border-[#2D3139] text-[#e2e2e8] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#28e98c]" /> Open to SWE New Grad Roles
              </span>
            </div>
          </div>

          {/* Right Competencies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPETENCY_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-[#1A1D23] p-4 border border-[#2D3139] rounded-lg glow-effect transition-all duration-300"
              >
                <h3 className="font-code-label text-xs text-[#28e98c] mb-3 flex items-center gap-2 font-bold uppercase tracking-wider">
                  {getCategoryIcon(cat.icon)}
                  {cat.title}
                </h3>

                <ul className="space-y-1.5 font-body text-xs text-[#999999]">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => onSelectSkillFilter?.(skill)}
                      title={`Click to filter projects with ${skill}`}
                    >
                      <span className="text-[#28e98c] font-code-label text-[10px]">▹</span>
                      <span className={hoveredSkill === skill ? 'text-[#28e98c] font-medium' : ''}>
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
