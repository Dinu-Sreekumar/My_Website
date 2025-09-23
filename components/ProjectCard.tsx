
import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types/index';
import { GithubIcon } from './icons/index';
import ImageModal from './ImageModal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isModalOpen || !project.carouselConfig) {
        resetTimeout();
        return;
    }

    const startCarousel = () => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % project.images.length);
            },
            project.carouselConfig?.autoplayDelay || 4000
        );
    }
    
    if (project.carouselConfig?.initialDelay) {
         const initialTimeout = window.setTimeout(startCarousel, project.carouselConfig.initialDelay);
         return () => clearTimeout(initialTimeout);
    } else {
        startCarousel();
    }


    return () => {
      resetTimeout();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isModalOpen, project.images.length, project.carouselConfig]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="group bg-[#272727] border border-[#404040] rounded-lg flex flex-col overflow-hidden transition-all duration-300 hover:border-[#008080] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#008080]/20">
        <div className="relative aspect-video overflow-hidden">
          <button
            onClick={openModal}
            className="w-full h-full block"
            aria-label={`View images for ${project.name}`}
          >
            {project.images.map((image, index) => (
              <img
                key={`${project.name}-${image}-${index}`}
                src={image}
                alt={`${project.name} screenshot ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-[#FAFAFA]' : 'w-2 bg-[#FAFAFA]/50 hover:bg-[#FAFAFA]/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-[#FAFAFA]">{project.name}</h3>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAFAFA]/70 hover:text-[#008080] transition-colors"
              aria-label="GitHub repository for this project"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
          <div className="h-24 overflow-y-auto mb-4 pr-2">
            <p className="text-[#FAFAFA]/80 text-sm">{project.description}</p>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className="bg-[#333333] text-[#B3E0E6] text-xs font-medium px-2.5 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={project.images[currentIndex]}
      />
    </>
  );
};

export default ProjectCard;
