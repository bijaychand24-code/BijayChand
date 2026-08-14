export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  university: string;
  degree: string;
  currentSemester: string;
  graduationYear: string;
  personalStatement: string;
  shortBio: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  mission: string;
  vision: string;
  strengths: string[];
}

export interface Technology {
  name: string;
  level: "Beginner" | "Intermediate" | "Learning";
}

export interface FocusArea {
  icon: string;
  title: string;
  technologies: Technology[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Learning";
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "All" | "Cloud" | "DevOps" | "Web" | "Cyber Security" | "SEO";
  github: string;
  liveDemo: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  role: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  currentSemester: string;
  coursework: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  status: "Completed" | "In Progress" | "Planned";
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface WhyWorkItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}