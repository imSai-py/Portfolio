import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

import work01Img from '../assets/images/work01-hover.jpg.jpg'
import work02Img from '../assets/images/work02-hover.jpg'
import work03Img from '../assets/images/work03-hover.jpg'

const projects = [
  {
    id: 1,
    number: '001 / 003',
    title: 'ExpenseSnap',
    description: 'ExpenseSnap is a web application that allows users to track their expenses and manage their budgets. It is a simple and easy-to-use application that helps users to keep track of their expenses and manage their budgets.',
    image: work01Img,
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    liveUrl: 'https://expensesnap-a1995.web.app/',
    codeUrl: 'https://github.com/imSai-py/ExpenseSnap',
    detailPath: '/work/1',
  },
  {
    id: 2,
    number: '002 / 003',
    title: 'UserProfileManage',
    description: 'UserProfileManagement is a web application that allows users to manage their profiles and update their information. It is a simple and easy-to-use application that helps users to keep track of their profiles and manage their information.',
    image: work02Img,
    tags: ['Python', 'Django', 'SQLite'],
    liveUrl: 'https://userprofilemanagement-mmeq.onrender.com',
    codeUrl: 'https://github.com/imSai-py/UserProfileManagement',
    detailPath: '/work/2',
  },
  {
    id: 3,
    number: '003 / 003',
    title: 'Portfolio',
    description: 'Portfolio is a web application that allows users to showcase their work and projects. It is a simple and easy-to-use application that helps users to keep track of their work and projects.',
    image: work03Img,
    tags: ['HTML', 'CSS', 'Flask', 'Vercel'],
    liveUrl: 'https://portfolio-sai-lakshmans-projects-2627b503.vercel.app/',
    codeUrl: 'https://github.com/imSai-py/Portfolio',
    detailPath: '/work/3',
  },
]

export default function Projects() {
  const headerRef = useReveal()

  return (
    <section className="py-32 relative" style={{ paddingTop: 'calc(72px + 4rem)' }}>
      <div className="w-full max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div ref={headerRef} className="reveal-base text-center mb-16">
          <span className="section-label inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4">
            Portfolio
          </span>
          <h1 className="font-heading text-[2.5rem] max-md:text-[1.75rem] font-bold mb-4 text-text">
            Featured Projects
          </h1>
          <p className="text-lg text-text-muted max-w-[600px] mx-auto">
            Here are a few projects that showcase my skills building responsive, user-friendly web applications and experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] max-md:grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ number, title, description, image, tags, liveUrl, codeUrl, detailPath }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal-base relative rounded-2xl overflow-hidden bg-surface border border-glass-border transition-all duration-350 ease-out hover:-translate-y-2 hover:shadow-[0_16px_64px_rgba(0,0,0,0.6)] hover:border-primary/20 group"
    >
      {/* Project Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.08]"
        />
        {/* Hover Overlay */}
        <div className="project-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-out flex items-end justify-center p-8">
          <div className="flex gap-4 translate-y-5 group-hover:translate-y-0 transition-transform duration-350 ease-out">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white rounded-full transition-all duration-350"
            >
              <span>Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-text rounded-full transition-all duration-350"
            >
              <span>Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-8">
        <span className="inline-block font-heading text-xs font-semibold text-primary tracking-wide mb-2">
          {number}
        </span>
        <h3 className="font-heading text-xl font-bold mb-2 text-text">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-text-muted bg-white/4 border border-glass-border rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Discover Link */}
      <div className="flex items-center gap-4 px-8 pb-8">
        <Link
          to={detailPath}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 ease-out hover:text-accent hover:gap-2"
        >
          Discover
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
