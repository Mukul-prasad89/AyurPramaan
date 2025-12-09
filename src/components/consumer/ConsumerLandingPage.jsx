import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  User, 
  Package, 
  QrCode,
  History,
  Shield,
  Star,
  Heart,
  Search,
  Bell,
  ShoppingBag,
  Leaf,
  CheckCircle,
  Clock,
  MapPin,
  Camera,
  X,
  ChevronRight,
  Award,
  TrendingUp,
  Eye
} from 'lucide-react'
import DashboardNavbar from '../common/DashboardNavbar'

const ConsumerLandingPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showScanModal, setShowScanModal] = useState(false)
  const [productCode, setProductCode] = useState('')
  const navigate = useNavigate()

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  const consumerStats = [
    { id: 1, title: 'Products Verified', value: '24', icon: Shield, color: 'blue' },
    { id: 2, title: 'Favorites', value: '8', icon: Heart, color: 'red' },
    { id: 3, title: 'Reviews Given', value: '12', icon: Star, color: 'yellow' },
    { id: 4, title: 'Rewards Earned', value: '450', icon: Award, color: 'green', isRewards: true }
  ]

  const recentlyVerified = [
    {
      id: 'HT-ASH-2025-0901',
      name: 'Ashwagandha Root Tablets',
      brand: 'HerbalLife Plus',
      verified: true,
      verifiedOn: '2025-12-08',
      rating: 4.8,
      origin: 'Satara, Maharashtra',
      image: '🌿'
    },
    {
      id: 'HT-TUR-2025-0845',
      name: 'Organic Turmeric Powder',
      brand: 'AyurVeda Naturals',
      verified: true,
      verifiedOn: '2025-12-06',
      rating: 4.5,
      origin: 'Erode, Tamil Nadu',
      image: '🧡'
    },
    {
      id: 'HT-TUL-2025-0756',
      name: 'Tulsi Green Tea',
      brand: 'Nature\'s Basket',
      verified: true,
      verifiedOn: '2025-12-04',
      rating: 4.9,
      origin: 'Lucknow, Uttar Pradesh',
      image: '🍃'
    },
    {
      id: 'HT-GIN-2025-0689',
      name: 'Ginger Extract Capsules',
      brand: 'Wellness Herbs',
      verified: true,
      verifiedOn: '2025-12-02',
      rating: 4.6,
      origin: 'Wayanad, Kerala',
      image: '🫚'
    },
    {
      id: 'HT-NEE-2025-0512',
      name: 'Neem Skin Care Oil',
      brand: 'Pure Nature',
      verified: true,
      verifiedOn: '2025-11-28',
      rating: 4.4,
      origin: 'Nagpur, Maharashtra',
      image: '🌱'
    }
  ]

  const favoriteProducts = [
    {
      id: 'HT-BRA-2025-0234',
      name: 'Brahmi Memory Capsules',
      brand: 'MindCare Ayurveda',
      lastPurchased: '2025-11-20',
      rating: 4.7,
      image: '💚'
    },
    {
      id: 'HT-AMI-2025-0567',
      name: 'Amla Vitamin C Tablets',
      brand: 'VitaHerb',
      lastPurchased: '2025-11-15',
      rating: 4.6,
      image: '🟢'
    },
    {
      id: 'HT-SHI-2025-0891',
      name: 'Shilajit Power Resin',
      brand: 'Himalayan Pure',
      lastPurchased: '2025-11-10',
      rating: 4.9,
      image: '⚫'
    },
    {
      id: 'HT-TRI-2025-0423',
      name: 'Triphala Digestive Tabs',
      brand: 'Gut Health Pro',
      lastPurchased: '2025-11-05',
      rating: 4.5,
      image: '🟤'
    }
  ]

  const handleScanProduct = () => {
    if (productCode.trim()) {
      navigate(`/product-journey/${productCode.trim()}`)
    }
  }

  const handleQuickVerify = (productId) => {
    navigate(`/product-journey/${productId}`)
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Package },
    { id: 'history', label: 'Scan History', icon: History },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'alerts', label: 'Notifications', icon: Bell }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      red: 'bg-red-100 text-red-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar 
        userName="Priya Sharma" 
        userRole="Consumer"
        dateJoined="November 2025"
        approvedBy="Self-Registered"
      />

      {/* Main Content */}
      <main className="pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Greeting Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 shadow-lg mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {greeting}, Priya! 👋
                </h1>
                <p className="text-primary-100 mt-1">
                  Verify authentic herbal products and track their journey from farm to shelf.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowScanModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <QrCode className="h-5 w-5" />
                Scan Product
              </motion.button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 mb-6">
            <div className="flex flex-wrap gap-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {consumerStats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-lg ${getColorClasses(stat.color)}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.isRewards ? `${stat.value} pts` : stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.title}</div>
                {stat.isRewards && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-3 w-full py-2 px-3 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Use Rewards
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quick Scan Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <QrCode className="h-5 w-5 text-primary-600" />
              Quick Product Verification
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={productCode}
                  onChange={(e) => setProductCode(e.target.value)}
                  placeholder="Enter product code or batch number (e.g., HT-ASH-2025-0901)"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScanProduct}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="h-5 w-5" />
                Track Journey
              </motion.button>
            </div>
          </div>

          {/* Recently Verified Products */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <History className="h-5 w-5 text-primary-600" />
                Recently Verified Products
              </h3>
              <button className="text-primary-600 text-sm font-medium hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentlyVerified.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -2 }}
                  className="border border-gray-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => handleQuickVerify(product.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{product.image}</div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      <CheckCircle className="h-3 w-3" />
                      Verified
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {product.origin}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      {product.rating}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Favorite Products */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Your Favorite Products
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {favoriteProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 border border-gray-200 rounded-xl p-4"
                >
                  <div className="text-3xl">{product.image}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Last: {product.lastPurchased}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickVerify(product.id)}
                    className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Information */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Blockchain-Verified Authenticity</h3>
                <p className="text-sm text-gray-600">
                  Every product you scan is verified against our immutable blockchain records. 
                  Track the complete journey from farm to your hands with 100% transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scan Modal */}
      <AnimatePresence>
        {showScanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setShowScanModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Scan Product QR Code</h3>
                <button
                  onClick={() => setShowScanModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* QR Scanner Placeholder */}
              <div className="bg-gray-100 rounded-xl aspect-square flex flex-col items-center justify-center mb-6 border-2 border-dashed border-gray-300">
                <Camera className="h-16 w-16 text-gray-400 mb-4" />
                <p className="text-gray-500 text-center">
                  Point your camera at the<br />product QR code
                </p>
              </div>

              <div className="text-center mb-4">
                <span className="text-gray-500 text-sm">Or enter product code manually</span>
              </div>

              <input
                type="text"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="Enter product code (e.g., HT-ASH-2025-0901)"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setShowScanModal(false)
                  handleScanProduct()
                }}
                className="w-full py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Verify Product
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ConsumerLandingPage
