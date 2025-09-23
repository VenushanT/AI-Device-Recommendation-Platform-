export interface Device {
  id: string
  name: string
  category: string
  subcategory: string
  brand: string
  price: number
  rating: number
  image: string
  description: string
  specs: Record<string, any>
  features: string[]
  inStock: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  description: string
  devices?: Device[]
}

export interface RecommendationRequest {
  category: string
  budget?: {
    min: number
    max: number
  }
  preferences: string[]
  usage: string
  experience: 'beginner' | 'intermediate' | 'advanced'
}

export interface AIRecommendation {
  device: Device
  score: number
  reasoning: string
  pros: string[]
  cons: string[]
}