import React, { forwardRef } from 'react';
import { skillCategories } from '../data/index';
import SkillCard from './SkillCard';

const SkillsSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Skillset
        </h2>
        <p className="text-center text-[#FAFAFA]/80 max-w-3xl mx-auto mb-12">
          A selection of technologies I am proficient in, organized by category.
        </p>
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-[#008080] mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;