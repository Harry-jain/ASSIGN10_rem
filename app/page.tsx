"use client";

import projectsData from "@/data/projects.json";
import githubProjectsData from "@/data/github-projects.json";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { ProjectCard, type Project } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { useMemo } from "react";

const projects = projectsData as Project[];

type GithubProject = {
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  homepage: string;
};

const githubProjects = githubProjectsData as GithubProject[];
const RESUME_URL = "https://github.com/Harry-jain/Resume";

const highlights = [
  {
    label: "Projects",
    value: "04",
    note: "Structured cards driven by local JSON",
  },
  {
    label: "Focus Areas",
    value: "AI + Cloud",
    note: "Builds that combine research and deployment",
  },
  {
    label: "Delivery",
    value: "Responsive",
    note: "Optimized for desktop, tablet, and mobile",
  },
];

const capabilities = [
  "Research-led design",
  "Cloud deployment",
  "Machine learning",
  "Product storytelling",
  "Responsive interfaces",
  "Motion systems",
];

const remPillars = [
  {
    title: "Research",
    description:
      "Understand the concept, break it into clear artifacts, and map the story before designing the final output.",
  },
  {
    title: "Execution",
    description:
      "Translate the idea into a website, poster, or workflow that looks polished and behaves predictably.",
  },
  {
    title: "Measurement",
    description:
      "Review the result, refine layout decisions, and keep only the parts that improve clarity and usability.",
  },
];

const timeline = [
  {
    period: "2026",
    title: "Portfolio system and deployment polish",
    description:
      "Rebuilt the portfolio as a production-style Next.js app with structured data, motion, resume download, and LAN-ready hosting.",
  },
  {
    period: "2025",
    title: "Cloud setup and design-heavy projects",
    description:
      "Worked on Linux VM deployment, poster design systems, and presentation-ready project storytelling.",
  },
  {
    period: "2024",
    title: "AI and machine learning prototypes",
    description:
      "Developed hackathon and research-flavored prototypes such as Netra AI and Veda ML.",
  },
  {
    period: "Now",
    title: "Placement-ready refinement",
    description:
      "Iterating on a clean story, visible outcomes, and portfolio pages that feel credible to recruiters and reviewers.",
  },
];

