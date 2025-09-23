
import React, { forwardRef } from 'react';
import { personalInfo } from '../data/index';

interface HeroSectionProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ scrollToProjects, scrollToContact }, ref) => {
    return (
      <section ref={ref} id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#008080] to-[#B3E0E6] rounded-full blur-xl opacity-75 animate-pulse"></div>
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-[#272727]"
            />
          </div>
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl text-[#008080] font-bold mb-4">
              {personalInfo.title}
            </h2>
            <p className="text-[#FAFAFA]/80 mb-8">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-[#008080] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-transform"
              >
                Contact Me
              </button>
              <button
                onClick={scrollToProjects}
                className="bg-[#333333] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#404040] transform hover:scale-105 transition-transform"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
