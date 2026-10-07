import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`py-8 sm:py-12 border-t ${
      theme === 'dark' ? 'bg-midnight-navy border-white/10' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 gap-4 md:gap-0">
          {/* Left Side - Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className={`text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
              theme === 'dark' ? 'text-text-main' : 'text-text-dark'
            }`}>
              Designed & Built by <span className="text-gradient font-semibold">Chinmay Deshmukh</span>
            </p>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
            }`}>
              © {currentYear}. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 sm:space-x-6"
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
              <Linkedin size={20} sm:size={24} />
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
              <Github size={20} sm:size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${portfolioData.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`transition-colors ${
                theme === 'dark' ? 'text-text-secondary hover:text-primary-indigo' : 'text-text-darkSecondary hover:text-primary-indigo'
              }`}
              aria-label="Email"
            >
              <Mail size={20} sm:size={24} />
            </motion.a>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 sm:p-3 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-primary-indigo/10 text-primary-indigo hover:bg-primary-indigo/20'
                : 'bg-primary-indigo/10 text-primary-light hover:bg-primary-indigo/20'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp size={20} sm:size={24} />
          </motion.button>
        </div>

        {/* Gradient Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-0.5 bg-gradient-to-r from-primary-indigo via-secondary-cyan to-primary-indigo mt-8 rounded-full"
        />
      </div>
    </footer>
  )
}

export default Footer
