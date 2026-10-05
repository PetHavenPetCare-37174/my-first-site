import Image from 'next/image'

export function CardHeader() {
  return (
    <header className="bg-sky px-8 pb-10 pt-12 text-center text-sky-deep sm:px-12">
      <div className="relative mx-auto mb-6 size-36 overflow-hidden rounded-full border-4 border-white shadow-sm sm:size-44">
        <Image
          src="/images/natalie-and-princess.jpg"
          alt="Natalie Mahle kneeling beside a boxer dog"
          fill
          priority
          sizes="(min-width: 640px) 176px, 144px"
          className="object-cover object-[60%_35%]"
        />
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
