import type { Profile } from "@/lib/types";

/**
 * Master profile record. Edit this file to update the hero, about,
 * navbar, footer, and contact sections in one place.
 */
export const profile: Profile = {
  name: "Chandan Kumar",
  initials: "CK",
  role: "Full Stack Developer",
  tagline:
    "I build fast, reliable, and beautifully crafted web & mobile products.",
  summary:
    "Full Stack Developer with 3+ years shipping production web and mobile apps that serve tens of thousands of users. I focus on performance, accessibility, and clean architecture — from React Native offline-first apps to high-throughput Node.js APIs.",
  about: [
    "I'm a Full Stack Developer based in Karnal, Haryana, currently working at Globe13 Digital where I help ship products used by 50,000+ people every month. My sweet spot is the intersection of polished UI and well-engineered backends — I care as much about a 40% API latency reduction as I do about a smooth micro-interaction.",
    "On the front-end I lean on React, Next.js, TypeScript, and React Native, with Redux Toolkit and React Query keeping state predictable. On the back-end I'm comfortable across Node.js, Express, PostgreSQL, MongoDB, and Redis — including real-time features with Socket.io and integrations with payment gateways like Razorpay.",
    "I'm an MCA graduate from Kurukshetra University and a lifelong learner — I write clean code, ship incrementally, and treat production observability as a first-class concern. If you're building something that needs to feel fast and stay fast, I'd love to talk.",
  ],
  location: "Karnal, Haryana, India",
  email: "chandanknl77@gmail.com",
  phone: "+91 87080 21345",
  resumeUrl: "/resume.pdf",
  availability: "available",
  roles: [
    "Full Stack Developer",
    "React / Next.js",
    "React Native",
    "Node.js APIs",
  ],
};
