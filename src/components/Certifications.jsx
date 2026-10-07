import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { portfolioData } from '../data/portfolioData'
import { Award, Calendar } from 'lucide-react'

function Certifications() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 relative">
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
              Certifications <span className="text-gradient">& Courses</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan mx-auto rounded-full"
            />
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-elevated-dark border-white/10 hover:border-primary-indigo/50' 
                    : 'bg-white border-gray-200 hover:border-primary-indigo/50'
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-indigo to-secondary-cyan flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <Award size={20} sm:size={24} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className={`text-base sm:text-lg font-bold font-heading ${
                    theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                  }`}>
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base">
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                      }`}>
                        Provider:
                      </span>
                      <span className={theme === 'dark' ? 'text-text-main' : 'text-text-dark'}>
                        {cert.provider}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Calendar size={16} className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'} />
                      <span className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}>
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Continuously expanding knowledge through courses and certifications
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
