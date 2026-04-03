import { useNavigate } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function ProjectCard({ id, title, description, image, video, tags, liveUrl, codeUrl, detailPath, categoryLabel }) {
  const navigate = useNavigate()

  // 3D Hover Effect state
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const revealVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={revealVariant}
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <motion.div
        onClick={() => navigate(detailPath)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group cursor-pointer bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/20 hover:bg-surface-container transition-all duration-500 h-full flex flex-col relative"
      >
        <div style={{ transform: "translateZ(30px)" }} className="relative h-64 md:h-80 w-full overflow-hidden">
          {video ? (
            <video 
              src={video} 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
            />
          ) : (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
        </div>

        <div style={{ transform: "translateZ(40px)" }} className="p-8 -mt-16 md:-mt-20 relative z-10 flex flex-col flex-1">
          <div>
            <span className="px-3 py-1 bg-primary-container text-white rounded font-mono text-[10px] font-bold">
              {categoryLabel || 'CASE STUDY'}
            </span>
            <h3 className="text-3xl lg:text-4xl font-black mt-4 mb-2 text-on-surface">{title}</h3>
            <p className="text-on-surface-variant max-w-lg text-sm md:text-base mb-6">{description}</p>
          </div>
          
          <div className="mt-auto pt-4 flex flex-wrap gap-2 mb-6">
             {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-mono tracking-widest uppercase text-on-surface border border-outline-variant/30 bg-surface-container-high/50 rounded-lg"
                >
                  {tag}
                </span>
             ))}
          </div>

          <div className="flex gap-4 border-t border-outline-variant/10 pt-4 mt-auto justify-between items-center group-hover:border-primary-container/30 transition-colors">
            <div className="flex gap-2 items-center">
              <svg className="w-5 h-5 text-primary-container block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H16h2v6M18 6L6 18" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-widest text-[#cab9ca] group-hover:text-white transition-colors">View Project Details</span>
            </div>
          </div>
        </div>
        
        {/* Buttons overlay on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
           <a
             href={liveUrl}
             target="_blank"
             onClick={(e) => e.stopPropagation()}
             rel="noopener noreferrer"
             className="bg-primary-container/80 backdrop-blur-md p-2 rounded-full hover:bg-primary-container transition-colors"
             title="Live Demo"
           >
             <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
             </svg>
           </a>
           <a
             href={codeUrl}
             target="_blank"
             onClick={(e) => e.stopPropagation()}
             rel="noopener noreferrer"
             className="bg-surface-container-high/80 backdrop-blur-md p-2 rounded-full border border-white/10 hover:bg-surface-container-highest transition-colors"
             title="Source Code"
           >
             <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
             </svg>
           </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
