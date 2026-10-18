import React, { forwardRef } from 'react';
import { personalInfo } from '../data/index';
import { 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  LocationIcon, 
  SparklesIcon, 
  FileTextIcon 
} from './icons/index';

interface HeroSectionProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
  openResumeModal: () => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ scrollToProjects, scrollToContact, openResumeModal }, ref) => {
    return (
      <section 
        ref={ref} 
        id="about" 
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-mesh-dark subtle-grid overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d2b4]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#00d2b4]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,210,180,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2b4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d2b4]"></span>
                </span>
                <span className="text-xs font-semibold text-[#5eead4] tracking-wide">
                  {personalInfo.availabilityStatus}
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Hi, I'm <span className="gradient-text-primary">{personalInfo.name}</span>
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-slate-200">
                  {personalInfo.roleTitle}
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-cyan-400 border border-slate-700/60">
                    MCA @ CUSAT
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-emerald-400 border border-slate-700/60">
                    Edge Federated AI
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-indigo-400 border border-slate-700/60">
                    Low-Latency Systems
                  </span>
                </div>
              </div>

              {/* Bio Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {personalInfo.bio}
              </p>

              {/* Location Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-400">
                <LocationIcon className="w-4 h-4 text-[#00d2b4]" />
                <span>Based in {personalInfo.location}</span>
                <span className="mx-2 text-slate-600">·</span>
                <span className="text-[#00d2b4]">Cochin University of Science and Technology</span>
              </div>

              {/* Call-to-action buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={scrollToProjects}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d2b4] via-[#0ea5e9] to-[#6366f1] text-[#080c14] font-extrabold text-sm tracking-wide shadow-lg shadow-[#00d2b4]/20 hover:shadow-[#00d2b4]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                >
                  <SparklesIcon className="w-4 h-4 text-[#080c14]" />
                  <span>Explore Flagship Projects</span>
                </button>

                <button
                  onClick={openResumeModal}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#00d2b4]/50 text-white font-bold text-sm tracking-wide transition-all duration-200 flex items-center gap-2 group"
                >
                  <FileTextIcon className="w-4 h-4 text-[#00d2b4] group-hover:scale-110 transition-transform" />
                  <span>Interactive Resume</span>
                </button>

                <button
                  onClick={scrollToContact}
                  className="px-5 py-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/40 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-[#00d2b4]/50 hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-[#0ea5e9]/50 hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-[#6366f1]/50 hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column: Avatar & Metric Stats Grid */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Profile Image with Glow Ring */}
              <div className="relative mb-8 group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00d2b4] via-[#0ea5e9] to-[#6366f1] rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-glow" />
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl p-1.5">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Stats Highlights Ribbon */}
              <div className="w-full max-w-md grid grid-cols-2 gap-3">
                {personalInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card p-3.5 rounded-xl flex flex-col text-center"
                  >
                    <span className="text-xl sm:text-2xl font-black font-mono text-[#00d2b4]">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
