import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import nebulaImg from '../assets/images/Nebula.jpg'

const typedStrings = [
  'Computer Science Student & Web Developer',
  'Learning modern technologies to build real-world solutions',
  'Crafting clean, user-friendly digital experiences',
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const heroRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const ctaRef = useRef(null)

  // Typing animation
  useEffect(() => {
    let stringIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId = null

    const typeSpeed = 60
    const deleteSpeed = 35
    const pauseAfterType = 2000
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

  // Parallax effect
  useEffect(() => {
    const heroEl = heroRef.current
    if (!heroEl || !window.matchMedia('(hover: hover)').matches) return

    let mouseX = 0, mouseY = 0
    let currentX = 0, currentY = 0
    let rafId = null
    const ease = 0.08

    const handleMouseMove = (e) => {
      const rect = heroEl.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX = (e.clientX - centerX) / (rect.width / 2)
      mouseY = (e.clientY - centerY) / (rect.height / 2)
      if (!rafId) rafId = requestAnimationFrame(animate)
    }

    const handleMouseLeave = () => {
      mouseX = 0
      mouseY = 0
    }

    function animate() {
      currentX += (mouseX - currentX) * ease
      currentY += (mouseY - currentY) * ease

      if (Math.abs(mouseX) < 0.001 && Math.abs(currentX) < 0.001 &&
          Math.abs(mouseY) < 0.001 && Math.abs(currentY) < 0.001) {
        currentX = 0
        currentY = 0
        applyTransforms()
        cancelAnimationFrame(rafId)
        rafId = null
        return
      }
      applyTransforms()
      rafId = requestAnimationFrame(animate)
    }

    function applyTransforms() {
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.04) translate(${currentX * -2}px, ${currentY * -2}px)`
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate(${currentX * 3.5}px, ${currentY * 3.5}px)`
        contentRef.current.style.setProperty('--glow-x', `${50 + currentX * 20}%`)
        contentRef.current.style.setProperty('--glow-y', `${50 + currentY * 20}%`)
      }
      if (ctaRef.current) {
        ctaRef.current.style.transform = `translate(${currentX * 2}px, ${currentY * 2}px)`
      }
    }

    heroEl.addEventListener('mousemove', handleMouseMove)
    heroEl.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      heroEl.removeEventListener('mousemove', handleMouseMove)
      heroEl.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 py-16"
    >
      {/* Background Image */}
      <div className="hero-bg-overlay absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={nebulaImg}
          alt="Nebula Background"
          className="hero-bg-media absolute inset-0 w-full h-full object-cover object-center z-[-1]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="hero-glow relative z-[1] text-center max-w-[800px] will-change-transform"
      >
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 text-sm font-medium text-accent tracking-wide uppercase bg-accent/8 border border-accent/20 rounded-full animate-fade-in-down">
          <span className="inline-block animate-wave origin-[70%_70%] text-lg">👋</span>
          Hello, welcome to my portfolio
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-[4.5rem] max-md:text-[2.5rem] max-sm:text-[2rem] font-bold leading-[1.1] mb-6 animate-fade-in-up [animation-delay:0.2s]">
          I'm <span className="gradient-text">Sai Lakshman</span>
        </h1>

        {/* Typed Subtitle */}
        <div className="min-h-[2.4em] mb-8 animate-fade-in-up [animation-delay:0.4s]">
          <p className="text-xl max-sm:text-base font-light text-text-muted leading-normal">
            <span>{typedText}</span>
            <span className="typed-cursor" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex items-center justify-center gap-6 flex-wrap animate-fade-in-up [animation-delay:0.6s] max-md:flex-col max-md:items-center"
        >
          <Link
            to="/works"
            id="cta-works"
            className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white rounded-full transition-all duration-350 ease-out hover:-translate-y-[3px] relative overflow-hidden"
          >
            <span className="relative z-[1]">View My Work</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current relative z-[1] transition-transform duration-350 group-hover:translate-x-[3px]">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
          <Link
            to="/contact"
            id="cta-contact"
            className="btn-glass inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-text rounded-full transition-all duration-350 ease-out hover:-translate-y-[3px]"
          >
            <span className="relative z-[1]">Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current relative z-[1]">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
