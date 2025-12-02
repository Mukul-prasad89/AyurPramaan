import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Target, Leaf, TrendingUp, Shield, Globe, Heart, Code, Smartphone, PenTool, Lightbulb, Monitor, Palette } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Import team member photos
import kunalPhoto from '../assets/kunal.jpeg'
import manasPhoto from '../assets/manas.jpeg'
import avinashPhoto from '../assets/avinash.jpeg'
import shreyaPhoto from '../assets/shreya.jpeg'
import mukulPhoto from '../assets/mukul.jpeg'

const AboutPage = () => {
  const { language } = useLanguage()

  const contentMap = {
    en: {
      headerTitle: 'About us',
      headerDescription:
        'Revolutionizing the herbal industry through blockchain-powered traceability, ensuring complete transparency from seed to final product.',
      missionTitle: 'Our Mission',
      missionParagraphs: [
        'Herbal Trace was founded with a simple yet powerful mission: to bring complete transparency and trust to the herbal supply chain. We believe that consumers have the right to know exactly where their herbal products come from and how they are produced.',
        'Through cutting-edge blockchain technology and comprehensive tracking systems, we ensure that every step of the herbal product journey is documented, verified, and accessible to consumers.'
      ],
      
      
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals behind Herbal Trace who are revolutionizing the herbal industry through innovative technology and dedication to transparency.
            </p>
          </div>

          <div className="space-y-16">
            {/* Kunal - Team Leader (1st - Description Left, Image Right) */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Kunal</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium">Team Leader</span>
                </div>
                <p className="text-lg text-gray-600 mb-4 font-medium">Blockchain Architect & Application Development</p>
                <p className="text-gray-600 leading-relaxed">
                  Visionary leader who spearheads the entire application development and serves as the master architect of our blockchain infrastructure, ensuring complete transparency across the herbal supply chain. His expertise in distributed systems and agricultural technology drives our innovation forward.
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={kunalPhoto}
                    alt="Kunal - Team Leader"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Manas - Frontend Developer (2nd - Image Left, Description Right) */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={manasPhoto}
                    alt="Manas - Frontend Developer"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Monitor className="h-6 w-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Manas</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">Frontend Developer</span>
                </div>
                <p className="text-lg text-gray-600 mb-4 font-medium">User Interface Development</p>
                <p className="text-gray-600 leading-relaxed">
                  Creates intuitive and responsive user interfaces that make complex blockchain technology accessible to farmers, processors, and consumers with exceptional attention to detail. His designs ensure seamless user experiences across all stakeholder platforms.
                </p>
              </div>
            </motion.div>

            {/* Avinash - Mobile Developer (3rd - Description Left, Image Right) */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Avinash</h3>
                  <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-medium">Mobile Developer</span>
                </div>
                <p className="text-lg text-gray-600 mb-4 font-medium">Mobile Application Development</p>
                <p className="text-gray-600 leading-relaxed">
                  Develops powerful mobile solutions that bring herbal traceability directly to farmers' hands, enabling real-time data collection and GPS tracking in remote areas. His mobile applications bridge the digital divide in rural agricultural communities.
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={avinashPhoto}
                    alt="Avinash - Mobile App Developer"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Shreya - Research Writer (4th - Image Left, Description Right) */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={shreyaPhoto}
                    alt="Shreya - Research & Content Writer"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <PenTool className="h-6 w-6 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Shreya</h3>
                  <span className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full font-medium">Research Writer</span>
                </div>
                <p className="text-lg text-gray-600 mb-4 font-medium">Research & Content Development</p>
                <p className="text-gray-600 leading-relaxed">
                  Conducts extensive research on herbal industry practices and creates compelling content that bridges traditional knowledge with modern technology for diverse audiences. Her work ensures our platform reflects authentic herbal industry needs and practices.
                </p>
              </div>
            </motion.div>

            {/* Tanvi - UI/UX Designer (5th - Description Left, Image Right) */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Palette className="h-6 w-6 text-pink-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Tanvi</h3>
                  <span className="text-sm text-pink-600 bg-pink-50 px-3 py-1 rounded-full font-medium">UI/UX Designer</span>
                </div>
                <p className="text-lg text-gray-600 mb-4 font-medium">Design & Business Strategy</p>
                <p className="text-gray-600 leading-relaxed">
                  Leads UI/UX design initiatives and business model development, creating innovative interface components and researching market strategies for commercial viability. Her design philosophy ensures our platform is both beautiful and highly functional.
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center h-80">
                  <span className="text-8xl font-bold text-pink-600">T</span>
                </div>
              </div>
            </motion.div>

            {/* Mukul - Frontend Developer (6th - Image Left, Description Right) */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={mukulPhoto}
                    alt="Mukul - Frontend Developer"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-teal-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Mukul</h3>
                  <span className="text-sm text-teal-600 bg-teal-50 px-3 py-1 rounded-full font-medium">Frontend Developer</span>
                </div>
                <p className="text-lg text-gray-600 mb-4 font-medium">Frontend Development & Optimization</p>
                <p className="text-gray-600 leading-relaxed">
                  Contributes to frontend development by implementing innovative features and optimizing user interactions, ensuring smooth performance across different devices. His technical expertise helps create responsive and engaging user experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Team Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Dedication</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Innovation</div>
            </div>
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