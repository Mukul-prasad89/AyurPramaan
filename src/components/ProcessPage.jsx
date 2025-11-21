import React from 'react'
import { motion } from 'framer-motion'
import { Sprout, Tractor, Scissors, Factory, Truck, Pill, CheckCircle } from 'lucide-react'

const ProcessPage = () => {
  const stages = [
    {
      id: 1,
      icon: Sprout,
      title: 'Seed & Cultivation',
      description: 'Track from organic seed sourcing, soil preparation, planting date, and growing conditions',
      details: [
        'Certified organic seed verification',
        'Soil quality testing and preparation',
        'Climate monitoring and irrigation',
        'Organic fertilizer application tracking'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 2,
      icon: Tractor,
      title: 'Farm Management',
      description: 'Monitor watering schedules, organic fertilizers, pest control methods, and growth milestones',
      details: [
        'Daily water and nutrient monitoring',
        'Natural pest control documentation',
        'Growth milestone tracking',
        'Weather impact assessment'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 3,
      icon: Scissors,
      title: 'Harvesting',
      description: 'Record optimal harvest time, harvesting methods, quality assessment, and batch numbers',
      details: [
        'Optimal maturity determination',
        'Hand-harvesting techniques',
        'Initial quality assessment',
        'Batch numbering and documentation'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 4,
      icon: Factory,
      title: 'Processing',
      description: 'Track drying, extraction, purification, quality testing, and packaging processes',
      details: [
        'Traditional drying methods',
        'Extraction and purification',
        'Quality control testing',
        'Clean room processing'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 5,
      icon: Truck,
      title: 'Distribution',
      description: 'Monitor storage conditions, transportation, quality checks, and delivery tracking',
      details: [
        'Temperature-controlled storage',
        'Transportation monitoring',
        'Quality preservation checks',
        'Real-time delivery tracking'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 6,
      icon: Pill,
      title: 'Final Product',
      description: 'Verify authenticity, check expiry dates, usage instructions, and health certifications',
      details: [
        'Final quality verification',
        'Packaging and labeling',
        'Expiry date assignment',
        'Health certification approval'
      ],
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
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
            Complete Herb Journey Tracking
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Follow your herbal products through every stage of their lifecycle. 
            Our comprehensive tracking system ensures complete transparency 
            from seed to final product.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="space-y-12">
          {stages.map((stage, index) => (
            <ProcessStage 
              key={stage.id} 
              stage={stage} 
              index={index} 
              isLast={index === stages.length - 1}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Our Process Matters
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Every step is documented, verified, and secured using blockchain technology 
              to ensure the highest quality and safety standards.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <BenefitCard
                title="100% Transparency"
                description="Complete visibility into every step of the herbal supply chain"
                delay={0}
              />
              <BenefitCard
                title="Quality Assured"
                description="Multiple quality checks and certifications at each stage"
                delay={0.2}
              />
              <BenefitCard
                title="Blockchain Secured"
                description="Immutable records that cannot be tampered with or falsified"
                delay={0.4}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Process Stage Component
const ProcessStage = ({ stage, index, isLast }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Content */}
      <div className="flex-1 space-y-6">
        <div className="card p-8">
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 ${stage.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <stage.icon className={`h-8 w-8 ${stage.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className="inline-block bg-primary-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Stage {stage.id}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {stage.description}
              </p>
              
              <div className="space-y-3">
                {stage.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: detailIndex * 0.1 + 0.3 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Element */}
      <div className="flex-shrink-0 relative">
        <motion.div
          className={`w-32 h-32 ${stage.bgColor} rounded-full flex items-center justify-center relative`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <stage.icon className={`h-16 w-16 ${stage.color}`} />
          
          {/* Connection Line */}
          {!isLast && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-200 mt-2" />
          )}
        </motion.div>
        
        {/* Stage Number */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
          {stage.id}
        </div>
      </div>
    </motion.div>
  )
}

// Benefit Card Component
const BenefitCard = ({ title, description, delay }) => (
  <motion.div
    className="p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
  >
    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
      <CheckCircle className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
)

export default ProcessPage