
import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/index';
import { CodeIcon } from './icons/index';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClasses = "px-4 py-2 rounded-md hover:bg-[#333333] transition-colors duration-300";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#222222]/80 border-b border-[#404040] blurred-backdrop'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={scrollToAbout} className="flex items-center gap-2 text-xl font-bold text-[#FAFAFA] hover:text-[#008080] transition-colors">
            <CodeIcon />
            <span>{personalInfo.name}</span>
          </button>
          <nav className="hidden md:flex items-center space-x-2">
            <button onClick={scrollToAbout} className={navItemClasses}>About</button>
            <button onClick={scrollToSkills} className={navItemClasses}>Skills</button>
            <button onClick={scrollToProjects} className={navItemClasses}>Projects</button>
            <button onClick={scrollToContact} className={navItemClasses}>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
