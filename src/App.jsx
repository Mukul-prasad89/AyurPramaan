import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import TrackingPage from './components/TrackingPage'
import ProcessPage from './components/ProcessPage'
import OfferingPage from './components/OfferingPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import TeamFullscreenPage from './components/TeamFullscreenPage'
import Footer from './components/Footer'
import SignUpModal from './components/SignUpModal'
import SignInModal from './components/SignInModal'
import FarmerLandingPage from './components/farmer/FarmerLandingPage'
import LaboratoryLandingPage from './components/laboratory/LaboratoryLandingPage'
import RegulatorLandingPage from './components/regulator/RegulatorLandingPage'
import ManufacturerLandingPage from './components/manufacturer/ManufacturerLandingPage'
import AdminLandingPage from './components/admin/AdminLandingPage'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  const handleOpenSignUp = () => {
    setIsSignInOpen(false)
    setIsSignUpOpen(true)
  }

  const handleOpenSignIn = () => {
    setIsSignUpOpen(false)
    setIsSignInOpen(true)
  }

  const handleCloseModals = () => {
    setIsSignUpOpen(false)
    setIsSignInOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Fullscreen routes without navbar/footer */}
        <Route path="/team" element={<TeamFullscreenPage />} />
        <Route path="/farmer" element={<FarmerLandingPage />} />
        <Route path="/laboratory" element={<LaboratoryLandingPage />} />
        <Route path="/regulator" element={<RegulatorLandingPage />} />
        <Route path="/manufacturer" element={<ManufacturerLandingPage />} />
        <Route path="/admin" element={<AdminLandingPage />} />
        
        {/* Regular routes with navbar/footer */}
        <Route path="/*" element={
          <>
            <Navbar onOpenSignUp={handleOpenSignUp} onOpenSignIn={handleOpenSignIn} />
            <ScrollToTop />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/track" element={<TrackingPage />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/offerings" element={<OfferingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
            <SignUpModal isOpen={isSignUpOpen} onClose={handleCloseModals} onSwitchToSignIn={handleOpenSignIn} />
            <SignInModal isOpen={isSignInOpen} onClose={handleCloseModals} onSwitchToSignUp={handleOpenSignUp} />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App