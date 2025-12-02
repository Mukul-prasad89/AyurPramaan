import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  PackageCheck, 
  RotateCw, 
  Scale, 
  QrCode,
  Thermometer,
  Droplets,
  Clock,
  Package,
  Factory,
  AlertTriangle,
  CheckCircle,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Activity,
  BarChart3,
  Settings,
  Download,
  Eye,
  X,
  Zap,
  Wind,
  Timer,
  Boxes,
  Shield,
  FileText,
  TrendingUp
} from 'lucide-react'

const ManufacturerLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBatch, setSelectedBatch] = useState(null)
  const [selectedProcess, setSelectedProcess] = useState(null)

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  const stats = [
    { id: 1, title: 'Active Batches', value: '12', change: '+3', trend: 'up', icon: Package, color: 'blue' },
    { id: 2, title: 'Daily Production', value: '850kg', change: '+5.2%', trend: 'up', icon: Factory, color: 'green' },
    { id: 3, title: 'Process Efficiency', value: '96.8%', change: '+1.2%', trend: 'up', icon: TrendingUp, color: 'purple' },
    { id: 4, title: 'QR Codes Generated', value: '248', change: '+12', trend: 'up', icon: QrCode, color: 'orange' }
  ]

  const incomingBatches = [
    {
      id: 'HT-BATCH-2025-101',
      herb: 'Ashwagandha Root',
      quantity: '750kg',
      farmer: 'Rajesh Kumar',
      labStatus: 'Approved',
      receivedDate: '2025-12-02',
      expiryDate: '2025-12-15',
      priority: 'High',
      status: 'Ready for Processing'
    },
    {
      id: 'HT-BATCH-2025-102',
      herb: 'Turmeric Powder',
      quantity: '500kg',
      farmer: 'Priya Sharma',
      labStatus: 'Approved',
      receivedDate: '2025-12-01',
      expiryDate: '2025-12-14',
      priority: 'Medium',
      status: 'In Processing'
    },
    {
      id: 'HT-BATCH-2025-103',
      herb: 'Tulsi Leaves',
      quantity: '300kg',
      farmer: 'Suresh Patel',
      labStatus: 'Pending',
      receivedDate: '2025-12-01',
      expiryDate: '2025-12-12',
      priority: 'Low',
      status: 'Awaiting QA'
    }
  ]

  const activeProcesses = [
    {
      id: 'PROC-2025-001',
      batchId: 'HT-BATCH-2025-102',
      step: 'Drying',
      startTime: '2025-12-02 09:00',
      estimatedEnd: '2025-12-02 15:00',
      temperature: '65°C',
      humidity: '25%',
      operator: 'Ravi Kumar',
      status: 'In Progress',
      progress: 75
    },
    {
      id: 'PROC-2025-002',
      batchId: 'HT-BATCH-2025-101',
      step: 'Grinding',
      startTime: '2025-12-02 14:00',
      estimatedEnd: '2025-12-02 16:30',
      temperature: 'Ambient',
      humidity: '45%',
      operator: 'Meera Patel',
      status: 'Scheduled',
      progress: 0
    }
  ]

  const inventory = [
    { id: 1, material: 'Ashwagandha Powder', available: '2,450kg', reserved: '750kg', location: 'Warehouse A' },
    { id: 2, material: 'Turmeric Extract', available: '1,200kg', reserved: '300kg', location: 'Warehouse B' },
    { id: 3, material: 'Tulsi Oil', available: '180L', reserved: '50L', location: 'Cold Storage' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{greeting}, Anita Iyer</h1>
              <p className="text-gray-600">Herbal Essence Processing Unit - AYUSH GMP Certified</p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 hover:bg-primary-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>New Process</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
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

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'batches', label: 'Batch Management', icon: Package },
            { id: 'processing', label: 'Processing Steps', icon: Factory },
            { id: 'inventory', label: 'Inventory', icon: Boxes },
            { id: 'qr-codes', label: 'QR Generation', icon: QrCode },
            { id: 'recall', label: 'Recall Simulation', icon: AlertTriangle }
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
              {/* Active Processes */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Active Processing Steps</h2>
                  <button className="text-primary-600 font-medium hover:text-primary-700">View All</button>
                </div>
                <div className="space-y-4">
                  {activeProcesses.map((process) => (
                    <ProcessCard key={process.id} process={process} onClick={() => setSelectedProcess(process)} />
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  {[
                    { icon: Plus, label: 'Start New Process', color: 'blue' },
                    { icon: QrCode, label: 'Generate QR Code', color: 'green' },
                    { icon: Eye, label: 'View Provenance', color: 'purple' },
                    { icon: AlertTriangle, label: 'Simulate Recall', color: 'red' }
                  ].map((action) => (
                    <motion.button
                      key={action.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center space-x-3 p-4 rounded-xl border-2 border-${action.color}-100 hover:bg-${action.color}-50 transition-colors text-left`}
                    >
                      <div className={`p-2 rounded-lg bg-${action.color}-100`}>
                        <action.icon className={`h-5 w-5 text-${action.color}-600`} />
                      </div>
                      <span className="font-medium text-gray-900">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'batches' && (
            <motion.div
              key="batches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <BatchManagement batches={incomingBatches} onSelectBatch={setSelectedBatch} />
            </motion.div>
          )}

          {activeTab === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <ProcessingSteps />
            </motion.div>
          )}

          {activeTab === 'inventory' && (
            <motion.div
              key="inventory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <InventoryTracking inventory={inventory} />
            </motion.div>
          )}

          {activeTab === 'qr-codes' && (
            <motion.div
              key="qr-codes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <QRCodeGeneration />
            </motion.div>
          )}

          {activeTab === 'recall' && (
            <motion.div
              key="recall"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <RecallSimulation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedBatch && (
          <BatchDetailModal batch={selectedBatch} onClose={() => setSelectedBatch(null)} />
        )}
        {selectedProcess && (
          <ProcessDetailModal process={selectedProcess} onClose={() => setSelectedProcess(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Process Card Component
const ProcessCard = ({ process, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="font-semibold text-gray-900">{process.step}</h3>
        <p className="text-sm text-gray-600">Batch: {process.batchId}</p>
      </div>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        process.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
        process.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-700' :
        'bg-green-100 text-green-700'
      }`}>
        {process.status}
      </span>
    </div>
    
    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
      <div className="flex items-center space-x-2">
        <Thermometer className="h-4 w-4 text-red-500" />
        <span>{process.temperature}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Droplets className="h-4 w-4 text-blue-500" />
        <span>{process.humidity}</span>
      </div>
    </div>
    
    {process.status === 'In Progress' && (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${process.progress}%` }}
        />
      </div>
    )}
  </motion.div>
)

// Batch Management Component
const BatchManagement = ({ batches, onSelectBatch }) => (
  <div>
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Incoming Batches</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search batches..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="space-y-4">
        {batches.map((batch) => (
          <motion.div
            key={batch.id}
            whileHover={{ scale: 1.01 }}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelectBatch(batch)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <h3 className="font-semibold text-gray-900">{batch.id}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    batch.priority === 'High' ? 'bg-red-100 text-red-700' :
                    batch.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {batch.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    batch.labStatus === 'Approved' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {batch.labStatus}
                  </span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Herb</p>
                    <p className="font-medium">{batch.herb}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Quantity</p>
                    <p className="font-medium">{batch.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Farmer</p>
                    <p className="font-medium">{batch.farmer}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Expiry</p>
                    <p className="font-medium">{batch.expiryDate}</p>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

// Processing Steps Component
const ProcessingSteps = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Create Processing Step</h2>
    <ProcessingStepForm />
  </div>
)

const ProcessingStepForm = () => {
  const [stepData, setStepData] = useState({
    batchId: '',
    processStep: '',
    temperature: '',
    humidity: '',
    duration: '',
    operator: ''
  })

  const processSteps = [
    'Cleaning & Sorting',
    'Drying',
    'Grinding',
    'Extraction',
    'Filtration',
    'Concentration',
    'Packaging',
    'Quality Check'
  ]

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Batch ID</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="HT-BATCH-2025-001"
            value={stepData.batchId}
            onChange={(e) => setStepData({...stepData, batchId: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Process Step</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={stepData.processStep}
            onChange={(e) => setStepData({...stepData, processStep: e.target.value})}
          >
            <option value="">Select process step</option>
            {processSteps.map((step) => (
              <option key={step} value={step}>{step}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Temperature (°C)</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="65"
            value={stepData.temperature}
            onChange={(e) => setStepData({...stepData, temperature: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Humidity (%)</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="25"
            value={stepData.humidity}
            onChange={(e) => setStepData({...stepData, humidity: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration (hours)</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="6"
            value={stepData.duration}
            onChange={(e) => setStepData({...stepData, duration: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Operator</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Operator Name"
          value={stepData.operator}
          onChange={(e) => setStepData({...stepData, operator: e.target.value})}
        />
      </div>

      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Start Process
        </motion.button>
        <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          Save Draft
        </button>
      </div>
    </div>
  )
}

// Inventory Tracking Component
const InventoryTracking = ({ inventory }) => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold text-gray-900">Inventory Tracking</h2>
      <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
        Add Material
      </button>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Available</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reserved</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {inventory.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 font-medium text-gray-900">{item.material}</td>
              <td className="px-6 py-4 text-gray-600">{item.available}</td>
              <td className="px-6 py-4 text-gray-600">{item.reserved}</td>
              <td className="px-6 py-4 text-gray-600">{item.location}</td>
              <td className="px-6 py-4">
                <button className="text-primary-600 hover:text-primary-700">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

// QR Code Generation Component
const QRCodeGeneration = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Generate Product QR Codes</h2>
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Final Product Lot ID</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="HT-LOT-2025-001"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Premium Ashwagandha Powder"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Source Batch IDs</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            rows="3"
            placeholder="HT-BATCH-2025-101, HT-BATCH-2025-102"
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Generate QR Code
        </motion.button>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <QrCode className="h-32 w-32 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">QR Code will appear here</p>
      </div>
    </div>
  </div>
)

// Recall Simulation Component
const RecallSimulation = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Recall Simulation</h2>
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
        <div>
          <h3 className="font-semibold text-yellow-800">Test Recall Scenario</h3>
          <p className="text-yellow-700">Simulate a product recall to test traceability and response systems.</p>
        </div>
      </div>
    </div>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Product/Lot to Recall</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="HT-LOT-2025-001"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Recall Reason</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
          <option value="">Select reason</option>
          <option value="contamination">Contamination detected</option>
          <option value="quality">Quality issue</option>
          <option value="labeling">Labeling error</option>
          <option value="regulatory">Regulatory requirement</option>
        </select>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Simulate Recall
      </motion.button>
    </div>
  </div>
)

// Modal Components
const BatchDetailModal = ({ batch, onClose }) => (
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
        <h2 className="text-xl font-semibold text-gray-900">Batch Details</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(batch).map(([key, value]) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          Start Processing
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          View Provenance
        </button>
      </div>
    </motion.div>
  </motion.div>
)

const ProcessDetailModal = ({ process, onClose }) => (
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
        <h2 className="text-xl font-semibold text-gray-900">Process Details</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(process).filter(([key]) => key !== 'progress').map(([key, value]) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </div>
        
        {process.status === 'In Progress' && (
          <div>
            <label className="text-sm font-medium text-gray-500">Progress</label>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div 
                className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${process.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{process.progress}% complete</p>
          </div>
        )}
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          Update Process
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          View Logs
        </button>
      </div>
    </motion.div>
  </motion.div>
)

export default ManufacturerLandingPage
