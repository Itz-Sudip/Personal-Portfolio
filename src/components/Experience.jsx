import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 lg:pl-32">
      
      <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
        What I've Done
      </h2>

      <div className="mt-12 space-y-8">
        {experience.map((exp, i) => (
          <div
            key={exp.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="rounded-xl border border-muted/15 p-6 transition-colors hover:border-signal/40 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
              <span className="font-mono text-xs uppercase tracking-wider text-trace">
                {exp.duration}
              </span>
            </div>
            <p className="mt-1 font-mono text-sm text-signal">{exp.company}</p>
            <ul className="mt-4 space-y-2">
              {exp.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
