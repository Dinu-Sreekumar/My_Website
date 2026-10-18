import React, { useEffect } from 'react';
import type { Project } from '../types/index';
import { CloseIcon, GithubIcon, ExternalLinkIcon, CheckCircleIcon } from './icons/index';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00d2b4] bg-[#00d2b4]/10 px-2 py-0.5 rounded border border-[#00d2b4]/20">
              {project.badge || project.categoryLabel}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {project.name}
            </h3>
            <p className="text-xs text-cyan-400 font-medium">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Media Preview (Video Demo or Screenshot) */}
          {project.videoUrl ? (
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black aspect-video max-h-80 shadow-2xl">
              <video
                src={project.videoUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : project.images && project.images.length > 0 ? (
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video max-h-72">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}

          {/* Detailed System Architecture Description */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              System Specification & Architecture:
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                Core Engineering Benchmarks:
              </h4>
              <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                {project.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircleIcon className="w-4 h-4 text-[#00d2b4] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Frameworks:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            {project.tier}
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00d2b4] text-[#080c14] font-bold text-xs hover:bg-opacity-90 transition-all shadow-md"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open on GitHub</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
