import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './icons/index';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  videoUrl?: string;
  title?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, videoUrl, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 pr-4 truncate">
            {videoUrl && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Video Demo
              </span>
            )}
            <h3 className="text-base font-bold text-white truncate">
              {title || (videoUrl ? "Project Video Demo" : "Project Screenshot Preview")}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Media Body */}
        <div className="p-4 sm:p-6 flex items-center justify-center bg-[#05070d] overflow-auto max-h-[75vh]">
          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="max-h-[70vh] w-full max-w-full rounded-lg shadow-lg border border-slate-800 bg-black"
            >
              Your browser does not support the video tag.
            </video>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt={title || "Project screenshot"}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg border border-slate-800"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
