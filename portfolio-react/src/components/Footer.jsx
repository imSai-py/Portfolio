import { Link } from 'react-router-dom'

const socialLinks = [
  {
    label: 'Twitter',
    url: 'https://x.com/Sai_lak_',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M22.46 6.12a8.9 8.9 0 01-2.65.73 4.6 4.6 0 002.02-2.54 9.15 9.15 0 01-2.92 1.11 4.57 4.57 0 00-7.78 4.17A12.95 12.95 0 013.1 4.9a4.57 4.57 0 001.42 6.1 4.47 4.47 0 01-2.07-.57v.06a4.57 4.57 0 003.67 4.48 4.5 4.5 0 01-2.06.08 4.57 4.57 0 004.27 3.17A9.17 9.17 0 012 20.09a12.92 12.92 0 007 2.05c8.38 0 12.97-6.94 12.97-12.97l-.01-.59A9.28 9.28 0 0024 6.11a8.9 8.9 0 01-1.54.01z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/sai_wbdev/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41a4.08 4.08 0 011.52.99 4.08 4.08 0 01.99 1.52c.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.36 4.36 0 01-2.51 2.51c-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.36 4.36 0 01-2.51-2.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44a4.08 4.08 0 01.99-1.52 4.08 4.08 0 011.52-.99c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a6.24 6.24 0 00-2.26 1.47A6.24 6.24 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a6.24 6.24 0 001.47 2.26 6.24 6.24 0 002.26 1.47c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a6.5 6.5 0 003.73-3.73c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a6.24 6.24 0 00-1.47-2.26A6.24 6.24 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sai-lakshman-390b08295/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0h.01z" />
      </svg>
    ),
  },
]

export default function Footer({ showSocial = true }) {
  return (
    <footer className="py-16 border-t border-glass-border text-center">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col items-center gap-8">
          {showSocial && (
            <div className="flex gap-4">
              {socialLinks.map(({ label, url, icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12 flex items-center justify-center rounded-xl
                    bg-glass border border-glass-border text-text-muted text-lg
                    transition-all duration-350 ease-out
                    hover:bg-primary hover:border-primary hover:text-white
                    hover:-translate-y-1 hover:shadow-[0_8px_20px_var(--color-primary-glow)]
                  "
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          )}
          <p className="text-sm text-text-dim">
            © 2025 Sai Lakshman. Built with passion & clean code.
          </p>
        </div>
      </div>
    </footer>
  )
}
