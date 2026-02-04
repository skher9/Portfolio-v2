interface HeroProps {
  name: string
  /** Short one-liner for hero; if absent, summary is used. */
  intro: string
}

export function Hero({ name, intro }: HeroProps) {
  return (
    <section id="hero" className="py-16">
      <h1 className="text-3xl font-semibold text-slate-100">
        Hi, I'm {name}
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-slate-400">
        {intro}
      </p>
    </section>
  )
}
