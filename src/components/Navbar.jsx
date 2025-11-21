import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X, ChevronDown } from 'lucide-react'

const Navbar = ({ onOpenSignUp = () => {}, onOpenSignIn = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isRolesOpen, setIsRolesOpen] = useState(false)
  const [isMobileRolesOpen, setIsMobileRolesOpen] = useState(false)
  const rolesMenuRef = useRef(null)
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
    setIsRolesOpen(false)
    setIsMobileRolesOpen(false)
  }, [location])

  useEffect(() => {
    if (!isRolesOpen) return
    const handleClickOutside = (event) => {
      if (rolesMenuRef.current && !rolesMenuRef.current.contains(event.target)) {
        setIsRolesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isRolesOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/track', label: 'Track' },
    { path: '/process', label: 'Process' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  const roleLinks = [
    { path: '/farmer', label: 'Farmer Workspace' },
    { path: '/laboratory', label: 'Laboratory Console' },
    { path: '/regulator', label: 'Regulator Console' },
    { path: '/manufacturer', label: 'Manufacturer Console' },
    { path: '/admin', label: 'Admin Console' }
  ]

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
              Herbal Trace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="relative" ref={rolesMenuRef}>
              <button
                type="button"
                onClick={() => setIsRolesOpen((prev) => !prev)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  isRolesOpen ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                <span>Role Consoles</span>
                <motion.span animate={{ rotate: isRolesOpen ? 180 : 0 }} className="inline-flex">
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isRolesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-56 rounded-xl border border-gray-100 bg-white shadow-custom-light py-2"
                  >
                    {roleLinks.map((role) => (
                      <Link
                        key={role.path}
                        to={role.path}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 ${
                          location.pathname === role.path ? 'bg-primary-50 text-primary-600' : ''
                        }`}
                        onClick={() => setIsRolesOpen(false)}
                      >
                        {role.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={onOpenSignIn}
              className="px-4 py-2 text-sm font-semibold text-primary-600 border border-primary-600 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Sign in
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors shadow-custom-light hover:shadow-custom-medium"
              onClick={onOpenSignUp}
            >
              Sign up
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
              {navLinks.map((link, index) => (
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
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => setIsMobileRolesOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span>Role Consoles</span>
                  <motion.span animate={{ rotate: isMobileRolesOpen ? 180 : 0 }} className="inline-flex">
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isMobileRolesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 space-y-2 pl-4"
                    >
                      {roleLinks.map((role) => (
                        <Link
                          key={role.path}
                          to={role.path}
                          className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                            location.pathname === role.path
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                          onClick={() => setIsMobileRolesOpen(false)}
                        >
                          {role.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
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
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="w-full btn-primary text-center"
                    onClick={() => {
                      setIsMenuOpen(false)
                      onOpenSignUp()
                    }}
                  >
                    Sign up
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