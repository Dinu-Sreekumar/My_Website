import React, { useEffect } from 'react';
import { personalInfo, educationsData, experiencesData, projectsData, certificationsData, skillCategories } from '../data/index';
import { CloseIcon, FileTextIcon, MailIcon, GithubIcon, LinkedinIcon, LocationIcon, CheckCircleIcon } from './icons/index';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleBeforePrint = () => {
      document.body.style.overflow = 'visible';
    };

    const handleAfterPrint = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('beforeprint', handleBeforePrint);
      window.addEventListener('afterprint', handleAfterPrint);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    // Restore overflow to visible so browser print engine can calculate multi-page breaks
    document.body.style.overflow = 'visible';
    setTimeout(() => {
      window.print();
    }, 50);
  };

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="resume-modal-dialog relative max-w-4xl w-full max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar (Hidden during print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#00d2b4]/10 text-[#00d2b4]">
              <FileTextIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Curriculum Vitae · {personalInfo.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Verified Comprehensive Resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00d2b4] hover:bg-[#00d2b4]/90 text-xs font-bold text-[#080c14] transition-all shadow-md active:scale-95"
            >
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume view"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Body (Becomes normal unconstrained flow in print) */}
        <div className="resume-modal-scroll p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d16] print:bg-white text-slate-200 print:text-slate-900 text-sm leading-relaxed font-sans">
          
          {/* Header Contact Block */}
          <div className="page-break-avoid border-b border-slate-800 print:border-slate-300 pb-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-white print:text-slate-900 tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-bold text-[#00d2b4] print:text-teal-700 mt-1">
                  Systems Programmer & Generative AI Developer · MCA Candidate @ CUSAT
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 print:text-slate-600 space-y-1 text-center sm:text-right">
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <LocationIcon className="w-3.5 h-3.5 text-[#00d2b4] print:text-teal-700" />
                  <span>{personalInfo.location}</span>
                </div>
                <div>{personalInfo.phone}</div>
                <div>
                  <a href={`mailto:${personalInfo.email}`} className="text-[#00d2b4] print:text-teal-700 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Links row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 print:text-slate-700 mt-4 pt-3 border-t border-slate-800/80 print:border-slate-200">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 print:text-teal-700 hover:underline font-semibold">
                linkedin.com/in/dinu-sreekumar
              </a>
              <span>·</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-300 print:text-slate-800 hover:underline font-semibold">
                github.com/Dinu-Sreekumar
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div className="page-break-avoid">
            <h2 className="page-break-after-avoid text-xs font-mono font-bold uppercase tracking-wider text-[#00d2b4] print:text-teal-800 mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed bg-slate-900/60 print:bg-slate-50 p-4 rounded-xl border border-slate-800/80 print:border-slate-200 font-normal">
              Aspiring Software Engineer and Data Analyst with a comprehensive background in Full Stack Development, Systems Programming, Generative AI, and Data Science. Proficient in building high-volume, low-latency applications and implementing AI-driven solutions using Python, Next.js, FastAPI, and Google Gemini. Eager to leverage a diverse portfolio of 12+ projects and 15+ certifications to solve complex technical challenges.
            </p>
          </div>

          {/* Education */}
          <div className="page-break-avoid">
            <h2 className="page-break-after-avoid text-xs font-mono font-bold uppercase tracking-wider text-[#00d2b4] print:text-teal-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {educationsData.map((edu) => (
                <div key={edu.id} className="page-break-avoid flex flex-col sm:flex-row sm:items-start justify-between gap-1 border-l-2 border-[#00d2b4] print:border-teal-700 pl-3 py-0.5">
                  <div>
                    <h3 className="font-bold text-white print:text-slate-900 text-sm">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-slate-300 print:text-slate-700">
                      {edu.institution} · <span className="text-slate-400 print:text-slate-600">{edu.location}</span>
                    </p>
                  </div>
                  <div className="text-left sm:text-right flex-shrink-0">
                    <span className="text-xs font-mono font-bold text-[#00d2b4] print:text-teal-800 bg-[#00d2b4]/10 print:bg-teal-50 px-2 py-0.5 rounded border border-[#00d2b4]/20 print:border-teal-200">
                      {edu.score}
                    </span>
                    <p className="text-[11px] font-mono text-slate-400 print:text-slate-500 mt-0.5">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Experience */}
          <div className="page-break-avoid">
            <h2 className="page-break-after-avoid text-xs font-mono font-bold uppercase tracking-wider text-[#00d2b4] print:text-teal-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              TECHNICAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="page-break-avoid p-4 rounded-xl bg-slate-900/40 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-bold text-white print:text-slate-900 text-sm">
                        {exp.role} <span className="text-[#00d2b4] print:text-teal-700">| {exp.organization}</span>
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 print:text-slate-700">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00d2b4] print:text-teal-700 mt-0.5 flex-shrink-0">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Extensive Project Portfolio */}
          <div>
            <h2 className="page-break-after-avoid text-xs font-mono font-bold uppercase tracking-wider text-[#00d2b4] print:text-teal-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              EXTENSIVE PROJECT PORTFOLIO
            </h2>

            {/* Tier 1 Flagship */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold text-amber-400 print:text-amber-800 uppercase tracking-wider block">
                Tier 1: Enterprise, Systems & AI Solutions
              </span>
              
              {projectsData.filter(p => p.tier.includes('Tier 1')).map((proj) => (
                <div key={proj.id} className="page-break-avoid border-l-2 border-[#00d2b4] print:border-teal-700 pl-3 py-1 bg-slate-900/20 print:bg-transparent">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-white print:text-slate-900 text-xs sm:text-sm">
                      {proj.name}
                    </h3>
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-[11px] font-mono text-[#00d2b4] print:text-teal-700 hover:underline">
                      GitHub Link
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                    {proj.description}
                  </p>
                  {proj.highlights && (
                    <ul className="mt-1.5 space-y-0.5 text-[11px] text-slate-400 print:text-slate-600">
                      {proj.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#00d2b4] print:text-teal-700">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {proj.skills.map(s => (
                      <span key={s} className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 print:bg-slate-100 text-slate-300 print:text-slate-700 border border-slate-700 print:border-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tier 2 & 3 Data Science & Utilities */}
            <div className="mt-6 space-y-4">
              <span className="text-[11px] font-mono font-bold text-cyan-400 print:text-cyan-800 uppercase tracking-wider block">
                Tier 2 & 3: Data Science, Analytics & Computer Vision
              </span>

              {projectsData.filter(p => !p.tier.includes('Tier 1')).slice(0, 4).map((proj) => (
                <div key={proj.id} className="page-break-avoid border-l-2 border-slate-700 print:border-slate-300 pl-3 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-white print:text-slate-900 text-xs sm:text-sm">
                      {proj.name}
                    </h3>
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-[11px] font-mono text-[#00d2b4] print:text-teal-700 hover:underline">
                      GitHub Link
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 mt-0.5">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="page-break-avoid">
            <h2 className="page-break-after-avoid text-xs font-mono font-bold uppercase tracking-wider text-[#00d2b4] print:text-teal-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900 w-36 flex-shrink-0">Languages:</span>
                <span className="text-slate-300 print:text-slate-700">Python, C, TypeScript, JavaScript, SQL (SQLite), Bash/Shell, Dart, HTML/CSS.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900 w-36 flex-shrink-0">Frameworks & Libs:</span>
                <span className="text-slate-300 print:text-slate-700">Next.js (App Router), FastAPI, React (18/19), Flask, Socket.IO, TailwindCSS, Flutter, Streamlit, Flower (FL), TensorFlow, PyTorch, Scikit-learn, Pandas, NFStream, Scapy, OpenCV, MediaPipe, psutil.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900 w-36 flex-shrink-0">Tools & Systems:</span>
                <span className="text-slate-300 print:text-slate-700">Linux (POSIX, procfs, Kali), Docker, Git/GitHub, SQLite WAL, GNU Make, PyInstaller, VS Code, Google Colab, Jupyter Notebook, Google Genkit.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <span className="font-bold text-white print:text-slate-900 w-36 flex-shrink-0">Cloud Services:</span>
                <span className="text-slate-300 print:text-slate-700">Google Cloud (Gemini API), Microsoft Azure (AI-900 Fundamentals), AWS (Basic).</span>
              </div>
            </div>
          </div>

          {/* Key Certifications */}
          <div className="page-break-avoid">
            <h2 className="page-break-after-avoid text-xs font-mono font-bold uppercase tracking-wider text-[#00d2b4] print:text-teal-800 mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
              KEY CERTIFICATIONS & HONORS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.slice(0, 10).map((c) => (
                <div key={c.id} className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#00d2b4] print:text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">{c.title}</span>
                    <span className="text-[11px] text-slate-400 print:text-slate-600">{c.issuer}</span>
                    {c.scoreOrDistinction && (
                      <span className="text-[10px] font-mono text-cyan-400 print:text-teal-800 block mt-0.5">
                        {c.scoreOrDistinction}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering & Leadership */}
          <div className="page-break-avoid">
            <h2 className="page-break-after-avoid text-xs font-mono font-bold uppercase tracking-wider text-[#00d2b4] print:text-teal-800 mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              VOLUNTEERING & LEADERSHIP
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300 print:text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-[#00d2b4] print:text-teal-700 font-bold">•</span>
                <span><strong>Event Coordinator, Zephyrus 7.0 (2025):</strong> Led the technical execution of the college Techfest, managing participant registration and live coding logistics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00d2b4] print:text-teal-700 font-bold">•</span>
                <span><strong>Volunteer, Inker Robotics Expo (Sept 2025):</strong> Managed venue setup and provided technical support for a large-scale robotics exhibition at Christ College.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer (Hidden during print) */}
        <div className="no-print px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            {personalInfo.email}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#00d2b4] text-[#080c14] font-bold text-xs hover:bg-[#00d2b4]/90 transition-all shadow-md active:scale-95"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
