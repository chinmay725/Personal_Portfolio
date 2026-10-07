import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { portfolioData } from '../data/portfolioData'

function About() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [counted, setCounted] = useState(false)

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true)
    }
  }, [isInView, counted])

  const CountUp = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!counted) return

      let startTime
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }, [counted, end, duration])

    return <span>{count}{suffix}</span>
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className={`text-3xl sm:text-4xl font-bold font-heading ${
                theme === 'dark' ? 'text-text-main' : 'text-text-dark'
              }`}
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan mx-auto rounded-full"
            />
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
              }`}>
                I'm a {portfolioData.education.year} {portfolioData.education.degree} graduate from {portfolioData.education.institution}, 
                passionate about building responsive, scalable web applications.
              </p>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
              }`}>
                During my internship at {portfolioData.experience[0].company}, I gained hands-on experience in 
                frontend engineering, full-stack application development, REST API integration, and database-driven applications.
              </p>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
              }`}>
                I'm committed to continuous learning and problem-solving, always exploring new technologies and best practices 
                to create exceptional digital experiences.
              </p>

              {/* Key Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                {[
                  'Frontend Engineering',
                  'Full-Stack Development',
                  'REST API Integration',
                  'Database Development'
                ].map((focus, index) => (
                  <motion.div
                    key={focus}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg ${
                      theme === 'dark' ? 'bg-elevated-dark border border-white/10' : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-indigo" />
                    <span className={`text-xs sm:text-sm font-medium ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      {focus}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className={`p-6 sm:p-8 rounded-2xl ${
                theme === 'dark' ? 'bg-elevated-dark border border-white/10' : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-bold font-heading mb-4 sm:mb-6 ${
                theme === 'dark' ? 'text-text-main' : 'text-text-dark'
              }`}>
                Internship Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {portfolioData.statistics.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gradient mb-2`}>
                      <CountUp end={parseInt(stat.value) || 0} suffix={stat.value.replace(/[0-9]/g, '')} />
                    </div>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                    }`}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className={`text-xs text-center mt-6 ${
                theme === 'dark' ? 'text-text-secondary/60' : 'text-text-darkSecondary/60'
              }`}>
                * Metrics from internship experience at {portfolioData.experience[0].company}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
