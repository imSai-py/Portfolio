import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

import work01Img from '../assets/images/work01-hover.jpg.jpg'
import work02Img from '../assets/images/work02-hover.jpg'
import work03Img from '../assets/images/work03-hover.jpg'

const featuredProjects = [
  {
    title: 'ExpenseSnap',
    subtitle: 'HTML, CSS, JavaScript, Firebase',
    image: work01Img,
    path: '/work/1',
  },
  {
    title: 'UserProfileManage',
    subtitle: 'Python, Django, SQLite',
    image: work02Img,
    path: '/work/2',
  },
  {
    title: 'Portfolio',
    subtitle: 'HTML, CSS, Flask, Vercel',
    image: work03Img,
    path: '/work/3',
  },
]

export default function FeaturedWorks() {
  const headerRef = useReveal()

  return (
    <section className="py-16 pb-20 relative">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12">
          <h2
            ref={headerRef}
            className="reveal-base section-title font-heading text-[1.75rem] md:text-3xl font-bold"
          >
            <span className="gradient-text">Featured Works</span>
          </h2>
        </div>

        {/* Projects Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {featuredProjects.map((project, i) => (
            <div key={project.title} className={`${i === 1 ? 'md:mt-8' : ''}`}>
              <FeaturedCard {...project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ title, subtitle, image, path, index }) {
  const ref = useReveal()

  return (
    <Link
      to={path}
      ref={ref}
      className={`reveal-base project-card group block`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info - separated by spacing-6 (which equates to py-6) */}
      <div className="p-6 pt-6">
        <h3 className="font-heading text-[1.1rem] font-bold text-text mb-2">{title}</h3>
        <p className="font-body text-sm text-[#cebdff]">{subtitle}</p>
      </div>
    </Link>
  )
}
