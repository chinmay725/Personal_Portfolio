import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { portfolioData } from '../data/portfolioData'

function Hero() {
  const { theme } = useTheme()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  
  const roles = ['Frontend Developer', 'React.js Developer', 'Full-Stack Developer']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const techStack = [
    { name: 'React.js', color: '#61DAFB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Java', color: '#007396' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'PostgreSQL', color: '#336791' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient Orbs */}
      <motion.div
        style={{ y: y1 }}
        className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-primary-indigo/20' : 'bg-primary-indigo/10'
        }`}
      />
      <motion.div
        style={{ y: y2 }}
        className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-secondary-cyan/20' : 'bg-secondary-cyan/10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-green-500">
                Open to Entry-Level Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-2xl font-medium ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
              }`}
            >
              Hello, I'm Chinmay
            </motion.h2>

            {/* Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight ${
                theme === 'dark' ? 'text-text-main' : 'text-text-dark'
              }`}
            >
              I Build Digital Experiences{' '}
              <span className="text-gradient">That Matter.</span>
            </motion.h1>

            {/* Rotating Role Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="h-8"
            >
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`text-lg sm:text-xl font-medium ${
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                }`}
              >
                {roles[currentRole]}
              </motion.div>
            </motion.div>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-base sm:text-lg max-w-lg ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
              }`}
            >
              React.js developer with full-stack project experience, building responsive 
              and scalable web applications with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-indigo to-secondary-cyan text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
              >
                <span>Explore My Work</span>
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center space-x-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium border-2 transition-colors text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'border-primary-indigo text-primary-indigo hover:bg-primary-indigo/10'
                    : 'border-primary-light text-primary-light hover:bg-primary-indigo/10'
                }`}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 pt-4"
            >
              <motion.a
                href={`https://${portfolioData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`transition-colors ${
                  theme === 'dark' ? 'text-text-secondary hover:text-primary-indigo' : 'text-text-darkSecondary hover:text-primary-indigo'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={`https://${portfolioData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`transition-colors ${
                  theme === 'dark' ? 'text-text-secondary hover:text-primary-indigo' : 'text-text-darkSecondary hover:text-primary-indigo'
                }`}
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="mailto:deshmukhchinmay300@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`transition-colors ${
                  theme === 'dark' ? 'text-text-secondary hover:text-primary-indigo' : 'text-text-darkSecondary hover:text-primary-indigo'
                }`}
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Code Editor Mockup */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                theme === 'dark' ? 'bg-surface-dark border border-white/10' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Window Controls */}
              <div className={`flex items-center space-x-2 px-4 py-3 ${
                theme === 'dark' ? 'bg-elevated-dark' : 'bg-gray-100'
              }`}>
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className={`ml-4 text-sm font-medium ${
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                }`}>
                  App.jsx
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div>
                    <span className="text-purple-400">import</span>
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}> React </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> 'react'</span>
                  </div>
                  <div>
                    <span className="text-purple-400">import</span>
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}> {`{ motion }`} </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> 'framer-motion'</span>
                  </div>
                  <div className="h-4" />
                  <div>
                    <span className="text-purple-400">function</span>
                    <span className="text-yellow-400"> Portfolio</span>
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}>() {'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span>
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}> (</span>
                  </div>
                  <div className="pl-8">
                    <span className={`${theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}`}>&lt;motion.div</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-blue-400">initial</span>
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}>={'{'} opacity: 0 {'}'}</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-blue-400">animate</span>
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}>={'{'} opacity: 1 {'}'}</span>
                  </div>
                  <div className="pl-8">
                    <span className={`${theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}`}>&gt;</span>
                  </div>
                  <div className="pl-12">
                    <span className={`${theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}`}>&lt;h1&gt;</span>
                    <span className="text-primary-indigo">Hello, World!</span>
                    <span className={`${theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}`}>&lt;/h1&gt;</span>
                  </div>
                  <div className="pl-8">
                    <span className={`${theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'}`}>&lt;/motion.div&gt;</span>
                  </div>
                  <div className="pl-4">
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}>);</span>
                  </div>
                  <div>
                    <span className={`${theme === 'dark' ? 'text-text-main' : 'text-text-dark'}`}>{'}'}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Technology Labels */}
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`absolute px-3 py-1.5 rounded-full text-xs font-medium shadow-lg ${
                  theme === 'dark' ? 'bg-surface-dark border border-white/10' : 'bg-white border border-gray-200'
                }`}
                style={{
                  top: `${10 + index * 18}%`,
                  right: `${-5 + (index % 2) * 10}%`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                  <span className={theme === 'dark' ? 'text-text-main' : 'text-text-dark'}>{tech.name}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 ${
            theme === 'dark' ? 'border-text-secondary/50' : 'border-text-darkSecondary/50'
          } flex justify-center pt-2`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1.5 h-1.5 rounded-full ${
              theme === 'dark' ? 'bg-text-secondary' : 'bg-text-darkSecondary'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
