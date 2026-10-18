import React, { forwardRef, useState } from 'react';
import { certificationsData } from '../data/index';
import type { Certification } from '../types/index';
import { AwardIcon, CheckCircleIcon, SparklesIcon } from './icons/index';

const CertificationsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Generative AI & Data Science', 'Cloud & DevOps', 'Development', 'Productivity & Security'];

  const filteredCerts = selectedCategory === 'All'
    ? certificationsData
    : certificationsData.filter((c) => c.category === selectedCategory);

  return (
    <section ref={ref} id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-[#00d2b4]">
            <AwardIcon className="w-3.5 h-3.5" />
            <span>CREDENTIALS & ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified <span className="gradient-text-primary">Certifications & Honors</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proctored exams, industry credentials, and distinctions across Generative AI, Cloud Infrastructure, and Machine Learning.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#00d2b4] text-[#080c14] font-bold shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className={`glass-card p-6 rounded-2xl flex flex-col justify-between border ${
                cert.highlight
                  ? 'border-[#00d2b4]/40 shadow-[0_0_20px_rgba(0,210,180,0.08)]'
                  : 'border-slate-800/80'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    {cert.category}
                  </span>
                  {cert.highlight && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <SparklesIcon className="w-3 h-3" />
                      <span>Distinction</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00d2b4] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-3">
                  {cert.issuer}
                </p>

                {cert.scoreOrDistinction && (
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-3 flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#00d2b4] flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-200">{cert.scoreOrDistinction}</span>
                  </div>
                )}
              </div>

              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

CertificationsSection.displayName = "CertificationsSection";

export default CertificationsSection;
