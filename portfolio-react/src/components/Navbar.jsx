import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/works', label: 'Works' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/resume', label: 'Resume' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav
        id="navbar"
        className={`
          fixed top-0 left-0 right-0 h-[72px] flex items-center justify-center z-[1000]
          transition-all duration-350 ease-out
          backdrop-blur-[12px] border-b border-white/8
          ${scrolled
            ? 'bg-[rgba(10,15,30,0.6)] backdrop-blur-[16px] shadow-[0_6px_30px_rgba(0,0,0,0.4)]'
            : 'bg-[rgba(10,15,30,0.4)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          }
        `}
      >
        <div className="w-full max-w-[1200px] mx-auto px-8 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="font-heading text-lg font-bold text-text tracking-tight flex items-center gap-2"
            aria-label="Home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_12px_var(--color-primary-glow)]" />
            SL
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`
                    relative px-5 py-2 font-body text-sm font-medium tracking-wide uppercase
                    rounded-full transition-all duration-300 ease-out z-[1]
                    ${location.pathname === path
                      ? 'nav-active text-white'
                      : 'text-text-muted hover:text-white hover:scale-105 hover:bg-white/3'
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="flex md:hidden flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-none z-[1001]"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className={`block w-6 h-0.5 bg-text rounded-sm transition-all duration-350 ease-out ${menuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-text rounded-sm transition-all duration-350 ease-out ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-text rounded-sm transition-all duration-350 ease-out ${menuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div
        className={`
          fixed md:hidden top-0 ${menuOpen ? 'right-0' : 'right-[-100%]'}
          w-4/5 max-w-[320px] h-screen flex flex-col justify-center items-center gap-2
          p-12 z-[1000] transition-all duration-350 ease-out
          bg-[rgba(10,15,30,0.7)] backdrop-blur-[25px] border-l border-white/8
        `}
      >
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            onClick={closeMenu}
            className={`
              w-full text-center text-base font-medium tracking-wide uppercase
              py-4 px-4 rounded-full transition-all duration-300
              ${location.pathname === path
                ? 'nav-active text-white'
                : 'text-text-muted hover:text-white hover:bg-white/3'
              }
            `}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black/50 z-[999]"
          onClick={closeMenu}
        />
      )}
    </>
  )
}
