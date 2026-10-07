import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { portfolioData } from '../data/portfolioData'
import { Mail, Linkedin, MapPin, Copy, Check, Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contact() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [copied, setCopied] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      console.log('EmailJS Configuration Check:', {
        serviceId: serviceId ? 'configured' : 'MISSING',
        templateId: templateId ? 'configured' : 'MISSING',
        publicKey: publicKey ? 'configured' : 'MISSING',
        serviceIdValue: serviceId,
        templateIdValue: templateId,
        publicKeyValue: publicKey ? publicKey.substring(0, 8) + '...' : 'none'
      })

      if (!serviceId || !templateId || !publicKey) {
        const missing = []
        if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID')
        if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID')
        if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY')
        throw new Error(`EmailJS configuration missing: ${missing.join(', ')}. Please create a .env file with these variables. See .env.example for reference.`)
      }

      console.log('Sending form with EmailJS...', {
        serviceId,
        templateId,
        formElement: e.target
      })

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      )

      console.log('EmailJS success:', response)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('EmailJS Error Details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        name: error.name,
        stack: error.stack
      })
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <section id="contact" className="py-20 relative">
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
              Get In <span className="text-gradient">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-indigo to-secondary-cyan mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className={`text-lg ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
              }`}
            >
              Have an idea? Let's build something meaningful.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold font-heading mb-4 sm:mb-6 ${
                  theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                }`}>
                  Let's Connect
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ${
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                }`}>
                  I'm currently open to entry-level Frontend Developer, Full-Stack Developer, 
                  and Graduate Engineer Trainee roles. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-primary-indigo/10' : 'bg-primary-indigo/10'
                  }`}>
                    <Mail className="text-primary-indigo" size={20} sm:size={24} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                    }`}>
                      Email
                    </p>
                    <div className="flex items-center space-x-2">
                      <a
                        href={`mailto:${portfolioData.email}`}
                        className={`text-base font-medium hover:text-primary-indigo transition-colors ${
                          theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                        }`}
                      >
                        {portfolioData.email}
                      </a>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={copyEmail}
                        className="p-1 rounded hover:bg-white/10 transition-colors"
                        aria-label="Copy email"
                      >
                        {copied ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Copy size={16} className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'} />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-primary-indigo/10' : 'bg-primary-indigo/10'
                  }`}>
                    <Linkedin className="text-primary-indigo" size={20} sm:size={24} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                    }`}>
                      LinkedIn
                    </p>
                    <a
                      href={`https://${portfolioData.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-base font-medium hover:text-primary-indigo transition-colors ${
                        theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                      }`}
                    >
                      {portfolioData.linkedin}
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-primary-indigo/10' : 'bg-primary-indigo/10'
                  }`}>
                    <MapPin className="text-primary-indigo" size={20} sm:size={24} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                    }`}>
                      Location
                    </p>
                    <p className={`text-base font-medium ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      {portfolioData.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <form onSubmit={handleSubmit} className={`p-6 sm:p-8 rounded-2xl border ${
                theme === 'dark' ? 'bg-elevated-dark border-white/10' : 'bg-white border-gray-200'
              }`}>
                <div className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-indigo ${
                        theme === 'dark'
                          ? 'bg-surface-dark border-white/10 text-text-main focus:border-primary-indigo'
                          : 'bg-gray-50 border-gray-200 text-text-dark focus:border-primary-indigo'
                      } ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-indigo ${
                        theme === 'dark'
                          ? 'bg-surface-dark border-white/10 text-text-main focus:border-primary-indigo'
                          : 'bg-gray-50 border-gray-200 text-text-dark focus:border-primary-indigo'
                      } ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-indigo ${
                        theme === 'dark'
                          ? 'bg-surface-dark border-white/10 text-text-main focus:border-primary-indigo'
                          : 'bg-gray-50 border-gray-200 text-text-dark focus:border-primary-indigo'
                      } ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-indigo resize-none ${
                        theme === 'dark'
                          ? 'bg-surface-dark border-white/10 text-text-main focus:border-primary-indigo'
                          : 'bg-gray-50 border-gray-200 text-text-dark focus:border-primary-indigo'
                      } ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-indigo to-secondary-cyan text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                    >
                      Failed to send message. Please try again or contact me directly via email.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
