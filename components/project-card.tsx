"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  tools: string[];
  outcome: string;
  year?: string;
  category?: string;
  highlight?: string;
  image?: string;
  github?: string;
  demo?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={cardVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,30,0.94),rgba(7,10,22,0.88))] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.36)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.14),transparent_32%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col gap-5">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/55">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(125,211,252,0.14),rgba(167,139,250,0.06))]" />
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={1200}
              height={760}
              className="h-56 w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-56 items-center justify-center text-sm text-slate-300">
              Project preview
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4">
            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-100">
              Case study
            </div>
            <div className="rounded-full border border-amber-300/15 bg-amber-300/10 px-3 py-1 text-[11px] font-medium text-amber-100">
              {project.year ?? `0${index + 1}`}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/80">
              {project.category ?? "Project"}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        {project.highlight ? (
          <div className="rounded-2xl border border-amber-300/14 bg-amber-300/8 px-4 py-3 text-sm text-amber-50">
            {project.highlight}
          </div>
        ) : null}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Tools
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Outcome
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-200">{project.outcome}</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/18 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-50 hover:bg-amber-300/16"
            >
              Live demo
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
