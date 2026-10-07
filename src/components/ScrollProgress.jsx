import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan z-50"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}

export default ScrollProgress
