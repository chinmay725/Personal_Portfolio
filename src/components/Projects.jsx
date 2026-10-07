import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { portfolioData } from '../data/portfolioData'
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react'

function Projects() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 relative">
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
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan mx-auto rounded-full"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -8 }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-elevated-dark border-white/10 hover:border-primary-indigo/50' 
                    : 'bg-white border-gray-200 hover:border-primary-indigo/50'
                }`}
              >
                {/* Project Preview */}
                <div className={`relative h-40 sm:h-48 overflow-hidden ${
                  theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-100'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className={`text-5xl sm:text-6xl font-bold font-heading ${
                      theme === 'dark' ? 'text-text-secondary/20' : 'text-text-darkSecondary/20'
                    }`}>
                      {project.title.charAt(0)}
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/80 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold font-heading mb-1.5 sm:mb-2 ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-xs font-medium ${
                          theme === 'dark'
                            ? 'bg-primary-indigo/10 text-primary-indigo'
                            : 'bg-primary-indigo/10 text-primary-light'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-3 pt-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-indigo to-secondary-cyan text-white rounded-lg text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border ${
                        theme === 'dark'
                          ? 'border-primary-indigo/30 text-primary-indigo hover:bg-primary-indigo/10'
                          : 'border-primary-indigo/30 text-primary-light hover:bg-primary-indigo/10'
                      }`}
                    >
                      <Github size={16} />
                      <span>View Source</span>
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
                        theme === 'dark'
                          ? 'text-text-secondary hover:text-text-main'
                          : 'text-text-darkSecondary hover:text-text-dark'
                      }`}
                    >
                      <span>Explore</span>
                      <ChevronRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-navy/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
              theme === 'dark' ? 'bg-elevated-dark border border-white/10' : 'bg-white border border-gray-200'
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className={`text-2xl font-bold font-heading mb-2 ${
                  theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                }`}>
                  {selectedProject.title}
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                }`}>
                  {selectedProject.description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className={`p-2 rounded-lg ${
                  theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
              >
                <X size={24} className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'} />
              </motion.button>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className={`text-lg font-semibold font-heading mb-3 ${
                theme === 'dark' ? 'text-text-main' : 'text-text-dark'
              }`}>
                Key Features
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className={`flex items-start space-x-2 text-sm ${
                    theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                  }`}>
                    <span className="text-primary-indigo mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className={`text-lg font-semibold font-heading mb-3 ${
                theme === 'dark' ? 'text-text-main' : 'text-text-dark'
              }`}>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-primary-indigo/10 text-primary-indigo'
                        : 'bg-primary-indigo/10 text-primary-light'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-indigo to-secondary-cyan text-white rounded-lg font-medium"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium border ${
                  theme === 'dark'
                    ? 'border-primary-indigo/30 text-primary-indigo hover:bg-primary-indigo/10'
                    : 'border-primary-indigo/30 text-primary-light hover:bg-primary-indigo/10'
                }`}
              >
                <Github size={20} />
                <span>View Source</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects
