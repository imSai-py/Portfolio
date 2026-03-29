import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

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
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'A minimal, responsive portfolio showcasing projects and skills — built with modern web technologies and deployed on Vercel.',
    image: work03Img,
    tags: ['HTML', 'CSS', 'Flask', 'Vercel'],
    categories: ['Frontend', 'Backend', 'Fullstack'],
    liveUrl: 'https://portfolio-sai-lakshmans-projects-2627b503.vercel.app/',
    codeUrl: 'https://github.com/imSai-py/Portfolio',
    detailPath: '/work/3',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const headerRef = useReveal()

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.categories && p.categories.includes(activeFilter))

  return (
    <section className="relative pt-24 pb-20">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        {/* Filter Tabs */}
        <div ref={headerRef} className="reveal-base flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter 
                  ? 'bg-white/10 text-white shadow-lg' 
                  : 'bg-transparent text-text-muted hover:text-white hover:bg-white/5'}
                ${index < 2 ? 'glow-cyan' : 'glow-purple'}
                border border-white/5
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {filtered.map((project, i) => (
            <div 
              key={project.id} 
              className={`
                ${i % 2 === 1 ? 'md:max-lg:mt-12' : ''}
                ${i % 3 === 1 ? 'lg:mt-8' : ''}
              `}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ id, title, description, image, tags, liveUrl, codeUrl, detailPath }) {
  const ref = useReveal()
  const navigate = useNavigate()

  return (
    <div
      ref={ref}
      onClick={() => navigate(detailPath)}
      className={`reveal-base project-card group cursor-pointer`}
    >
      {/* Project Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {/* Hover Overlay */}
        <div className="project-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={liveUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase rounded-full"
            >
              <span>Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </a>
            <a
              href={codeUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase rounded-full"
            >
              <span>Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Project Info - mt-6 for spacing-6 from image */}
      <div className="p-6 pt-6">
        <h3 className="font-heading text-[1.1rem] font-bold mb-2 text-text">{title}</h3>
        <p className="font-body text-sm text-text-muted leading-[1.6] mb-5 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-body font-bold tracking-[0.1rem] uppercase text-[#cebdff] bg-[#cebdff]/10 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
