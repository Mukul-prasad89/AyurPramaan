import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactService } from '../services/api'
import { validateInput } from '../utils/security'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!validateInput.name(formData.name)) {
      newErrors.name = 'Please enter a valid name (2-50 characters, letters only)'
    }
    
    if (!validateInput.email(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!validateInput.message(formData.message)) {
      newErrors.message = 'Please enter a valid message (10-1000 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    
    try {
      await contactService.submitContactForm(formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setErrors({ submit: err.message })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return <ContactSuccess onReset={() => setSubmitted(false)} />
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to implement herbal traceability for your business? 
            Contact our team of experts to learn more about our solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We'd love to hear from you. Whether you're a farmer looking to join our network, 
                a business interested in our technology, or a consumer with questions, 
                we're here to help.
              </p>

              <div className="space-y-6">
                <ContactMethod
                  icon={Mail}
                  title="Email Us"
                  detail="info@herbaltrace.com"
                  description="Send us an email anytime"
                />
                <ContactMethod
                  icon={Phone}
                  title="Call Us"
                  detail="+1 (555) 123-4567"
                  description="Monday to Friday, 9 AM to 6 PM EST"
                />
                <ContactMethod
                  icon={MapPin}
                  title="Visit Us"
                  detail="123 Innovation Drive, Tech City, CA 90210"
                  description="Our headquarters"
                />
              </div>
            </div>

            {/* Office Hours */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                <FormField
                  label="Your Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  required
                  placeholder="John Doe"
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  required
                  placeholder="john@example.com"
                />

                <FormField
                  label="Company Name"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  error={errors.company}
                  placeholder="Your Company (optional)"
                />

                <FormField
                  label="Message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  required
                  placeholder="Tell us about your needs and how we can help..."
                  rows={5}
                />

                {errors.submit && (
                  <motion.div
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-red-800">Submission Error</h4>
                      <p className="text-red-700 text-sm">{errors.submit}</p>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our herbal traceability solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FAQItem
              question="How does the tracking system work?"
              answer="Our system uses blockchain technology to create an immutable record of every step in the herbal supply chain, from cultivation to final product."
            />
            <FAQItem
              question="Is the data secure and private?"
              answer="Yes, we use advanced encryption and blockchain security to ensure all data is protected while maintaining transparency for consumers."
            />
            <FAQItem
              question="How can farmers join the network?"
              answer="Farmers can apply through our partner program. We provide training and support to help implement our tracking systems."
            />
            <FAQItem
              question="What types of herbs do you track?"
              answer="We track all types of medicinal and culinary herbs, from common varieties like turmeric and ginseng to rare traditional herbs."
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Helper Components
const ContactMethod = ({ icon: Icon, title, detail, description }) => (
  <motion.div
    className="flex items-start space-x-4"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-900 mb-1">{detail}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
)

const FormField = ({ label, name, type, value, onChange, error, required, placeholder, rows }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`input-field resize-none ${error ? 'border-red-300 focus:border-red-500' : ''}`}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? 'border-red-300 focus:border-red-500' : ''}`}
      />
    )}
    {error && (
      <motion.p
        className="mt-1 text-sm text-red-600 flex items-center space-x-1"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
      >
        <AlertCircle className="h-4 w-4" />
        <span>{error}</span>
      </motion.p>
    )}
  </div>
)

const FAQItem = ({ question, answer }) => (
  <motion.div
    className="card p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-lg font-semibold text-gray-900 mb-3">{question}</h3>
    <p className="text-gray-600 leading-relaxed">{answer}</p>
  </motion.div>
)

const ContactSuccess = ({ onReset }) => (
  <div className="min-h-screen pt-20 bg-gray-50 flex items-center">
    <div className="max-w-md mx-auto px-4">
      <motion.div
        className="card p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="h-8 w-8 text-white" />
        </motion.div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for contacting us. We've received your message and will get back to you 
          within 24 hours.
        </p>
        
        <button
          onClick={onReset}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </motion.div>
    </div>
  </div>
)

export default ContactPage