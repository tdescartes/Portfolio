import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, ChevronRight, BookOpen, MapPin, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeCourseModal, setActiveCourseModal] = useState<string | null>(null);

  const courseDetailsMap: Record<string, string> = {
    "Data Structures & Algorithms": "Covered asymptotic complexity analysis, dynamic programming, graph algorithms (Dijkstra, A*), hash tables, and self-balancing BSTs in C++ and Python.",
    "Operating Systems": "Studied process scheduling algorithms, memory virtualization, POSIX threads, synchronization primitives (mutexes, semaphores), deadlock detection, and Unix file system design.",
    "Artificial Intelligence": "Implemented machine learning algorithms from scratch, neural network backpropagation, search algorithms (Minimax, Alpha-Beta pruning), constraint satisfaction, and Transformer NLP architecture basics.",
    "Database Management": "Focused on relational database theory, B+ Tree indexing, ACID transactions, normalization up to 3NF/BCNF, SQL query optimization, and NoSQL document stores.",
    "Software Engineering": "Agile software development lifecycle, CI/CD automated test pipelines, UML architecture modeling, design patterns (Singleton, Factory, Strategy, Observer), and team code review practices."
  };

  return (
    <section id="experience" className="px-4 sm:px-8 md:px-16 py-24 max-w-[1200px] mx-auto">
      <h2 className="font-headline text-2xl md:text-3xl font-bold mb-12 text-white flex items-center gap-4">
        <span className="text-[#10b981] font-code-label text-xl">02.</span> Experience &amp; Education
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Timeline Column: Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-[#10b981]" />
            <h3 className="font-headline text-xl font-bold text-white">Work History</h3>
          </div>

          <div className="space-y-12 border-l border-[#2D3139] pl-8 relative">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Bullet */}
                <div
                  className={`absolute w-3.5 h-3.5 rounded-full -left-[39px] top-1.5 border-2 ${
                    index === 0
                      ? 'bg-[#10b981] border-[#111317] ring-4 ring-[#10b981]/20'
                      : 'bg-[#1A1D23] border-[#2D3139]'
                  }`}
                ></div>

                <h3 className="font-headline text-lg font-bold text-white group-hover:text-[#10b981] transition-colors">
                  {exp.role}
                </h3>

                <div className="font-code-label text-xs text-[#10b981] mb-3 flex flex-wrap items-center gap-2 font-medium">
                  <span className="text-[#10b981] font-semibold">{exp.company}</span>
                  <span className="text-[#999999]">|</span>
                  <span className="text-[#999999] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#10b981]" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <>
                      <span className="text-[#999999]">|</span>
                      <span className="text-[#999999] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#10b981]" />
                        {exp.location}
                      </span>
                    </>
                  )}
                </div>

                <p className="font-body text-sm text-[#e2e2e8] mb-3 leading-relaxed">
                  {exp.description}
                </p>

                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-2 mb-4 font-body text-xs text-[#999999] pl-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#10b981] font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={tech}
                      className={`font-code-label text-[11px] px-2.5 py-1 rounded bg-[#1A1D23] text-[#cbd5e1] ${
                        index === 0 ? 'border-l-2 border-[#10b981]' : 'border border-[#2D3139]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Certifications */}
        <div className="space-y-8">
          <div className="bg-[#1A1D23] p-8 rounded-lg border border-[#2D3139] shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#111317] rounded border border-[#2D3139] text-[#10b981]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-white">{EDUCATION.institution}</h3>
                <p className="font-code-label text-xs text-[#999999]">Computer Science Department</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-headline text-lg font-semibold text-white">{EDUCATION.degree}</h4>
              <p className="font-code-label text-xs text-[#10b981] mt-1 font-medium">{EDUCATION.expectedGraduation}</p>
            </div>

            {EDUCATION.details && (
              <p className="font-body text-sm text-[#e2e2e8]/90 mb-6 leading-relaxed">
                {EDUCATION.details}
              </p>
            )}

            {/* Code Container Coursework */}
            <div className="code-container p-5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-3 text-xs font-code-label text-[#999999] border-b border-[#2D3139] pb-2">
                <span>// Relevant Coursework Curriculum</span>
                <span className="text-[#10b981] text-[10px]">C++ / Python / TS</span>
              </div>

              <ul className="font-code-label text-xs text-[#e2e2e8] space-y-2">
                {EDUCATION.courses.map((course) => (
                  <li
                    key={course}
                    onClick={() => setActiveCourseModal(course)}
                    className="flex items-center justify-between p-1.5 rounded hover:bg-[#1A1D23] cursor-pointer group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#10b981] font-mono">&gt;</span>
                      <span className="group-hover:text-[#10b981] transition-colors">{course}</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#10b981] group-hover:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-[#1A1D23] p-8 rounded-lg border border-[#2D3139] shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#111317] rounded border border-[#2D3139] text-[#10b981]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-white">Certifications</h3>
                <p className="font-code-label text-xs text-[#999999]">Deep Learning &amp; Software Engineering</p>
              </div>
            </div>

            <div className="space-y-3 font-code-label text-xs">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-3 bg-[#111317] rounded border border-[#2D3139] flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block">{cert.title}</span>
                    <span className="text-[#999999] text-[11px]">{cert.issuer}</span>
                  </div>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10b981] text-[11px] hover:underline font-medium"
                    >
                      Verify ↗
                    </a>
                  ) : (
                    <span className="text-[#10b981] text-[11px] font-medium">{cert.date}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coursework Modal */}
      {activeCourseModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveCourseModal(null)}
        >
          <div
            className="bg-[#1A1D23] border border-[#2D3139] rounded-lg max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-[#10b981] mb-3">
              <BookOpen className="w-5 h-5" />
              <h3 className="font-headline text-lg font-bold text-white">{activeCourseModal}</h3>
            </div>
            <p className="font-body text-sm text-[#999999] leading-relaxed mb-6">
              {courseDetailsMap[activeCourseModal] || "Core computer science subject covering theoretical fundamentals and hands-on laboratory programming assignments."}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveCourseModal(null)}
                className="font-code-label text-xs bg-[#10b981] text-black px-4 py-2 rounded font-medium cursor-pointer hover:bg-[#34d399]"
              >
                Close Syllabus Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
