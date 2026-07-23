import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:pl-32">
      
      <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
        Things I've Built
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="group flex flex-col rounded-xl border border-muted/15 p-6 transition-all hover:-translate-y-1 hover:border-signal/50"
          >
            <h3 className="font-display text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-trace/10 px-2.5 py-1 font-mono text-[11px] text-trace"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 border-t border-muted/10 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-signal"
              >
                <FiGithub size={14} /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-signal"
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
