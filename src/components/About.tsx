const title = "About Me"

const summary =
  "Hi, I'm a Software Developer with about four years of experience building web applications and continuously learning along the way. I enjoy creating things from the ground up, working with modern JavaScript tools, and turning ideas into solutions that are simple, thoughtful, and useful.\n\n" +
  "Outside of work, I spend my time playing the guitar, reading novels, writing blogs, and being around cats. Music, books, and writing help me slow down, reflect, and see things from different perspectives, while the quiet presence of animals keeps life calm, simple, and balanced."

export function About() {
  const paragraphs = summary.trim().split(/\n\n+/)

  return (
    <section id="about" className="pb-12 pt-0">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
      <div className="mt-1 h-0.5 w-12 bg-amber-500" aria-hidden />
      <div className="mt-6 max-w-prose space-y-4 text-slate-600 leading-relaxed dark:text-slate-300">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  )
}
