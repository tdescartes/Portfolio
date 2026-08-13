import type { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  gridSpan: 'large' | 'standard';
  icon: string;
  githubUrl?: string;
  demoUrl?: string;
  architectureDetails?: {
    components: string[];
    performance: string;
    keyHighlight: string;
  };
  demoType?: 'iot-telemetry' | 'compiler-ast' | 'customs-classifier' | 'tenant-tickets' | 'window-manager';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  bullets?: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  expectedGraduation: string;
  details?: string;
  courses: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface VolunteerItem {
  role: string;
  organization: string;
  period: string;
  category: string;
  bullets?: string[];
}

export interface CompetencyCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface TerminalCommand {
  command: string;
  output: string | ReactNode;
}
