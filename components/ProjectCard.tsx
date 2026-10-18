import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types/index';
import { GithubIcon, ExternalLinkIcon, CheckCircleIcon, TerminalIcon } from './icons/index';
import ImageModal from './ImageModal';

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isModalOpen || !project.carouselConfig || project.images.length <= 1) {
      resetTimeout();
      return;
    }

    const startCarousel = () => {
      resetTimeout();
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, project.carouselConfig?.autoplayDelay || 4500);
    };

    if (project.carouselConfig?.initialDelay) {
      const initialTimeout = window.setTimeout(startCarousel, project.carouselConfig.initialDelay);
      return () => clearTimeout(initialTimeout);
    } else {
      startCarousel();
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isModalOpen, project.images.length, project.carouselConfig]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="glass-card rounded-2xl flex flex-col overflow-hidden border border-slate-800/80 hover:border-[#00d2b4]/40 transition-all duration-300 group">
        
        {/* Project Thumbnail / Carousel / Video Demo */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950/80 border-b border-slate-800/80">
          {project.videoUrl ? (
            <div className="relative w-full h-full group/video">
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <button
                onClick={openModal}
                className="absolute inset-0 w-full h-full bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 cursor-zoom-in flex items-center justify-center group-hover/video:bg-black/40 transition-colors"
                aria-label={`Watch full video demo for ${project.name}`}
              >
                <div className="opacity-0 group-hover/video:opacity-100 transition-all duration-300 transform scale-95 group-hover/video:scale-100 bg-slate-900/90 border border-emerald-500/40 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 backdrop-blur-md shadow-2xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Click to expand demo</span>
                </div>
              </button>
            </div>
          ) : (
            <button
              onClick={openModal}
              className="w-full h-full block relative cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
              aria-label={`View images for ${project.name}`}
            >
              {project.images.map((image, index) => (
                <img
                  key={`${project.id}-${image}-${index}`}
                  src={image}
                  alt={`${project.name} preview ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20" />
            </button>
          )}

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-[#00d2b4] border border-[#00d2b4]/30 backdrop-blur-md shadow-md">
              {project.badge || project.categoryLabel}
            </span>

            {project.videoUrl ? (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Video Demo</span>
              </span>
            ) : project.tier.includes('Tier 1') ? (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                Tier 1 Flagship
              </span>
            ) : null}
          </div>

          {/* Carousel Dots if multiple images and no video */}
          {!project.videoUrl && project.images.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-slate-950/70 px-2 py-1 rounded-full backdrop-blur-sm border border-slate-800">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-5 bg-[#00d2b4]'
                      : 'w-1.5 bg-slate-500 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">
          
          {/* Header Title & GitHub */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#00d2b4] transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                {project.tagline}
              </p>
            </div>
            
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-[#00d2b4] text-slate-300 hover:text-[#080c14] transition-all duration-200 flex-shrink-0"
              aria-label={`GitHub repository for ${project.name}`}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Highlights Checklist */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-1">
                Architectural Highlights:
              </span>
              {project.highlights.slice(0, 3).map((hl, i) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-slate-300 leading-snug">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-[#00d2b4] flex-shrink-0 mt-0.5" />
                  <span className="truncate">{hl}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mt-auto pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-[#00d2b4]/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="mt-4 pt-3 flex items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d2b4] hover:underline"
            >
              <span>View Source Code</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>

            {onOpenDetails && (
              <button
                onClick={() => onOpenDetails(project)}
                className="text-xs font-semibold text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/40 transition-colors"
              >
                System Specs
              </button>
            )}
          </div>

        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={project.images[currentIndex]}
        videoUrl={project.videoUrl}
        title={`${project.name} - ${project.videoUrl ? 'Interactive Demo Video' : 'System View'}`}
      />
    </>
  );
};

export default ProjectCard;
