import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, COMPETENCY_CATEGORIES, CERTIFICATIONS, VOLUNTEER_EXPERIENCES } from '../data/portfolioData';
import { X, Printer, Copy, Check, FileText, Award, HeartHandshake } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Website: ${PERSONAL_INFO.website} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

EDUCATION
${EDUCATION.institution} - ${EDUCATION.degree}
${EDUCATION.expectedGraduation}
${EDUCATION.details || ''}
Relevant Coursework: ${EDUCATION.courses.join(', ')}

EXPERIENCE
${EXPERIENCES.map(
  (e) => `${e.role} @ ${e.company}${e.location ? ` (${e.location})` : ''} | ${e.period}
- ${e.description}
${e.bullets ? e.bullets.map((b) => `  * ${b}`).join('\n') : ''}
  Technologies: ${e.technologies.join(', ')}`
).join('\n\n')}

CERTIFICATIONS
${CERTIFICATIONS.map((c) => `- ${c.title} (${c.issuer} - ${c.date})`).join('\n')}

TECHNICAL SKILLS
${COMPETENCY_CATEGORIES.map((c) => `${c.title}: ${c.skills.join(', ')}`).join('\n')}

VOLUNTEER & COMMUNITY LEADERSHIP
${VOLUNTEER_EXPERIENCES.map((v) => `${v.role} @ ${v.organization} (${v.period})\n${v.bullets?.map((b) => `  * ${b}`).join('\n') || ''}`).join('\n\n')}
    `;
    navigator.clipboard.writeText(resumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="bg-[#111317] border border-[#2D3139] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 bg-[#111317]/95 backdrop-blur border-b border-[#2D3139] px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#28e98c]/20 text-[#28e98c] rounded border border-[#28e98c]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline text-lg font-bold text-white">Curriculum Vitae</h2>
              <p className="font-code-label text-xs text-[#999999]">{PERSONAL_INFO.name} - Official Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="font-code-label text-xs bg-[#1A1D23] text-[#28e98c] border border-[#2D3139] px-3 py-2 rounded hover:border-[#28e98c] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="font-code-label text-xs bg-[#28e98c] text-black px-4 py-2 rounded font-bold hover:bg-[#59ffa3] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#999999] hover:text-white rounded bg-[#1A1D23] border border-[#2D3139] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 md:p-12 space-y-8 text-white font-body bg-[#111317]">
          {/* Header */}
          <div className="border-b border-[#2D3139] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="font-headline text-3xl font-extrabold text-[#28e98c]">{PERSONAL_INFO.name}</h1>
              <p className="font-code-label text-sm text-[#b9f1ff] font-medium mt-1">{PERSONAL_INFO.title}</p>
            </div>
            <div className="font-code-label text-xs text-[#999999] space-y-1 text-left md:text-right">
              <div>Email: {PERSONAL_INFO.email}</div>
              <div>Location: {PERSONAL_INFO.location}</div>
              <div className="text-[#28e98c]">{PERSONAL_INFO.github}</div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h3 className="font-headline text-lg font-bold text-[#28e98c] border-b border-[#2D3139] pb-1 uppercase tracking-wider">
              Education
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-white text-base">{EDUCATION.institution}</h4>
                <p className="font-code-label text-xs text-[#b9f1ff]">{EDUCATION.degree}</p>
              </div>
              <span className="font-code-label text-xs text-[#999999]">{EDUCATION.expectedGraduation}</span>
            </div>
            <p className="font-code-label text-xs text-[#999999]">
              <strong>Coursework:</strong> {EDUCATION.courses.join(', ')}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="font-headline text-lg font-bold text-[#28e98c] border-b border-[#2D3139] pb-1 uppercase tracking-wider">
              Work Experience
            </h3>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2 border-b border-[#2D3139]/50 pb-5 last:border-0 last:pb-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                  <div>
                    <h4 className="font-bold text-white text-base">{exp.role}</h4>
                    <p className="font-code-label text-xs text-[#28e98c]">
                      {exp.company} {exp.location && <span className="text-[#999999]">({exp.location})</span>}
                    </p>
                  </div>
                  <span className="font-code-label text-xs text-[#999999]">{exp.period}</span>
                </div>
                {exp.bullets && exp.bullets.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-[#e2e2e8] list-disc list-inside pt-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">
                        <span className="text-[#999999]">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[#999999] leading-relaxed">{exp.description}</p>
                )}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((t) => (
                    <span key={t} className="font-code-label text-[10px] bg-[#1A1D23] px-2 py-0.5 rounded text-[#28e98c] border border-[#2D3139]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Competencies Section */}
          <div className="space-y-3">
            <h3 className="font-headline text-lg font-bold text-[#28e98c] border-b border-[#2D3139] pb-1 uppercase tracking-wider">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-code-label text-xs">
              {COMPETENCY_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 bg-[#1A1D23] rounded border border-[#2D3139]">
                  <strong className="text-[#28e98c] block mb-1">{cat.title}:</strong>
                  <span className="text-[#e2e2e8]">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-3">
            <h3 className="font-headline text-lg font-bold text-[#28e98c] border-b border-[#2D3139] pb-1 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5 text-[#28e98c]" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-code-label">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-3 bg-[#1A1D23] rounded border border-[#2D3139] flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block">{cert.title}</span>
                    <span className="text-[#999999]">{cert.issuer}</span>
                  </div>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#28e98c] underline text-[11px] hover:text-white"
                    >
                      Verify
                    </a>
                  ) : (
                    <span className="text-[#28e98c] text-[11px]">{cert.date}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div className="space-y-3">
            <h3 className="font-headline text-lg font-bold text-[#28e98c] border-b border-[#2D3139] pb-1 uppercase tracking-wider flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#28e98c]" />
              Volunteer & Community Leadership
            </h3>
            <div className="space-y-4">
              {VOLUNTEER_EXPERIENCES.map((vol, idx) => (
                <div key={idx} className="p-3 bg-[#1A1D23] rounded border border-[#2D3139] space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-bold">{vol.role} — <span className="text-[#28e98c]">{vol.organization}</span></span>
                    <span className="font-code-label text-[#999999]">{vol.period}</span>
                  </div>
                  {vol.bullets && (
                    <ul className="list-disc list-inside text-xs text-[#999999] space-y-0.5">
                      {vol.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#1A1D23] px-6 py-4 border-t border-[#2D3139] flex justify-end">
          <button
            onClick={onClose}
            className="font-code-label text-xs bg-[#28e98c] text-black px-6 py-2 rounded font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
