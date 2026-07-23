import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-muted/30 text-current transition-colors hover:border-signal hover:text-signal"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}
