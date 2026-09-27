import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

/**
 * Generic icon type: a Lucide icon, a brand SVG component, or any
 * component that accepts SVG element props and renders `aria-hidden` content.
 */
export type IconType = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

/* ---------- Site ---------- */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  username?: string;
}

/* ---------- Profile ---------- */

export interface Profile {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  /** Short paragraph shown in hero / about */
  summary: string;
  /** Longer paragraphs shown in About section */
  about: string[];
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  availability: "available" | "open" | "busy";
  /** Roles you're open to — used as floating chips in hero */
  roles: string[];
}

/* ---------- Stats ---------- */

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  /** Optional caption below the value */
  description?: string;
}

/* ---------- Skills ---------- */

export interface Skill {
  name: string;
  /** Short category label shown on hover */
  category: string;
  /** 1-5 proficiency, displayed as a subtle bar */
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

/* ---------- Experience ---------- */

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  /** 3-6 bullet achievements — quantify whenever possible */
  highlights: string[];
  stack: string[];
  companyUrl?: string;
}

/* ---------- Projects ---------- */

export interface Project {
  title: string;
  /** One-line description shown under title */
  summary: string;
  /** Longer description shown in expanded card */
  description: string;
  /** Measurable impact bullets */
  impact: string[];
  stack: string[];
  /** Lucide icon shown next to the project title */
  icon: LucideIcon;
  /** Optional accent color for the card glow */
  accent: "violet" | "emerald" | "amber" | "rose" | "sky" | "fuchsia";
  /** Live demo URL */
  liveUrl?: string;
  /** Source code URL */
  repoUrl?: string;
  /** "Featured" projects are highlighted above the rest */
  featured?: boolean;
}

/* ---------- Education ---------- */

export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
  schoolUrl?: string;
}

/* ---------- Achievements ---------- */

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  /** Short one-liner */
  description?: string;
  url?: string;
  icon: LucideIcon;
}
