const cardClass =
  "rounded-lg border border-slate-300 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50"

const experience = [
  {
    company: "Coditation Systems",
    role: "Software Engineer (SDE II)",
    duration: "May 2024 – Present",
    description: [
      "Built and maintained scalable full-stack web applications using React (TypeScript) and NestJS, following clean and modular architecture principles.",
      "Designed and implemented RESTful APIs using NestJS and PostgreSQL, improving response times and ensuring consistent data flow.",
      "Improved frontend performance by optimizing React renders, implementing lazy loading, and fine-tuning build configurations.",
      "Owned features end-to-end from planning to deployment, collaborating closely with designers, QA, and senior engineers.",
      "Refactored legacy codebases and introduced scalable folder structures, reducing bugs and improving developer onboarding.",
    ],
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst (Associate Software Engineer)",
    duration: "July 2022 – April 2024",
    description: [
      "Contributed to the development of responsive enterprise web applications using React, Redux, and Tailwind CSS.",
      "Built reusable UI components using TypeScript and CSS Modules to ensure consistency and maintainability.",
      "Worked closely with backend engineers, designers, and QA teams to integrate APIs and deliver end-to-end features.",
      "Participated in Agile development processes including sprint planning, stand-ups, and code reviews.",
    ],
    tech: ["React", "Redux", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="pb-12 pt-0">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Experience
      </h2>
      <div className="mt-1 h-0.5 w-12 bg-amber-500" aria-hidden />
      <ul className="mt-6 space-y-4">
        {experience.map((job, i) => (
          <li key={i}>
            <article className={cardClass}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  {job.role} · {job.company}
                </span>
                <span className="text-sm text-slate-500">
                  {job.duration}
                </span>
              </div>
              {job.description.length > 0 && (
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
                  {job.description.map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              )}
              {job.tech.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
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
