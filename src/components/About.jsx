import { motion } from 'framer-motion'
import { about, profile } from '../data/portfolioData'

export default function About() {
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:pl-32">
      
      <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
        Who am I
      </h2>

      <div className="mt-10 grid items-center gap-12 lg:grid-cols-5">
        <div className="space-y-8 lg:order-2 lg:col-span-3">
          <p
            className="text-base leading-relaxed text-muted lg:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {about.summary}
          </p>

          <ul className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            {about.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-trace" />
                <span className="text-sm sm:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Animated photo */}
        <motion.div
          className="relative mx-auto lg:order-1 lg:col-span-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="relative h-64 w-64 sm:h-72 sm:w-72"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Rotating gradient ring behind the photo */}
            <motion.div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-signal/40 via-trace/30 to-transparent blur-md"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-muted/15 bg-surfaceLight shadow-xl dark:bg-surfaceDark">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-display text-6xl font-bold text-signal">{initials}</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
