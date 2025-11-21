import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Leaf, Smartphone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 to-emerald-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Blockchain-Powered{' '}
                
                <br />
                <span className="text-gradient relative">
                  Ayurvedic Transparency
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Complete traceability from cultivation to your medicine cabinet. 
                Track every step of your herbal products journey with blockchain-powered transparency.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/track" className="btn-primary flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Track Herb</span>
                </Link>

                <div className="flex space-x-3">
                  <SocialLink href="#" icon={Facebook} label="Facebook" />
                  <SocialLink href="#" icon={Twitter} label="Twitter" />
                  <SocialLink href="#" icon={Instagram} label="Instagram" />
                  <SocialLink href="#" icon={Youtube} label="YouTube" />
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Circle */}
                <motion.div
                  className="w-80 h-80 md:w-96 md:h-96 bg-gradient-accent rounded-full flex items-center justify-center shadow-custom-strong"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.02, 1] 
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <div className="text-center text-white">
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Smartphone className="h-16 w-16 mx-auto mb-4" />
                    </motion.div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-8 h-6 bg-amber-700 rounded shadow-md"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 2, -2, 0] 
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut" 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <FloatingElement 
                  icon={Leaf} 
                  className="absolute -top-4 -left-8 text-primary-600" 
                  delay={0} 
                />
                <FloatingElement 
                  icon={Leaf} 
                  className="absolute top-1/2 -right-12 text-green-500" 
                  delay={2} 
                />
                <FloatingElement 
                  icon={Leaf} 
                  className="absolute -bottom-8 left-8 text-emerald-600" 
                  delay={4} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Herbal Trace?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets traditional herbal wisdom
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Blockchain Security"
              description="Immutable records powered by blockchain technology ensure data integrity"
              delay={0}
            />
            <FeatureCard
              title="Quality Assurance"
              description="Real-time quality monitoring with lab-verified test results"
              delay={0.2}
            />
            <FeatureCard
              title="Mobile First"
              description="Easy-to-use mobile app with QR code scanning for instant verification"
              delay={0.4}
            />
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/process" className="btn-primary">
              Learn More About Our Process
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Helper Components
const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    className="w-12 h-12 bg-white rounded-xl shadow-custom-light flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </motion.a>
)

const FloatingElement = ({ icon: Icon, className, delay }) => (
  <motion.div
    className={`text-4xl ${className}`}
    animate={{
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    <Icon className="h-8 w-8" />
  </motion.div>
)

const FeatureCard = ({ title, description, delay }) => (
  <motion.div
    className="card p-8 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
  >
    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
      <Leaf className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
)

export default HomePage