import { Heart } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { socialLinks } from "@/lib/data/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-zinc-50/60 py-10 dark:border-zinc-800/60 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span>© {year} {profile.name}</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-rose-500" aria-hidden /> using Next.js
          </span>
        </div>
        <ul className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
