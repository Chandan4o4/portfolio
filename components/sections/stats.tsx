import { stats } from "@/lib/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { CountUp } from "@/components/fx/count-up";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          centered
          eyebrow="Impact in numbers"
          title="The short version."
          description="A quick scan of what I bring to the table."
        />

        <StaggerContainer
          className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
          stagger={0.08}
        >
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 sm:p-8 dark:border-zinc-800/70 dark:bg-zinc-900/40 dark:hover:shadow-violet-500/10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-baseline gap-1 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                {stat.prefix ? (
                  <span className="text-zinc-500">{stat.prefix}</span>
                ) : null}
                <CountUp to={stat.value} />
                {stat.suffix ? (
                  <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    {stat.suffix}
                  </span>
                ) : null}
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {stat.label}
              </div>
              {stat.description ? (
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {stat.description}
                </div>
              ) : null}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
