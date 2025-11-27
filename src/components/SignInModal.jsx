import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, EyeOff } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const stakeholderOptions = [
  { value: 'Manufacturer', label: { en: 'Manufacturer', hi: 'निर्माता' } },
  { value: 'Laboratory', label: { en: 'Laboratory', hi: 'प्रयोगशाला' } },
  { value: 'Regulator', label: { en: 'Regulator', hi: 'नियामक' } },
  { value: 'Farmer', label: { en: 'Farmer', hi: 'किसान' } },
  { value: 'Admin', label: { en: 'Admin', hi: 'प्रशासक' } }
]

const SignInModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const { language } = useLanguage()
  const contentMap = {
    en: {
      title: 'Sign in',
      stakeholderLabel: 'Stakeholder Type',
      selectPlaceholder: '--Select--',
      loginIdLabel: 'Login ID',
      loginIdPlaceholder: 'Enter Login ID',
      identifierLabel: 'Username / Email',
      identifierPlaceholder: 'Enter username or email',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter Password',
      submitButton: 'Sign in',
      switchPrompt: 'New to Herbal Trace?',
      switchButton: 'Create an account',
      closeAria: 'Close sign in form',
      togglePasswordAria: 'Toggle password visibility'
    },
    hi: {
      title: 'साइन इन करें',
      stakeholderLabel: 'हितधारक प्रकार',
      selectPlaceholder: '--चयन करें--',
      loginIdLabel: 'लॉगिन आईडी',
      loginIdPlaceholder: 'लॉगिन आईडी दर्ज करें',
      identifierLabel: 'उपयोगकर्ता नाम / ईमेल',
      identifierPlaceholder: 'उपयोगकर्ता नाम या ईमेल दर्ज करें',
      passwordLabel: 'पासवर्ड',
      passwordPlaceholder: 'पासवर्ड दर्ज करें',
      submitButton: 'साइन इन करें',
      switchPrompt: 'हर्बल ट्रेस पर नए हैं?',
      switchButton: 'खाता बनाएं',
      closeAria: 'साइन इन फॉर्म बंद करें',
      togglePasswordAria: 'पासवर्ड दृश्यता बदलें'
    }
  }

  const content = contentMap[language] || contentMap.en
  const options = stakeholderOptions.map((option) => ({
    value: option.value,
    label: option.label[language] || option.label.en
  }))

  const [credentials, setCredentials] = useState({ loginId: '', identifier: '', password: '', stakeholderType: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onClose()
    setCredentials({ loginId: '', identifier: '', password: '', stakeholderType: '' })
    setShowPassword(false)
  }

  const handleClose = () => {
    onClose()
    setCredentials({ loginId: '', identifier: '', password: '', stakeholderType: '' })
    setShowPassword(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-md"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-custom-strong overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900">{content.title}</h2>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label={content.closeAria}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-6 lg:py-8 bg-white space-y-5">
                <label className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
                  <span>
                    {content.stakeholderLabel}<span className="text-red-500"> *</span>
                  </span>
                  <select
                    name="stakeholderType"
                    value={credentials.stakeholderType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  >
                    <option value="" disabled>
                      {content.selectPlaceholder}
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
                  <span>
                    {content.loginIdLabel}<span className="text-red-500"> *</span>
                  </span>
                  <input
                    type="text"
                    name="loginId"
                    value={credentials.loginId}
                    onChange={handleChange}
                    placeholder={content.loginIdPlaceholder}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </label>

                <label className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
                  <span>
                    {content.identifierLabel}<span className="text-red-500"> *</span>
                  </span>
                  <input
                    type="text"
                    name="identifier"
                    value={credentials.identifier}
                    onChange={handleChange}
                    placeholder={content.identifierPlaceholder}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </label>

                <label className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
                  <span>
                    {content.passwordLabel}<span className="text-red-500"> *</span>
                  </span>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      placeholder={content.passwordPlaceholder}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                      aria-label={content.togglePasswordAria}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </label>

                <button type="submit" className="w-full btn-primary">
                  {content.submitButton}
                </button>

                <p className="text-sm text-center text-gray-600">
                  {content.switchPrompt}{' '}
                  <button
                    type="button"
                    className="text-primary-600 font-semibold hover:underline"
                    onClick={() => {
                      handleClose()
                      onSwitchToSignUp()
                    }}
                  >
                    {content.switchButton}
                  </button>
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SignInModal
