import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { portfolioData } from '../data/portfolioData'
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

function Experience() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative">
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
              Experience <span className="text-gradient">Timeline</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                  theme === 'dark' ? 'bg-primary-indigo/30' : 'bg-primary-indigo/30'
                }`} />
                
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-indigo border-4 border-midnight-navy transform -translate-x-1/2"
                />

                {/* Experience Card */}
                <div className="ml-6 sm:ml-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className={`p-4 sm:p-6 lg:p-8 rounded-2xl ${
                      theme === 'dark' ? 'bg-elevated-dark border border-white/10' : 'bg-white border border-gray-200'
                    }`}
                  >
                    {/* Company and Role */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold font-heading ${
                            theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                          }`}>
                            {exp.company}
                          </h3>
                          <p className={`text-base sm:text-lg font-medium text-primary-indigo`}>
                            {exp.role}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`p-3 rounded-lg ${
                            theme === 'dark' ? 'bg-primary-indigo/10' : 'bg-primary-indigo/10'
                          }`}
                        >
                          <Building2 className="text-primary-indigo" size={24} />
                        </motion.div>
                      </div>

                      {/* Duration and Location */}
                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'} />
                          <span className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}>
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'} />
                          <span className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className={`text-base sm:text-lg font-semibold font-heading mb-3 sm:mb-4 ${
                        theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                      }`}>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle2 
                              size={20} 
                              className="text-primary-indigo mt-0.5 flex-shrink-0" 
                            />
                            <span className={`text-sm sm:text-base leading-relaxed ${
                              theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                            }`}>
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
