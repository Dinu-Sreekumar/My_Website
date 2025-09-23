
export interface Project {
  name: string;
  description: string;
  skills: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  carouselConfig?: {
    autoplayDelay: number;
    initialDelay?: number;
  };
}

export interface Skill {
  name: string;
  icon: string; // This will be an SVG string
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
