import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [terminalLines, setTerminalLines] = useState([])

  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setTerminalLines([])

    const lines = [
      "Initializing connection...",
      "Resolving endpoint details...",
      "Compiling provided data payload...",
      "Authenticating transaction...",
      "Message successfully transmitted."
    ]

    let currentLine = 0;
    const typingInterval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentLine]])
        currentLine++
      } else {
        clearInterval(typingInterval)
        setIsSubmitting(false)
        setIsSuccess(true)
        
        setTimeout(() => {
           setIsSuccess(false)
           setTerminalLines([])
        }, 5000)
      }
    }, 400); 
  }

  return (
    <section className="max-w-4xl mx-auto pt-24 pb-32 px-6" id="contact">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={revealVariant}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-primary-container uppercase tracking-[0.3em]">Ready to build?</span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 text-on-surface">Initiate Contact</h2>
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={revealVariant}
        className="bg-surface-container-lowest rounded-3xl border border-outline-variant/20 overflow-hidden shadow-2xl relative"
      >
        <div className="bg-surface-container flex items-center justify-between px-6 py-3 border-b border-outline-variant/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-error/50"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
            <div className="w-3 h-3 rounded-full bg-primary-container/50"></div>
          </div>
          <div className="text-xs font-mono text-on-surface-variant">messenger.sh — 128x40</div>
          <div className="w-12"></div> {/* Spacer to center title */}
        </div>

        <div className="relative" style={{ minHeight: '350px' }}>
          <AnimatePresence mode="wait">
            {!isSubmitting && !isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                onSubmit={handleSubmit}
                className="p-8 space-y-6 font-mono text-sm"
              >
                <div className="space-y-2">
                  <label className="block text-primary-container opacity-70">
                    sai_lakshman@portfolio:~$ <span className="text-on-surface">input --name</span>
                  </label>
                  <input 
                    required 
                    name="name" 
                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-surface-variant p-0 outline-none" 
                    placeholder="Your Name" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-primary-container opacity-70">
                    sai_lakshman@portfolio:~$ <span className="text-on-surface">input --email</span>
                  </label>
                  <input 
                    required 
                    name="email" 
                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-surface-variant p-0 outline-none" 
                    placeholder="email@example.com" 
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-primary-container opacity-70">
                    sai_lakshman@portfolio:~$ <span className="text-on-surface">input --message</span>
                  </label>
                  <textarea 
                    required 
                    name="message" 
                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-surface-variant p-0 resize-none outline-none" 
                    placeholder="Describe your architectural vision..." 
                    rows="4"
                  ></textarea>
                </div>
                
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div className="pt-4 flex items-center justify-between">
                  <button 
                    className="group flex items-center gap-3 bg-surface-container-high px-6 py-3 rounded-lg border border-outline-variant/30 hover:border-primary-container hover:bg-surface-container-highest transition-all" 
                    type="submit"
                  >
                    <span className="text-primary-container font-bold">./execute_send</span>
                    <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform text-primary-container">send</span>
                  </button>
                  
                  <div className="flex gap-4">
                     <a href="https://github.com/imSai-py" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary-container transition-colors" title="GitHub">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                     </a>
                     <a href="https://www.linkedin.com/in/sai-lakshman-390b08295/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-colors" title="LinkedIn">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0h.01z" />
                        </svg>
                     </a>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="terminal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 font-mono text-sm leading-relaxed"
              >
                <div className="space-y-3">
                  <div className="text-on-surface-variant mb-6">
                    sai_lakshman@portfolio:~$ <span className="text-on-surface">./execute_send</span>
                  </div>
                  {terminalLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`${idx === terminalLines.length - 1 && isSuccess ? 'text-primary-container font-bold' : 'text-secondary/80'}`}
                    >
                      &gt; {line}
                    </motion.div>
                  ))}
                  {isSubmitting && (
                    <motion.div 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-2 h-4 bg-secondary mt-2 inline-block"
                    />
                  )}
                  {isSuccess && (
                     <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 text-on-surface-variant text-xs"
                     >
                       <span className="animate-pulse">_</span> waiting for new input...
                     </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
