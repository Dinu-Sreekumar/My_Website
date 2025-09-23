
import React from 'react';
import { personalInfo } from '../data/index';
import { GithubIcon, LinkedinIcon } from './icons/index';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#404040]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex gap-4 mb-4 sm:mb-0">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAFAFA]/70 hover:text-[#008080] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAFAFA]/70 hover:text-[#008080] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-[#FAFAFA]/60">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
