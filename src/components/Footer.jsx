import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { language } = useLanguage()

  const contentMap = {
    en: {
      brandLine: '\u00A9 2025 Herbal Trace. All rights reserved.',
      powerLine: 'Powered by blockchain technology for maximum transparency and security.',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Cookie Settings', href: '#' }
      ],
      badges: [
        { color: 'bg-green-500', label: 'Blockchain Secured' },
        { color: 'bg-blue-500', label: 'ISO 27001 Certified' },
        { color: 'bg-purple-500', label: 'GDPR Compliant' }
      ]
    },
    hi: {
      brandLine: '\u00A9 2025 हर्बल ट्रेस. सर्वाधिकार सुरक्षित.',
      powerLine: 'अधिकतम पारदर्शिता और सुरक्षा के लिए ब्लॉकचेन तकनीक द्वारा संचालित।',
      links: [
        { label: 'गोपनीयता नीति', href: '#' },
        { label: 'नियम और शर्तें', href: '#' },
        { label: 'कुकी सेटिंग्स', href: '#' }
      ],
      badges: [
        { color: 'bg-green-500', label: 'ब्लॉकचेन सुरक्षित' },
        { color: 'bg-blue-500', label: 'ISO 27001 प्रमाणित' },
        { color: 'bg-purple-500', label: 'GDPR अनुरूप' }
      ]
    }
  }

  const content = contentMap[language] || contentMap.en

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div>
              <p className="text-gray-400">
                {content.brandLine}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {content.powerLine}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              {content.links.map((link, index) => (
                <React.Fragment key={link.label}>
                  {index > 0 && <span className="w-1 h-1 rounded-full bg-gray-700" />}
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {content.badges.map((badge) => (
                <span key={badge.label} className="flex items-center space-x-2">
                  <span className={`w-2 h-2 ${badge.color} rounded-full animate-pulse`}></span>
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer