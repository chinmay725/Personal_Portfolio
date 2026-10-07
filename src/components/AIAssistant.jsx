import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { X, Send, Bot, User, Loader2 } from 'lucide-react'
import { aiKnowledgeBase } from '../data/portfolioData'

function AIAssistant() {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Chinmay AI. Ask me anything about Chinmay's skills, experience, projects, or how to get in touch!"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(true)
  const messagesEndRef = useRef(null)

  const suggestedQuestions = [
    "What technologies does Chinmay know?",
    "Tell me about his ShopKart project",
    "What did he do during his internship?",
    "What kind of roles is he looking for?",
    "How can I contact Chinmay?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Check for API configuration
    const hasApiKey = import.meta.env.VITE_AI_API_KEY && import.meta.env.VITE_AI_API_ENDPOINT

    if (!hasApiKey) {
      // Demo mode - simple keyword matching
      if (lowerMessage.includes('technolog') || lowerMessage.includes('skill') || lowerMessage.includes('know')) {
        return `Chinmay is proficient in:\n\n**Frontend:** ${aiKnowledgeBase.skills.frontend}\n\n**Backend & APIs:** ${aiKnowledgeBase.skills.backend}\n\n**Databases:** ${aiKnowledgeBase.skills.databases}\n\n**Tools:** ${aiKnowledgeBase.skills.tools}`
      }
      if (lowerMessage.includes('shopkart') || lowerMessage.includes('project')) {
        return `${aiKnowledgeBase.projects}\n\nYou can view the live demo and source code in the Projects section above!`
      }
      if (lowerMessage.includes('internship') || lowerMessage.includes('experience') || lowerMessage.includes('work')) {
        return `${aiKnowledgeBase.experience}\n\nHe gained valuable experience in React.js development, UI engineering, and agile methodologies.`
      }
      if (lowerMessage.includes('role') || lowerMessage.includes('job') || lowerMessage.includes('opportunity')) {
        return `Chinmay is currently looking for ${aiKnowledgeBase.roles}. He's particularly interested in roles that allow him to work with React.js and modern web technologies.`
      }
      if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return `You can contact Chinmay at ${aiKnowledgeBase.email} or connect with him on LinkedIn (${aiKnowledgeBase.linkedin}). You can also use the contact form in the Contact section!`
      }
      if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('degree')) {
        return `${aiKnowledgeBase.education}\n\nHe has a strong foundation in electronics and computer engineering.`
      }
      if (lowerMessage.includes('certif')) {
        return `${aiKnowledgeBase.certifications}\n\nHe's committed to continuous learning and professional development.`
      }
      
      return `I can help you learn about Chinmay's skills, experience, projects, education, certifications, or how to contact him. What would you like to know?`
    }

    // If API is configured, this would make an actual API call
    // For now, return a message indicating API mode
    return "AI API integration requires configuration. Currently running in demo mode with keyword matching. Check the README for AI setup instructions."
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const response = generateResponse(userMessage)
    setMessages(prev => [...prev, { role: 'assistant', content: response }])
    setIsLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSuggestedQuestion = (question) => {
    setInput(question)
    handleSend()
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-4 sm:right-6 z-40 p-3 sm:p-4 rounded-full shadow-lg ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-primary-indigo to-secondary-cyan text-white'
            : 'bg-gradient-to-r from-primary-indigo to-secondary-cyan text-white'
        }`}
        aria-label="Open AI Assistant"
      >
        <Bot size={20} sm:size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100%-2rem)] sm:w-full sm:max-w-sm max-h-[80vh] sm:max-h-[600px] rounded-2xl shadow-2xl overflow-hidden ${
              theme === 'dark' ? 'bg-elevated-dark border border-white/10' : 'bg-white border border-gray-200'
            }`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-3 sm:p-4 border-b ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`p-1.5 sm:p-2 rounded-lg ${
                  theme === 'dark' ? 'bg-primary-indigo/10' : 'bg-primary-indigo/10'
                }`}>
                  <Bot className="text-primary-indigo" size={16} sm:size={20} />
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-semibold font-heading ${
                    theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                  }`}>
                    Ask Chinmay AI
                  </h3>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                  }`}>
                    {isDemoMode ? 'Demo Mode' : 'AI Powered'}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className={`p-1.5 sm:p-2 rounded-lg ${
                  theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
                aria-label="Close chat"
              >
                <X size={16} sm:size={20} className={theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="h-64 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start space-x-3 ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`p-1.5 sm:p-2 rounded-lg ${
                    message.role === 'assistant'
                      ? theme === 'dark' ? 'bg-primary-indigo/10' : 'bg-primary-indigo/10'
                      : theme === 'dark' ? 'bg-secondary-cyan/10' : 'bg-secondary-cyan/10'
                  }`}>
                    {message.role === 'assistant' ? (
                      <Bot className="text-primary-indigo" size={14} sm:size={16} />
                    ) : (
                      <User className="text-secondary-cyan" size={14} sm:size={16} />
                    )}
                  </div>
                  <div className={`flex-1 p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-[80%] ${
                    message.role === 'assistant'
                      ? theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-100'
                      : 'bg-gradient-to-r from-primary-indigo to-secondary-cyan text-white'
                  }`}>
                    <p className={`text-xs sm:text-sm whitespace-pre-wrap ${
                      message.role === 'assistant'
                        ? theme === 'dark' ? 'text-text-main' : 'text-text-dark'
                        : 'text-white'
                    }`}>
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`p-1.5 sm:p-2 rounded-lg ${
                    theme === 'dark' ? 'bg-primary-indigo/10' : 'bg-primary-indigo/10'
                  }`}>
                    <Bot className="text-primary-indigo" size={14} sm:size={16} />
                  </div>
                  <div className={`p-2 sm:p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-surface-dark' : 'bg-gray-100'
                  }`}>
                    <Loader2 size={14} sm:size={16} className="animate-spin text-primary-indigo" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-3 sm:px-4 pb-2">
                <p className={`text-xs font-medium mb-2 ${
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-darkSecondary'
                }`}>
                  Suggested questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSuggestedQuestion(question)}
                      className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-primary-indigo/10 text-primary-indigo hover:bg-primary-indigo/20'
                          : 'bg-primary-indigo/10 text-primary-light hover:bg-primary-indigo/20'
                      }`}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className={`p-3 sm:p-4 border-t ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className={`flex-1 px-3 sm:px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-indigo text-sm ${
                    theme === 'dark'
                      ? 'bg-surface-dark border-white/10 text-text-main focus:border-primary-indigo'
                      : 'bg-gray-50 border-gray-200 text-text-dark focus:border-primary-indigo'
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={`p-1.5 sm:p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    theme === 'dark'
                      ? 'bg-primary-indigo/10 text-primary-indigo hover:bg-primary-indigo/20'
                      : 'bg-primary-indigo/10 text-primary-light hover:bg-primary-indigo/20'
                  }`}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <Loader2 size={16} sm:size={20} className="animate-spin" />
                  ) : (
                    <Send size={16} sm:size={20} />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIAssistant
