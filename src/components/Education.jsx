import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="bg-surfaceLight/50 px-6 py-24 dark:bg-surfaceDark/40 lg:pl-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
          Academic Background
        </h2>

        <div className="relative mt-12 space-y-10 border-l border-muted/20 pl-8">
          {education.map((edu, i) => (
            <div key={edu.id} data-aos="fade-up" data-aos-delay={i * 100} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-paper dark:bg-ink" />
              <p className="font-mono text-xs uppercase tracking-wider text-trace">{edu.duration}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{edu.degree}</h3>
              <p className="mt-1 text-muted">{edu.institution}</p>
              <p className="mt-1 font-mono text-sm text-signal">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
