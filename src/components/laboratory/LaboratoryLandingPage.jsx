import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Upload, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  TrendingUp,
  Clock,
  Beaker,
  Award,
  Eye,
  Download,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Activity,
  BarChart3,
  FileCheck,
  X,
  CheckCircle,
  XCircle
} from 'lucide-react'
import DashboardNavbar from '../common/DashboardNavbar'

const LaboratoryLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBatch, setSelectedBatch] = useState(null)

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  const stats = [
    { id: 1, title: 'Pending Tests', value: '24', change: '+12%', trend: 'up', icon: Clock, color: 'orange' },
    { id: 2, title: 'Completed Today', value: '18', change: '+8%', trend: 'up', icon: CheckCircle2, color: 'green' },
    { id: 3, title: 'Pass Rate', value: '94.2%', change: '+2.1%', trend: 'up', icon: Award, color: 'blue' },
    { id: 4, title: 'Avg. Turnaround', value: '2.4h', change: '-0.3h', trend: 'down', icon: TrendingUp, color: 'purple' }
  ]

  const pendingBatches = [
    {
      id: 'HT-BATCH-2025-001',
      herb: 'Ashwagandha Root',
      farmer: 'Rajesh Kumar',
      priority: 'High',
      tests: ['Moisture Content', 'Pesticide Residue', 'Heavy Metals'],
      receivedDate: '2025-12-02',
      deadline: '2025-12-03',
      status: 'In Progress'
    },
    {
      id: 'HT-BATCH-2025-002',
      herb: 'Turmeric Powder',
      farmer: 'Priya Sharma',
      priority: 'Medium',
      tests: ['DNA Authentication', 'Curcumin Content'],
      receivedDate: '2025-12-01',
      deadline: '2025-12-04',
      status: 'Pending'
    },
    {
      id: 'HT-BATCH-2025-003',
      herb: 'Tulsi Leaves',
      farmer: 'Suresh Patel',
      priority: 'Low',
      tests: ['Moisture Content', 'Microbial Load'],
      receivedDate: '2025-12-01',
      deadline: '2025-12-05',
      status: 'Queued'
    }
  ]

  const recentTests = [
    { id: 1, batch: 'HT-BATCH-2025-000', test: 'Pesticide Residue', result: 'Pass', time: '2 hours ago' },
    { id: 2, batch: 'HT-BATCH-2024-999', test: 'Heavy Metals', result: 'Pass', time: '3 hours ago' },
    { id: 3, batch: 'HT-BATCH-2024-998', test: 'DNA Authentication', result: 'Fail', time: '5 hours ago' },
    { id: 4, batch: 'HT-BATCH-2024-997', test: 'Moisture Content', result: 'Pass', time: '6 hours ago' }
  ]

  const testTemplates = [
    { id: 1, name: 'Moisture Content', duration: '30 min', threshold: '< 12%' },
    { id: 2, name: 'Pesticide Residue', duration: '2 hours', threshold: '< 0.1 ppm' },
    { id: 3, name: 'Heavy Metals', duration: '3 hours', threshold: '< 10 ppm' },
    { id: 4, name: 'DNA Authentication', duration: '4 hours', threshold: '> 95% match' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navbar */}
      <DashboardNavbar 
        userName="Dr. Meera Singh" 
        userRole="Laboratory"
        dateJoined="10 January 2024"
        approvedBy="Admin Priya Desai"
      />

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{greeting}, Dr. Meera Singh</h1>
              <p className="text-gray-600">PureHerb Analytics Lab - NABL Certified</p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 hover:bg-primary-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>New Test</span>
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
            { id: 'queue', label: 'Test Queue', icon: Clock },
            { id: 'upload', label: 'Upload Results', icon: Upload },
            { id: 'certificates', label: 'Certificates', icon: Award },
            { id: 'analytics', label: 'Analytics', icon: Activity }
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
              {/* Recent Activity */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Test Results</h2>
                  <button className="text-primary-600 font-medium hover:text-primary-700">View All</button>
                </div>
                <div className="space-y-4">
                  {recentTests.map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h3 className="font-medium text-gray-900">{test.batch}</h3>
                        <p className="text-sm text-gray-600">{test.test}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            test.result === 'Pass' 
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {test.result}
                        </span>
                        <span className="text-sm text-gray-500">{test.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  {[
                    { icon: Upload, label: 'Upload Test Results', color: 'blue' },
                    { icon: FileCheck, label: 'Generate Certificate', color: 'green' },
                    { icon: Search, label: 'Search Batches', color: 'purple' },
                    { icon: BarChart3, label: 'View Analytics', color: 'orange' }
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

          {activeTab === 'queue' && (
            <motion.div
              key="queue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Test Queue</h2>
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

              {/* Queue List */}
              <div className="p-6">
                <div className="space-y-4">
                  {pendingBatches.map((batch) => (
                    <motion.div
                      key={batch.id}
                      whileHover={{ scale: 1.01 }}
                      className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
                      onClick={() => setSelectedBatch(batch)}
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
                              batch.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                              batch.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {batch.status}
                            </span>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Herb</p>
                              <p className="font-medium">{batch.herb}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Farmer</p>
                              <p className="font-medium">{batch.farmer}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Deadline</p>
                              <p className="font-medium">{batch.deadline}</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="text-sm text-gray-500 mb-2">Required Tests:</p>
                            <div className="flex flex-wrap gap-2">
                              {batch.tests.map((test) => (
                                <span key={test} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md">
                                  {test}
                                </span>
                              ))}
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
            </motion.div>
          )}

          {activeTab === 'upload' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Test Upload Form */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Test Results</h2>
                <UploadForm />
              </div>
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Lab Certificates</h2>
              <CertificatesSection />
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <AnalyticsSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Batch Details Modal */}
      <AnimatePresence>
        {selectedBatch && (
          <BatchModal batch={selectedBatch} onClose={() => setSelectedBatch(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Upload Form Component
const UploadForm = () => {
  const [selectedTest, setSelectedTest] = useState('')
  const [testResult, setTestResult] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])

  const testTypes = [
    'Moisture Content',
    'Pesticide Residue',
    'Heavy Metals',
    'DNA Authentication',
    'Microbial Load',
    'Aflatoxin Analysis'
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Test Type</label>
          <select
            value={selectedTest}
            onChange={(e) => setSelectedTest(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Select test type</option>
            {testTypes.map((test) => (
              <option key={test} value={test}>{test}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Test Result</label>
        <textarea
          value={testResult}
          onChange={(e) => setTestResult(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Enter detailed test results, measurements, and observations..."
        />
      </div>

      {/* File Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-400 transition-colors">
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Lab Reports & Images</h3>
        <p className="text-gray-600 mb-4">Drag and drop your files here, or click to browse</p>
        <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Choose Files
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Approve Batch</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <XCircle className="h-4 w-4" />
            <span>Reject Batch</span>
          </motion.button>
        </div>
        <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          Save Draft
        </button>
      </div>
    </div>
  )
}

// Certificates Section Component
const CertificatesSection = () => {
  const certificates = [
    { id: 'CERT-2025-001', batch: 'HT-BATCH-2025-001', herb: 'Ashwagandha', status: 'Issued', date: '2025-12-02' },
    { id: 'CERT-2025-002', batch: 'HT-BATCH-2024-999', herb: 'Turmeric', status: 'Pending', date: '2025-12-01' }
  ]

  return (
    <div className="space-y-4">
      {certificates.map((cert) => (
        <div key={cert.id} className="p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{cert.id}</h3>
              <p className="text-sm text-gray-600">{cert.batch} - {cert.herb}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                cert.status === 'Issued' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {cert.status}
              </span>
              <button className="text-primary-600 hover:text-primary-700">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Analytics Section Component
const AnalyticsSection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Failed Batches Analysis</h3>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-500">Chart visualization coming soon</p>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnaround Time Trends</h3>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-500">Chart visualization coming soon</p>
        </div>
      </div>
    </div>
  )
}

// Batch Detail Modal Component
const BatchModal = ({ batch, onClose }) => {
  return (
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
            <div>
              <label className="text-sm font-medium text-gray-500">Batch ID</label>
              <p className="font-semibold">{batch.id}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Herb Type</label>
              <p className="font-semibold">{batch.herb}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Farmer</label>
              <p className="font-semibold">{batch.farmer}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Priority</label>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                batch.priority === 'High' ? 'bg-red-100 text-red-700' :
                batch.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {batch.priority}
              </span>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Required Tests</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {batch.tests.map((test) => (
                <span key={test} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md">
                  {test}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
          <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
            Start Testing
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Download Details
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LaboratoryLandingPage
