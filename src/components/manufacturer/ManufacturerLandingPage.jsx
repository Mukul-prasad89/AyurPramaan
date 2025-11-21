import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, PackageCheck, RotateCw, Scale, QrCode } from 'lucide-react'

const sections = [
  { key: 'profile', label: 'Profile Overview', icon: User },
  { key: 'batches', label: 'Incoming Batches', icon: PackageCheck },
  { key: 'processing', label: 'Processing Steps', icon: RotateCw },
  { key: 'inventory', label: 'Input vs Output', icon: Scale },
  { key: 'qr', label: 'Product QR Codes', icon: QrCode }
]

const manufacturerProfile = {
  unitName: 'Herbal Essence Processing Unit',
  location: 'Coimbatore, Tamil Nadu',
  license: 'AYUSH GMP Certified',
  plantManager: 'Anita Iyer',
  capacity: '5,000 kg/month',
  contact: '+91 93456 78901',
  manufacturerId: 'HT-MFG-3029'
}

const incomingBatches = [
  { batchId: 'HT-BATCH-9012', herb: 'Ashwagandha', quantity: '750 kg', status: 'Ready for intake' },
  { batchId: 'HT-BATCH-9015', herb: 'Tulsi', quantity: '500 kg', status: 'Awaiting QA clearance' }
]

const processingTimeline = [
  { step: 'Cleaning & Sorting', status: 'Completed' },
  { step: 'Drying & Curing', status: 'In Progress' },
  { step: 'Grinding & Milling', status: 'Scheduled' },
  { step: 'Extraction & Formulation', status: 'Pending' }
]

const ManufacturerLandingPage = () => {
  const [activeSection, setActiveSection] = useState('profile')

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-6">
            <div>
              <p className="text-sm uppercase text-gray-400 tracking-wide">Navigation</p>
              <h2 className="text-xl font-semibold text-gray-900">Manufacturer Console</h2>
            </div>
            <nav className="space-y-2">
              {sections.map(({ key, label, icon: Icon }) => {
                const isActive = activeSection === key
                return (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => setActiveSection(key)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 shadow-custom-light'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </motion.button>
                )
              })}
            </nav>
          </aside>

          <section className="space-y-8">
            <header className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6">
              <h1 className="text-2xl font-semibold text-gray-900">{greeting}, {manufacturerProfile.plantManager} 👋</h1>
              <p className="text-gray-600 mt-2">Manage production batches and maintain trusted traceability records.</p>
            </header>

            <AnimatePresence mode="wait">
              {activeSection === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Overview</h2>
                  <dl className="grid sm:grid-cols-2 gap-4 text-gray-700">
                    <ProfileRow label="Manufacturer ID" value={manufacturerProfile.manufacturerId} />
                    <ProfileRow label="Processing Unit" value={manufacturerProfile.unitName} />
                    <ProfileRow label="Location" value={manufacturerProfile.location} />
                    <ProfileRow label="License" value={manufacturerProfile.license} />
                    <ProfileRow label="Monthly Capacity" value={manufacturerProfile.capacity} />
                    <ProfileRow label="Plant Manager" value={manufacturerProfile.plantManager} />
                    <ProfileRow label="Contact" value={manufacturerProfile.contact} />
                  </dl>
                </motion.div>
              )}

              {activeSection === 'batches' && (
                <motion.div
                  key="batches"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Incoming Batches</h2>
                  <p className="text-gray-600">Review batches approved by regulators and ready for processing.</p>
                  <div className="space-y-4">
                    {incomingBatches.map((batch) => (
                      <div key={batch.batchId} className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                        <p className="text-gray-800 font-semibold">Batch {batch.batchId}</p>
                        <p className="text-sm text-gray-500">Herb: {batch.herb}</p>
                        <p className="text-sm text-gray-500">Quantity: {batch.quantity}</p>
                        <p className="text-sm text-gray-500">Status: {batch.status}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'processing' && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Processing Timeline</h2>
                  <div className="space-y-4">
                    {processingTimeline.map((stage) => (
                      <StageRow key={stage.step} {...stage} />
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'inventory' && (
                <motion.div
                  key="inventory"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Input vs Output</h2>
                  <p className="text-gray-600">Maintain accurate conversion ratios for blockchain traceability.</p>
                  <div className="h-32 border-2 border-dashed border-amber-200 rounded-xl flex items-center justify-center text-amber-600 font-semibold">
                    Inventory analytics coming soon
                  </div>
                </motion.div>
              )}

              {activeSection === 'qr' && (
                <motion.div
                  key="qr"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Final Product QR Codes</h2>
                  <p className="text-gray-600">Generate consumer-ready QR codes once formulation is complete.</p>
                  <div className="h-32 border-2 border-dashed border-primary-200 rounded-xl flex items-center justify-center text-primary-500 font-semibold">
                    QR generation module pending
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>
    </div>
  )
}

const ProfileRow = ({ label, value }) => (
  <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
    <dt className="text-xs uppercase tracking-wide text-gray-400 mb-1">{label}</dt>
    <dd className="text-gray-800 font-medium">{value}</dd>
  </div>
)

const StageRow = ({ step, status }) => {
  const statusColors = {
    Completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'In Progress': 'bg-sky-100 text-sky-700 border-sky-200',
    Scheduled: 'bg-amber-100 text-amber-700 border-amber-200',
    Pending: 'bg-gray-100 text-gray-600 border-gray-200'
  }

  return (
    <div className="p-4 border border-gray-100 rounded-xl flex items-center justify-between">
      <p className="text-gray-800 font-semibold">{step}</p>
      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusColors[status] || statusColors.Pending}`}>
        {status}
      </span>
    </div>
  )
}

export default ManufacturerLandingPage
