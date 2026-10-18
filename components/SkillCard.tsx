import React from 'react';
import type { Skill } from '../types/index';
import { Icon } from './icons/index';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="glass-card group p-3.5 rounded-xl flex items-center gap-3 border border-slate-800/80 hover:border-[#00d2b4]/50 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-[#00d2b4] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
        <Icon svgString={skill.icon} className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:fill-current" />
      </div>

      <div className="flex flex-col min-w-0">
        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00d2b4] transition-colors truncate">
          {skill.name}
        </span>
        <span className="text-[10px] font-mono text-slate-400 mt-0.5">
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
