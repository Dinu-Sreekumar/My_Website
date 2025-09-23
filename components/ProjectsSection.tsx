
import React, { forwardRef } from 'react';
import { projectsData } from '../data/index';
import ProjectCard from './ProjectCard';

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="projects" className="py-20 px-4 bg-[#222222]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Projects
        </h2>
        <p className="text-center text-[#FAFAFA]/80 max-w-3xl mx-auto mb-12">
          Explore a selection of my work. Each project demonstrates my ability to work with different technologies to solve real-world problems and create useful tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