const testimonials = [
  {
    quote:
      "The structure is strong. It reads like a real product, not a template exercise.",
    author: "Faculty reviewer",
    role: "Academic feedback",
  },
  {
    quote:
      "The project cards make it easy to understand scope, tools, and outcomes quickly.",
    author: "Peer reviewer",
    role: "Portfolio review",
  },
  {
    quote:
      "The cloud and AI projects together make the profile feel balanced and employable.",
    author: "Placement mentor",
    role: "Career guidance",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const contactMethods = useMemo(
    () => [
      {
        label: "Email",
        value: "Jainhm12@gmail.com",
        href: "mailto:Jainhm12@gmail.com",
      },
      {
        label: "Resume",
        value: "Resume repository",
        href: RESUME_URL,
      },
      {
        label: "GitHub",
        value: "github.com/Harry-jain",
        href: "https://github.com/Harry-jain",
      },
    ],
    [],
  );

  return (
    <main id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.16),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.15),transparent_28%)]" />

      <Navbar />

      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/15 bg-amber-300/8 px-4 py-2 text-xs font-medium text-amber-100">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(125,211,252,0.95)]" />
              Local-first Next.js portfolio with network-ready hosting
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building a <span className="text-gradient">REM portfolio</span> that feels
              cinematic, structured, and easy to extend.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I built this portfolio as a real Next.js app with local JSON data,
              animated sections, reusable cards, and a layout that works on desktop,
              mobile, and your network at <span className="font-mono text-amber-200">0.0.0.0</span>.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(125,211,252,0.28)] hover:translate-y-[-1px] hover:bg-amber-200"
              >
                Explore projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact me
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 px-6 py-3.5 text-sm font-semibold text-amber-50 hover:bg-amber-300/16"
              >
                View resume
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                  className="glass-panel rounded-3xl p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, rotate: 1 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-amber-400/25 blur-3xl hero-glow" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-rose-400/20 blur-3xl hero-glow" />

            <div className="glass-panel-strong relative h-full overflow-hidden rounded-[2rem] p-6 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.12),transparent_28%)]" />
              <div className="relative flex h-full flex-col justify-between gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/75">
                      Profile snapshot
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Harsh Jain</h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-2 text-right">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Status</p>
                    <p className="mt-1 text-sm font-semibold text-amber-100">Open to opportunities</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      What I build
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-200">
                      Fast, responsive interfaces that combine technical depth with clear storytelling.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Delivery style
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-200">
                      Clean implementation, structured data, and reusable pieces that keep the project maintainable.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-amber-300/15 bg-[linear-gradient(135deg,rgba(125,211,252,0.14),rgba(167,139,250,0.12))] p-5">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-amber-50/95">
                    <span className="rounded-full bg-slate-950/35 px-3 py-1 font-medium">App Router</span>
                    <span className="rounded-full bg-slate-950/35 px-3 py-1 font-medium">Tailwind CSS</span>
                    <span className="rounded-full bg-slate-950/35 px-3 py-1 font-medium">Framer Motion</span>
                    <span className="rounded-full bg-slate-950/35 px-3 py-1 font-medium">JSON data</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="section-shell glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10"
        >
          <SectionHeading
            eyebrow="About"
            title="A portfolio that looks polished and still behaves like a real product"
            description="This site is not a static mockup. It is a structured Next.js project with local content, responsive layouts, motion-rich components, and sections that can grow as your work grows."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-8 text-slate-300">
                I focus on practical build quality: clear information hierarchy, smooth
                transitions, and content that is easy to edit without breaking the design.
                This makes the portfolio useful for class submissions, interviews, and future deployment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Primary stack",
                  value: "Next.js + Tailwind",
                  detail: "App Router, reusable components, and utility-first styling.",
                },
                {
                  label: "Motion layer",
                  value: "Framer Motion",
                  detail: "Entrance animation, hover states, menu transitions, and staggered reveals.",
                },
                {
                  label: "Content model",
                  value: "Local JSON",
                  detail: "Real project data is pulled from a structured file for easy updates.",
                },
                {
                  label: "Deployment",
                  value: "Local and network-ready",
                  detail: "Run on localhost or expose it on your LAN using 0.0.0.0.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Projects"
            title="Dynamic cards powered by real JSON data"
            description="Each project card is rendered from local structured data, so you can update titles, tools, outcomes, and descriptions without rewriting the layout."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="github" className="relative mx-auto max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="GitHub"
            title={`All ${githubProjects.length} repositories from github.com/Harry-jain`}
            description="This list is generated from your real public repositories and links directly to each project."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {githubProjects.map((repo, index) => (
              <motion.article
                key={repo.url}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (index % 8) * 0.04, duration: 0.4 }}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                      {repo.language || "Unspecified"}
                    </p>
                  </div>
                  <p className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-slate-200">
                    {new Date(repo.updatedAt).toLocaleDateString()}
                  </p>
                </div>

                {repo.description ? (
                  <p className="mt-3 text-sm leading-7 text-slate-300">{repo.description}</p>
                ) : (
                  <p className="mt-3 text-sm leading-7 text-slate-500">No description provided.</p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/7 px-2.5 py-1">
                    Stars: {repo.stars}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/7 px-2.5 py-1">
                    Forks: {repo.forks}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                  >
                    Open repo
                  </a>
                  {repo.homepage ? (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-amber-300/18 bg-amber-300/10 px-4 py-2 text-xs font-semibold text-amber-50 hover:bg-amber-300/16"
                    >
                      Live site
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="timeline" className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="section-shell glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10"
        >
          <SectionHeading
            eyebrow="Timeline"
            title="A placement-style progression that shows growth over time"
            description="The story here is intentionally linear: design work, cloud work, AI work, and then portfolio polish. That makes the profile easier to read during review."
          />

          <div className="mt-10 grid gap-4">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.period}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:grid-cols-[0.18fr_0.82fr]"
              >
                <div className="flex items-start gap-3 sm:flex-col sm:items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300/12 text-sm font-semibold text-amber-100 ring-1 ring-amber-300/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 sm:pt-0">
                    {entry.period}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="testimonials" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="Feedback that matches the placement story"
            description="These cards give recruiters and reviewers a fast read on how the work is perceived: clear, balanced, and practical."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.author}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6"
              >
                <blockquote className="text-base leading-8 text-slate-200">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="rem" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="section-shell glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10"
        >
          <SectionHeading
            eyebrow="REM"
            title="Explain the REM story clearly, not just visually"
            description="This section turns a technical or academic idea into a readable narrative. The goal is to make the portfolio feel thoughtful, not cluttered."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {remPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-300/12 text-sm font-semibold text-amber-100 ring-1 ring-amber-300/20">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel-strong rounded-[2rem] p-6 sm:p-8 lg:p-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Direct links for quick contact and profile review"
            description="Use these quick actions to reach out, view my GitHub, and open my resume repository."
          />

          <div className="mt-10">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 hover:bg-white/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {method.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-white">{method.value}</p>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-amber-300/14 bg-amber-300/8 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100/90">
                  Quick note
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Resume is now linked to your provided GitHub repository, and every project card still links to real GitHub/live destinations.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-200"
                >
                  Open resume repo
                </a>
                <a
                  href="#top"
                  className="rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Built with Next.js, Tailwind CSS, Framer Motion, and local JSON data.</p>
          <p className="font-mono">localhost:3000 / network-ready on 0.0.0.0</p>
        </div>
      </footer>
    </main>
  );
}
