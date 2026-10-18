import React, { useEffect, useRef } from 'react';
import type { Certification } from '../types/index';
import { CloseIcon, ExternalLinkIcon, AwardIcon, CheckCircleIcon, SparklesIcon } from './icons/index';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: Certification | null;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certification }) => {
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

  if (!isOpen || !certification) return null;

  const isPdf = certification.fileType === 'pdf' || certification.fileUrl?.endsWith('.pdf');
  const fileUrl = certification.fileUrl;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex-1 min-w-[200px] pr-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#00d2b4] bg-[#00d2b4]/10 px-2 py-0.5 rounded border border-[#00d2b4]/20">
                <AwardIcon className="w-3 h-3" />
                {certification.issuer}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                {certification.category}
              </span>
              {certification.highlight && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  <SparklesIcon className="w-3 h-3" />
                  <span>Distinction</span>
                </span>
              )}
            </div>
            <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white truncate">
              {certification.title}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {fileUrl && (
              <>
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-[#00d2b4]/40 transition-colors"
                  title="Open credential in new tab"
                >
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <a
                  href={fileUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#00d2b4]/10 hover:bg-[#00d2b4]/20 text-[#00d2b4] border border-[#00d2b4]/30 transition-colors"
                  title="Download credential file"
                >
                  <span className="hidden sm:inline">Download</span>
                  <span className="sm:hidden">Save</span>
                </a>
              </>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close certificate preview"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Certificate Preview Body */}
        <div className="p-3 sm:p-5 flex-1 bg-[#05070d] overflow-y-auto min-h-[300px] flex flex-col items-center justify-center">
          {fileUrl ? (
            isPdf ? (
              <div className="w-full flex flex-col items-center">
                <iframe
                  src={`${fileUrl}#toolbar=1&view=FitH`}
                  title={certification.title}
                  className="w-full h-[65vh] sm:h-[72vh] rounded-xl border border-slate-800 bg-slate-900 shadow-inner"
                />
                <p className="mt-2 text-xs text-slate-400 text-center">
                  Displaying PDF credential preview. If your device does not support embedded PDF viewing,{' '}
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d2b4] hover:underline font-semibold"
                  >
                    click here to open directly
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <img
                  src={fileUrl}
                  alt={certification.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
                />
              </div>
            )
          ) : (
            <div className="text-center py-16 text-slate-400">
              <AwardIcon className="w-12 h-12 mx-auto mb-3 text-slate-600" />
              <p className="text-sm">Certificate file preview is not available for this record.</p>
            </div>
          )}
        </div>

        {/* Modal Footer with Certificate Context */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          {certification.scoreOrDistinction ? (
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-[#00d2b4] flex-shrink-0" />
              <span className="text-slate-200 font-medium">{certification.scoreOrDistinction}</span>
            </div>
          ) : (
            <span className="text-slate-400">Official verified credential</span>
          )}

          {certification.skills && certification.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] text-slate-500 font-mono">Skills:</span>
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
