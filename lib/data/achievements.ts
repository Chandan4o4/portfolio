import { Trophy, Award, Star, Medal } from "lucide-react";
import type { Achievement, Stat } from "@/lib/types";

export const achievements: Achievement[] = [
  {
    title: "50K+ MAU Milestone",
    issuer: "Globe13 Digital",
    date: "2024",
    description:
      "Helped ship a React Native app that crossed 50,000 monthly active users in production.",
    icon: Trophy,
  },
  {
    title: "40% API Performance Lift",
    issuer: "Globe13 Digital",
    date: "2024",
    description:
      "Refactored critical Node.js endpoints and added Redis caching to cut latency by 40%.",
    icon: Award,
  },
  {
    title: "Open Source Contributor",
    issuer: "GitHub",
    date: "Ongoing",
    description:
      "Active GitHub profile with reusable utilities and side projects (see github.com/Chandan4o4).",
    icon: Star,
    url: "https://github.com/Chandan4o4",
  },
  {
    title: "MCA Academic Record",
    issuer: "Kurukshetra University",
    date: "2024",
    description:
      "Completed Master of Computer Applications with a strong applied software focus.",
    icon: Medal,
  },
];

/**
 * Hero stats. Each number is animated from zero when scrolled into view,
 * which recruiters love — it's a quick scan of impact.
 */
export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years of experience", description: "shipping production software" },
  { value: 50000, suffix: "+", label: "Active users", description: "across shipped products" },
  { value: 40, suffix: "%", label: "API perf lift", description: "via caching & refactor" },
  { value: 20, suffix: "+", label: "Projects shipped", description: "web, mobile & APIs" },
];
