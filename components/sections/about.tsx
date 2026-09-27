import { profile } from "@/lib/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 / About"
          title="Building software that earns its keep."
          description="Three years in, I've learned that the most-loved products are the ones engineered end-to-end — performance, design, and reliability all pulling in the same direction."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <StaggerContainer className="space-y-5 text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-300">
            {profile.about.map((paragraph, i) => (
              <StaggerItem key={i}>
                <p>{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer
            delay={0.2}
            className="grid gap-4 self-start sm:grid-cols-2 lg:grid-cols-1"
          >
            {[
              { label: "Currently", value: "Full-time at Globe13 Digital" },
              { label: "Open to", value: "Senior Full Stack roles" },
              { label: "Working hours", value: "IST · flexible globally" },
              { label: "Languages", value: "English, Hindi" },
            ].map((item) => (
              <StaggerItem
                key={item.label}
                className="rounded-2xl border border-zinc-200/70 bg-white/60 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/40"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  {item.label}
                </div>
                <div className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {item.value}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
