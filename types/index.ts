export type ProjectCategory = 'all' | 'systems-ai' | 'security-fl' | 'fullstack-genai' | 'data-science';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  skills: string[];
  category: 'systems-ai' | 'security-fl' | 'fullstack-genai' | 'data-science';
  categoryLabel: string;
  tier: 'Tier 1: Flagship' | 'Tier 2: Data Science' | 'Tier 3: Foundations';
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  videoUrl?: string;
  featured?: boolean;
  badge?: string;
  carouselConfig?: {
    autoplayDelay: number;
    initialDelay?: number;
  };
}

export interface Skill {
  name: string;
  icon: string; // SVG string
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Work' | 'Internship' | 'Leadership';
  points: string[];
  skills: string[];
  githubUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  highlights?: string[];
  status: 'Current' | 'Completed';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Generative AI & Data Science' | 'Cloud & DevOps' | 'Development' | 'Productivity & Security' | 'Proficiency';
  scoreOrDistinction?: string;
  skills?: string[];
  highlight?: boolean;
  fileUrl?: string;
  fileType?: 'pdf' | 'image';
}
