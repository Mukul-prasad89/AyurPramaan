import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Upload, ShieldCheck, CheckCircle2 } from 'lucide-react'

const sections = [
  { key: 'profile', label: 'Profile Overview', icon: User },
  { key: 'uploads', label: 'Test Uploads', icon: Upload },
  { key: 'certificates', label: 'Certificates', icon: ShieldCheck },
  { key: 'decisions', label: 'Quality Decisions', icon: CheckCircle2 }
]

const laboratoryProfile = {
  labName: 'PureHerb Analytics Lab',
  location: 'Indore, Madhya Pradesh',
  accreditation: 'NABL Accredited (ISO/IEC 17025)',
  leadScientist: 'Dr. Meera Singh',
  contact: '+91 91234 56789',
  labId: 'HT-LAB-1188'
}

const pendingTests = [
  { batchId: 'HT-BATCH-9012', herb: 'Ashwagandha', assays: ['Moisture', 'Pesticide'] },
  { batchId: 'HT-BATCH-9015', herb: 'Tulsi', assays: ['Heavy Metals', 'DNA Barcode'] }
]

const issuedCertificates = [
  { certificateId: 'HT-CERT-5401', batch: 'HT-BATCH-8891', status: 'Tamper-proof stored', issuedOn: '14 Nov 2025' },
  { certificateId: 'HT-CERT-5388', batch: 'HT-BATCH-8875', status: 'Tamper-proof stored', issuedOn: '12 Nov 2025' }
]

const LaboratoryLandingPage = () => {
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
              <h2 className="text-xl font-semibold text-gray-900">Laboratory Console</h2>
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
              <h1 className="text-2xl font-semibold text-gray-900">{greeting}, {laboratoryProfile.leadScientist} 👋</h1>
              <p className="text-gray-600 mt-2">Coordinate lab testing workflows and maintain tamper-proof records.</p>
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
                    <ProfileRow label="Laboratory ID" value={laboratoryProfile.labId} />
                    <ProfileRow label="Laboratory Name" value={laboratoryProfile.labName} />
                    <ProfileRow label="Location" value={laboratoryProfile.location} />
                    <ProfileRow label="Accreditation" value={laboratoryProfile.accreditation} />
                    <ProfileRow label="Lead Scientist" value={laboratoryProfile.leadScientist} />
                    <ProfileRow label="Contact" value={laboratoryProfile.contact} />
                  </dl>
                </motion.div>
              )}

              {activeSection === 'uploads' && (
                <motion.div
                  key="uploads"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Assay Upload Queue</h2>
                  <p className="text-gray-600">Track upcoming tests and ensure blockchain records stay current.</p>
                  <div className="space-y-4">
                    {pendingTests.map((test) => (
                      <div key={test.batchId} className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                        <p className="text-gray-800 font-semibold">Batch {test.batchId}</p>
                        <p className="text-sm text-gray-500">Herb: {test.herb}</p>
                        <p className="text-sm text-gray-500">Required assays: {test.assays.join(', ')}</p>
                      </div>
                    ))}
                  </div>
                  <div className="h-32 border-2 border-dashed border-primary-200 rounded-xl flex items-center justify-center text-primary-500 font-semibold">
                    Upload panel coming soon
                  </div>
                </motion.div>
              )}

              {activeSection === 'certificates' && (
                <motion.div
                  key="certificates"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Issued Certificates</h2>
                  <div className="space-y-4">
                    {issuedCertificates.map((certificate) => (
                      <div key={certificate.certificateId} className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                        <p className="text-gray-800 font-semibold">Certificate {certificate.certificateId}</p>
                        <p className="text-sm text-gray-500">Batch: {certificate.batch}</p>
                        <p className="text-sm text-gray-500">Status: {certificate.status}</p>
                        <p className="text-sm text-gray-500">Issued on: {certificate.issuedOn}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'decisions' && (
                <motion.div
                  key="decisions"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-custom-light border border-gray-100 p-6 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Quality Decisions</h2>
                  <p className="text-gray-600">Approve or reject batches based on lab analytics. Decisions are immutably recorded.</p>
                  <div className="h-32 border-2 border-dashed border-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 font-semibold">
                    Decision log integration pending
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

export default LaboratoryLandingPage
