import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view using IntersectionObserver,
 * so the navbar and circuit-rail can highlight the active section
 * while the user scrolls.
 *
 * Also handles the common edge case where the LAST section on the page
 * never satisfies the observer's rootMargin once the user has scrolled
 * all the way to the bottom (there's no more page left to scroll past
 * it) — without this, the final section (e.g. Contact) can stay stuck
 * on the previous section's highlight forever.
 */
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Force the last section active once the user hits the bottom of the page
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 4

      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1])
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeId
}
