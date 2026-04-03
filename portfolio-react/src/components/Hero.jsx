import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const typedStrings = [
  'Computer Science Student & Problem Solver',
  'Building Clean, User-Friendly Websites',
  'Web Developer | Crafting Minimal & Modern Digital Experiences',
]

import AnimatedVisual from './AnimatedVisual'

export default function Hero() {
  const [typedText, setTypedText] = useState('')

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

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[716px] flex flex-col justify-center items-start overflow-hidden pt-20" id="hero">
      <AnimatedVisual />
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg height="100%" viewBox="0 0 1000 1000" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a855f7" strokeWidth="0.5"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 space-y-6 max-w-4xl w-full"
      >


        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-on-surface">
          Sai Lakshman<span className="text-primary-container">.</span>
        </h1>

        <div className="space-y-4">
          <div className="min-h-[6em] md:min-h-[4.5em]">
            <p className="text-2xl md:text-3xl font-light text-on-surface-variant leading-relaxed max-w-2xl">
              {typedText}
              <span className="typed-cursor" />
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button 
              onClick={() => handleScrollTo('projects')}
              className="bg-primary-fixed-dim text-on-primary-fixed px-8 py-4 rounded-xl font-bold tracking-tight hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              View my work
            </button>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="glass-panel px-8 py-4 rounded-xl font-bold tracking-tight text-on-surface hover:bg-surface-container-high transition-all"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
