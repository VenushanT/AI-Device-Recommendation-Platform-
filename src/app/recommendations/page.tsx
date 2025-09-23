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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary-600 p-4 rounded-full">
                <Brain className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Device Recommendations
            </h1>
            <p className="text-xl text-gray-700">
              Tell us your needs and let our AI find the perfect devices for you
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Recommendation Form */}
          <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What are you looking for?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Device Category *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: category.id })}
                      className={`p-4 border rounded-lg text-center transition-all ${
                        formData.category === category.id
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <div className="font-medium text-sm">{category.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Budget Range
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Minimum</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={formData.budget?.min || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          budget: { ...formData.budget!, min: Number(e.target.value) || 0 }
                        })}
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Maximum</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={formData.budget?.max || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          budget: { ...formData.budget!, max: Number(e.target.value) || 0 }
                        })}
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  How will you use this device? *
                </label>
                <textarea
                  value={formData.usage}
                  onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., Gaming, work presentations, video editing, casual browsing..."
                  required
                />
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Experience Level
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'beginner', label: 'Beginner', desc: 'New to this category' },
                    { value: 'intermediate', label: 'Intermediate', desc: 'Some experience' },
                    { value: 'advanced', label: 'Advanced', desc: 'Expert level' }
                  ].map((level) => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: level.value as any })}
                      className={`p-4 border rounded-lg text-center transition-all ${
                        formData.experience === level.value
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-medium">{level.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{level.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!formData.category || !formData.usage || loading}
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Getting Recommendations...
                  </>
                ) : (
                  <>
                    <Brain className="h-5 w-5 mr-2" />
                    Get AI Recommendations
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}
          </div>

          {/* Recommendations Results */}
          {recommendations.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Recommended for You
              </h2>

              {recommendations.map((rec, index) => (
                <div
                  key={rec.device.id}
                  className="bg-white rounded-xl shadow-sm border p-8"
                >
                  <div className="flex items-start space-x-6">
                    {/* Rank Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        #{index + 1}
                      </div>
                      <div className="text-center mt-2">
                        <div className="text-sm font-medium text-primary-600">
                          {rec.score}% Match
                        </div>
                      </div>
                    </div>

                    {/* Device Image */}
                    <div className="w-32 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-4xl opacity-50">
                        {selectedCategory?.icon}
                      </div>
                    </div>

                    {/* Device Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {rec.device.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{rec.device.brand}</span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              {rec.device.rating}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 rounded-full">
                              {rec.device.subcategory}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary-600">
                            {formatPrice(rec.device.price)}
                          </div>
                          <button className="mt-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>

                      {/* AI Reasoning */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                          <Brain className="h-4 w-4 mr-2" />
                          Why we recommend this
                        </h4>
                        <p className="text-blue-800 text-sm">{rec.reasoning}</p>
                      </div>

                      {/* Pros and Cons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {rec.pros.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-2 text-green-600" />
                              Pros
                            </h4>
                            <ul className="space-y-1">
                              {rec.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-green-800 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {rec.cons.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                              <ThumbsDown className="h-4 w-4 mr-2 text-red-600" />
                              Cons
                            </h4>
                            <ul className="space-y-1">
                              {rec.cons.map((con, i) => (
                                <li key={i} className="text-sm text-red-800 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}