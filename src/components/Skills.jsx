import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { portfolioData } from '../data/portfolioData'
import { Code, Database, Server, Cpu, Wrench } from 'lucide-react'

function Skills() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: portfolioData.skills.frontend,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      skills: portfolioData.skills.backend,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: portfolioData.skills.databases,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'Programming',
      skills: portfolioData.skills.programming,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: portfolioData.skills.tools,
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
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
              Technical <span className="text-gradient">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan mx-auto rounded-full"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + catIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-elevated-dark border-white/10 hover:border-primary-indigo/50' 
                      : 'bg-white border-gray-200 hover:border-primary-indigo/50'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${category.color}`}
                    >
                      <Icon size={20} sm:size={24} className="text-white" />
                    </motion.div>
                    <h3 className={`text-lg sm:text-xl font-bold font-heading ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                          theme === 'dark'
                            ? 'bg-primary-indigo/10 text-primary-indigo hover:bg-primary-indigo/20'
                            : 'bg-primary-indigo/10 text-primary-light hover:bg-primary-indigo/20'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className={`text-center text-sm ${
              theme === 'dark' ? 'text-text-secondary/60' : 'text-text-darkSecondary/60'
            }`}
          >
            Continuously learning and expanding my skill set
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
