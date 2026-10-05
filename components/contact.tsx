import { Mail } from 'lucide-react'

const email = 'nataliemahle0726@gmail.com'

export function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="rounded-2xl bg-sky-soft p-6 text-center"
    >
      <h2
        id="contact-heading"
        className="text-sm font-semibold uppercase tracking-widest text-sky-deep"
      >
        How to reach me
      </h2>
      <a
        href={`mailto:${email}`}
        className="mt-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-sky px-6 py-3 font-semibold text-sky-deep transition-colors hover:bg-sky-deep hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-deep"
      >
        <Mail className="size-5 shrink-0" aria-hidden="true" />
        <span className="break-all">{email}</span>
      </a>
    </section>
  )
}
