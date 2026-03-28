import { useParams, Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

// Work detail images
import strechImg1 from '../assets/images/Strech-img1.jpg'
import strechImg2 from '../assets/images/Stretch-img2.jpg'
import strechImg3 from '../assets/images/Stretch-img3.jpg'
import work001_02 from '../assets/images/work001-02.jpg'
import work001_03 from '../assets/images/work001-03.jpg'
import work001_04 from '../assets/images/work001-04.jpg'
import work002_01 from '../assets/images/work002-01.jpg'
import work002_02 from '../assets/images/work002-02.jpg'
import work002_03 from '../assets/images/work002-03.jpg'
import work003_03 from '../assets/images/work003-03.jpg'

const workDetails = {
  1: {
    title: 'ExpenseSnap',
    heroImg: strechImg1,
    description: 'ExpenseSnap is a web application that allows users to track their expenses and manage their budgets. It is a simple and easy-to-use application that helps users to keep track of their expenses and manage their budgets.',
    quote: '"ExpenseSnap: The effortless way to track your expenses and master your budget."',
    liveUrl: 'https://expensesnap-a1995.web.app/',
    codeUrl: 'https://github.com/imSai-py/ExpenseSnap',
    gallery: [
      { img: work001_02, label: 'Register Page' },
      { img: work001_04, label: 'Login Page' },
    ],
    fullImg: { img: work001_03, label: 'Dashboard Page' },
  },
  2: {
    title: 'UserProfileManagement',
    heroImg: strechImg2,
    description: 'UserProfileManagement is a web application that allows users to manage their profiles and update their information. It is a simple and easy-to-use application that helps users to keep track of their profiles and update their information.',
    quote: '"UserProfileManagement: The effortless way to manage your profiles and update your information."',
    liveUrl: 'https://userprofilemanagement-mmeq.onrender.com',
    codeUrl: 'https://github.com/imSai-py/UserProfileManagement',
    gallery: [
      { img: work002_01, label: 'Register Page' },
      { img: work002_02, label: 'Login Page' },
    ],
    fullImg: { img: work002_03, label: 'Home Page' },
  },
  3: {
    title: 'Portfolio',
    heroImg: strechImg3,
    description: 'Portfolio is a web application that allows users to showcase their work and projects. It is a simple and easy-to-use application that helps users to keep track of their work and projects.',
    quote: '"Portfolio: Showcase your work in style."',
    liveUrl: 'https://portfolio-qrsimzlbf-sai-lakshmans-projects-2627b503.vercel.app/',
    codeUrl: 'https://github.com/imSai-py/Portfolio',
    gallery: [],
    fullImg: { img: work003_03, label: 'Home Page' },
  },
}

export default function WorkDetailPage() {
  const { id } = useParams()
  const work = workDetails[id]
  const heroRef = useReveal()
  const titleRef = useReveal()
  const descRef = useReveal()
  const quoteRef = useReveal()
  const actionsRef = useReveal()
  const galleryRef = useReveal()
  const fullRef = useReveal()

  if (!work) {
    return (
      <section className="min-h-screen flex items-center justify-center" style={{ paddingTop: '72px' }}>
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-text mb-4">Project Not Found</h1>
          <Link to="/works" className="text-primary hover:text-accent transition-colors">
            ← Back to Works
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="relative" style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '6rem' }}>
      <div className="w-full max-w-[1200px] mx-auto px-8">
        {/* Sub-navigation */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map(n => (
            <Link
              key={n}
              to={`/work/${n}`}
              className={`
                px-3 py-1 text-xs font-semibold rounded-lg transition-all duration-200 ease-out
                ${Number(id) === n
                  ? 'text-text bg-glass-hover'
                  : 'text-text-dim hover:text-text hover:bg-glass-hover'
                }
              `}
            >
              {String(n).padStart(3, '0')}
            </Link>
          ))}
        </div>

        {/* Hero Image */}
        <div ref={heroRef} className="reveal-base rounded-2xl overflow-hidden mb-12 shadow-[0_16px_64px_rgba(0,0,0,0.6)]">
          <img src={work.heroImg} alt={`${work.title} Overview`} className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="max-w-[800px] mx-auto">
          <h1 ref={titleRef} className="reveal-base font-heading text-[2.5rem] max-md:text-[1.75rem] font-bold mb-6 text-center text-text">
            {work.title}
          </h1>
          <p ref={descRef} className="reveal-base text-lg leading-relaxed text-text-muted mb-8">
            {work.description}
          </p>

          {/* Quote */}
          <blockquote ref={quoteRef} className="reveal-base relative px-12 py-8 my-12 bg-glass border-l-[3px] border-l-primary rounded-r-xl text-lg text-text-muted italic">
            <p className="mb-2">{work.quote}</p>
            <small className="block text-right text-text-dim not-italic text-sm">— Sai Lakshman</small>
          </blockquote>

          {/* Action Buttons */}
          <div ref={actionsRef} className="reveal-base flex justify-center gap-6 flex-wrap my-12 pt-8 border-t border-glass-border max-sm:flex-col max-sm:items-center">
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white rounded-full transition-all duration-350 ease-out hover:-translate-y-[3px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
              <span>Live Demo</span>
            </a>
            <a
              href={work.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-text rounded-full transition-all duration-350 ease-out hover:-translate-y-[3px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View Code</span>
            </a>
          </div>

          {/* Screenshot Gallery */}
          {work.gallery.length > 0 && (
            <div ref={galleryRef} className="reveal-base grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {work.gallery.map(({ img, label }) => (
                <div key={label} className="text-center">
                  <img
                    src={img}
                    alt={`${work.title} ${label}`}
                    className="w-full rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-glass-border mb-2"
                  />
                  <p className="text-sm text-text-dim">{label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Full Width Screenshot */}
          {work.fullImg && (
            <div ref={fullRef} className="reveal-base mt-8 text-center">
              <img
                src={work.fullImg.img}
                alt={`${work.title} ${work.fullImg.label}`}
                className="w-full rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-glass-border mb-2"
              />
              <p className="text-sm text-text-dim">{work.fullImg.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
