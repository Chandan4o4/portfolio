import type { Experience } from "@/lib/types";

export const experience: Experience[] = [
  {
    company: "Globe13 Digital Private Limited",
    role: "Full Stack Developer",
    location: "India · Remote",
    startDate: "Mar 2023",
    endDate: "Present",
    employmentType: "Full-time",
    highlights: [
      "Ship and maintain production React Native apps serving 50,000+ monthly active users with offline-first architecture.",
      "Improved API performance by 40% through query optimization, caching with Redis, and refactoring hot-path handlers in Node.js.",
      "Integrated Razorpay payments, push notifications, and secure video streaming — features that directly moved activation and retention.",
      "Led the migration of a legacy Express codebase to a typed Next.js + TypeScript stack, reducing onboarding time for new engineers.",
      "Built real-time features with Socket.io for chat and live updates, used by thousands of concurrent users.",
    ],
    stack: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Razorpay",
    ],
    companyUrl: "https://globe13.com",
  },
];

/**
 * If you have earlier roles, prepend them here. They're rendered in order
 * (most recent first), so the first entry appears at the top.
 */
