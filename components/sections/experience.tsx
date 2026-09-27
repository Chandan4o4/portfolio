import { Briefcase, ExternalLink } from "lucide-react";
import { experience } from "@/lib/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Where I've shipped."
          description="Roles where I owned end-to-end delivery — from API design to the last animation polish."
        />

        <div className="relative">
          {/* Timeline rail */}
          <div
            aria-hidden
            className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent"
          />

          <StaggerContainer className="space-y-10" stagger={0.1}>
            {experience.map((job) => (
              <StaggerItem key={`${job.company}-${job.role}`} className="relative pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-500/15 to-indigo-500/15 text-violet-600 shadow-sm dark:text-violet-300"
                >
                  <Briefcase className="h-4 w-4" />
                </span>

                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 transition-colors hover:border-violet-500/30 sm:p-8 dark:border-zinc-800/70 dark:bg-zinc-900/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">
                        {job.role}
                        <span className="text-zinc-500"> · </span>
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
                          >
                            {job.company}
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          </a>
                        ) : (
                          <span className="text-violet-600 dark:text-violet-300">
                            {job.company}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {job.location} · {job.employmentType}
                      </p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      {job.startDate} — {job.endDate}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
                    {job.highlights.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
