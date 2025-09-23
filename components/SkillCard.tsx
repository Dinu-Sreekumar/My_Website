
import React from 'react';
import type { Skill } from '../types/index';
import { Icon } from './icons/index';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="group w-32 h-32 bg-[#272727] border border-[#404040] rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-[#008080] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#008080]/20">
      <div className="text-4xl text-[#FAFAFA]/80 group-hover:text-[#008080] transition-colors duration-300">
        <Icon svgString={skill.icon} />
      </div>
      <p className="mt-2 text-sm font-medium text-center text-[#FAFAFA]">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
