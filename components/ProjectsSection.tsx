import React, { forwardRef, useState } from 'react';
import { projectsData } from '../data/index';
import type { Project, ProjectCategory } from '../types/index';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
import { TerminalIcon, SparklesIcon } from './icons/index';

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'systems-ai', label: 'Systems & Linux' },
    { id: 'security-fl', label: 'Federated AI & Security' },
    { id: 'fullstack-genai', label: 'Full-Stack & GenAI' },
    { id: 'data-science', label: 'Data Science & Tools' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-[#00d2b4]">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship & <span className="gradient-text-primary">Production Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A curated collection of systems tools, federated learning intrusion detection pipelines, AI platforms, and data science implementations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-[#00d2b4] to-[#0ea5e9] text-[#080c14] font-extrabold shadow-lg shadow-[#00d2b4]/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl glass-card text-center max-w-2xl mx-auto border border-slate-800">
          <p className="text-xs font-mono text-slate-400">
            More open-source repositories and utility scripts are available on my{' '}
            <a
              href="https://github.com/Dinu-Sreekumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d2b4] font-bold hover:underline"
            >
              GitHub profile @Dinu-Sreekumar
            </a>
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
