import {
  Smartphone,
  GraduationCap,
  MessageCircle,
  Sparkles,
  CreditCard,
  Radio,
} from "lucide-react";
import type { Project } from "@/lib/types";

/**
 * Add, remove, or reorder projects freely. Featured projects appear first
 * in a larger card layout, the rest are shown in a compact grid below.
 */
export const projects: Project[] = [
  {
    title: "Production React Native App",
    summary:
      "Cross-platform mobile app serving 50,000+ monthly active users.",
    description:
      "A production React Native application built for Globe13 Digital — used daily by tens of thousands of users. Architected for offline-first behaviour with background sync, push notifications, and resilient state management.",
    impact: [
      "50,000+ monthly active users in production",
      "Offline-first architecture with background sync",
      "Smooth 60fps animations using Reanimated + Gesture Handler",
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Reanimated",
      "Firebase",
      "Push Notifications",
    ],
    icon: Smartphone,
    accent: "violet",
    repoUrl: "https://github.com/Chandan4o4",
    featured: true,
  },
  {
    title: "High-Throughput Node.js API",
    summary:
      "Express API tuned for sub-100ms responses on hot endpoints.",
    description:
      "Backend service powering real-time and transactional workloads. Refactored hot paths and added Redis-backed caching to deliver a documented 40% performance improvement across core endpoints.",
    impact: [
      "40% latency reduction on critical endpoints",
      "Redis caching for read-heavy routes",
      "Documented OpenAPI schema for client teams",
    ],
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Jest",
    ],
    icon: Radio,
    accent: "emerald",
    repoUrl: "https://github.com/Chandan4o4",
    featured: true,
  },
  {
    title: "Real-Time Chat Platform",
    summary:
      "Socket.io-powered chat with typing indicators and presence.",
    description:
      "Real-time messaging experience built on Socket.io with read receipts, typing indicators, and presence. Designed for low-latency fan-out across thousands of concurrent connections.",
    impact: [
      "Sub-50ms message round-trip in-region",
      "Presence + typing indicators out of the box",
      "Graceful reconnection handling on flaky networks",
    ],
    stack: ["Socket.io", "Node.js", "Redis", "React", "MongoDB"],
    icon: MessageCircle,
    accent: "sky",
    repoUrl: "https://github.com/Chandan4o4",
  },
  {
    title: "Razorpay Payment Integration",
    summary:
      "End-to-end payment flows with order capture, webhooks, and refunds.",
    description:
      "Production-grade Razorpay integration covering order creation, signature verification, webhook reconciliation, and a clean refund flow — wired into the same audit pipeline as the rest of the platform.",
    impact: [
      "Verified webhooks with idempotency keys",
      "Clean refund & dispute flow for support team",
      "Reusable across web + mobile surfaces",
    ],
    stack: ["Razorpay", "Node.js", "Express", "MongoDB"],
    icon: CreditCard,
    accent: "amber",
  },
  {
    title: "Secure Video Streaming",
    summary:
      "Signed-URL video pipeline with progress tracking and DRM-ready delivery.",
    description:
      "Streaming pipeline that issues short-lived signed URLs, tracks watch progress, and is structured to plug in DRM providers when content owners require it.",
    impact: [
      "Short-lived signed URLs reduce leak risk",
      "Resumable watch progress per user",
      "CDN-friendly with cache-busting per session",
    ],
    stack: ["Node.js", "AWS S3", "CloudFront", "React"],
    icon: Sparkles,
    accent: "fuchsia",
  },
  {
    title: "Learning Management Side Project",
    summary:
      "Course platform with progress tracking and offline lesson downloads.",
    description:
      "Side project exploring offline-first learning: lessons downloadable for later, progress synced when the user comes back online, and a clean instructor dashboard on the web.",
    impact: [
      "Offline lesson downloads via background fetch",
      "Cross-device progress sync",
      "Instructor dashboard with engagement metrics",
    ],
    stack: ["Next.js", "TypeScript", "React Native", "PostgreSQL"],
    icon: GraduationCap,
    accent: "rose",
    repoUrl: "https://github.com/Chandan4o4",
  },
];
