import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, COMPETENCY_CATEGORIES, CERTIFICATIONS, VOLUNTEER_EXPERIENCES } from '../data/portfolioData';
import { X, Printer, Copy, Check, FileText, Award, HeartHandshake, Download, ExternalLink, Eye } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'pdf' | 'text'>('pdf');

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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div
        className="bg-[#111317] border border-[#2D3139] rounded-xl max-w-6xl w-full h-[95vh] overflow-hidden flex flex-col relative shadow-2xl text-left font-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="bg-[#111317] border-b border-[#2D3139] px-4 sm:px-6 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#28e98c]/20 text-[#28e98c] rounded border border-[#28e98c]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline text-lg font-bold text-white">Curriculum Vitae</h2>
              <p className="font-code-label text-xs text-[#999999]">{PERSONAL_INFO.name} - Official Resume</p>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center bg-[#1A1D23] p-1 rounded-lg border border-[#2D3139]">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`font-code-label text-xs px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pdf' ? 'bg-[#28e98c] text-black font-bold' : 'text-[#999999] hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              PDF Document
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`font-code-label text-xs px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'text' ? 'bg-[#28e98c] text-black font-bold' : 'text-[#999999] hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Interactive CV
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/Resume_Descartes_Tuyishime (2).pdf"
              download="Resume_Descartes_Tuyishime.pdf"
              className="font-code-label text-xs bg-[#28e98c] text-black px-4 py-2 rounded font-bold hover:bg-[#59ffa3] transition-colors flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>

            <a
              href="/Resume_Descartes_Tuyishime (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-code-label text-xs bg-[#1A1D23] text-[#b9f1ff] border border-[#2D3139] px-3 py-2 rounded hover:border-[#b9f1ff] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open PDF
            </a>

            <button
              onClick={handleCopyText}
              className="font-code-label text-xs bg-[#1A1D23] text-[#28e98c] border border-[#2D3139] px-3 py-2 rounded hover:border-[#28e98c] transition-colors flex items-center gap-1.5 cursor-pointer hidden sm:flex"
              title="Copy plain text"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#999999] hover:text-white rounded bg-[#1A1D23] border border-[#2D3139] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Either PDF Viewer or Interactive Text CV */}
        {activeTab === 'pdf' ? (
          <div className="flex-1 p-2 sm:p-3 bg-[#0a0c0f] flex flex-col items-center overflow-hidden h-full min-h-0">
            <div className="w-full bg-[#1A1D23] px-4 py-1.5 border border-[#2D3139] rounded-t-lg flex justify-between items-center text-xs font-code-label text-[#999999] shrink-0">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28e98c]"></span>
                Viewing PDF: <strong className="text-white">Resume_Descartes_Tuyishime.pdf</strong>
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/Resume_Descartes_Tuyishime (2).pdf"
                  download="Resume_Descartes_Tuyishime.pdf"
                  className="text-[#28e98c] hover:underline flex items-center gap-1 font-bold"
                >
                  <Download className="w-3.5 h-3.5" /> Direct Download
                </a>
                <a
                  href="/Resume_Descartes_Tuyishime (2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b9f1ff] hover:underline flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Fullscreen
                </a>
              </div>
            </div>
            <iframe
              src="/Resume_Descartes_Tuyishime (2).pdf#page=1&view=Fit&toolbar=0&navpanes=0"
              className="w-full h-full flex-1 border border-t-0 border-[#2D3139] rounded-b-lg bg-[#111317]"
              title="Descartes Tuyishime Resume PDF"
            />
          </div>
        ) : (
          <div className="p-8 md:p-12 space-y-8 text-white font-body bg-[#111317] overflow-y-auto max-h-[75vh]">
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
        )}

        {/* Modal Footer */}
        <div className="bg-[#1A1D23] px-6 py-4 border-t border-[#2D3139] flex justify-between items-center">
          <a
            href="/Resume_Descartes_Tuyishime (2).pdf"
            download="Resume_Descartes_Tuyishime.pdf"
            className="font-code-label text-xs text-[#28e98c] hover:underline flex items-center gap-1.5 font-semibold"
          >
            <Download className="w-4 h-4" /> Download Official PDF Resume
          </a>
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
