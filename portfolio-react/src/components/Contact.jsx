import useReveal from '../hooks/useReveal'

export default function Contact() {
  const headerRef = useReveal()
  const formRef = useReveal()
  const infoRef = useReveal()

  return (
    <section className="py-32 relative" style={{ paddingTop: 'calc(72px + 4rem)' }}>
      <div className="w-full max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div ref={headerRef} className="reveal-base text-center mb-16">
          <span className="section-label inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4">
            Contact
          </span>
          <h1 className="font-heading text-[2.5rem] max-md:text-[1.75rem] font-bold mb-4 text-text">
            Get in Touch
          </h1>
          <p className="text-lg text-text-muted max-w-[600px] mx-auto">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          {/* Contact Form */}
          <form
            ref={formRef}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="reveal-base"
          >
            <input type="hidden" name="access_key" value="99984ee8-713f-4f67-9130-42454020865a" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="mb-6">
              <input
                name="email"
                type="email"
                id="contact-email"
                placeholder="Your email address"
                required
                className="form-focus w-full px-5 py-4 font-body text-base text-text bg-glass border border-glass-border rounded-xl transition-all duration-200 ease-out outline-none placeholder:text-text-dim"
              />
            </div>
            <div className="mb-6">
              <input
                name="subject"
                type="text"
                id="contact-subject"
                placeholder="Subject"
                className="form-focus w-full px-5 py-4 font-body text-base text-text bg-glass border border-glass-border rounded-xl transition-all duration-200 ease-out outline-none placeholder:text-text-dim"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                id="contact-message"
                placeholder="Your message..."
                required
                className="form-focus w-full px-5 py-4 font-body text-base text-text bg-glass border border-glass-border rounded-xl transition-all duration-200 ease-out outline-none placeholder:text-text-dim min-h-[160px] resize-y"
              />
            </div>
            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <button
              type="submit"
              id="contact-submit"
              className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white rounded-full transition-all duration-350 ease-out hover:-translate-y-[3px] cursor-pointer"
            >
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>

          {/* Contact Info Sidebar */}
          <div ref={infoRef} className="reveal-base flex flex-col gap-8">
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-glass border border-glass-border rounded-xl transition-all duration-350 ease-out hover:bg-glass-hover hover:-translate-y-0.5">
              <div className="w-11 h-11 flex items-center justify-center text-lg bg-primary/8 rounded-lg text-primary shrink-0">
                📞
              </div>
              <div className="text-sm text-text-muted leading-relaxed">
                <strong className="block text-text font-semibold mb-0.5">Phone</strong>
                +91 93615 73798
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-glass border border-glass-border rounded-xl transition-all duration-350 ease-out hover:bg-glass-hover hover:-translate-y-0.5">
              <div className="w-11 h-11 flex items-center justify-center text-lg bg-primary/8 rounded-lg text-primary shrink-0">
                ✉️
              </div>
              <div className="text-sm text-text-muted leading-relaxed">
                <strong className="block text-text font-semibold mb-0.5">Email</strong>
                sailakshman212005@gmail.com
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 bg-glass border border-glass-border rounded-xl transition-all duration-350 ease-out hover:bg-glass-hover hover:-translate-y-0.5">
              <div className="w-11 h-11 flex items-center justify-center text-lg bg-primary/8 rounded-lg text-primary shrink-0">
                📍
              </div>
              <div className="text-sm text-text-muted leading-relaxed">
                <strong className="block text-text font-semibold mb-0.5">Location</strong>
                Chennai, Tamil Nadu, India
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base mb-4 text-text font-semibold">Follow me</h3>
              <div className="flex gap-4 mt-6 max-sm:justify-center">
                <SocialLink label="Twitter" url="https://x.com/Sai_lak_" icon={<path d="M22.46 6.12a8.9 8.9 0 01-2.65.73 4.6 4.6 0 002.02-2.54 9.15 9.15 0 01-2.92 1.11 4.57 4.57 0 00-7.78 4.17A12.95 12.95 0 013.1 4.9a4.57 4.57 0 001.42 6.1 4.47 4.47 0 01-2.07-.57v.06a4.57 4.57 0 003.67 4.48 4.5 4.5 0 01-2.06.08 4.57 4.57 0 004.27 3.17A9.17 9.17 0 012 20.09a12.92 12.92 0 007 2.05c8.38 0 12.97-6.94 12.97-12.97l-.01-.59A9.28 9.28 0 0024 6.11a8.9 8.9 0 01-1.54.01z" />} />
                <SocialLink label="Instagram" url="https://www.instagram.com/sai_wbdev/" icon={<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41a4.08 4.08 0 011.52.99 4.08 4.08 0 01.99 1.52c.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.36 4.36 0 01-2.51 2.51c-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.36 4.36 0 01-2.51-2.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44a4.08 4.08 0 01.99-1.52 4.08 4.08 0 011.52-.99c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a6.24 6.24 0 00-2.26 1.47A6.24 6.24 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a6.24 6.24 0 001.47 2.26 6.24 6.24 0 002.26 1.47c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a6.5 6.5 0 003.73-3.73c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a6.24 6.24 0 00-1.47-2.26A6.24 6.24 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />} />
                <SocialLink label="LinkedIn" url="https://www.linkedin.com/in/sai-lakshman-390b08295/" icon={<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0h.01z" />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ label, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-xl bg-glass border border-glass-border text-text-muted text-lg transition-all duration-350 ease-out hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_20px_var(--color-primary-glow)]"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        {icon}
      </svg>
    </a>
  )
}
