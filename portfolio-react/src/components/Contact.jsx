import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setStatusMessage('Transmitting message...')

    const form = e.target
    const formData = new FormData(form)
    formData.append("access_key", "99984ee8-713f-4f67-9130-42454020865a")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setStatusMessage('Message sent successfully! I will get back to you soon.')
        form.reset()
      } else {
        setStatusMessage('Failed to send. Please try emailing directly.')
      }
    } catch (error) {
      setStatusMessage('Network exception occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setIsSuccess(false)
        setStatusMessage('')
      }, 6000)
    }
  }

  return (
    <section className="max-w-4xl mx-auto pt-24 pb-32 px-6" id="contact">
      {/* Section Title */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={revealVariant}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-xs text-primary-container font-semibold tracking-wider uppercase">
            Available for Opportunities
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">
          Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-container via-secondary to-[#00D4AA]">Touch</span>
        </h2>
        <p className="mt-4 text-on-surface-variant text-base md:text-lg max-w-xl mx-auto">
          Have a project in mind or interested in backend engineering collaboration? Send a message below.
        </p>
      </motion.div>

      {/* Modern Glass Contact Card */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={revealVariant}
        className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl relative border border-outline-variant/20 overflow-hidden backdrop-blur-xl"
      >
        {/* Background Ambient Glows inside card */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary-container/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              {/* Name & Email inputs in 2 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-on-surface-variant">
                    Your Name
                  </label>
                  <div className="relative">
                    <input 
                      required 
                      name="name" 
                      type="text"
                      placeholder="Sai Lakshman" 
                      className="w-full bg-surface-container/60 border border-outline-variant/30 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 transition-all font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-on-surface-variant">
                    Email Address
                  </label>
                  <div className="relative">
                    <input 
                      required 
                      name="email" 
                      type="email"
                      placeholder="sailakshman212005@gmail.com" 
                      className="w-full bg-surface-container/60 border border-outline-variant/30 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 transition-all font-sans text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-on-surface-variant">
                  Message
                </label>
                <textarea 
                  required 
                  name="message" 
                  rows="5"
                  placeholder="Hello Sai, I'd like to discuss a project or backend opportunity..." 
                  className="w-full bg-surface-container/60 border border-outline-variant/30 rounded-xl p-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 transition-all font-sans text-sm resize-none"
                ></textarea>
              </div>

              {/* Honeypot field */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {/* Submit Controls & Social Links */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-outline-variant/15">
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-container via-purple-600 to-secondary-container hover:from-primary-fixed-dim hover:to-secondary text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary-container/20 hover:shadow-primary-container/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Social Badges */}
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/imSai-py" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-xl bg-surface-container/60 border border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-primary-container/50 hover:bg-surface-container transition-all" 
                    title="GitHub Profile"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/sai-lakshman-390b08295" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-xl bg-surface-container/60 border border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-primary-container/50 hover:bg-surface-container transition-all" 
                    title="LinkedIn Profile"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0h.01z" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:sailakshman212005@gmail.com" 
                    className="p-3 rounded-xl bg-surface-container/60 border border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-primary-container/50 hover:bg-surface-container transition-all flex items-center gap-2 text-xs font-mono" 
                    title="Direct Email"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="hidden md:inline">sailakshman212005@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-on-surface">Message Sent!</h3>
              <p className="text-on-surface-variant text-sm max-w-md mx-auto">
                {statusMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
