import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function Resume() {
  const headerRef = useReveal()
  const actionsRef = useReveal()
  const viewerRef = useReveal()
  const iframeRef = useRef(null)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) setShowFallback(true)
  }, [])

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
    <section className="py-32 relative" style={{ paddingTop: 'calc(72px + 4rem)' }}>
      <div className="w-full max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal-base text-center mb-16">
          <span className="section-label inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4">
            Resume
          </span>
          <h1 className="font-heading text-[2.5rem] max-md:text-[1.75rem] font-bold mb-4 text-text">
            My Resume
          </h1>
          <p className="text-lg text-text-muted max-w-[600px] mx-auto">
            A summary of my education, skills, and experience.
          </p>
        </div>

        {/* Download Button */}
        <div ref={actionsRef} className="reveal-base flex justify-center flex-wrap gap-6 mb-12">
          <button
            onClick={handleDownload}
            id="download-resume-btn"
            className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white rounded-full transition-all duration-350 ease-out hover:-translate-y-[3px] cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            <span>Download Resume</span>
          </button>
        </div>

        {/* Resume Viewer (macOS style) */}
        <div ref={viewerRef} className="reveal-base relative max-w-[900px] mx-auto rounded-2xl overflow-hidden bg-surface shadow-[0_16px_64px_rgba(0,0,0,0.6)] border border-glass-border">
          {/* macOS top bar */}
          <div className="flex items-center gap-2 py-3.5 px-5 bg-surface-alt border-b border-glass-border max-sm:py-2.5 max-sm:px-3.5">
            <span className="topbar-dot-red w-3 h-3 max-sm:w-2.5 max-sm:h-2.5 rounded-full" />
            <span className="topbar-dot-yellow w-3 h-3 max-sm:w-2.5 max-sm:h-2.5 rounded-full" />
            <span className="topbar-dot-green w-3 h-3 max-sm:w-2.5 max-sm:h-2.5 rounded-full" />
            <span className="flex-1 text-center text-text-dim text-xs tracking-wide font-medium">
              Sai_Lakshman_Resume.pdf
            </span>
          </div>

          {/* PDF Embed */}
          {!showFallback ? (
            <iframe
              ref={iframeRef}
              src="/resume.pdf"
              title="Sai Lakshman Resume"
              loading="lazy"
              className="w-full h-[750px] max-md:h-[500px] max-sm:h-[400px] border-none block"
              onError={() => setShowFallback(true)}
            />
          ) : (
            <div className="text-center py-24 px-8 bg-surface">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 fill-white">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2 text-text">Unable to display the resume</h3>
              <p className="text-text-muted text-sm mb-8">
                Your browser does not support embedded PDF viewing.<br />
                Click the button below to download and view it.
              </p>
              <button
                onClick={handleDownload}
                className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white rounded-full transition-all duration-350 ease-out hover:-translate-y-[3px] cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                <span>Download Resume</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
