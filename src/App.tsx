import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { TerminalDrawer } from './components/TerminalDrawer';
import { CodeInspectorModal } from './components/CodeInspectorModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [codeInspectorOpen, setCodeInspectorOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string | null>(null);

  // Keyboard shortcut listener for Terminal (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSkillFilter = (skill: string) => {
    setSelectedSkillFilter(skill);
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111317] text-[#e2e2e8] selection:bg-[#28e98c] selection:text-[#00391d] flex flex-col font-body">
      {/* Top Sticky Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCodeInspector={() => setCodeInspectorOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Section Stack */}
      <main className="flex-1">
        <HeroSection
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
        />

        <AboutSection onSelectSkillFilter={handleSelectSkillFilter} />

        <ExperienceSection />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          selectedSkillFilter={selectedSkillFilter}
          onClearSkillFilter={() => setSelectedSkillFilter(null)}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
        onOpenAi={() => {
          setTerminalOpen(false);
          setAiAssistantOpen(true);
        }}
      />

      <CodeInspectorModal
        isOpen={codeInspectorOpen}
        onClose={() => setCodeInspectorOpen(false)}
      />

      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />
    </div>
  );
}
