import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

/**
 * Single-page portfolio — every section is anchored to a hash and reachable
 * from the navbar. Recruiters can scan the whole story in one scroll.
 *
 * To reorder or add a section, just move the components around. Each one is
 * self-contained and reads its own data from `lib/data/*`.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
