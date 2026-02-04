interface SectionNavProps {
  links: readonly { label: string; href: string }[]
}

export function SectionNav({ links }: SectionNavProps) {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-3xl flex-wrap gap-2 px-8 py-4 sm:gap-4">
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="rounded px-3 py-1.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
