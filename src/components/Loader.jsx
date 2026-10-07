import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function Loader({ isVisible, onComplete }) {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        theme === 'dark' ? 'bg-midnight-navy' : 'bg-[#F8FAFC]'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border-4 border-primary-indigo/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-4 border-secondary-cyan/30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src="/loader-logo.png" 
                alt="Chinmay Deshmukh Logo"
                className="w-full h-full object-cover rounded-full block"
              />
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan rounded-full mb-8"
        />

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            className={`text-2xl md:text-3xl font-bold font-heading mb-3 ${
              theme === 'dark' ? 'text-text-main' : 'text-text-dark'
            }`}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              WELCOME TO CHINMAY'S PORTFOLIO
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={`text-sm md:text-base ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
            }`}
          >
            Building experiences. Exploring possibilities.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
