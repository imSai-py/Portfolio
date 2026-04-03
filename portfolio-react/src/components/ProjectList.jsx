import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ProjectList({ projects }) {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  // Smooth springs for cursor
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    // Only attach if we have a hovered project to save performance
    if (hoveredProject) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [cursorX, cursorY, hoveredProject]);

  return (
    <div className="w-full relative py-8">
      {/* Huge Typography Text List */}
      <div className="flex flex-col border-t border-outline-variant/20 cursor-pointer">
        {projects.map((project, idx) => (
          <div 
            key={project.id}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => navigate(project.detailPath)}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-b border-outline-variant/20 hover:bg-white/[0.02] transition-colors relative z-10 px-4 md:px-8"
          >
            <div className="flex items-center gap-6 md:gap-12 w-full">
               <span className="text-on-surface-variant/40 font-mono text-sm md:text-xl font-bold">{String(idx + 1).padStart(2, '0')}</span>
               <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-black tracking-tighter text-on-surface group-hover:text-primary-container transition-colors duration-500 uppercase leading-tight md:leading-none break-all sm:break-words">{project.title}</h3>
            </div>
            
            <div className="mt-8 md:mt-0 flex items-center justify-end flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-8 transition-all duration-500 absolute right-4 md:right-12">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-primary-container transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Image/Video Cursor EXACT MATCH */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[200px] md:w-[500px] md:h-[320px] pointer-events-none z-[100] hidden md:block overflow-hidden rounded-xl shadow-2xl border border-white/10"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hoveredProject ? 1 : 0,
          scale: hoveredProject ? 1 : 0.5,
          rotate: hoveredProject ? [0, 2, -2, 0] : 0
        }}
        transition={{ 
          opacity: { duration: 0.2 },
          scale: { duration: 0.5, ease: "backOut" },
          rotate: { duration: 5, repeat: Infinity, ease: "linear" }
        }}
      >
        {hoveredProject?.video ? (
          <video 
             src={hoveredProject.video}
             autoPlay
             loop
             muted
             playsInline
             className="w-full h-full object-cover scale-105"
          />
        ) : (
          <img 
             src={hoveredProject?.image} 
             className="w-full h-full object-cover scale-105"
             alt={hoveredProject?.title || "Project Preview"} 
          />
        )}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      </motion.div>
    </div>
  )
}
