import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Target, Leaf, TrendingUp, Shield, Globe, Heart } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { number: '10,000+', label: 'Products Tracked', icon: TrendingUp },
    { number: '500+', label: 'Verified Farms', icon: Users },
    { number: '50+', label: 'Herb Varieties', icon: Leaf },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building trust through complete supply chain transparency and verifiable data.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting sustainable farming practices and environmental responsibility.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Ensuring the highest quality herbal products for better health outcomes.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating positive impact on communities and ecosystems worldwide.'
    }
  ]

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
            About Herbal Trace
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing the herbal industry through blockchain-powered traceability, 
            ensuring complete transparency from seed to final product.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Herbal Trace was founded with a simple yet powerful mission: to bring complete 
              transparency and trust to the herbal supply chain. We believe that consumers 
              have the right to know exactly where their herbal products come from and how 
              they are produced.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through cutting-edge blockchain technology and comprehensive tracking systems, 
              we ensure that every step of the herbal product journey is documented, verified, 
              and accessible to consumers.
            </p>
            
            <div className="flex items-center space-x-4">
              <Award className="h-12 w-12 text-primary-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Award-Winning Technology</h3>
                <p className="text-gray-600">Recognized for innovation in supply chain transparency</p>
              </div>
            </div>
          </div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card p-8">
              <img
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=400&fit=crop"
                alt="Herbal farming"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  From Farm to Consumer
                </h3>
                <p className="text-gray-600">
                  Every product tells a story of quality, care, and traditional wisdom.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="card p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Impact by the Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center hover:shadow-custom-medium transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our diverse team combines expertise in blockchain technology, agricultural 
                science, and traditional herbal medicine. Together, we work to ensure that 
                ancient herbal wisdom meets modern technological innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From farmers and herbalists to software engineers and data scientists, 
                every member of our team is passionate about creating a more transparent 
                and trustworthy herbal industry.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">25+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">15+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card p-6">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                  alt="Our team"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Collaboration
                </h3>
                <p className="text-gray-600">
                  Working together to revolutionize herbal traceability worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="card p-8 md:p-12 text-center bg-gradient-to-br from-primary-50 to-green-50 border-primary-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision for the Future</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We envision a world where every herbal product comes with a complete, verifiable 
              history. Where consumers can make informed choices based on transparent information, 
              and where sustainable farming practices are rewarded and recognized.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <Globe className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">Connecting farms and consumers worldwide</p>
              </div>
              <div className="p-6">
                <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Security</h3>
                <p className="text-gray-600">Advanced blockchain protection for all data</p>
              </div>
              <div className="p-6">
                <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Better Health</h3>
                <p className="text-gray-600">Improving global health through quality herbs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage