"use client";

import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/lib/data/profile";
import { socialLinks } from "@/lib/data/nav";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton, AnchorButton } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { FadeIn } from "@/components/fx/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/fx/stagger-container";

function Copyable({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore — clipboard may be unavailable in some browsers
    }
  };

  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
    : {};

  return (
    <div className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-200/70 bg-white/70 p-4 transition-colors hover:border-violet-500/30 dark:border-zinc-800/70 dark:bg-zinc-900/40">
      <Wrapper
        {...wrapperProps}
        className="flex flex-1 items-center gap-3 outline-none"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 text-violet-600 dark:text-violet-300">
          {label === "Email" ? (
            <Mail className="h-4 w-4" aria-hidden />
          ) : (
            <Phone className="h-4 w-4" aria-hidden />
          )}
        </span>
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {label}
          </div>
          <div className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {value}
          </div>
        </div>
      </Wrapper>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-violet-300"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" aria-hidden />
        ) : (
          <Copy className="h-4 w-4" aria-hidden />
        )}
      </button>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-white via-zinc-50 to-violet-50/40 p-8 shadow-sm sm:p-12 dark:border-zinc-800/70 dark:from-zinc-900 dark:via-zinc-950 dark:to-violet-950/30">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <SectionHeading
                  eyebrow="06 / Contact"
                  title="Let's build something useful."
                  description="Whether it's a full-time role, a contract, or a conversation about your stack — I'd love to hear from you."
                />

                <StaggerContainer
                  className="mt-2 flex flex-wrap gap-3"
                  stagger={0.06}
                >
                  <StaggerItem>
                    <AnchorButton
                      href={`mailto:${profile.email}`}
                      variant="primary"
                      size="lg"
                      target="_self"
                    >
                      <Mail className="h-4 w-4" aria-hidden />
                      Email me
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </AnchorButton>
                  </StaggerItem>
                  <StaggerItem>
                    <AnchorButton
                      href="https://wa.me/918708021345"
                      variant="whatsapp"
                      size="lg"
                      target="_blank"
                    >
                      <WhatsAppIcon className="h-4 w-4" aria-hidden />
                      WhatsApp
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </AnchorButton>
                  </StaggerItem>
                  <StaggerItem>
                    <LinkButton
                      href={profile.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="lg"
                    >
                      Download CV
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </LinkButton>
                  </StaggerItem>
                </StaggerContainer>

                <div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="h-4 w-4" aria-hidden />
                  {profile.location} · {profile.availability === "busy" ? "Limited availability" : "Open to opportunities"}
                </div>
              </div>

              <div className="space-y-3">
                <Copyable label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <Copyable label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, "")}`} />

                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/40">
                  <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Around the web
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {socialLinks
                      .filter((link) => link.label !== "Email" && link.label !== "Phone")
                      .map(({ label, href, icon: Icon, username }) => (
                        <li key={label}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${label}${username ? ` (${username})` : ""}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-violet-300"
                          >
                            <Icon className="h-3.5 w-3.5" aria-hidden />
                            {label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
