import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'
import profileImg from '../assets/images/profil.jpg'

const aboutCards = [
  {
    icon: '🧑‍💻',
    title: 'Who I Am',
    text: "I'm Sai Lakshman — a Computer Science student and aspiring Web Developer who enjoys creating clean, user-friendly websites. I'm passionate about learning modern technologies and building digital experiences that make a real impact.",
  },
  {
    icon: '⚡',
    title: 'What I Do',
    text: 'I work with HTML, CSS, JavaScript, and Python frameworks like Flask and Django to design and build responsive, functional web applications. I love combining creativity and problem-solving to craft efficient, visually appealing interfaces.',
  },
  {
    icon: '🎯',
    title: 'My Goals',
    text: "My goal is to continue learning, experimenting with new tools, and improving as a full-stack developer. I'm focused on creating projects that not only look great but also deliver seamless performance and usability.",
  },
]

const skills = [
  { icon: '🌐', name: 'HTML5', level: '90%' },
  { icon: '🎨', name: 'CSS3', level: '85%' },
  { icon: '⚙️', name: 'JavaScript', level: '75%' },
  { icon: '🐍', name: 'Python', level: '80%' },
  { icon: '🌶️', name: 'Flask', level: '70%' },
  { icon: '🏗️', name: 'Django', level: '60%' },
  { icon: '🔥', name: 'Firebase', level: '65%' },
  { icon: '🐙', name: 'Git', level: '75%' },
]

export default function About() {
  const headerRef = useReveal()
  const imageRef = useReveal()
  const skillHeaderRef = useReveal()

  return (
    <section className="py-32 relative" style={{ paddingTop: 'calc(72px + 4rem)' }}>
      <div className="w-full max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div ref={headerRef} className="reveal-base text-center mb-16">
          <span className="section-label inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4">
            About Me
          </span>
          <h1 className="font-heading text-[2.5rem] max-md:text-[1.75rem] font-bold mb-4 text-text">Who I Am</h1>
          <p className="text-lg text-text-muted max-w-[600px] mx-auto">
            Passionate about creating clean, user-friendly websites and learning modern technologies.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="reveal-base flex justify-center lg:justify-start">
            <div className="about-image-ring relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.6)]">
              <img
                src={profileImg}
                alt="Sai Lakshman — Profile Photo"
                className="w-full h-auto block transition-transform duration-600 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* About Cards */}
          <div>
            {aboutCards.map(({ icon, title, text }, i) => (
              <AboutCard key={title} icon={icon} title={title} text={text} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32">
          <div ref={skillHeaderRef} className="reveal-base text-center mb-16">
            <span className="section-label inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4">
              Skills
            </span>
            <h2 className="font-heading text-[2.5rem] max-md:text-[1.75rem] font-bold text-text">
              Technologies I Work With
            </h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-6 max-md:gap-4">
            {skills.map((skill, i) => (
              <SkillItem key={skill.name} {...skill} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCard({ icon, title, text, delay }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal-base p-6 bg-glass border border-glass-border rounded-xl mb-6 transition-all duration-350 ease-out hover:bg-glass-hover hover:border-white/10 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="text-lg font-heading font-bold mb-2 flex items-center gap-2 text-text">
        <span className="text-xl">{icon}</span>
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">{text}</p>
    </div>
  )
}

function SkillItem({ icon, name, level, delay }) {
  const ref = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('revealed')
            if (fillRef.current) {
              fillRef.current.classList.add('animate')
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal-base flex flex-col items-center gap-4 p-8 max-md:p-6 max-md:px-4 bg-glass border border-glass-border rounded-xl transition-all duration-350 ease-out cursor-default text-center hover:bg-glass-hover hover:border-primary hover:-translate-y-1.5 hover:shadow-[0_0_40px_var(--color-primary-glow)]"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 flex items-center justify-center text-[2rem] rounded-lg bg-primary/8 text-primary transition-all duration-350 ease-out">
        {icon}
      </div>
      <span className="font-heading text-sm font-semibold text-text">{name}</span>
      <div className="w-full">
        <div className="w-full h-1 bg-white/6 rounded-full overflow-hidden">
          <div
            ref={fillRef}
            className="skill-bar-fill h-full bg-gradient-to-r from-primary to-accent rounded-full w-0"
            style={{ '--skill-level': level }}
          />
        </div>
      </div>
    </div>
  )
}
