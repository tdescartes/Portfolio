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
import { CommandPalette } from './components/CommandPalette';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string | null>(null);

  // Keyboard shortcut listener for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
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
    <div className="min-h-screen bg-[#111317] text-[#e2e2e8] selection:bg-[#10b981] selection:text-[#000000] flex flex-col font-body">
      {/* Top Sticky Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setCommandPaletteOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Section Stack */}
      <main className="flex-1">
        <HeroSection
          onOpenTerminal={() => setCommandPaletteOpen(true)}
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

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => {
          setCommandPaletteOpen(false);
          setResumeOpen(true);
        }}
        onOpenAi={() => {
          setCommandPaletteOpen(false);
          setAiAssistantOpen(true);
        }}
      />

      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />
    </div>
  );
}
