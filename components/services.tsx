import { Footprints, House, Moon } from 'lucide-react'

const services = [
  { label: 'Overnight stays', icon: Moon },
  { label: 'Drop-in visits', icon: House },
  { label: 'Dog walking', icon: Footprints },
]

export function Services() {
  return (
    <section aria-labelledby="services-heading">
      <h2
        id="services-heading"
        className="text-sm font-semibold uppercase tracking-widest text-sky-deep"
      >
        What I do
      </h2>
      <p className="mt-3 text-pretty leading-relaxed text-slate-700">
        In-home pet care, including:
      </p>
      <ul className="mt-4 flex flex-wrap gap-3">
        {services.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center gap-2 rounded-full bg-sky-soft px-4 py-2 text-sm font-medium text-sky-deep"
          >
            <Icon className="size-4" aria-hidden="true" />
            {label}
          </li>
        ))}
        <li className="flex items-center rounded-full border border-sky px-4 py-2 text-sm font-medium text-sky-deep">
          and more
        </li>
      </ul>
    </section>
  )
}
