import { navLinks } from '../data/portfolioData'

export default function CircuitRail({ activeId }) {
  return (
    <div className="circuit-rail" aria-hidden="false">
      <div className="rail-line" />
      <ul className="flex flex-col gap-7">
        {navLinks.map((link) => (
          <li key={link.id} className="group relative flex items-center gap-3">
            <a href={`#${link.id}`} aria-label={link.label}>
              <span
                className={`circuit-node block ${activeId === link.id ? 'active' : ''}`}
              />
            </a>
            <span className="pointer-events-none absolute left-6 whitespace-nowrap rounded bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-paper opacity-0 transition-opacity group-hover:opacity-100 dark:bg-paper dark:text-ink">
              {link.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
