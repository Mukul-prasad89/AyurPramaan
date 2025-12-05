import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = ({ onOpenSignUp = () => {}, onOpenSignIn = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navContent = language === 'hi'
    ? {
        brand: 'हर्बल ट्रेस',
        navLinks: [
          { path: '/', label: 'मुखपृष्ठ' },
          { path: '/offerings', label: 'प्रसाद' },
          { path: '/about', label: 'हमारे बारे में' },
          { path: '/contact', label: 'संपर्क' }
        ],
        signIn: 'साइन इन',
        signUp: 'रजिस्टर',
        languageToggle: 'English'
      }
    : {
        brand: 'Herbal Trace',
        navLinks: [
          { path: '/', label: 'Home' },
          { path: '/offerings', label: 'Offerings' },
          { path: '/about', label: 'About us' },
          { path: '/contact', label: 'Contact' }
        ],
        signIn: 'Sign in',
        signUp: 'Sign up',
        languageToggle: 'हिन्दी'
      }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-custom-light border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 bg-gradient-primary rounded-xl"
            >
              <Leaf className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-primary-700">
              {navContent.brand}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navContent.navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-black hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm font-semibold text-black hover:text-primary-600 transition-colors"
            >
              {navContent.languageToggle}
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={onOpenSignIn}
              className="px-4 py-2 text-sm font-semibold text-primary-600 border border-primary-600 rounded-xl hover:bg-primary-50 transition-colors"
            >
              {navContent.signIn}
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors shadow-custom-light hover:shadow-custom-medium"
              onClick={onOpenSignUp}
            >
              {navContent.signUp}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-custom-light"
          >
            <div className="px-4 py-6 space-y-4">
              {navContent.navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-black hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navContent.navLinks.length * 0.1 + 0.1 }}
                className="pt-4 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-3">
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-sm font-semibold text-primary-600 border border-primary-600 rounded-xl hover:bg-primary-50 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false)
                      onOpenSignIn()
                    }}
                  >
                    {navContent.signIn}
                  </button>
                  <button
                    type="button"
                    className="w-full btn-primary text-center"
                    onClick={() => {
                      setIsMenuOpen(false)
                      onOpenSignUp()
                    }}
                  >
                    {navContent.signUp}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar