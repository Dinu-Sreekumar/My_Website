import React, { forwardRef } from 'react';
import { educationsData } from '../data/index';
import { GraduationCapIcon, TerminalIcon, CpuIcon, SparklesIcon, CheckCircleIcon } from './icons/index';

const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
  const pillars = [
    {
      title: "Low-Latency Systems",
      icon: TerminalIcon,
      color: "from-emerald-500 to-teal-500",
      description: "Building zero-cloud POSIX-compliant CLI suites with direct SQLite Write-Ahead Logging (<5ms), raw TCP socket probes, and unprivileged Linux procfs introspection."
    },
    {
      title: "Edge & Federated AI",
      icon: CpuIcon,
      color: "from-cyan-500 to-blue-500",
      description: "Architecting decentralized, privacy-preserving machine learning using Flower (flwr) and TensorFlow for IoT threat detection and adversarial poisoning defense."
    },
    {
      title: "GenAI & Full-Stack",
      icon: SparklesIcon,
      color: "from-indigo-500 to-purple-500",
      description: "Developing scalable Next.js and FastAPI applications with Google Gemini 2.5 Flash RAG pipelines, Genkit AI backends, and responsive React 19 interfaces."
    }
  ];

  return (
    <section ref={ref} id="about-details" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-[#00d2b4]">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging <span className="gradient-text-primary">Systems Programming</span> and <span className="gradient-text-primary">Generative AI</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I combine low-level Linux systems engineering and network telemetry with modern generative and federated machine learning to build robust, privacy-first software.
          </p>
        </div>

        {/* 3 Core Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-[2px] mb-5`}>
                  <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center text-white group-hover:text-[#00d2b4] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education Timeline / Cards */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00d2b4]/10 text-[#00d2b4] border border-[#00d2b4]/20">
              <GraduationCapIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Academic Journey</h3>
              <p className="text-xs text-slate-400">Formal computer science education and honors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationsData.map((edu) => (
              <div
                key={edu.id}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                      edu.status === 'Current' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#00d2b4] bg-[#00d2b4]/10 px-2 py-0.5 rounded border border-[#00d2b4]/20">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-cyan-400 mb-3">
                    {edu.institution}
                  </p>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="space-y-1.5 mt-3 pt-3 border-t border-slate-800/80">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-[#00d2b4] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-[11px] font-mono text-slate-500 mt-4 flex items-center justify-between">
                  <span>{edu.location}</span>
                  <span className="text-slate-400 font-semibold">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
