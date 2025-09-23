'use client'

import { useState } from 'react'
import { Category, Device } from '@/types'
import { Star, Filter, Grid, List } from 'lucide-react'

interface CategoryPageProps {
  category: Category
  devices: Device[]
}

export default function CategoryPage({ category, devices }: CategoryPageProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('rating')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredDevices = devices.filter(device => 
    selectedSubcategory === 'all' || device.subcategory === selectedSubcategory
  )

  const sortedDevices = [...filteredDevices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl">{category.icon}</div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              {/* Subcategory Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Subcategory</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subcategory"
                      value="all"
                      checked={selectedSubcategory === 'all'}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">All</span>
                  </label>
                  {category.subcategories.map((sub) => (
                    <label key={sub.id} className="flex items-center">
                      <input
                        type="radio"
                        name="subcategory"
                        value={sub.id}
                        checked={selectedSubcategory === sub.id}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{sub.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Sort by</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="rating">Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                {sortedDevices.length} devices found
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${
                    viewMode === 'grid' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${
                    viewMode === 'list' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Device Grid/List */}
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-4'
            }`}>
              {sortedDevices.map((device) => (
                <div
                  key={device.id}
                  className={`bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow ${
                    viewMode === 'list' ? 'flex p-4' : 'p-6'
                  }`}
                >
                  {/* Device Image */}
                  <div className={`${
                    viewMode === 'list' 
                      ? 'w-24 h-24 flex-shrink-0 mr-4' 
                      : 'aspect-video mb-4'
                  } bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center`}>
                    <div className={`${viewMode === 'list' ? 'text-3xl' : 'text-4xl'} opacity-50`}>
                      {category.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Device Info */}
                    <div className="flex items-start justify-between mb-2">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {device.subcategory}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{device.rating}</span>
                      </div>
                    </div>

                    <h3 className={`font-semibold text-gray-900 mb-2 ${
                      viewMode === 'list' ? 'text-lg' : 'text-xl'
                    }`}>
                      {device.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {device.description}
                    </p>

                    {/* Specs (List view only) */}
                    {viewMode === 'list' && (
                      <div className="mb-4">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(device.specs).slice(0, 4).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-gray-500 capitalize">{key}:</span>
                              <span className="text-gray-900 ml-1">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`font-bold text-primary-600 ${
                          viewMode === 'list' ? 'text-xl' : 'text-2xl'
                        }`}>
                          {formatPrice(device.price)}
                        </span>
                        <div className="text-sm text-gray-500">{device.brand}</div>
                      </div>
                      
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No devices found */}
            {sortedDevices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl opacity-30 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No devices found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}