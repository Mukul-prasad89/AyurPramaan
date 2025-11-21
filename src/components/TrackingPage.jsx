import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, QrCode, Shield, Clock, Leaf, Package } from 'lucide-react'
import { trackingService } from '../services/api'
import { debounce } from '../utils/security'

const TrackingPage = () => {
  const [trackingCode, setTrackingCode] = useState('')
  const [trackingResult, setTrackingResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = async (code = trackingCode) => {
    if (!code.trim()) {
      setError('Please enter a tracking code')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const result = await trackingService.trackProduct(code.trim())
      setTrackingResult(result.data)
    } catch (err) {
      setError(err.message)
      setTrackingResult(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSampleTrack = (code) => {
    setTrackingCode(code)
    handleTrack(code)
  }

  const debouncedTrack = debounce(handleTrack, 500)

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase()
    setTrackingCode(value)
    if (value.length >= 10) {
      debouncedTrack(value)
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Track Your Herbal Product
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your product code or scan QR code to see the complete journey 
            of your herbal product from farm to your hands.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Tracking Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-semibold mb-6">Enter Tracking Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="trackingCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Tracking Code
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      id="trackingCode"
                      value={trackingCode}
                      onChange={handleInputChange}
                      placeholder="Enter tracking code (e.g., HT-TUR-2024-001)"
                      className="input-field flex-1"
                      maxLength={15}
                    />
                    <motion.button
                      onClick={() => handleTrack()}
                      disabled={loading || !trackingCode.trim()}
                      className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: loading ? 1 : 1.05 }}
                      whileTap={{ scale: loading ? 1 : 0.95 }}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Search className="h-5 w-5" />
                      )}
                      <span>{loading ? 'Tracking...' : 'Track'}</span>
                    </motion.button>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-gray-500 text-sm mb-4">or</div>
                  <motion.button
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert('QR Scanner would open here in a real app')}
                  >
                    <QrCode className="h-5 w-5" />
                    <span>Scan QR Code</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Sample Codes */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Try Sample Codes</h3>
              <div className="grid grid-cols-1 gap-2">
                {trackingService.getSampleCodes().map((code) => (
                  <motion.button
                    key={code}
                    onClick={() => handleSampleTrack(code)}
                    className="text-left p-3 bg-gray-100 hover:bg-primary-50 rounded-lg transition-colors font-mono text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {code}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tracking Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {error && (
              <motion.div
                className="card p-6 border-red-200 bg-red-50 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800">Tracking Error</h3>
                    <p className="text-red-600">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {trackingResult ? (
              <TrackingResult data={trackingResult} />
            ) : (
              <div className="card p-8 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Track</h3>
                <p className="text-gray-600">
                  Enter a tracking code or use one of the sample codes to see detailed traceability information.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Tracking Result Component
const TrackingResult = ({ data }) => (
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Product Info */}
    <div className="card p-6">
      <div className="flex items-start space-x-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-20 h-20 rounded-xl object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{data.name}</h3>
            <div className="flex items-center space-x-1 text-green-600">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Verified</span>
            </div>
          </div>
          <p className="text-gray-600 mb-2">{data.grade}</p>
          <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
            Batch: {data.id}
          </div>
        </div>
      </div>
    </div>

    {/* Journey Timeline */}
    <div className="card p-6">
      <h4 className="text-lg font-semibold mb-6 flex items-center space-x-2">
        <Clock className="h-5 w-5 text-primary-600" />
        <span>Journey Timeline</span>
      </h4>
      
      <div className="space-y-4">
        {data.journey.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step.verified ? 'bg-green-500' : 'bg-gray-300'
            }`}>
              <StageIcon stage={step.stage} verified={step.verified} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h5 className="font-medium text-gray-900">{step.title}</h5>
                <span className="text-sm text-gray-500">{step.date}</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{step.location}</p>
              <p className="text-sm text-gray-500">{step.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Certificates & Lab Results */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h4 className="text-lg font-semibold mb-4">Certificates</h4>
        <div className="space-y-2">
          {data.certificates.map((cert, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h4 className="text-lg font-semibold mb-4">Lab Results</h4>
        <div className="space-y-2">
          {Object.entries(data.lab_results).map(([key, value]) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
              <span className="font-medium text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

// Stage Icon Component
const StageIcon = ({ stage, verified }) => {
  const icons = {
    cultivation: <Leaf className="h-5 w-5" />,
    farming: <Leaf className="h-5 w-5" />,
    harvest: <Package className="h-5 w-5" />,
    processing: <Package className="h-5 w-5" />,
    testing: <Shield className="h-5 w-5" />,
    packaging: <Package className="h-5 w-5" />,
    shipping: <Package className="h-5 w-5" />
  }

  return (
    <div className={verified ? 'text-white' : 'text-gray-500'}>
      {icons[stage] || <Package className="h-5 w-5" />}
    </div>
  )
}

export default TrackingPage