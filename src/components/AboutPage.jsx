import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Target, Leaf, TrendingUp, Shield, Globe, Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const AboutPage = () => {
  const { language } = useLanguage()

  const contentMap = {
    en: {
      headerTitle: 'About Herbal Trace',
      headerDescription:
        'Revolutionizing the herbal industry through blockchain-powered traceability, ensuring complete transparency from seed to final product.',
      missionTitle: 'Our Mission',
      missionParagraphs: [
        'Herbal Trace was founded with a simple yet powerful mission: to bring complete transparency and trust to the herbal supply chain. We believe that consumers have the right to know exactly where their herbal products come from and how they are produced.',
        'Through cutting-edge blockchain technology and comprehensive tracking systems, we ensure that every step of the herbal product journey is documented, verified, and accessible to consumers.'
      ],
      awardTitle: 'Award-Winning Technology',
      awardDescription: 'Recognized for innovation in supply chain transparency',
      cardTitle: 'From Farm to Consumer',
      cardDescription: 'Every product tells a story of quality, care, and traditional wisdom.',
      statsHeading: 'Our Impact by the Numbers',
      stats: [
        { number: '10,000+', label: 'Products Tracked', icon: TrendingUp },
        { number: '500+', label: 'Verified Farms', icon: Users },
        { number: '50+', label: 'Herb Varieties', icon: Leaf },
        { number: '99.9%', label: 'Accuracy Rate', icon: Target }
      ],
      valuesHeading: 'Our Values',
      valuesSubtitle: 'The principles that guide everything we do',
      values: [
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
      ],
      teamHeading: 'Meet Our Team',
      teamParagraphs: [
        'Our diverse team combines expertise in blockchain technology, agricultural science, and traditional herbal medicine. Together, we work to ensure that ancient herbal wisdom meets modern technological innovation.',
        'From farmers and herbalists to software engineers and data scientists, every member of our team is passionate about creating a more transparent and trustworthy herbal industry.'
      ],
      teamStats: [
        { value: '25+', label: 'Team Members' },
        { value: '15+', label: 'Countries' }
      ],
      teamCardTitle: 'Global Collaboration',
      teamCardDescription: 'Working together to revolutionize herbal traceability worldwide.',
      visionHeading: 'Our Vision for the Future',
      visionDescription:
        'We envision a world where every herbal product comes with a complete, verifiable history. Where consumers can make informed choices based on transparent information, and where sustainable farming practices are rewarded and recognized.',
      visionItems: [
        { title: 'Global Network', description: 'Connecting farms and consumers worldwide', icon: Globe },
        { title: 'Enhanced Security', description: 'Advanced blockchain protection for all data', icon: Shield },
        { title: 'Better Health', description: 'Improving global health through quality herbs', icon: Heart }
      ]
    },
    hi: {
      headerTitle: 'हर्बल ट्रेस के बारे में',
      headerDescription:
        'ब्लॉकचेन आधारित ट्रैसेबिलिटी के माध्यम से हर्बल उद्योग में क्रांति, बीज से अंतिम उत्पाद तक पूरी पारदर्शिता सुनिश्चित करना।',
      missionTitle: 'हमारा मिशन',
      missionParagraphs: [
        'हर्बल ट्रेस की स्थापना एक सरल लेकिन शक्तिशाली मिशन के साथ हुई: हर्बल आपूर्ति श्रृंखला में पूर्ण पारदर्शिता और विश्वास लाना। हम मानते हैं कि उपभोक्ताओं को यह जानने का अधिकार है कि उनके हर्बल उत्पाद कहाँ से आते हैं और कैसे तैयार होते हैं।',
        'उन्नत ब्लॉकचेन तकनीक और व्यापक ट्रैकिंग प्रणालियों के माध्यम से हम सुनिश्चित करते हैं कि हर्बल उत्पाद की यात्रा का हर चरण दस्तावेज़ित, सत्यापित और उपभोक्ताओं के लिए उपलब्ध हो।'
      ],
      awardTitle: 'पुरस्कार विजेता तकनीक',
      awardDescription: 'सप्लाई चेन पारदर्शिता में नवाचार के लिए मान्यता प्राप्त',
      cardTitle: 'खेत से उपभोक्ता तक',
      cardDescription: 'हर उत्पाद गुणवत्ता, देखभाल और पारंपरिक ज्ञान की कहानी कहता है।',
      statsHeading: 'आँकड़ों में हमारा प्रभाव',
      stats: [
        { number: '10,000+', label: 'ट्रैक किए गए उत्पाद', icon: TrendingUp },
        { number: '500+', label: 'सत्यापित फार्म', icon: Users },
        { number: '50+', label: 'जड़ी-बूटी की किस्में', icon: Leaf },
        { number: '99.9%', label: 'सटीकता दर', icon: Target }
      ],
      valuesHeading: 'हमारे मूल्य',
      valuesSubtitle: 'वो सिद्धांत जो हमारे हर कदम को दिशा देते हैं',
      values: [
        {
          icon: Shield,
          title: 'विश्वास और पारदर्शिता',
          description: 'पूरी सप्लाई चेन की पारदर्शिता और सत्यापन योग्य डेटा के माध्यम से विश्वास का निर्माण।'
        },
        {
          icon: Leaf,
          title: 'स्थिरता',
          description: 'सतत खेती प्रथाओं और पर्यावरणीय जिम्मेदारी को बढ़ावा देना।'
        },
        {
          icon: Heart,
          title: 'स्वास्थ्य और कल्याण',
          description: 'बेहतर स्वास्थ्य परिणामों के लिए सर्वोत्तम गुणवत्ता वाले हर्बल उत्पाद सुनिश्चित करना।'
        },
        {
          icon: Globe,
          title: 'वैश्विक प्रभाव',
          description: 'दुनिया भर में समुदायों और पारिस्थितिक तंत्रों पर सकारात्मक प्रभाव बनाना।'
        }
      ],
      teamHeading: 'हमारी टीम से मिलें',
      teamParagraphs: [
        'हमारी विविध टीम ब्लॉकचेन तकनीक, कृषि विज्ञान और पारंपरिक हर्बल चिकित्सा में विशेषज्ञता को जोड़ती है। मिलकर हम यह सुनिश्चित करते हैं कि प्राचीन हर्बल ज्ञान आधुनिक तकनीकी नवाचार से मिले।',
        'किसानों और हर्बल विशेषज्ञों से लेकर सॉफ्टवेयर इंजीनियरों और डेटा वैज्ञानिकों तक, हमारी टीम का हर सदस्य अधिक पारदर्शी और विश्वसनीय हर्बल उद्योग बनाने के लिए समर्पित है।'
      ],
      teamStats: [
        { value: '25+', label: 'टीम सदस्य' },
        { value: '15+', label: 'देश' }
      ],
      teamCardTitle: 'वैश्विक सहयोग',
      teamCardDescription: 'विश्व स्तर पर हर्बल ट्रैसेबिलिटी में बदलाव लाने के लिए साथ काम कर रहे हैं।',
      visionHeading: 'भविष्य के लिए हमारा दृष्टिकोण',
      visionDescription:
        'हम ऐसा विश्व देखते हैं जहाँ हर हर्बल उत्पाद के साथ एक पूर्ण, सत्यापित इतिहास हो। जहाँ उपभोक्ता पारदर्शी जानकारी के आधार पर निर्णय लें और जहाँ सतत खेती को सम्मान और पहचान मिले।',
      visionItems: [
        { title: 'वैश्विक नेटवर्क', description: 'दुनिया भर के फार्म और उपभोक्ताओं को जोड़ना', icon: Globe },
        { title: 'बेहतर सुरक्षा', description: 'सभी डेटा के लिए उन्नत ब्लॉकचेन सुरक्षा', icon: Shield },
        { title: 'बेहतर स्वास्थ्य', description: 'गुणवत्ता युक्त जड़ी-बूटियों से वैश्विक स्वास्थ्य में सुधार', icon: Heart }
      ]
    }
  }

  const content = contentMap[language] || contentMap.en

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
            {content.headerTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.headerDescription}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.missionTitle}</h2>
            {content.missionParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg text-gray-600 leading-relaxed ${
                  index === content.missionParagraphs.length - 1 ? 'mb-8' : 'mb-6'
                }`}
              >
                {paragraph}
              </p>
            ))}
            
            <div className="flex items-center space-x-4">
              <Award className="h-12 w-12 text-primary-500" />
              <div>
                <h3 className="font-semibold text-gray-900">{content.awardTitle}</h3>
                <p className="text-gray-600">{content.awardDescription}</p>
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
                  {content.cardTitle}
                </h3>
                <p className="text-gray-600">
                  {content.cardDescription}
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
              {content.statsHeading}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {content.stats.map((stat, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.valuesHeading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.valuesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((value, index) => (
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
                {content.teamHeading}
              </h2>
              {content.teamParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg text-gray-600 leading-relaxed ${
                    index === content.teamParagraphs.length - 1 ? 'mb-8' : 'mb-6'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
              
              <div className="grid grid-cols-2 gap-6">
                {content.teamStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
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
                    {content.teamCardTitle}
                  </h3>
                  <p className="text-gray-600">
                    {content.teamCardDescription}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.visionHeading}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {content.visionDescription}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {content.visionItems.map((item) => (
                <div key={item.title} className="p-6">
                  <item.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage