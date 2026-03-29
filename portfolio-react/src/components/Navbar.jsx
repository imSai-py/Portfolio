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
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          fixed top-0 left-0 right-0 h-16 flex items-center justify-center z-[1000]
          transition-all duration-300 ease-out
          ${scrolled
            ? 'bg-[rgba(5,5,16,0.85)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
          }
        `}
      >
        <div className="w-full max-w-[1100px] mx-auto px-6 flex items-center justify-between">
          {/* Brand — "SL" logo with gradient */}
          <Link
            to="/"
            className="font-heading text-xl font-bold tracking-tight flex items-center"
            aria-label="Home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="gradient-text">SL</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`
                    relative px-4 py-2 font-body text-xs font-medium tracking-[0.08em] uppercase
                    transition-colors duration-200
                    ${location.pathname === path
                      ? 'nav-active'
                      : 'text-text-muted hover:text-text'
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
            <span className={`block w-5 h-0.5 bg-text rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div
        className={`
          fixed md:hidden top-0 ${menuOpen ? 'right-0' : 'right-[-100%]'}
          w-4/5 max-w-[320px] h-screen flex flex-col justify-center items-center gap-2
          p-10 z-[1000] transition-all duration-350 ease-out
          bg-[rgba(5,5,16,0.95)] backdrop-blur-2xl border-l border-white/5
        `}
      >
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            onClick={closeMenu}
            className={`
              w-full text-center text-sm font-medium tracking-[0.08em] uppercase
              py-4 px-4 rounded-lg transition-all duration-200
              ${location.pathname === path
                ? 'text-accent'
                : 'text-text-muted hover:text-text'
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
          className="fixed md:hidden inset-0 bg-black/60 z-[999]"
          onClick={closeMenu}
        />
      )}
    </>
  )
}
