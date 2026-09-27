import { GraduationCap, ExternalLink } from "lucide-react";
import { education } from "@/lib/data/education";
import { achievements } from "@/lib/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 / Education & Recognition"
          title="How I got here."
          description="A quick view of my academic background and a few milestones I'm proud of."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              <GraduationCap className="h-4 w-4" aria-hidden />
              Education
            </h3>
            <StaggerContainer className="space-y-4" stagger={0.08}>
              {education.map((entry) => (
                <StaggerItem
                  key={`${entry.school}-${entry.degree}`}
                  className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 transition-colors hover:border-violet-500/30 dark:border-zinc-800/70 dark:bg-zinc-900/40"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      {entry.schoolUrl ? (
                        <a
                          href={entry.schoolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors hover:text-violet-600 dark:hover:text-violet-300"
                        >
                          {entry.school}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      ) : (
                        entry.school
                      )}
                    </h4>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      {entry.startDate} — {entry.endDate}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {entry.degree}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-500">
                    {entry.field}
                  </div>
                  {entry.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {entry.description}
                    </p>
                  ) : null}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              <span aria-hidden>★</span>
              Recognition
            </h3>
            <StaggerContainer className="space-y-4" stagger={0.08}>
              {achievements.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-zinc-200/70 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-900/40"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 text-violet-600 transition-transform group-hover:scale-110 dark:text-violet-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-colors hover:text-violet-600 dark:hover:text-violet-300"
                            >
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </h4>
                        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                          {item.date}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {item.issuer}
                      </div>
                      {item.description ? (
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
