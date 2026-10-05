import { PawPrint } from 'lucide-react'

export function CardHeader() {
  return (
    <header className="bg-sky px-8 pb-10 pt-12 text-center text-sky-deep sm:px-12">
      <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-white/70">
        <PawPrint className="size-8" aria-hidden="true" />
      </div>
      <h1 className="font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
        Pet Haven Pet Care
      </h1>
      <p className="mt-3 text-base font-medium sm:text-lg">
        Natalie Mahle &middot; Sole Proprietor
      </p>
    </header>
  )
}
