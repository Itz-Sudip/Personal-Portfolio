import { FiCode, FiDroplet, FiTool } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si'
import { skillCategories, skillProficiency } from '../data/portfolioData'

const categoryIcons = {
  code: FiCode,
  droplet: FiDroplet,
  tool: FiTool,
}

const badgeMap = {
  c: { type: 'text', label: 'C', bg: 'bg-surfaceLight dark:bg-white/10', color: 'text-current' },
  cpp: { type: 'text', label: 'C++', bg: 'bg-indigo-400/10', color: 'text-indigo-300' },
  js: { type: 'text', label: 'JS', bg: 'bg-paper dark:bg-white', color: 'text-ink' },
  react: { type: 'icon', Icon: FaReact, bg: 'bg-sky-400/10', color: 'text-sky-400' },
  next: { type: 'icon', Icon: SiNextdotjs, bg: 'bg-ink/5 dark:bg-white/10', color: 'text-current' },
  tailwind: { type: 'icon', Icon: SiTailwindcss, bg: 'bg-cyan-400/10', color: 'text-cyan-400' },
  node: { type: 'icon', Icon: FaNodeJs, bg: 'bg-green-500/10', color: 'text-green-500' },
  express: { type: 'text', label: 'Ex', bg: 'bg-surfaceLight dark:bg-white/10', color: 'text-current' },
  mongodb: { type: 'icon', Icon: SiMongodb, bg: 'bg-green-600/10', color: 'text-green-600' },
  python: { type: 'icon', Icon: FaPython, bg: 'bg-yellow-400/10', color: 'text-yellow-500' },
  mysql: { type: 'icon', Icon: SiMysql, bg: 'bg-blue-500/10', color: 'text-blue-500' },
  git: { type: 'icon', Icon: FaGitAlt, bg: 'bg-orange-500/10', color: 'text-orange-500' },
  github: { type: 'icon', Icon: FaGithub, bg: 'bg-ink/5 dark:bg-white/10', color: 'text-current' },
  dsa: { type: 'text', label: 'DS', bg: 'bg-fuchsia-400/10', color: 'text-fuchsia-400' },
  oop: { type: 'text', label: 'OOP', bg: 'bg-rose-400/10', color: 'text-rose-400' },
}

function SkillBadge({ icon }) {
  const config = badgeMap[icon] ?? badgeMap.c
  const base = `flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-display font-bold ${config.bg} ${config.color}`

  if (config.type === 'icon') {
    const Icon = config.Icon
    return (
      <div className={base}>
        <Icon size={26} />
      </div>
    )
  }

  return (
    <div className={base}>
      <span className="font-mono text-sm">{config.label}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-surfaceLight/50 px-6 py-24 dark:bg-surfaceDark/40 lg:pl-32">
      <div className="mx-auto max-w-6xl">

        <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
          Tech Stack
        </h2>

        {/* Category cards with pill tags */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.icon] ?? FiCode
            return (
              <div
                key={category.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="rounded-xl border border-muted/15 border-t-[3px] border-t-signal bg-surfaceLight p-6 dark:bg-surfaceDark/60"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="text-signal" size={20} />
                  <h3 className="font-display text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-muted/15 bg-ink/5 px-3.5 py-1.5 text-sm text-current dark:bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Proficiency cards with progress bars */}
        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {skillProficiency.map((skill, i) => (
            <div
              key={skill.id}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className="rounded-xl border border-muted/15 bg-surfaceLight p-6 dark:bg-surfaceDark/60"
            >
              <SkillBadge icon={skill.icon} />
              <h4 className="mt-4 font-display text-lg font-bold">{skill.label}</h4>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  Proficiency
                </span>
                <span className="font-mono text-sm font-semibold text-signal">{skill.level}%</span>
              </div>

              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted/15">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.barClass}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="mt-6 border-t border-muted/10 pt-4">
                <div className="h-0.5 w-10 rounded-full bg-signal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
