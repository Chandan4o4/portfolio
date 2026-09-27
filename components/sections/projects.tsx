import { Sparkles } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";
import { GithubIcon } from "@/components/ui/brand-icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

const accentStyles: Record<Project["accent"], string> = {
  violet:
    "from-violet-500/20 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/30",
  emerald:
    "from-emerald-500/20 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/30",
  amber:
    "from-amber-500/20 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/30",
  rose: "from-rose-500/20 via-rose-500/0 to-rose-500/0 group-hover:from-rose-500/30",
  sky: "from-sky-500/20 via-sky-500/0 to-sky-500/0 group-hover:from-sky-500/30",
  fuchsia:
    "from-fuchsia-500/20 via-fuchsia-500/0 to-fuchsia-500/0 group-hover:from-fuchsia-500/30",
};

const iconWrapStyles: Record<Project["accent"], string> = {
  violet:
    "from-violet-500/20 to-indigo-500/20 text-violet-600 dark:text-violet-300",
  emerald:
    "from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-300",
  amber:
    "from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-300",
  rose: "from-rose-500/20 to-pink-500/20 text-rose-600 dark:text-rose-300",
  sky: "from-sky-500/20 to-cyan-500/20 text-sky-600 dark:text-sky-300",
  fuchsia:
    "from-fuchsia-500/20 to-purple-500/20 text-fuchsia-600 dark:text-fuchsia-300",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Icon = project.icon;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 dark:border-zinc-800/70 dark:bg-zinc-900/40 dark:hover:shadow-violet-500/10",
        featured && "sm:col-span-2",
      )}
    >
      {/* Accent gradient overlay */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100",
          accentStyles[project.accent],
        )}
      />

      <div className="relative flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm",
              iconWrapStyles[project.accent],
            )}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-600 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-violet-300"
                aria-label={`Open ${project.title} live demo`}
              >
                <Sparkles className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-600 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-violet-300"
                aria-label={`View ${project.title} source`}
              >
                <GithubIcon className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {project.summary}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {featured ? project.description : project.description}
          </p>
        </div>

        {project.impact.length > 0 ? (
          <ul className="mt-1 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
            {project.impact.map((line) => (
              <li key={line} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 / Projects"
          title="Things I've built."
          description="A selection of work I'm proud of — production apps, internal tools, and side projects that taught me something new."
        />

        {featured.length > 0 ? (
          <StaggerContainer className="grid gap-4 sm:grid-cols-2" stagger={0.1}>
            {featured.map((project) => (
              <StaggerItem key={project.title} className="h-full">
                <ProjectCard project={project} featured />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : null}

        {rest.length > 0 ? (
          <StaggerContainer
            className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {rest.map((project) => (
              <StaggerItem key={project.title} className="h-full">
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : null}
      </div>
    </section>
  );
}
