import { motion } from 'framer-motion'
import profileImg from '../assets/images/profil.jpg'

/* SVG Icon Components for Skills */
function JSIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M22.03 24.19c.6 1 1.47 1.73 2.94 1.73 1.24 0 2.03-.61 2.03-1.47 0-1.02-.81-1.38-2.18-1.97l-.75-.32c-2.16-.92-3.6-2.07-3.6-4.51 0-2.24 1.71-3.95 4.38-3.95 1.9 0 3.27.66 4.25 2.39l-2.33 1.5c-.51-.92-1.07-1.28-1.92-1.28-.87 0-1.43.56-1.43 1.28 0 .9.56 1.26 1.85 1.81l.75.32c2.55 1.09 3.98 2.2 3.98 4.7 0 2.69-2.12 4.16-4.96 4.16-2.78 0-4.58-1.33-5.46-3.07l2.45-1.32z" fill="#323330"/>
      <path d="M12.15 24.37c.45.8.86 1.47 1.83 1.47.94 0 1.53-.37 1.53-1.8V14.2h3.02v9.88c0 2.97-1.74 4.32-4.28 4.32-2.29 0-3.62-1.19-4.3-2.62l2.2-1.41z" fill="#323330"/>
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <circle cx="16" cy="16" r="14" fill="#20232A"/>
      <circle cx="16" cy="15.6" r="2.4" fill="#61DAFB"/>
      <ellipse cx="16" cy="15.6" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1"/>
      <ellipse cx="16" cy="15.6" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60, 16, 15.6)"/>
      <ellipse cx="16" cy="15.6" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120, 16, 15.6)"/>
    </svg>
  )
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <defs>
        <linearGradient id="pyGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#387EB8"/>
          <stop offset="100%" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="pyGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD43B"/>
          <stop offset="100%" stopColor="#FFE873"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="#3C78A9"/>
      <text x="16" y="21" textAnchor="middle" fill="#FFD43B" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Py</text>
    </svg>
  )
}

function HTMLIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <rect width="32" height="32" rx="4" fill="#E34F26"/>
      <text x="16" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">&lt;/&gt;</text>
    </svg>
  )
}

function CSSIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <rect width="32" height="32" rx="4" fill="#1572B6"/>
      <text x="16" y="22" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CSS</text>
    </svg>
  )
}

function StitchIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <rect width="32" height="32" rx="6" fill="#2A2A2A"/>
      <path d="M10 16L14 12L22 20M10 16L14 20L22 12" stroke="#00D4AA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GitIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <rect width="32" height="32" rx="4" fill="#F05032"/>
      <path d="M16 6a10 10 0 100 20 10 10 0 000-20zm5.66 10.47l-4.83 4.83a.9.9 0 01-1.27 0l-2.41-2.42a.9.9 0 010-1.27l.63-.63a.9.9 0 011.27 0l1.14 1.14 3.56-3.56a.9.9 0 011.28 0l.63.63a.9.9 0 010 1.28z" fill="white" fillOpacity="0"/>
      <text x="16" y="21" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Git</text>
    </svg>
  )
}

function AIIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6">
      <defs>
        <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00D4AA"/>
          <stop offset="100%" stopColor="#B87BE4"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#aiGrad)"/>
      <path d="M16 7 L18 14 L25 16 L18 18 L16 25 L14 18 L7 16 L14 14 Z" fill="white" />
    </svg>
  )
}

const iconMap = {
  JavaScript: JSIcon,
  React: ReactIcon,
  Python: PythonIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  Stitch: StitchIcon,
  Git: GitIcon,
  'AI-assisted Development': AIIcon,
}

const skills = [
  { name: 'JavaScript', level: '80%' },
  { name: 'React', level: '70%' },
  { name: 'Python', level: '80%' },
  { name: 'HTML', level: '95%' },
  { name: 'CSS', level: '90%' },
  { name: 'Stitch', level: '60%' },
  { name: 'Git', level: '75%' },
  { name: 'AI-assisted Development', level: '85%' },
]

export default function About() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="relative pt-24 pb-20 w-full" id="about">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        {/* About Grid — Profile + Story side by side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start mb-20"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariant} className="flex justify-center lg:justify-start">
            <div className="profile-frame relative w-[280px] h-[280px] rounded-[24px] border border-outline-variant/20 p-2 overflow-hidden bg-surface-container shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4AA]/10 to-[#B87BE4]/10 rounded-[24px]" />
              <img
                src={profileImg}
                alt="Sai Lakshman"
                className="w-full h-full object-cover rounded-[16px] shadow-inner"
              />
            </div>
          </motion.div>

          {/* My Story */}
          <motion.div variants={itemVariant}>
            <h2 className="font-heading text-[1.75rem] md:text-3xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4AA] to-[#B87BE4]">My Story</span>
            </h2>
            <div className="space-y-6 text-[0.95rem] md:text-base text-on-surface-variant leading-[1.6]">
              <p>
                Hi! I'm a passionate web developer on a journey to web development and
                numerous challenges to become developer and creative. I love code for web
                development, and I dedicate a lot of passion for web development.
              </p>
              <p>
                My journey, well let's just say it's been quite an interesting one! I started to
                do code because I felt interested in that before it was a challenge and an ambition for
                web development to illustrate about my own full-stack skill-set.
              </p>
              <p>
                I am passionate about web development, app development, backend, prompt enginnering, and
                constantly adapt to learn new concepts and enjoy great tools in technology and
                development.
              </p>
            </div>
          </motion.div>
        </motion.div>
        {/* Skills & Tools Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="mt-16"
        >
          <motion.h2 variants={itemVariant} className="font-heading text-2xl font-bold mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4AA] to-[#B87BE4]">Skills & Tools</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, level, delay }) {
  const IconComponent = iconMap[name]

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className="flex items-center gap-4"
    >
      {/* Icon */}
      <span className="w-8 h-8 flex items-center justify-center flex-shrink-0">
        {IconComponent ? <IconComponent /> : <span className="text-xl text-on-surface">{name[0]}</span>}
      </span>
      
      {/* Name + Bar */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="mb-2">
          <span className="font-mono text-sm font-medium text-on-surface">{name}</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: level }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: delay }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00D4AA] to-[#B87BE4] rounded-full z-10"
          />
          {/* Subtle glow */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: level }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: delay }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00D4AA] to-[#B87BE4] rounded-full blur-[6px] opacity-60"
          />
        </div>
      </div>
    </motion.div>
  )
}
