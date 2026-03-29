import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const typedStrings = [
  'Web Developer | Crafting Minimal & Modern Digital Experiences',
  'Computer Science Student & Problem Solver',
  'Building Clean, User-Friendly Websites',
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const contentRef = useRef(null)

  // Typing animation
  useEffect(() => {
    let stringIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId = null

    const typeSpeed = 50
    const deleteSpeed = 30
    const pauseAfterType = 2200
    const pauseAfterDelete = 500

    function typeLoop() {
      const current = typedStrings[stringIndex]
      if (!current) return

      if (!isDeleting) {
        charIndex++
        setTypedText(current.substring(0, charIndex))

        if (charIndex === current.length) {
          isDeleting = true
          timeoutId = setTimeout(typeLoop, pauseAfterType)
          return
        }
        timeoutId = setTimeout(typeLoop, typeSpeed)
      } else {
        charIndex--
        setTypedText(current.substring(0, charIndex))

        if (charIndex === 0) {
          isDeleting = false
          stringIndex = (stringIndex + 1) % typedStrings.length
          timeoutId = setTimeout(typeLoop, pauseAfterDelete)
          return
        }
        timeoutId = setTimeout(typeLoop, deleteSpeed)
      }
    }

    timeoutId = setTimeout(typeLoop, 800)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className="hero-section">
      <div
        ref={contentRef}
        className="hero-glow relative z-[1] text-center max-w-[700px] will-change-transform"
      >
        {/* Main Heading */}
        <h1 className="font-heading text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-bold tracking-[-0.02em] leading-[1.05] mb-5 animate-fade-in-up">
          <span className="gradient-text">Sai Lakshman</span>
        </h1>

        {/* Typed Subtitle */}
        <div className="min-h-[2em] mb-8 animate-fade-in-up [animation-delay:0.3s]">
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
            <span>{typedText}</span>
            <span className="typed-cursor" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up [animation-delay:0.5s]">
          <Link
            to="/works"
            id="cta-works"
            className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase text-[#0b1326] rounded-full transition-all duration-300"
          >
            <span className="relative z-[1]">View My Work</span>
          </Link>
          <Link
            to="/contact"
            id="cta-contact"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase text-[#dae2fd] rounded-full transition-all duration-300"
          >
            <span className="relative z-[1]">Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current relative z-[1]">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
