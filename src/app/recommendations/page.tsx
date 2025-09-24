'use client'

import { useState } from 'react'
import { categories } from '@/data/categories'
import { RecommendationRequest, AIRecommendation } from '@/types'
import { Brain, Loader2, Star, ThumbsUp, ThumbsDown, DollarSign } from 'lucide-react'

export default function RecommendationsPage() {
  const [formData, setFormData] = useState<RecommendationRequest>({
    category: '',
    budget: { min: 0, max: 0 },
    preferences: [],
    usage: '',
    experience: 'intermediate'
  })
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to get recommendations')
      }

      const data = await response.json()
      setRecommendations(data.recommendations)
    } catch (err) {
      setError('Failed to get recommendations. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  const selectedCategory = categories.find(c => c.id === formData.category)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10">
        <div className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8 stagger-item">
              <div className="relative magnetic-hover">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 rounded-full blur-2xl opacity-60 pulse-glow"></div>
                <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 p-6 rounded-full shadow-2xl">
                  <Brain className="h-12 w-12 text-white animate-pulse" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight stagger-item">
              <span className="gradient-text block mb-2">AI Device</span>
              <span className="text-slate-200">Recommendations</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed stagger-item">
              Tell us your needs and let our <span className="text-purple-300">advanced AI</span> find the perfect devices for you
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Recommendation Form */}
          <div className="glass-card backdrop-blur-xl bg-white/10 border-white/20 rounded-3xl p-10 mb-12 hover:bg-white/15 transition-all duration-500 magnetic-hover">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 stagger-item">
              What are you looking for?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Enhanced Category Selection */}
              <div className="stagger-item">
                <label className="flex items-center text-lg font-semibold text-slate-200 mb-6">
                  Device Category <span className="text-purple-400 ml-2">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: category.id })}
                      className={`group relative overflow-hidden p-8 rounded-2xl text-center transition-all duration-500 transform hover:scale-105 magnetic-hover ${
                        formData.category === category.id
                          ? 'bg-gradient-to-br from-purple-600/30 to-cyan-600/30 border-2 border-purple-400/60 shadow-2xl shadow-purple-500/25'
                          : 'glass-card bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40'
                      }`}
                    >
                      <div className="text-5xl mb-4 group-hover:animate-bounce transition-transform duration-300">
                        {category.icon}
                      </div>
                      <div className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">
                        {category.name}
                      </div>
                      {formData.category === category.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-600/20 rounded-2xl animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Budget Range */}
              <div className="stagger-item">
                <label className="block text-lg font-semibold text-slate-200 mb-6">
                  Budget Range
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-sm text-slate-300 font-medium">Minimum</label>
                    <div className="relative group">
                      <DollarSign className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                      <input
                        type="number"
                        value={formData.budget?.min || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          budget: { ...formData.budget!, min: Number(e.target.value) || 0 }
                        })}
                        className="pl-12 w-full p-4 glass-card bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/60 focus:bg-white/15 transition-all duration-300"
                        placeholder="500"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm text-slate-300 font-medium">Maximum</label>
                    <div className="relative group">
                      <DollarSign className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                      <input
                        type="number"
                        value={formData.budget?.max || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          budget: { ...formData.budget!, max: Number(e.target.value) || 0 }
                        })}
                        className="pl-12 w-full p-4 glass-card bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/60 focus:bg-white/15 transition-all duration-300"
                        placeholder="1000"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Usage Description */}
              <div className="stagger-item">
                <label className="flex items-center text-lg font-semibold text-slate-200 mb-6">
                  How will you use this device? <span className="text-purple-400 ml-2">*</span>
                </label>
                <textarea
                  value={formData.usage}
                  onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                  rows={4}
                  className="w-full p-6 glass-card bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/60 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="for coding, gaming, video editing, content creation..."
                  required
                />
              </div>

              {/* Enhanced Experience Level */}
              <div className="stagger-item">
                <label className="block text-lg font-semibold text-slate-200 mb-6">
                  Your Experience Level
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { value: 'beginner', label: 'Beginner', desc: 'New to this category', icon: '🌱' },
                    { value: 'intermediate', label: 'Intermediate', desc: 'Some experience', icon: '⚡' },
                    { value: 'advanced', label: 'Advanced', desc: 'Expert level', icon: '🚀' }
                  ].map((level) => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: level.value as any })}
                      className={`group relative overflow-hidden p-8 rounded-2xl text-center transition-all duration-500 transform hover:scale-105 magnetic-hover ${
                        formData.experience === level.value
                          ? 'bg-gradient-to-br from-purple-600/30 to-cyan-600/30 border-2 border-purple-400/60 shadow-2xl shadow-purple-500/25'
                          : 'glass-card bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40'
                      }`}
                    >
                      <div className="text-3xl mb-3 group-hover:animate-bounce transition-transform duration-300">
                        {level.icon}
                      </div>
                      <div className="font-bold text-white text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {level.label}
                      </div>
                      <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                        {level.desc}
                      </div>
                      {formData.experience === level.value && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-600/20 rounded-2xl animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Submit Button */}
              <div className="stagger-item">
                <button
                  type="submit"
                  disabled={!formData.category || !formData.usage || loading}
                  className="group relative w-full overflow-hidden py-6 px-8 rounded-2xl font-bold text-xl text-white transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 magnetic-hover"
                  style={{
                    background: loading 
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)'
                      : 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #06b6d4 100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin h-6 w-6" />
                        <span>Getting AI Recommendations...</span>
                      </>
                    ) : (
                      <>
                        <Brain className="h-6 w-6 group-hover:animate-pulse" />
                        <span>Get AI Recommendations</span>
                        <div className="w-2 h-2 bg-white rounded-full opacity-75 animate-pulse"></div>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-8 p-6 glass-card bg-red-500/20 border border-red-400/40 rounded-2xl backdrop-blur-sm">
                <p className="text-red-100 text-lg font-medium flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                  {error}
                </p>
              </div>
            )}
          </div>

          {/* Recommendations Results */}
          {recommendations.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-center mb-12">
                ✨ Perfect Matches for You
              </h2>

              <div className="grid gap-8">
                {recommendations.map((rec, index) => (
                  <div
                    key={rec.device.id}
                    className="group glass-card bg-white/5 border border-white/20 rounded-3xl p-8 hover:bg-white/10 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 magnetic-hover backdrop-blur-xl shadow-2xl shadow-purple-900/20"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                      {/* Rank Badge & Device Image */}
                      <div className="flex flex-col items-center space-y-4">
                        {/* Rank Badge */}
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500">
                            #{index + 1}
                          </div>
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                              {rec.score}% Match
                            </div>
                          </div>
                        </div>

                        {/* Device Image */}
                        <div className="w-40 h-32 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-500 border border-white/20">
                          <div className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                            {selectedCategory?.icon}
                          </div>
                        </div>
                      </div>

                      {/* Device Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                              {rec.device.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-4">
                              <span className="flex items-center px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                                {rec.device.brand}
                              </span>
                              <span className="flex items-center">
                                <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                                <span className="font-semibold text-white">{rec.device.rating}</span>
                              </span>
                              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full text-sm font-medium border border-white/20">
                                {rec.device.subcategory}
                              </span>
                            </div>
                          </div>
                          <div className="text-center md:text-right">
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                              {formatPrice(rec.device.price)}
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                              View Details
                            </button>
                          </div>
                        </div>

                        {/* AI Reasoning */}
                        <div className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-2xl p-6 mb-6 group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-500">
                          <h4 className="font-bold text-blue-300 mb-3 flex items-center text-lg">
                            <Brain className="h-5 w-5 mr-3 text-blue-400" />
                            Why This Is Perfect for You
                          </h4>
                          <p className="text-blue-100 leading-relaxed">{rec.reasoning}</p>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {rec.pros.length > 0 && (
                            <div className="glass-card bg-green-500/10 border border-green-400/30 rounded-2xl p-6 group-hover:bg-green-500/15 transition-all duration-500">
                              <h4 className="font-bold text-green-300 mb-4 flex items-center text-lg">
                                <ThumbsUp className="h-5 w-5 mr-3 text-green-400" />
                                Advantages
                              </h4>
                              <ul className="space-y-3">
                                {rec.pros.map((pro, i) => (
                                  <li key={i} className="text-green-100 flex items-start leading-relaxed">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {rec.cons.length > 0 && (
                            <div className="glass-card bg-red-500/10 border border-red-400/30 rounded-2xl p-6 group-hover:bg-red-500/15 transition-all duration-500">
                              <h4 className="font-bold text-red-300 mb-4 flex items-center text-lg">
                                <ThumbsDown className="h-5 w-5 mr-3 text-red-400" />
                                Considerations
                              </h4>
                              <ul className="space-y-3">
                                {rec.cons.map((con, i) => (
                                  <li key={i} className="text-red-100 flex items-start leading-relaxed">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-500/5 to-cyan-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}