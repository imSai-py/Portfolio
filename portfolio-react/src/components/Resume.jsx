import { motion } from 'framer-motion'

export default function Resume() {
  const handleDownload = (e) => {
    e.preventDefault()
    const pdfUrl = '/resume.pdf'
    const fileName = 'Sai_Lakshman_Resume.pdf'

    fetch(pdfUrl)
      .then(res => {
        if (!res.ok) throw new Error('PDF not found')
        return res.blob()
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      })
      .catch(() => {
        window.open(pdfUrl, '_blank')
      })
  }

  return (
    <section className="relative pt-24 pb-20" id="resume">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-primary-container uppercase tracking-widest">
            Curriculum Vitae
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tight text-on-surface">
            Resume <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary">&amp; Credentials</span>
          </h2>
          <p className="mt-3 text-on-surface-variant text-sm md:text-base max-w-lg mx-auto">
            Updated with latest backend engineering experience, ExpenseSnap project details, and technical stack.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handleDownload}
              id="download-resume-btn"
              className="bg-gradient-to-r from-primary-container to-secondary-container hover:from-primary-fixed-dim hover:to-secondary text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <span>Download PDF Resume</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container/80 border border-outline-variant/30 hover:border-primary-container/50 text-on-surface hover:text-white font-bold px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
              <span>Open PDF in New Tab</span>
            </a>
          </div>
        </motion.div>

        {/* Embedded Resume Viewer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-[900px] h-[75vh] min-h-[650px] rounded-[24px] bg-surface-container-lowest/80 border border-outline-variant/20 backdrop-blur-xl shadow-2xl p-3 relative overflow-hidden">
            <iframe
              src="/resume.pdf"
              title="Sai Lakshman Resume"
              className="w-full h-full rounded-[18px] bg-white/5 border border-white/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
