
import React, { forwardRef } from 'react';
import { personalInfo } from '../data/index';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/index';

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-[#FAFAFA]/80 max-w-xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 bg-[#008080] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-transform text-lg"
        >
          <MailIcon className="w-6 h-6" />
          {personalInfo.email}
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAFAFA]/70 hover:text-[#008080] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAFAFA]/70 hover:text-[#008080] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
