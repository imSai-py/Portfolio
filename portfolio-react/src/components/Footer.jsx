import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        {/* Gradient Divider */}
        <div className="footer-divider mb-10" />

        {/* Footer Content — Social left, brand center-right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/Sai_lak_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22.46 6.12a8.9 8.9 0 01-2.65.73 4.6 4.6 0 002.02-2.54 9.15 9.15 0 01-2.92 1.11 4.57 4.57 0 00-7.78 4.17A12.95 12.95 0 013.1 4.9a4.57 4.57 0 001.42 6.1 4.47 4.47 0 01-2.07-.57v.06a4.57 4.57 0 003.67 4.48 4.5 4.5 0 01-2.06.08 4.57 4.57 0 004.27 3.17A9.17 9.17 0 012 20.09a12.92 12.92 0 007 2.05c8.38 0 12.97-6.94 12.97-12.97l-.01-.59A9.28 9.28 0 0024 6.11a8.9 8.9 0 01-1.54.01z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sai_wbdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41a4.08 4.08 0 011.52.99 4.08 4.08 0 01.99 1.52c.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.36 4.36 0 01-2.51 2.51c-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.36 4.36 0 01-2.51-2.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44a4.08 4.08 0 01.99-1.52 4.08 4.08 0 011.52-.99c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a6.24 6.24 0 00-2.26 1.47A6.24 6.24 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a6.24 6.24 0 001.47 2.26 6.24 6.24 0 002.26 1.47c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a6.5 6.5 0 003.73-3.73c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a6.24 6.24 0 00-1.47-2.26A6.24 6.24 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
            <a
              href="https://github.com/imSai-py"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Brand + Copyright */}
          <div className="text-center md:text-right">
            <Link to="/" className="font-heading text-lg font-bold gradient-text mb-1 inline-block">
              SL
            </Link>
            <p className="text-xs text-text-dim">
              © {new Date().getFullYear()} Sai Lakshman. Built with passion & clean code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
