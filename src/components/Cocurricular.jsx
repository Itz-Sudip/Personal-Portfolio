import { cocurricular } from '../data/portfolioData'

export default function Cocurricular() {
  return (
    <section id="cocurricular" className="mx-auto max-w-6xl px-6 py-24 lg:pl-32">
      <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
        Beyond the Classroom
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {cocurricular.map((item, i) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="rounded-xl border border-muted/15 p-6"
          >
            <h3 className="font-display font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
