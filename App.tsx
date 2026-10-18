import React, { useRef, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-[#00d2b4] selection:text-[#080c14]">
      {/* Fixed Header */}
      <Header
        scrollToAbout={() => scrollToSection(heroRef)}
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToCertifications={() => scrollToSection(certificationsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection
          ref={heroRef}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToContact={() => scrollToSection(contactRef)}
          openResumeModal={() => setIsResumeModalOpen(true)}
        />
        <AboutSection ref={aboutRef} />
        <ExperienceSection ref={experienceRef} />
        <ProjectsSection ref={projectsRef} />
        <SkillsSection ref={skillsRef} />
        <CertificationsSection ref={certificationsRef} />
        <ContactSection ref={contactRef} />
      </main>

      {/* Footer */}
      <Footer scrollToTop={scrollToTop} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
