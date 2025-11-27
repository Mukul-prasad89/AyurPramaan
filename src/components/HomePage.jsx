import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Leaf, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import heroVideo from '../assets/Herbal_Traceability_Webapp_Hero_Section.mp4'
import { useLanguage } from '../context/LanguageContext'

const HomePage = () => {
  const { language } = useLanguage()

  const contentMap = {
    en: {
      heroTitle: 'Blockchain-Powered',
      heroHighlight: 'Ayurvedic Transparency',
      heroDescription:
        'Complete traceability from cultivation to your medicine cabinet. Track every step of your herbal products journey with blockchain-powered transparency.',
      trackCta: 'Track Herb',
      sectionTitle: 'Why Choose Herbal Trace?',
      sectionSubtitle: 'Advanced technology meets traditional herbal wisdom',
      features: [
        {
          title: 'Blockchain Security',
          description: 'Immutable records powered by blockchain technology ensure data integrity'
        },
        {
          title: 'Quality Assurance',
          description: 'Real-time quality monitoring with lab-verified test results'
        },
        {
          title: 'Mobile First',
          description: 'Easy-to-use mobile app with QR code scanning for instant verification'
        }
      ],
      processCta: 'Learn More About Our Process',
      socialLabels: {
        facebook: 'Facebook',
        twitter: 'Twitter',
        instagram: 'Instagram',
        youtube: 'YouTube'
      }
    },
    hi: {
      heroTitle: 'ब्लॉकचेन संचालित',
      heroHighlight: 'आयुर्वेदिक पारदर्शिता',
      heroDescription:
        'खेती से लेकर आपके औषधि बॉक्स तक पूर्ण ट्रैसेबिलिटी। ब्लॉकचेन आधारित पारदर्शिता के साथ अपने हर्बल उत्पादों की हर यात्रा को ट्रैक करें।',
      trackCta: 'जड़ी-बूटी ट्रैक करें',
      sectionTitle: 'हर्बल ट्रेस क्यों चुनें?',
      sectionSubtitle: 'उन्नत तकनीक और पारंपरिक हर्बल ज्ञान का संगम',
      features: [
        {
          title: 'ब्लॉकचेन सुरक्षा',
          description: 'ब्लॉकचेन तकनीक से संचालित अपरिवर्तनीय रिकॉर्ड डेटा की अखंडता सुनिश्चित करते हैं'
        },
        {
          title: 'गुणवत्ता आश्वासन',
          description: 'प्रयोगशाला द्वारा सत्यापित परीक्षण परिणामों के साथ वास्तविक समय गुणवत्ता निगरानी'
        },
        {
          title: 'मोबाइल केंद्रित',
          description: 'क्यूआर कोड स्कैनिंग के साथ उपयोग में आसान मोबाइल ऐप तत्काल सत्यापन देता है'
        }
      ],
      processCta: 'हमारी प्रक्रिया के बारे में और जानें',
      socialLabels: {
        facebook: 'फेसबुक',
        twitter: 'ट्विटर',
        instagram: 'इंस्टाग्राम',
        youtube: 'यूट्यूब'
      }
    }
  }

  const content = contentMap[language] || contentMap.en

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
                {content.heroTitle}
                <br />
                <span className="text-gradient relative">
                  {content.heroHighlight}
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {content.heroDescription}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/track" className="btn-primary flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>{content.trackCta}</span>
                </Link>

                <div className="flex space-x-3">
                  <SocialLink href="#" icon={Facebook} label={content.socialLabels.facebook} />
                  <SocialLink href="#" icon={Twitter} label={content.socialLabels.twitter} />
                  <SocialLink href="#" icon={Instagram} label={content.socialLabels.instagram} />
                  <SocialLink href="#" icon={Youtube} label={content.socialLabels.youtube} />
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
              <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-custom-strong">
                <video
                  className="w-full h-full object-cover"
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
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
              {content.sectionTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.sectionSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/process" className="btn-primary">
              {content.processCta}
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