import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown, FiCode } from 'react-icons/fi'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { profile } from '../data/portfolioData'

const codingIcons = {
  leetcode: SiLeetcode,
  codechef: SiCodechef,
  codeforces: SiCodeforces,
  atcoder: FiCode,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:pl-32"
    >
      {/* Ambient schematic background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-2xl text-center lg:text-left">
          <motion.p variants={item} className="eyebrow mb-4">
           Hello, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-mono text-sm text-trace sm:text-base">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <FiDownload size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-muted/30 px-5 py-3 font-mono text-sm transition-colors hover:border-signal hover:text-signal"
            >
              Get in Touch
            </a>
            <div className="flex items-center gap-3 pl-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-signal"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-signal"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
          >
            {profile.codingProfiles.map((cp) => {
              const Icon = codingIcons[cp.id] ?? FiCode
              return (
                <a
                  key={cp.id}
                  href={cp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-muted/20 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-signal hover:text-signal"
                >
                  <Icon size={13} />
                  <span>{cp.name}</span>
                  <span className="text-muted/40">·</span>
                  <span>{cp.detail}</span>
                </a>
              )
            })}
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-muted/15 pt-6"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-signal sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div variants={item} className="relative shrink-0">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-signal/20 to-trace/20 sm:h-72 sm:w-72">
            <div className="absolute inset-0 animate-pulseGlow rounded-full" />
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-[92%] w-[92%] rounded-full object-cover"
              />
            ) : (
              <div className="flex h-[92%] w-[92%] items-center justify-center rounded-full bg-surfaceLight font-display text-5xl font-bold text-signal dark:bg-surfaceDark">
                {initials}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted sm:block"
      >
        <FiArrowDown size={20} />
      </a>
    </section>
  )
}
