"use client";

import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/data/profile";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/fx/magnetic";
import { SplitWords } from "@/components/fx/text-reveal";
import { GradientMesh } from "@/components/fx/gradient-mesh";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";

const availabilityCopy: Record<typeof profile.availability, string> = {
  available: "Open to opportunities",
  open: "Open to opportunities",
  busy: "Limited availability",
};

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <GradientMesh />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6 inline-flex"
          >
            <Badge variant="violet" className="px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              {availabilityCopy[profile.availability]}
            </Badge>
          </motion.div>

          {/* Role + name headline */}
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-zinc-50">
            <SplitWords text="Hi, I'm" delay={0.05} />
            <br />
            <SplitWords
              text={profile.name}
              delay={0.2}
              wordClassName="bg-gradient-to-r from-violet-600 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent"
            />
            <br />
            <SplitWords
              text={`a ${profile.role}.`}
              delay={0.4}
              className="text-zinc-700 dark:text-zinc-300"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {profile.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={10}>
              <LinkButton href="#projects" size="lg" variant="primary">
                View my work
                <ArrowDown className="h-4 w-4" />
              </LinkButton>
            </Magnetic>
            <Magnetic strength={10}>
              <LinkButton href="#contact" size="lg" variant="secondary">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </LinkButton>
            </Magnetic>
          </motion.div>

          {/* Location + role chips */}
          <StaggerContainer
            delay={1}
            stagger={0.06}
            className="mt-10 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <StaggerItem>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                {profile.location}
              </span>
            </StaggerItem>
            {profile.roles.map((role) => (
              <StaggerItem key={role}>
                <Badge variant="outline" className="font-normal">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  {role}
                </Badge>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Right column: signature card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-white to-zinc-100 p-1 shadow-2xl shadow-violet-500/10 dark:border-zinc-800/70 dark:from-zinc-900 dark:to-zinc-950">
            <div className="rounded-[1.35rem] bg-white p-8 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  developer.json
                </span>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
              </div>
              <pre className="mt-4 overflow-hidden font-mono text-[13px] leading-6 text-zinc-700 dark:text-zinc-300">
{`{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "location": "${profile.location}",
  "stack": [
    "Next.js", "React Native",
    "Node.js", "TypeScript",
    "MongoDB", "PostgreSQL"
  ],
  "open_to_work": ${profile.availability === "busy" ? "limited" : "true"}
}`}
              </pre>
              <div className="mt-6 flex flex-wrap gap-2">
                <LinkButton
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="secondary"
                >
                  Download CV
                </LinkButton>
                <LinkButton href="#contact" size="sm" variant="ghost">
                  Hire me
                </LinkButton>
              </div>
            </div>
          </div>

          {/* Decorative floating dots */}
          {!prefersReduced && (
            <>
              <motion.div
                aria-hidden
                className="absolute -right-6 -top-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 opacity-90 shadow-lg shadow-violet-500/30"
                animate={{ rotate: [0, 8, -4, 0], y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 opacity-90 shadow-lg shadow-emerald-500/30"
                animate={{ rotate: [0, -10, 6, 0], y: [0, 4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
