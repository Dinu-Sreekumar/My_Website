import React, { forwardRef } from 'react';
import { experiencesData } from '../data/index';
import { BriefcaseIcon, ExternalLinkIcon, CheckCircleIcon } from './icons/index';

const ExperienceSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-[#00d2b4]">
            <BriefcaseIcon className="w-3.5 h-3.5" />
            <span>INDUSTRY & LEADERSHIP EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work, Internships & <span className="gradient-text-primary">Technical Leadership</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical experience deploying production platforms, developing cross-platform UI architectures, and coordinating large-scale tech festivals.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080c14] border-2 border-[#00d2b4] group-hover:bg-[#00d2b4] group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(0,210,180,0.5)]" />

              {/* Date callout (desktop positioned left) */}
              <div className="md:absolute md:-left-40 md:top-1 text-xs font-mono text-[#00d2b4] font-bold mb-2 md:mb-0 md:w-32 md:text-right">
                {exp.period}
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl relative">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        exp.type === 'Work' 
                          ? 'bg-[#00d2b4]/10 text-[#00d2b4] border border-[#00d2b4]/30' 
                          : exp.type === 'Internship' 
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                      }`}>
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-slate-300">
                      {exp.organization}
                    </p>
                  </div>

                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-xs font-medium text-slate-200 hover:text-[#00d2b4] transition-colors"
                    >
                      <span>Repository</span>
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5 my-4">
                  {exp.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-normal">
                      <CheckCircleIcon className="w-4 h-4 text-[#00d2b4] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:border-[#00d2b4]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
