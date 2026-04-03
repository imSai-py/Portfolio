import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { path: '#hero', label: 'Home' },
  { path: '#projects', label: 'Works' },
  { path: '#about', label: 'About' },
  { path: '#resume', label: 'Resume' },
  { path: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)

  // Track active section on scroll and manage mobile nav visibility
  useEffect(() => {
    let scrollTimeout;

    // Initially hide if no scroll happens
    scrollTimeout = setTimeout(() => {
      setIsNavVisible(false)
    }, 3000)

    const handleScroll = () => {
      // Show nav and reset hide timer
      setIsNavVisible(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsNavVisible(false)
      }, 3000)

      // Section tracking
      const sections = navItems.map(item => item.path.substring(1))
      let current = sections[0]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          }
        }
      }
      setActiveSection(`#${current}`)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const handleNavClick = (e, path) => {
    setMenuOpen(false)
    e.preventDefault()

    if (location.pathname !== '/') {
      navigate(`/${path}`)
      return
    }

    e.preventDefault()
    const id = path.substring(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = path
    }
  }

  return (
    <>
      <nav className="bg-neutral-900/40 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 rounded-none border-b border-white/10 shadow-2xl shadow-purple-500/5">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
          <div 
            className="text-lg font-bold tracking-tighter text-neutral-100 uppercase cursor-pointer"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            Sai Lakshman
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(({ path, label }) => {
              const isActive = activeSection === path
              return (
                <a
                  key={path}
                  href={path}
                  onClick={(e) => handleNavClick(e, path)}
                  className={`font-sans tracking-tight text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1'
                      : 'text-neutral-400 hover:text-neutral-100 pb-1 border-b-2 border-transparent'
                  }`}
                >
                  {label}
                </a>
              )
            })}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Mobile Toggle */}
            <button
              className="flex md:hidden flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-none z-[1001]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span className={`block w-5 h-0.5 bg-neutral-100 rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-neutral-100 rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-neutral-100 rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Nav (Visible only when open) */}
      <div className={`md:hidden fixed inset-0 bg-black/60 z-[990] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[300px] glass-panel rounded-2xl flex flex-col p-4 z-[995] shadow-2xl transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        {navItems.map(({ path, label }) => {
           const isActive = activeSection === path
           return (
             <a
               key={path}
               href={path}
               onClick={(e) => handleNavClick(e, path)}
               className={`py-4 text-center font-medium tracking-tight border-b border-white/5 last:border-0 ${
                 isActive ? 'text-primary-fixed-dim' : 'text-neutral-400'
               }`}
             >
               {label}
             </a>
           )
        })}
      </div>

      {/* Persistent Floating Navigation for Mobile (per Purple Edit design) */}
      <div className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A]/80 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-2xl z-[800] flex justify-between items-center w-[92%] shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-all duration-500 ease-in-out ${isNavVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
        {[
          { path: '#hero', label: 'Home', icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> },
          { path: '#projects', label: 'Works', icon: <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /> },
          { path: '#about', label: 'About', icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /> },
          { path: '#resume', label: 'Resume', icon: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /> },
          { path: '#contact', label: 'Contact', icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /> }
        ].map(({ path, label, icon }) => {
          const isActive = activeSection === path;
          return (
            <a
              key={path}
              href={path}
              onClick={(e) => handleNavClick(e, path)}
              className="relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 tap-highlight-transparent"
            >
              {isActive && (
                <div className="absolute inset-0 bg-[#A855F7]/10 rounded-xl z-0" />
              )}
              <svg 
                viewBox="0 0 24 24" 
                className={`w-6 h-6 mb-1 z-10 transition-colors duration-300 ${isActive ? 'fill-[#A855F7]' : 'fill-[#888888]'}`}
              >
                {icon}
              </svg>
              <span className={`text-[10px] font-bold tracking-wide z-10 transition-colors duration-300 ${isActive ? 'text-[#A855F7]' : 'text-[#888888]'}`}>
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </>
  )
}
