const title = "Contact"
const message =
  "Reach out via the email in the sidebar, or through GitHub and LinkedIn."

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
      <p className="mt-6 max-w-prose text-slate-600 dark:text-slate-400">
        {message}
      </p>
    </section>
  )
}
