import { skillGroups } from "@/lib/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";
import { FadeIn } from "@/components/fx/fade-in";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 / Skills"
          title="The stack I reach for."
          description="A pragmatic toolbelt — modern React on the front, Node.js on the back, with the boring-but-critical pieces (caching, queues, observability) wired in between."
        />

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem
                key={group.title}
                className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 dark:border-zinc-800/70 dark:bg-zinc-900/40 dark:hover:shadow-violet-500/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 text-violet-600 transition-colors group-hover:from-violet-500/25 group-hover:to-indigo-500/25 dark:text-violet-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      {group.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-500">
                          {skill.category}
                        </span>
                      </div>
                      <div
                        aria-hidden
                        className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/70 dark:bg-zinc-800/70"
                      >
                        <FadeIn
                          delay={0.05}
                          duration={0.8}
                          y={0}
                          x={0}
                          once
                          amount={0.1}
                          className="h-full"
                        >
                          <div
                            className={cn(
                              "h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500",
                            )}
                            style={{ width: `${(skill.level / 5) * 100}%` }}
                          />
                        </FadeIn>
                      </div>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
