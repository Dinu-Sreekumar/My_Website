import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/index';
import { CodeIcon, FileTextIcon, GithubIcon, LinkedinIcon } from './icons/index';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToExperience: () => void;
  scrollToProjects: () => void;
  scrollToSkills: () => void;
  scrollToCertifications: () => void;
  scrollToContact: () => void;
  openResumeModal: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToAbout,
  scrollToExperience,
  scrollToProjects,
  scrollToSkills,
  scrollToCertifications,
  scrollToContact,
  openResumeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', action: scrollToAbout },
    { label: 'Experience', action: scrollToExperience },
    { label: 'Projects', action: scrollToProjects },
    { label: 'Skills', action: scrollToSkills },
    { label: 'Certifications', action: scrollToCertifications },
    { label: 'Contact', action: scrollToContact },
  ];

  const handleMobileNav = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-3 group text-left transition-transform hover:scale-105"
            aria-label="Scroll to home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00d2b4] via-[#0ea5e9] to-[#6366f1] p-[2px] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,210,180,0.5)]">
              <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center text-[#00d2b4]">
                <CodeIcon className="w-5 h-5 text-[#00d2b4]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-[#00d2b4] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 -mt-0.5">
                Systems & AI
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={openResumeModal}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-700/80 hover:border-[#00d2b4]/60 bg-slate-900/40 text-xs font-semibold text-slate-200 hover:text-[#00d2b4] transition-all duration-200"
            >
              <FileTextIcon className="w-4 h-4 text-[#00d2b4]" />
              <span>Resume</span>
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00d2b4] to-[#0ea5e9] text-xs font-bold text-[#080c14] hover:shadow-[0_0_20px_rgba(0,210,180,0.4)] hover:opacity-95 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openResumeModal}
              className="p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-[#00d2b4]"
              aria-label="View Resume"
            >
              <FileTextIcon className="w-4 h-4 text-[#00d2b4]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#0f172a]/95 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMobileNav(item.action)}
                  className="px-4 py-2.5 text-sm font-semibold text-left text-slate-200 hover:text-[#00d2b4] hover:bg-slate-800/60 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    openResumeModal();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 bg-slate-800/60 text-xs font-bold text-white hover:text-[#00d2b4]"
                >
                  <FileTextIcon className="w-4 h-4 text-[#00d2b4]" />
                  View Complete Resume
                </button>
                <button
                  onClick={() => handleMobileNav(scrollToContact)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00d2b4] to-[#0ea5e9] text-xs font-bold text-[#080c14]"
                >
                  Contact Dinu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
