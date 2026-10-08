import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from './Loader'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Certifications from './Certifications'
import Contact from './Contact'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import ScrollProgress from './ScrollProgress'
import AIAssistant from './AIAssistant'

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Show loader for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Hide loader after exit animation completes
      setTimeout(() => {
        setShowLoader(false)
      }, 500)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <Loader 
            isVisible={isLoading} 
            onComplete={() => setShowLoader(false)} 
          />
        )}
      </AnimatePresence>
      
      {!showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <AIAssistant />
        </motion.div>
      )}
    </>
  )
}

export default AppContent
