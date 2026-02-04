import selfImage from '../assets/Self.jpg'

const profile = {
  name: "Shravani Kher",
  role: "Software Engineer",
  location: "Akola, Maharashtra, India",
  email: "shravanikher9@gmail.com",
  phone: "+91-9146617557",
  birthday: "9th Aug 1998",
  avatar: selfImage,
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    medium: "https://medium.com/@your-username",
  },
}

const iconWrapClass = "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-slate-200 text-amber-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-amber-500/90"

function IconEmail() {
  return (
    <div className={iconWrapClass} aria-hidden>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
  )
}

function IconPhone() {
  return (
    <div className={iconWrapClass} aria-hidden>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
  )
}

function IconBirthday() {
  return (
    <div className={iconWrapClass} aria-hidden>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  )
}

function IconLocation() {
  return (
    <div className={iconWrapClass} aria-hidden>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const valueEl = href ? (
    <a href={href} className="truncate text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-200">
      {value}
    </a>
  ) : (
    <span className="text-slate-800 dark:text-slate-100">{value}</span>
  )
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm">{valueEl}</p>
      </div>
    </div>
  )
}

export function Sidebar() {
  const { name, role, email, location, phone, birthday, avatar, socials } = profile

  return (
    <aside className="hidden shrink-0 flex-col overflow-hidden rounded-xl border border-white/40 bg-white/75 p-8 shadow-lg shadow-slate-300/20 backdrop-blur-xl dark:border-slate-500/30 dark:bg-slate-900/75 dark:shadow-black/20 lg:flex lg:h-full lg:w-1/4">
      {/* Profile image area */}
      <div className="flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800/80">
          {avatar ? (
            <img
              src={avatar}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-4xl text-slate-400 dark:text-slate-500" aria-hidden>
              —
            </span>
          )}
        </div>
      </div>

      {/* Name */}
      <h1 className="mt-6 text-center text-2xl font-bold text-slate-800 dark:text-slate-100">
        {name}
      </h1>

      {/* Role badge */}
      <p className="mt-2 text-center">
        <span className="inline-block rounded-lg border border-slate-300 bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
          {role}
        </span>
      </p>

      {/* Separator */}
      <hr className="mt-6 border-slate-300 dark:border-slate-700" />

      {/* Contact: icon + label + value */}
      <div className="mt-6 flex flex-col gap-4">
        <ContactRow
          icon={<IconEmail />}
          label="Email"
          value={email}
          href={`mailto:${email}`}
        />
        <ContactRow
          icon={<IconPhone />}
          label="Phone"
          value={phone || "—"}
        />
        <ContactRow
          icon={<IconBirthday />}
          label="Birthday"
          value={birthday || "—"}
        />
        <ContactRow icon={<IconLocation />} label="Location" value={location} />
      </div>

      {/* Footer: small social icons */}
      <div className="mt-auto flex justify-center gap-4 pt-8">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          aria-label="GitHub"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          aria-label="LinkedIn"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        {socials.medium && (
          <a
            href={socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            aria-label="Medium"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
        )}
      </div>
    </aside>
  )
}
