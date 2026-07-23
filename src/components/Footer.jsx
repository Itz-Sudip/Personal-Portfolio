import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-muted/10 px-6 py-8 lg:pl-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All Rights Reseved.
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="text-signal">&lt;/&gt;</span> with care, one commit at a time
        </p>
      </div>
    </footer>
  )
}
