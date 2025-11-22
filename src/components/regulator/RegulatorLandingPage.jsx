import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, MapPin, Leaf, FileCheck, ShieldCheck } from 'lucide-react'

const sections = [
  { key: 'profile', label: 'Profile Overview', icon: User },
  { key: 'geo', label: 'Geo-Fencing', icon: MapPin },
  { key: 'compliance', label: 'Conservation Compliance', icon: Leaf },
  { key: 'events', label: 'Collection Events', icon: FileCheck },
  { key: 'certifications', label: 'Certification Review', icon: ShieldCheck }
]

const regulatorProfile = {
  officerName: 'Inspector Kavya Sharma',
  department: 'Medicinal Plant Conservation Authority',
  jurisdiction: 'Eastern Himalayan Biosphere',
  contact: '+91 98221 33445',
  inspectorId: 'HT-REG-7760'
}

const geoAlerts = [
  { zone: 'Zone A - Protected Reserve', status: 'Compliant', checkedOn: '20 Nov 2025' },
  { zone: 'Zone B - Seasonal Ban', status: 'Review Required', checkedOn: '18 Nov 2025' }
]

const pendingEvents = [
  { eventId: 'COL-4581', village: 'Kalimpong', status: 'Awaiting Inspection' },
  { eventId: 'COL-4583', village: 'Darjeeling', status: 'Documentation Received' }
]

const RegulatorLandingPage = () => {
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
              <h2 className="text-xl font-semibold text-gray-900">Regulator Console</h2>
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
              <h1 className="text-2xl font-semibold text-gray-900">{greeting}, {regulatorProfile.officerName} 👋</h1>
              <p className="text-gray-600 mt-2">Oversee compliance and conservation for protected herb collections.</p>
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
                    <ProfileRow label="Inspector ID" value={regulatorProfile.inspectorId} />
                    <ProfileRow label="Officer Name" value={regulatorProfile.officerName} />
                    <ProfileRow label="Department" value={regulatorProfile.department} />
                    <ProfileRow label="Jurisdiction" value={regulatorProfile.jurisdiction} />
                    <ProfileRow label="Contact" value={regulatorProfile.contact} />
                  </dl>
                </motion.div>
              )}

              {activeSection === 'geo' && (
                <motion.div
                  key="geo"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Geo-Fencing Status</h2>
                  <p className="text-gray-600 mb-6">Validate that harvest zones respect conservation boundaries and seasons.</p>
                  <div className="space-y-4">
                    {geoAlerts.map((alert) => (
                      <div key={alert.zone} className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                        <p className="text-gray-800 font-semibold">{alert.zone}</p>
                        <p className="text-sm text-gray-500">Status: {alert.status}</p>
                        <p className="text-sm text-gray-500">Reviewed on {alert.checkedOn}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'compliance' && (
                <motion.div
                  key="compliance"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Conservation Compliance</h2>
                  <p className="text-gray-600">Ensure NMPB guidelines are being followed for sustainable collection.</p>
                  <div className="h-32 border-2 border-dashed border-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 font-semibold">
                    Compliance checklist integration pending
                  </div>
                </motion.div>
              )}

              {activeSection === 'events' && (
                <motion.div
                  key="events"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Collection Events</h2>
                  <div className="space-y-4">
                    {pendingEvents.map((event) => (
                      <div key={event.eventId} className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                        <p className="text-gray-800 font-semibold">Event {event.eventId}</p>
                        <p className="text-sm text-gray-500">Location: {event.village}</p>
                        <p className="text-sm text-gray-500">Status: {event.status}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'certifications' && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Certification Review</h2>
                  <p className="text-gray-600">Scrutinise sustainability certifications before approval.</p>
                  <div className="h-32 border-2 border-dashed border-primary-200 rounded-xl flex items-center justify-center text-primary-500 font-semibold">
                    Certification validation module coming soon
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

export default RegulatorLandingPage
