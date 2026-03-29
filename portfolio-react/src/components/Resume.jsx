import { useRef, useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function Resume() {
  const downloadRef = useReveal()
  const iframeRef = useReveal()

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
    <section className="relative pt-24 pb-20">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        {/* Download Button — Top center */}
        <div ref={downloadRef} className="reveal-base flex justify-center mb-16">
          <button
            onClick={handleDownload}
            id="download-resume-btn"
            className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase text-[#0b1326] rounded-full transition-all duration-300 hover:-translate-y-[2px] cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            <span>Download PDF Resume</span>
          </button>
        </div>

        {/* Embedded Resume Viewer */}
        <div ref={iframeRef} className="reveal-base w-full flex justify-center">
            <div className="w-full max-w-[900px] h-[70vh] min-h-[600px] rounded-[20px] bg-[rgba(45,52,73,0.3)] border border-[rgba(60,73,77,0.15)] backdrop-blur-md shadow-[inset_1px_1px_1px_0_rgba(255,255,255,0.1)] p-2 transition-transform duration-300 hover:-translate-y-1">
                <iframe
                  src="/resume.pdf"
                  title="Sai Lakshman Resume"
                  className="w-full h-full rounded-[14px] bg-white/5"
                />
            </div>
        </div>
      </div>
    </section>
  )
}
