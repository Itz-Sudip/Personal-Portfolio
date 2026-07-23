import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-surfaceLight/50 px-6 py-24 dark:bg-surfaceDark/40 lg:pl-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
          Verified Credentials
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group flex flex-col justify-between rounded-xl border border-muted/15 p-6 transition-colors hover:border-signal/50"
            >
              <div className="flex items-start justify-between">
                <FiAward className="text-signal" size={22} />
                <FiExternalLink
                  className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                  size={16}
                />
              </div>
              <div className="mt-6">
                <h3 className="font-display font-semibold">{cert.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
