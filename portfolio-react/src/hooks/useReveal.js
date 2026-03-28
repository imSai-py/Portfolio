import { useEffect, useRef } from 'react'

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the element you want to reveal.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
