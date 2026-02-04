const cardClass =
  "rounded-lg border border-slate-300 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50"

const projects: { title: string; description: string; highlights: string[]; tech: string[]; url?: string }[] = [
  {
    title: "Enterprise Web Platform",
    description:
      "A production-grade web platform with a React + TypeScript frontend and a NestJS backend, designed for scalability, performance, and long-term maintainability.",
    highlights: [
      "Designed a reusable and modular frontend architecture",
      "Optimized rendering performance and reduced bundle size",
      "Built and consumed REST APIs with PostgreSQL-backed services",
      "Owned features from requirement clarification to deployment",
    ],
    tech: ["React", "TypeScript", "Tailwind", "NestJS", "PostgreSQL"],
  },
  {
    title: "Modular Frontend System for Enterprise Applications",
    description:
      "A component-driven frontend system built to support multiple enterprise workflows with consistent UI and predictable state management.",
    highlights: [
      "Developed reusable UI components with strong TypeScript typing",
      "Integrated APIs and managed state using Redux",
      "Ensured design-to-code fidelity and responsive layouts",
    ],
    tech: ["React", "Redux", "TypeScript", "Tailwind CSS"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Projects
      </h2>
      <ul className="mt-6 space-y-4">
        {projects.map((project, i) => (
          <li key={i}>
            <article className={cardClass}>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-200"
                >
                  {project.title}
                </a>
              ) : (
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  {project.title}
                </span>
              )}
              <p className="mt-2 max-w-prose text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              {project.highlights.length > 0 && (
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
                  {project.highlights.map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              )}
              {project.tech.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-300 bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
