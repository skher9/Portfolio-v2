const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  tools: "Tools",
} as const

const skills = {
  frontend: [
    "React",
    "Next.js",
    "Redux",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "MUI",
    "CSS Modules",
    "Styled Components",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express.js",
    "REST APIs",
  ],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "SQL",
  ],
  tools: [
    "Git",
    "Linux",
    "Webpack",
    "Jira",
  ],
}

export function Skills() {
  const entries = Object.entries(skills) as [keyof typeof skills, string[]][]

  return (
    <section id="skills" className="pb-12 pt-0">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Skills
      </h2>
      <div className="mt-1 h-0.5 w-12 bg-amber-500" aria-hidden />
      <div className="mt-6 space-y-5">
        {entries.map(([key, items]) => (
          <div key={key}>
            <h3 className="text-sm font-medium text-slate-500 mb-2 dark:text-slate-400">
              {categoryLabels[key]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-slate-200 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
