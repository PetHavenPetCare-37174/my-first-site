import { About } from '@/components/about'
import { CardHeader } from '@/components/card-header'
import { Contact } from '@/components/contact'
import { Services } from '@/components/services'

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-sky-soft px-4 py-10 sm:py-16">
      <article className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-sky/30">
        <CardHeader />
        <div className="flex flex-col gap-10 px-8 py-10 sm:px-12">
          <Services />
          <About />
          <Contact />
        </div>
      </article>
    </main>
  )
}
