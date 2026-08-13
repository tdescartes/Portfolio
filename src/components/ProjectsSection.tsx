import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Cpu, Bot, Building2, Code2, Monitor, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  selectedSkillFilter?: string | null;
  onClearSkillFilter?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  selectedSkillFilter,
  onClearSkillFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Hardware / IoT',
    'AI / Machine Learning',
    'Full-Stack SaaS',
    'Systems Programming',
    'Web Application',
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    // Skill filter priority
    if (selectedSkillFilter) {
      const matchTag = project.tags.some(
        (tag) => tag.toLowerCase().includes(selectedSkillFilter.toLowerCase())
      );
      const matchDesc = project.description.toLowerCase().includes(selectedSkillFilter.toLowerCase());
      if (!matchTag && !matchDesc) return false;
    }

    if (activeCategory === 'All') return true;
    return project.category === activeCategory || project.categoryLabel === activeCategory;
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'memory':
        return <Cpu className="w-8 h-8 text-[#10b981]" />;
      case 'smart_toy':
        return <Bot className="w-8 h-8 text-[#10b981]" />;
      case 'domain':
        return <Building2 className="w-8 h-8 text-[#10b981]" />;
      case 'code_blocks':
        return <Code2 className="w-8 h-8 text-[#10b981]" />;
      case 'desktop_windows':
        return <Monitor className="w-8 h-8 text-[#10b981]" />;
      default:
        return <Layers className="w-8 h-8 text-[#10b981]" />;
    }
  };

  return (
    <section id="projects" className="bg-[#1A1D23]/30 py-24 border-y border-[#2D3139]">
      <div className="px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white flex items-center gap-4">
            <span className="text-[#10b981] font-code-label text-xl">03.</span> Featured Work
          </h2>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (onClearSkillFilter) onClearSkillFilter();
                }}
                className={`font-code-label text-xs px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeCategory === cat && !selectedSkillFilter
                    ? 'bg-[#10b981] text-[#000000] font-bold shadow'
                    : 'bg-[#1A1D23] text-[#999999] border border-[#2D3139] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Filter Active Notice */}
        {selectedSkillFilter && (
          <div className="mb-6 px-4 py-2 bg-[#1A1D23] border border-[#10b981]/40 rounded flex justify-between items-center text-xs font-code-label">
            <span className="text-[#10b981]">
              Filtering projects matching skill: <strong className="text-white">{selectedSkillFilter}</strong>
            </span>
            <button
              onClick={onClearSkillFilter}
              className="text-[#999999] hover:text-white underline cursor-pointer"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">
          {filteredProjects.map((project) => {
            const isLarge = project.gridSpan === 'large';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${
                  isLarge ? 'md:col-span-2' : ''
                } group relative overflow-hidden rounded-xl border border-[#2D3139] bg-[#111317] hover:border-[#10b981] transition-colors duration-300 cursor-pointer shadow-xl flex flex-col justify-between`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div
                    className={`absolute inset-0 z-10 ${
                      isLarge
                        ? 'bg-gradient-to-t md:bg-gradient-to-r from-[#111317] via-[#111317]/90 to-transparent'
                        : 'bg-gradient-to-t from-[#111317] via-[#111317]/80 to-transparent'
                    }`}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Card Content Container */}
                <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                  {/* Top Bar for Standard cards */}
                  {!isLarge && (
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-2 bg-[#1A1D23]/80 rounded border border-[#2D3139]">
                        {getCategoryIcon(project.icon)}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="p-2 text-[#999999] hover:text-[#10b981] transition-colors"
                        aria-label={`View ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  {/* Main Text & Tags */}
                  <div className={isLarge ? 'max-w-xl my-auto' : 'mt-auto'}>
                    <div className="font-code-label text-xs text-[#10b981] mb-2 uppercase tracking-wider font-semibold">
                      {project.category}
                    </div>

                    <h3 className="font-headline text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-[#10b981] transition-colors flex items-center justify-between">
                      {project.title}
                      {isLarge && (
                        <ExternalLink className="w-5 h-5 text-[#10b981] group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </h3>

                    <p className="font-body text-sm text-[#999999] mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 items-center">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-code-label text-xs text-[#cbd5e1] bg-[#1A1D23]/80 px-2.5 py-1 rounded border border-[#2D3139]"
                        >
                          {tag}
                        </span>
                      ))}

                      <span className="ml-auto font-code-label text-xs text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore System →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
