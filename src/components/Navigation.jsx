import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-midnight-navy/90 backdrop-blur-lg border-b border-white/10'
            : 'bg-white/90 backdrop-blur-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-indigo'
                    : theme === 'dark'
                    ? 'text-text-secondary hover:text-text-main'
                    : 'text-text-darkSecondary hover:text-text-dark'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-indigo"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-text-secondary hover:text-text-main hover:bg-white/10'
                  : 'text-text-darkSecondary hover:text-text-dark hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              download
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                theme === 'dark'
                  ? 'bg-primary-indigo/10 text-primary-indigo hover:bg-primary-indigo/20'
                  : 'bg-primary-indigo/10 text-primary-light hover:bg-primary-indigo/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-text-secondary hover:text-text-main hover:bg-white/10'
                  : 'text-text-darkSecondary hover:text-text-dark hover:bg-gray-100'
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-text-secondary hover:text-text-main hover:bg-white/10'
                  : 'text-text-darkSecondary hover:text-text-dark hover:bg-gray-100'
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              theme === 'dark' ? 'bg-midnight-navy border-b border-white/10' : 'bg-white border-b border-gray-200'
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-indigo bg-primary-indigo/10'
                      : theme === 'dark'
                      ? 'text-text-secondary hover:text-text-main hover:bg-white/5'
                      : 'text-text-darkSecondary hover:text-text-dark hover:bg-gray-100'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                download
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium ${
                  theme === 'dark'
                    ? 'text-primary-indigo hover:bg-primary-indigo/10'
                    : 'text-primary-light hover:bg-primary-indigo/10'
                }`}
                whileHover={{ x: 5 }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
