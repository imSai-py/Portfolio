import { motion } from 'framer-motion'
import profileImg from '../assets/images/profil.jpg'

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL"]
  },
  {
    category: "Backend Engineering",
    skills: ["Flask", "Django", "Spring Boot", "SQLAlchemy", "REST API Design", "OAuth 2.0", "Web Push (VAPID)", "Flask-Migrate"]
  },
  {
    category: "Frontend & UI",
    skills: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQLite", "MongoDB", "Schema Design"]
  },
  {
    category: "Cloud, DevOps & Tooling",
    skills: ["Firebase Hosting", "Firebase Cloud Functions", "Render", "Git & GitHub", "CI/CD"]
  },
  {
    category: "AI & Data Science",
    skills: ["Google Gemini Vision API", "LLM API Integration", "Pandas", "Matplotlib", "ReportLab"]
  }
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
        {/* About Grid — Profile + Summary */}
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-secondary/10 rounded-[24px]" />
              <img
                src={profileImg}
                alt="Sai Lakshman"
                className="w-full h-full object-cover rounded-[16px] shadow-inner"
              />
            </div>
          </motion.div>

          {/* Summary & Experience */}
          <motion.div variants={itemVariant} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 text-xs font-mono text-primary-container">
              <span>Backend Developer</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary">Sai Lakshman</span>
            </h2>

            <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
              <p>
                Computer science undergraduate (B.Sc., 2026) who builds and ships backend services in Python and Java.
              </p>
              <p>
                Designed, built, and deployed <strong>ExpenseSnap</strong>, a live personal finance PWA running on a Flask REST API with 20+ endpoints, PostgreSQL, Google OAuth 2.0, and Gemini Vision receipt scanning.
              </p>
              <p>
                Previously worked as a <strong>Full Stack Developer Intern at RETECH Solutions</strong>, building and deploying Django applications with server-side validation and optimized query patterns. Looking for a backend engineering internship or entry-level role.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Skills Categorized */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          className="mt-16 space-y-10"
        >
          <motion.h2 variants={itemVariant} className="font-heading text-2xl md:text-3xl font-bold">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary">Skills & Architecture</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group, i) => (
              <motion.div 
                key={group.category}
                variants={itemVariant}
                className="glass-panel rounded-2xl p-6 border border-outline-variant/15 hover:border-primary-container/40 transition-all duration-300 bg-surface-container/30"
              >
                <h3 className="font-mono text-sm font-semibold text-primary-container mb-4 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-surface-container-high/80 text-on-surface text-xs font-mono border border-outline-variant/20 hover:border-primary-container/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
