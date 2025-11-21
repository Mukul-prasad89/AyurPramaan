import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Settings, Users, FilePieChart, ShieldAlert } from 'lucide-react'

const sections = [
  { key: 'profile', label: 'Profile Overview', icon: User },
  { key: 'network', label: 'Network Operations', icon: Settings },
  { key: 'users', label: 'User & Permissions', icon: Users },
  { key: 'reports', label: 'Reports & Audits', icon: FilePieChart },
  { key: 'governance', label: 'Governance', icon: ShieldAlert }
]

const adminProfile = {
  adminName: 'Priya Desai',
  role: 'Network Administrator',
  organisation: 'Herbal Trace Initiative',
  contact: '+91 90000 11223',
  nodeCount: 7,
  adminId: 'HT-ADM-1001'
}

const nodeStatus = [
  { node: 'Validator-01', status: 'Online', version: 'v2.5.1', lastUpdated: '21 Nov 2025' },
  { node: 'Validator-02', status: 'Syncing', version: 'v2.5.1', lastUpdated: '20 Nov 2025' },
  { node: 'Observer-01', status: 'Online', version: 'v2.5.1', lastUpdated: '21 Nov 2025' }
]

const AdminLandingPage = () => {
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
              <h2 className="text-xl font-semibold text-gray-900">Admin Console</h2>
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
              <h1 className="text-2xl font-semibold text-gray-900">{greeting}, {adminProfile.adminName} 👋</h1>
              <p className="text-gray-600 mt-2">Oversee the Herbal Trace network, smart contracts, and platform governance.</p>
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
                    <ProfileRow label="Administrator ID" value={adminProfile.adminId} />
                    <ProfileRow label="Name" value={adminProfile.adminName} />
                    <ProfileRow label="Role" value={adminProfile.role} />
                    <ProfileRow label="Organisation" value={adminProfile.organisation} />
                    <ProfileRow label="Contact" value={adminProfile.contact} />
                    <ProfileRow label="Active Nodes" value={`${adminProfile.nodeCount}`} />
                  </dl>
                </motion.div>
              )}

              {activeSection === 'network' && (
                <motion.div
                  key="network"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Network Operations</h2>
                  <p className="text-gray-600 mb-6">Monitor validator health, software versions, and network uptime.</p>
                  <div className="space-y-4">
                    {nodeStatus.map((node) => (
                      <div key={node.node} className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                        <p className="text-gray-800 font-semibold">{node.node}</p>
                        <p className="text-sm text-gray-500">Status: {node.status}</p>
                        <p className="text-sm text-gray-500">Version: {node.version}</p>
                        <p className="text-sm text-gray-500">Last updated: {node.lastUpdated}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'users' && (
                <motion.div
                  key="users"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">User & Permission Management</h2>
                  <p className="text-gray-600">Configure role-based access, suspend accounts, or escalate privileges.</p>
                  <div className="h-32 border-2 border-dashed border-primary-200 rounded-xl flex items-center justify-center text-primary-500 font-semibold">
                    Access control dashboard coming soon
                  </div>
                </motion.div>
              )}

              {activeSection === 'reports' && (
                <motion.div
                  key="reports"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Reports & Audits</h2>
                  <p className="text-gray-600">Generate compliance reports, analytics dashboards, and audit trails.</p>
                  <div className="h-32 border-2 border-dashed border-amber-200 rounded-xl flex items-center justify-center text-amber-600 font-semibold">
                    Reporting suite integration pending
                  </div>
                </motion.div>
              )}

              {activeSection === 'governance' && (
                <motion.div
                  key="governance"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Governance & Smart Contracts</h2>
                  <p className="text-gray-600">Control network upgrades, contract versions, and validator onboarding.</p>
                  <div className="h-32 border-2 border-dashed border-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 font-semibold">
                    Governance actions module coming soon
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

export default AdminLandingPage
