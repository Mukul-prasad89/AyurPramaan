import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  PlayCircle, 
  BarChart3, 
  Leaf,
  MapPin,
  Camera,
  Wifi,
  WifiOff,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Clock,
  Navigation,
  Thermometer,
  Droplets,
  Eye,
  Star,
  TrendingUp,
  Coins,
  Award,
  Calendar,
  Package,
  Target,
  Plus,
  Search,
  Filter,
  X,
  RefreshCw,
  Download,
  Upload,
  Send,
  Shield,
  Globe,
  Zap,
  Activity,
  DollarSign
} from 'lucide-react'

const FarmerLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isOnline, setIsOnline] = useState(true)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [newCollectionEvent, setNewCollectionEvent] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showHandoverModal, setShowHandoverModal] = useState(false)

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  // Simulate GPS location capture
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        })
      })
    }
  }, [])

  const farmerStats = [
    { id: 1, title: 'Collections Today', value: '12', change: '+3', trend: 'up', icon: Package, color: 'blue' },
    { id: 2, title: 'Quality Score', value: '94.2%', change: '+1.8%', trend: 'up', icon: Star, color: 'green' },
    { id: 3, title: 'Monthly Earnings', value: '₹18,450', change: '+12%', trend: 'up', icon: Coins, color: 'purple' },
    { id: 4, title: 'Active Alerts', value: '2', change: '-1', trend: 'down', icon: AlertTriangle, color: 'orange' }
  ]

  const collectionEvents = [
    {
      id: 'COL-2025-847',
      species: 'Ashwagandha',
      location: { lat: 19.0760, lng: 72.8777, name: 'Field Section A' },
      quantity: '2.5 kg',
      moisture: '12.3%',
      quality: 'Grade A',
      timestamp: '2025-12-02 09:15:23',
      status: 'Completed',
      photos: ['herb1.jpg', 'herb2.jpg'],
      gpsAccuracy: '3.2m'
    },
    {
      id: 'COL-2025-846',
      species: 'Turmeric',
      location: { lat: 19.0761, lng: 72.8778, name: 'Field Section B' },
      quantity: '4.1 kg',
      moisture: '14.8%',
      quality: 'Grade B+',
      timestamp: '2025-12-02 07:45:12',
      status: 'Pending Sync',
      photos: ['turmeric1.jpg'],
      gpsAccuracy: '2.8m'
    },
    {
      id: 'COL-2025-845',
      species: 'Brahmi',
      location: { lat: 19.0759, lng: 72.8776, name: 'Pond Side Area' },
      quantity: '1.8 kg',
      moisture: '16.2%',
      quality: 'Grade A+',
      timestamp: '2025-12-01 16:30:45',
      status: 'Synced',
      photos: ['brahmi1.jpg', 'brahmi2.jpg', 'brahmi3.jpg'],
      gpsAccuracy: '4.1m'
    }
  ]

  const alerts = [
    {
      id: 1,
      type: 'Seasonal Restriction',
      message: 'Shankhpushpi collection restricted until January 15, 2026',
      severity: 'High',
      species: 'Shankhpushpi',
      validUntil: '2026-01-15'
    },
    {
      id: 2,
      type: 'Geo-fence Violation',
      message: 'You are approaching a protected conservation zone',
      severity: 'Critical',
      location: 'Protected Reserve Area - Buffer Zone',
      distance: '150m'
    },
    {
      id: 3,
      type: 'Species Quota',
      message: 'Turmeric quota 85% reached for this month',
      severity: 'Medium',
      species: 'Turmeric',
      quota: '85%'
    }
  ]

  const earningsHistory = [
    { month: 'November 2025', amount: 16800, collections: 145, bonus: 500 },
    { month: 'October 2025', amount: 15200, collections: 132, bonus: 300 },
    { month: 'September 2025', amount: 17500, collections: 156, bonus: 750 },
    { month: 'August 2025', amount: 14900, collections: 128, bonus: 200 }
  ]

  const reputationScore = {
    overall: 94.2,
    punctuality: 96,
    quality: 92,
    compliance: 95,
    sustainability: 93,
    trend: 'increasing'
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{greeting}, Ravi Kumar</h1>
              <div className="flex items-center space-x-4 mt-2">
                <p className="text-gray-600">Wayanad, Kerala - Registry ID: HT-FRM-2042</p>
                <div className="flex items-center space-x-2">
                  {isOnline ? (
                    <>
                      <Wifi className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600">Online</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-red-600">Offline Mode</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setNewCollectionEvent({})}
                className="bg-primary-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 hover:bg-primary-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>New Collection</span>
              </motion.button>
              {!isOnline && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>SMS Sync</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {farmerStats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.id * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Alerts */}
        {alerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Alerts</h2>
            <div className="space-y-3">
              {alerts.slice(0, 2).map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-4 rounded-xl border-l-4 ${
                    alert.severity === 'Critical' ? 'bg-red-50 border-red-500' :
                    alert.severity === 'High' ? 'bg-orange-50 border-orange-500' :
                    'bg-yellow-50 border-yellow-500'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                      alert.severity === 'Critical' ? 'text-red-600' :
                      alert.severity === 'High' ? 'text-orange-600' :
                      'text-yellow-600'
                    }`} />
                    <div>
                      <h3 className="font-medium text-gray-900">{alert.type}</h3>
                      <p className="text-sm text-gray-700 mt-1">{alert.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
          {[
            { id: 'overview', label: 'Collection Overview', icon: BarChart3 },
            { id: 'collections', label: 'Collection Events', icon: MapPin },
            { id: 'handover', label: 'Batch Handover', icon: Package },
            { id: 'earnings', label: 'Earnings History', icon: Coins },
            { id: 'reputation', label: 'Reputation Score', icon: Award },
            { id: 'sustainability', label: 'Sustainability', icon: Leaf }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <CollectionSummary />
              <QualityMetrics />
              <WeatherInfo />
            </motion.div>
          )}

          {activeTab === 'collections' && (
            <motion.div
              key="collections"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <CollectionEventsView events={collectionEvents} onSelectEvent={setSelectedEvent} />
            </motion.div>
          )}

          {activeTab === 'handover' && (
            <motion.div
              key="handover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <BatchHandover onShowHandover={setShowHandoverModal} />
            </motion.div>
          )}

          {activeTab === 'earnings' && (
            <motion.div
              key="earnings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <EarningsHistory history={earningsHistory} />
            </motion.div>
          )}

          {activeTab === 'reputation' && (
            <motion.div
              key="reputation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <ReputationDashboard score={reputationScore} />
            </motion.div>
          )}

          {activeTab === 'sustainability' && (
            <motion.div
              key="sustainability"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <SustainabilityScore />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {newCollectionEvent && (
          <NewCollectionModal 
            location={currentLocation} 
            onClose={() => setNewCollectionEvent(null)} 
          />
        )}
        {selectedEvent && (
          <EventDetailModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}
        {showHandoverModal && (
          <HandoverModal 
            onClose={() => setShowHandoverModal(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Collection Summary Component
const CollectionSummary = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Today's Collections</h2>
    <div className="space-y-4">
      {[
        { species: 'Ashwagandha', quantity: '2.5 kg', quality: 'Grade A', time: '09:15' },
        { species: 'Turmeric', quantity: '4.1 kg', quality: 'Grade B+', time: '07:45' },
        { species: 'Brahmi', quantity: '1.8 kg', quality: 'Grade A+', time: '16:30' }
      ].map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{item.species}</p>
            <p className="text-sm text-gray-600">{item.quantity} - {item.quality}</p>
          </div>
          <span className="text-sm text-gray-500">{item.time}</span>
        </div>
      ))}
    </div>
  </div>
)

// Quality Metrics Component
const QualityMetrics = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Quality Metrics</h2>
    <div className="space-y-4">
      {[
        { metric: 'Moisture Content', value: '13.2%', target: '<15%', status: 'good' },
        { metric: 'Visual Quality', value: '94%', target: '>90%', status: 'excellent' },
        { metric: 'GPS Accuracy', value: '3.1m', target: '<5m', status: 'good' },
        { metric: 'Photo Quality', value: '96%', target: '>85%', status: 'excellent' }
      ].map((item) => (
        <div key={item.metric} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{item.metric}</p>
            <p className="text-sm text-gray-600">Target: {item.target}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.status === 'excellent' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>
)

// Weather Info Component
const WeatherInfo = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Weather & Environment</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Thermometer className="h-5 w-5 text-orange-500" />
          <span className="font-medium">Temperature</span>
        </div>
        <span className="text-2xl font-bold text-gray-900">28°C</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Droplets className="h-5 w-5 text-blue-500" />
          <span className="font-medium">Humidity</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">65%</span>
      </div>
      <div className="bg-green-50 p-3 rounded-lg">
        <p className="text-sm font-medium text-green-900">Optimal Collection Conditions</p>
        <p className="text-xs text-green-700">Good weather for herb collection today</p>
      </div>
    </div>
  </div>
)

// Collection Events View Component
const CollectionEventsView = ({ events, onSelectEvent }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Geo-Tagged Collection Events</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Map View</span>
          </button>
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.01 }}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelectEvent(event)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{event.species}</h3>
                  <p className="text-sm text-gray-600">Event ID: {event.id}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.status === 'Completed' ? 'bg-green-100 text-green-700' :
                event.status === 'Synced' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {event.status}
              </span>
            </div>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">{event.location.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Quantity</p>
                <p className="font-medium">{event.quantity}</p>
              </div>
              <div>
                <p className="text-gray-500">Moisture %</p>
                <p className="font-medium">{event.moisture}</p>
              </div>
              <div>
                <p className="text-gray-500">Quality Grade</p>
                <p className="font-medium">{event.quality}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <Navigation className="h-3 w-3" />
                  <span>GPS: {event.gpsAccuracy}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Camera className="h-3 w-3" />
                  <span>{event.photos.length} photos</span>
                </span>
              </div>
              <span className="text-xs text-gray-500">{event.timestamp}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

// Batch Handover Component
const BatchHandover = ({ onShowHandover }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Ready for Handover</h2>
      <div className="space-y-4">
        {[
          { batch: 'BATCH-2025-34', species: 'Ashwagandha', quantity: '12.5 kg', quality: 'Grade A', processor: 'Kerala Herbs Cooperative' },
          { batch: 'BATCH-2025-33', species: 'Turmeric', quantity: '28.3 kg', quality: 'Grade B+', processor: 'Spice Processing Unit' }
        ].map((batch) => (
          <div key={batch.batch} className="p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{batch.batch}</h3>
                <p className="text-sm text-gray-600">{batch.species} - {batch.quantity}</p>
                <p className="text-xs text-gray-500">Processor: {batch.processor}</p>
              </div>
              <button 
                onClick={() => onShowHandover(batch)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 text-sm"
              >
                Handover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Earnings History Component
const EarningsHistory = ({ history }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Earnings History</h2>
      <div className="space-y-4">
        {history.map((record, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">{record.month}</h3>
              <span className="text-xl font-bold text-green-600">₹{record.amount.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Collections</p>
                <p className="font-medium">{record.collections}</p>
              </div>
              <div>
                <p className="text-gray-500">Quality Bonus</p>
                <p className="font-medium text-green-600">+₹{record.bonus}</p>
              </div>
              <div>
                <p className="text-gray-500">Avg per Collection</p>
                <p className="font-medium">₹{Math.round(record.amount / record.collections)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Reputation Dashboard Component
const ReputationDashboard = ({ score }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Collector Reputation Score</h2>
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-primary-600 mb-2">{score.overall}</div>
        <p className="text-gray-600">Overall Reputation Score</p>
        <div className="flex items-center justify-center mt-2">
          <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
          <span className="text-sm text-green-600">{score.trend}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Punctuality', value: score.punctuality, icon: Clock },
          { label: 'Quality', value: score.quality, icon: Star },
          { label: 'Compliance', value: score.compliance, icon: Shield },
          { label: 'Sustainability', value: score.sustainability, icon: Leaf }
        ].map((metric) => (
          <div key={metric.label} className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 mb-2">
              <metric.icon className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-900">{metric.label}</span>
            </div>
            <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Sustainability Score Component
const SustainabilityScore = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Sustainability Score</h2>
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-green-600 mb-2">A+</div>
        <p className="text-gray-600">Environmental Impact Rating</p>
      </div>
      <div className="space-y-4">
        {[
          { metric: 'Carbon Footprint', score: 'Low', percentage: 92 },
          { metric: 'Water Conservation', score: 'Excellent', percentage: 96 },
          { metric: 'Biodiversity Impact', score: 'Positive', percentage: 88 },
          { metric: 'Soil Health', score: 'Good', percentage: 85 }
        ].map((item) => (
          <div key={item.metric} className="p-4 bg-green-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">{item.metric}</span>
              <span className="text-green-700 font-semibold">{item.score}</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Modal Components
const NewCollectionModal = ({ location, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">New Collection Event</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Species</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
              <option>Select Species</option>
              <option>Ashwagandha</option>
              <option>Turmeric</option>
              <option>Brahmi</option>
              <option>Tulsi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (kg)</label>
            <input type="number" step="0.1" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="0.0" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Moisture %</label>
            <input type="number" step="0.1" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="0.0" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quality Grade</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
              <option>Select Grade</option>
              <option>Grade A+</option>
              <option>Grade A</option>
              <option>Grade B+</option>
              <option>Grade B</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GPS Location</label>
          <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
            <Navigation className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-700">
              {location ? `Lat: ${location.lat.toFixed(6)}, Lng: ${location.lng.toFixed(6)}` : 'Capturing GPS...'}
            </span>
            <span className="text-xs text-green-600">±{location?.accuracy ? Math.round(location.accuracy) + 'm' : 'N/A'}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Collection Photos</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Take photos of collected herbs</p>
            <button className="mt-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              Open Camera
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          Save Collection
        </button>
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
      </div>
    </motion.div>
  </motion.div>
)

const EventDetailModal = ({ event, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Collection Event Details</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(event).filter(([key]) => !['photos', 'location'].includes(key)).map(([key, value]) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <p className="font-semibold">{typeof value === 'object' ? JSON.stringify(value) : value}</p>
            </div>
          ))}
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-500">Location Details</label>
          <p className="font-semibold">{event.location.name}</p>
          <p className="text-sm text-gray-600">Lat: {event.location.lat}, Lng: {event.location.lng}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Photos ({event.photos.length})</label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {event.photos.map((photo, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Camera className="h-6 w-6 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          View on Map
        </button>
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
)

const HandoverModal = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Batch Handover</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cooperative/Processor</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option>Kerala Herbs Cooperative</option>
            <option>Spice Processing Unit</option>
            <option>Organic Herbs Collective</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Handover Photos</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Take handover verification photos</p>
            <button className="mt-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              Open Camera
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
          <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2" rows="3" placeholder="Any additional notes about the handover..."></textarea>
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
          Complete Handover
        </button>
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
      </div>
    </motion.div>
  </motion.div>
)

export default FarmerLandingPage
