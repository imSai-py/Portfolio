import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectList from './ProjectList'

import work01Img from '../assets/images/work01-hover.jpg.jpg'
import work02Img from '../assets/images/work02-hover.jpg'
import work03Img from '../assets/images/work03-hover.jpg'

const filters = ['All', 'Frontend', 'Backend', 'Fullstack', 'Other']

const projects = [
  {
    id: 1,
    title: 'ExpenseSnap',
    description: 'ExpenseSnap is a web application to track expenses and manage budgets — a simple, efficient solution for personal finance.',
    image: work01Img,
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    categories: ['Frontend', 'Backend', 'Fullstack'],
    liveUrl: 'https://expensesnap-a1995.web.app/',
    codeUrl: 'https://github.com/imSai-py/ExpenseSnap',
    detailPath: '/work/1',
    span: 'col-span-12 lg:col-span-8',
    categoryLabel: 'FINTECH ARCHITECTURE',
    video: '/videos/ExpenseSnap.mp4'
  },
  {
    id: 2,
    title: 'UserProfileManage',
    description: 'A profile management tool for creating, updating, and organizing user information with a clean Django-based architecture.',
    image: work02Img,
    tags: ['Python', 'Django', 'SQLite'],
    categories: ['Frontend', 'Backend', 'Fullstack'],
    liveUrl: 'https://userprofilemanagement-mmeq.onrender.com',
    codeUrl: 'https://github.com/imSai-py/UserProfileManagement',
    detailPath: '/work/2',
    span: 'col-span-12 lg:col-span-4',
    categoryLabel: 'DATA MANAGEMENT',
    video: '/videos/UserProfileManagement.mp4'
  },
  {
    id: 3,
    title: 'Portfolio Architect',
    description: 'A minimal, responsive portfolio showcasing projects and skills — built with modern web technologies and deployed on Vercel.',
    image: work03Img,
    tags: ['React', 'Framer Motion', 'Tailwind'],
    categories: ['Frontend', 'Fullstack'],
    liveUrl: 'https://portfolio-sai-lakshmans-projects-2627b503.vercel.app/',
    codeUrl: 'https://github.com/imSai-py/Portfolio',
    detailPath: '/work/3',
    span: 'col-span-12 lg:col-span-12',
    categoryLabel: 'INTERNAL TOOLING',
    video: '/videos/Portfolio.mp4'
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [viewMode, setViewMode] = useState('list') // 'list' or 'grid'

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.categories && p.categories.includes(activeFilter))

  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="space-y-12" id="projects">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-outline-variant/10 pb-6 gap-6">
        <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
        
        <div className="flex items-center gap-4">
           {/* View Mode Toggle */}
           <div className="flex bg-surface-container-low p-1 rounded-xl border border-outline-variant/20">
             <button 
               onClick={() => setViewMode('list')}
               className={`p-2 rounded-lg flex items-center transition-all ${viewMode === 'list' ? 'bg-surface shadow-[0_0_15px_rgba(0,212,170,0.2)] text-primary-container' : 'text-on-surface-variant hover:text-on-surface'}`}
               title="List View"
             >
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
             </button>
             <button 
               onClick={() => setViewMode('grid')}
               className={`p-2 rounded-lg flex items-center transition-all ${viewMode === 'grid' ? 'bg-surface shadow-[0_0_15px_rgba(184,123,228,0.2)] text-[#B87BE4]' : 'text-on-surface-variant hover:text-on-surface'}`}
               title="Grid View"
             >
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
               </svg>
             </button>
           </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={revealVariant}
        className="flex flex-wrap justify-start gap-3 mb-12"
      >
        {filters.map((filter) => (
           <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors outline-none ${activeFilter === filter ? 'text-white' : 'text-on-surface-variant hover:text-on-surface bg-surface-container-low hover:bg-surface-container'}`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="active-filter-pill"
                className="absolute inset-0 bg-primary-container rounded-full z-0"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </motion.div>

      {/* Current View */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bento-grid"
          >
            {filtered.map((project) => (
              <div key={project.id} className={project.span}>
                <ProjectCard {...project} />
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectList projects={filtered} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
