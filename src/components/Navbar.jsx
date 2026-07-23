import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ activeId, isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-muted/10 bg-paper/80 backdrop-blur-md transition-colors dark:bg-ink/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          SK<span className="text-signal">.</span>Pal
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeId === link.id ? 'text-signal' : 'text-muted hover:text-current'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-muted/30 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-muted/10 bg-paper px-6 lg:hidden dark:bg-ink"
          >
            {navLinks.map((link) => (
              <li key={link.id} className="py-3">
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm uppercase tracking-wider ${
                    activeId === link.id ? 'text-signal' : 'text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
