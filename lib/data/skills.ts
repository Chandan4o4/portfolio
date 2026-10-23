import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Pixel-perfect, accessible interfaces with modern React stacks.",
    icon: Code2,
    skills: [
      { name: "React", category: "Library", level: 5 },
      { name: "Next.js", category: "Framework", level: 5 },
      { name: "TypeScript", category: "Language", level: 5 },
      { name: "Tailwind CSS", category: "Styling", level: 5 },
      { name: "Redux Toolkit", category: "State", level: 4 },
      { name: "React Query", category: "Data", level: 4 },
      { name: "Framer Motion", category: "Animation", level: 4 },
    ],
  },
  {
    title: "Mobile",
    description:
      "Cross-platform apps with offline-first architecture and smooth UX.",
    icon: Smartphone,
    skills: [
      { name: "React Native", category: "Framework", level: 5 },
      { name: "Reanimated", category: "Animation", level: 4 },
      { name: "Push Notifications", category: "Integration", level: 4 },
      { name: "Offline Sync", category: "Architecture", level: 4 },
    ],
  },
  {
    title: "Backend",
    description:
      "Scalable REST APIs, real-time services, and integration work.",
    icon: Server,
    skills: [
      { name: "Node.js", category: "Runtime", level: 5 },
      { name: "Express.js", category: "Framework", level: 5 },
      { name: "REST APIs", category: "Pattern", level: 5 },
      { name: "Socket.io", category: "Real-time", level: 4 },
      { name: "Authentication", category: "Security", level: 4 },
    ],
  },
  {
    title: "Databases",
    description: "Schema design, query tuning, and caching for hot paths.",
    icon: Database,
    skills: [
      { name: "MongoDB", category: "NoSQL", level: 5 },
      { name: "PostgreSQL", category: "Relational", level: 4 },
      { name: "MySQL", category: "Relational", level: 4 },
      { name: "Redis", category: "Cache", level: 4 },
      { name: "Mongoose", category: "ODM", level: 4 },
    ],
  },
  {
    title: "Integrations",
    description:
      "Third-party services that round out a production-ready product.",
    icon: Cloud,
    skills: [
      { name: "LLM API integration", category: "AI", level: 3 },
      { name: "Razorpay", category: "Payments", level: 4 },
      { name: "Firebase", category: "Backend-as-a-Service", level: 4 },
      { name: "AWS S3", category: "Storage", level: 4 },
      { name: "Vercel", category: "Hosting", level: 4 },
    ],
  },
  {
    title: "Tooling",
    description: "The day-to-day stack that keeps shipping fast and safe.",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", category: "Version Control", level: 5 },
      { name: "Docker", category: "Containers", level: 3 },
      { name: "Postman", category: "API Testing", level: 5 },
      { name: "CI/CD", category: "DevOps", level: 3 },
    ],
  },
];
