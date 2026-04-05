"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "timeline", label: "Timeline" },
  { id: "testimonials", label: "Testimonials" },
  { id: "rem", label: "REM" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.dataset.scrollLock = menuOpen ? "true" : "false";

    return () => {
      document.body.dataset.scrollLock = "false";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="liquid-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.24em] uppercase text-slate-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/12 text-amber-200 ring-1 ring-amber-300/25 transition group-hover:scale-105 group-hover:bg-amber-300/18">
            HJ
          </span>
          <span className="hidden sm:block">Harsh Jain</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white/18 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.22)]"
                    : "text-slate-300 hover:bg-white/8 hover:text-white"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-amber-300/28 bg-amber-300/14 px-4 py-2 text-sm font-semibold text-amber-100 hover:border-amber-200/45 hover:bg-amber-300/20 md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-6xl md:hidden"
          >
            <div className="liquid-glass overflow-hidden rounded-3xl p-3">
              <div className="grid gap-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {section.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
