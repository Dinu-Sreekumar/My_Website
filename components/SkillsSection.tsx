import React, { forwardRef, useState } from 'react';
import { skillCategories } from '../data/index';
import SkillCard from './SkillCard';
import { CpuIcon } from './icons/index';

const SkillsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.map((category) => {
    const filteredSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      skills: filteredSkills,
    };
  }).filter((category) => category.skills.length > 0);

  return (
    <section ref={ref} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-[#00d2b4]">
            <CpuIcon className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="gradient-text-primary">Technical Skillset</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A breakdown of languages, systems programming interfaces, AI frameworks, and development toolchains.
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. Python, Docker, Next.js, Flower)..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2b4] focus:ring-1 focus:ring-[#00d2b4] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d2b4]" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  ({category.skills.length})
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm font-mono">
              No skills found matching "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;