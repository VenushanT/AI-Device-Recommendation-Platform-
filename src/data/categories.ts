import { Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'laptop',
    name: 'Laptops',
    icon: '💻',
    description: 'Find the perfect laptop for work, gaming, or everyday use',
    subcategories: [
      { id: 'gaming', name: 'Gaming Laptops', description: 'High-performance laptops for gaming' },
      { id: 'business', name: 'Business Laptops', description: 'Professional laptops for work' },
      { id: 'ultrabook', name: 'Ultrabooks', description: 'Thin and light portable laptops' },
      { id: 'budget', name: 'Budget Laptops', description: 'Affordable laptops for basic tasks' },
      { id: 'workstation', name: 'Workstations', description: 'High-end laptops for creative work' }
    ]
  },
  {
    id: 'mobile',
    name: 'Smartphones',
    icon: '📱',
    description: 'Discover smartphones that fit your lifestyle',
    subcategories: [
      { id: 'flagship', name: 'Flagship Phones', description: 'Premium smartphones with latest features' },
      { id: 'midrange', name: 'Mid-range Phones', description: 'Balance of features and affordability' },
      { id: 'budget', name: 'Budget Phones', description: 'Affordable smartphones for essential needs' },
      { id: 'camera', name: 'Camera Phones', description: 'Phones with exceptional camera capabilities' },
      { id: 'gaming', name: 'Gaming Phones', description: 'Phones optimized for mobile gaming' }
    ]
  },
  {
    id: 'headphone',
    name: 'Headphones',
    icon: '🎧',
    description: 'Immerse yourself in superior audio quality',
    subcategories: [
      { id: 'wireless', name: 'Wireless Headphones', description: 'Freedom with wireless audio' },
      { id: 'noise-canceling', name: 'Noise Canceling', description: 'Block out the world and focus' },
      { id: 'gaming', name: 'Gaming Headsets', description: 'Enhanced audio for gaming' },
      { id: 'studio', name: 'Studio Monitors', description: 'Professional audio monitoring' },
      { id: 'earbuds', name: 'Earbuds', description: 'Compact and portable audio' }
    ]
  },
  {
    id: 'keyboard',
    name: 'Keyboards',
    icon: '⌨️',
    description: 'Type with precision and comfort',
    subcategories: [
      { id: 'mechanical', name: 'Mechanical Keyboards', description: 'Tactile and responsive typing experience' },
      { id: 'gaming', name: 'Gaming Keyboards', description: 'Keyboards designed for gaming performance' },
      { id: 'wireless', name: 'Wireless Keyboards', description: 'Cable-free typing convenience' },
      { id: 'ergonomic', name: 'Ergonomic Keyboards', description: 'Comfortable typing for long sessions' },
      { id: 'compact', name: 'Compact Keyboards', description: 'Space-saving keyboard designs' }
    ]
  }
]