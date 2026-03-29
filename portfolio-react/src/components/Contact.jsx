import useReveal from '../hooks/useReveal'

export default function Contact() {
  const headerRef = useReveal()
  const formRef = useReveal()
  const infoRef = useReveal()

  return (
    <section className="relative pt-24 pb-20">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="reveal-base text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-sm text-text-muted max-w-md mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid — Form left, Alt Contact right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* Contact Form — Glass container */}
          <form
            ref={formRef}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="reveal-base glass-form"
          >
            <input type="hidden" name="access_key" value="99984ee8-713f-4f67-9130-42454020865a" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="mb-5">
              <input
                name="name"
                type="text"
                id="contact-name"
                placeholder="Name"
                required
                className="form-input"
              />
            </div>
            <div className="mb-5">
              <input
                name="email"
                type="email"
                id="contact-email"
                placeholder="Email"
                required
                className="form-input"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                id="contact-message"
                placeholder="Message"
                required
                className="form-input min-h-[140px] resize-y"
              />
            </div>
            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <button
              type="submit"
              className="btn-primary w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-[#0b1326] rounded-full transition-all duration-300 hover:-translate-y-[2px] cursor-pointer"
            >
              <span className="relative z-[1]">Send Message</span>
            </button>
          </form>

          {/* Alternative Contact Info */}
          <div ref={infoRef} className="reveal-base pt-4">
            <h3 className="font-heading text-lg font-bold text-text mb-8">
              Alternative Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:sailakshman212005@gmail.com"
                className="alt-contact-link"
              >
                <svg viewBox="0 0 24 24" className="icon fill-current">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>contact@sailakshman.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sai-lakshman-390b08295/"
                target="_blank"
                rel="noopener noreferrer"
                className="alt-contact-link"
              >
                <svg viewBox="0 0 24 24" className="icon fill-current">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0h.01z" />
                </svg>
                <span>linkedin.com/in/sai-lakshman</span>
              </a>
              <a
                href="https://github.com/imSai-py"
                target="_blank"
                rel="noopener noreferrer"
                className="alt-contact-link"
              >
                <svg viewBox="0 0 24 24" className="icon fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>github.com/sailakshman</span>
              </a>
              <a
                href="https://x.com/Sai_lak_"
                target="_blank"
                rel="noopener noreferrer"
                className="alt-contact-link"
              >
                <svg viewBox="0 0 24 24" className="icon fill-current">
                  <path d="M22.46 6.12a8.9 8.9 0 01-2.65.73 4.6 4.6 0 002.02-2.54 9.15 9.15 0 01-2.92 1.11 4.57 4.57 0 00-7.78 4.17A12.95 12.95 0 013.1 4.9a4.57 4.57 0 001.42 6.1 4.47 4.47 0 01-2.07-.57v.06a4.57 4.57 0 003.67 4.48 4.5 4.5 0 01-2.06.08 4.57 4.57 0 004.27 3.17A9.17 9.17 0 012 20.09a12.92 12.92 0 007 2.05c8.38 0 12.97-6.94 12.97-12.97l-.01-.59A9.28 9.28 0 0024 6.11a8.9 8.9 0 01-1.54.01z" />
                </svg>
                <span>twitter.com/sailakshman</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
