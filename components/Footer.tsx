import React from 'react';
import { personalInfo } from '../data/index';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon } from './icons/index';

interface FooterProps {
  scrollToTop?: () => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#060910] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <span className="w-6 h-6 rounded-lg bg-[#00d2b4]/10 border border-[#00d2b4]/30 text-[#00d2b4] font-black text-xs font-sans flex items-center justify-center select-none">
              DS
            </span>
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Systems Programmer & Generative AI Developer · Kochi, India
          </p>
        </div>

        {/* Center: Tech stack indicator */}
        <div className="text-xs font-mono text-slate-500 text-center">
          Built with React 19 · TypeScript · Tailwind CSS · POSIX Architecture
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#00d2b4] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#0ea5e9] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#6366f1] transition-colors"
            aria-label="Send Email"
          >
            <MailIcon className="w-4 h-4" />
          </a>

          {scrollToTop && (
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-[#00d2b4] transition-colors flex items-center gap-1"
              aria-label="Scroll to top of page"
            >
              <span>Top</span>
              <ArrowUpRightIcon className="w-3 h-3" />
            </button>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-600 font-mono">
        © {currentYear} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
