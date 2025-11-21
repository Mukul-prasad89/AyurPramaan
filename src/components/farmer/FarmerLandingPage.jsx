import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, PlayCircle, BarChart3, Leaf } from 'lucide-react'

const sections = [
  { key: 'profile', label: 'Profile Overview', icon: User },
  { key: 'training', label: 'Training Videos', icon: PlayCircle },
  { key: 'dashboard', label: 'Process Dashboard', icon: BarChart3 },
  { key: 'carbon', label: 'Carbon Savings', icon: Leaf }
]

const farmerProfile = {
  name: 'Ravi Kumar',
  village: 'Wayanad, Kerala',
  farmSize: '2.5 acres',
  experience: '8 years cultivating medicinal herbs',
  primaryHerbs: ['Turmeric', 'Ashwagandha', 'Tulsi'],
  contact: '+91 98765 43210',
  registryId: 'HT-FRM-2042'
}

const blockchainSteps = [
  { label: 'Cultivation Log Uploaded', status: 'completed' },
  { label: 'Plant Health Images Shared', status: 'completed' },
  { label: 'Harvest Details Recorded', status: 'in-progress' },
  { label: 'Quality Certificates Pending', status: 'pending' },
  { label: 'Distribution Handover Logged', status: 'pending' }
]

const FarmerLandingPage = () => {
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
              <h2 className="text-xl font-semibold text-gray-900 mt-1">Farmer Workspace</h2>
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
              <h1 className="text-2xl font-semibold text-gray-900">{greeting}, {farmerProfile.name} 👋</h1>
              <p className="text-gray-600 mt-2">Welcome back to your Herbal Trace farmer workspace.</p>
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
                    <ProfileRow label="Registry ID" value={farmerProfile.registryId} />
                    <ProfileRow label="Village" value={farmerProfile.village} />
                    <ProfileRow label="Farm Size" value={farmerProfile.farmSize} />
                    <ProfileRow label="Experience" value={farmerProfile.experience} />
                    <ProfileRow label="Primary Herbs" value={farmerProfile.primaryHerbs.join(', ')} />
                    <ProfileRow label="Contact" value={farmerProfile.contact} />
                  </dl>
                </motion.div>
              )}

              {activeSection === 'training' && (
                <motion.div
                  key="training"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-dashed border-primary-200 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Training Videos</h2>
                  <p className="text-gray-600 mb-6">Curated training resources will appear here. Please check back soon.</p>
                  <div className="aspect-video w-full bg-primary-50 border border-primary-100 rounded-xl flex items-center justify-center text-primary-500 text-lg font-semibold">
                    Training content coming soon
                  </div>
                </motion.div>
              )}

              {activeSection === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Blockchain Process Status</h2>
                  <div className="space-y-4">
                    {blockchainSteps.map((step) => (
                      <StepProgress key={step.label} {...step} />
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'carbon' && (
                <motion.div
                  key="carbon"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Carbon Saving</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Carbon saving means lowering the amount of carbon dioxide (CO₂) released into the atmosphere. Every step you take toward greener practices protects the environment and keeps our soils healthy for future generations.
                  </p>
                  <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    <li>Slow down climate change by adopting sustainable farming techniques.</li>
                    <li>Protect local biodiversity and conserve water resources.</li>
                    <li>Improve air quality for your community.</li>
                    <li>Support sustainable living for your family and customers.</li>
                  </ul>
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

const StepProgress = ({ label, status }) => {
  const statusStyles = {
    completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'in-progress': 'bg-amber-100 text-amber-700 border-amber-200',
    pending: 'bg-gray-100 text-gray-600 border-gray-200'
  }

  const badgeText = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    pending: 'Pending'
  }

  return (
    <div className="p-4 border border-gray-100 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-gray-800 font-semibold">{label}</p>
        <p className="text-sm text-gray-500">Track each submission to keep buyers informed.</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusStyles[status]}`}>
        {badgeText[status]}
      </span>
    </div>
  )
}

export default FarmerLandingPage
