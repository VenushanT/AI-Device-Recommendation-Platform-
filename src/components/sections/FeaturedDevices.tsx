import { devices } from '@/data/devices'
import { Star, ShoppingCart, Zap } from 'lucide-react'

export default function FeaturedDevices() {
  const featuredDevices = devices.slice(0, 6) // Show first 6 devices

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const getDeviceIcon = (category: string) => {
    switch (category) {
      case 'laptop': return '💻'
      case 'mobile': return '📱'
      case 'headphone': return '🎧'
      case 'keyboard': return '⌨️'
      default: return '📱'
    }
  }

  const getGradientForCategory = (category: string) => {
    switch (category) {
      case 'laptop': return 'from-purple-600 to-blue-600'
      case 'mobile': return 'from-cyan-500 to-teal-600'
      case 'headphone': return 'from-pink-500 to-rose-600'
      case 'keyboard': return 'from-orange-500 to-amber-600'
      default: return 'from-purple-600 to-cyan-600'
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-60"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-cyan-600 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-slate-600 dark:text-slate-400">Featured</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Top-Rated Devices
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium devices with cutting-edge technology and exceptional performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDevices.map((device, index) => {
            const gradient = getGradientForCategory(device.category)
            return (
              <div
                key={device.id}
                className="group relative overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-2xl border border-white/20 hover:border-white/40 overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                  {/* Image/Icon Section */}
                  <div className={`relative aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                      {getDeviceIcon(device.category)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                        {device.subcategory}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-medium">{device.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {device.name}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">
                      {device.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold gradient-text">
                          {formatPrice(device.price)}
                        </span>
                        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{device.brand}</div>
                      </div>
                      
                      <button className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="font-medium">View</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-purple-500/50 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium">
            View All Featured Devices
          </button>
        </div>
      </div>
    </section>
  )
}