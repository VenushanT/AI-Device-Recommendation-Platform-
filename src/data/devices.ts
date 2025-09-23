import { Device } from '@/types'

export const devices: Device[] = [
  // Laptops
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16"',
    category: 'laptop',
    subcategory: 'workstation',
    brand: 'Apple',
    price: 2499,
    rating: 4.8,
    image: '/images/macbook-pro-16.jpg',
    description: 'Professional laptop with M3 Pro chip for demanding creative work',
    specs: {
      processor: 'Apple M3 Pro',
      ram: '18GB',
      storage: '512GB SSD',
      display: '16.2" Liquid Retina XDR',
      battery: 'Up to 22 hours'
    },
    features: ['M3 Pro chip', 'Liquid Retina XDR display', 'ProRes acceleration', 'Thunderbolt 4'],
    inStock: true
  },
  {
    id: 'laptop-2',
    name: 'ASUS ROG Strix G15',
    category: 'laptop',
    subcategory: 'gaming',
    brand: 'ASUS',
    price: 1299,
    rating: 4.6,
    image: '/images/asus-rog-strix.jpg',
    description: 'High-performance gaming laptop with RTX 4060',
    specs: {
      processor: 'AMD Ryzen 7 7735HS',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '15.6" FHD 144Hz',
      graphics: 'RTX 4060'
    },
    features: ['144Hz display', 'RGB keyboard', 'Advanced cooling', 'Wi-Fi 6E'],
    inStock: true
  },
  
  // Smartphones
  {
    id: 'mobile-1',
    name: 'iPhone 15 Pro',
    category: 'mobile',
    subcategory: 'flagship',
    brand: 'Apple',
    price: 999,
    rating: 4.7,
    image: '/images/iphone-15-pro.jpg',
    description: 'Professional smartphone with titanium design and A17 Pro chip',
    specs: {
      processor: 'A17 Pro',
      storage: '128GB',
      display: '6.1" Super Retina XDR',
      camera: '48MP Pro camera system',
      battery: 'All-day battery life'
    },
    features: ['Titanium design', 'Action Button', 'USB-C', 'ProRAW photography'],
    inStock: true
  },
  {
    id: 'mobile-2',
    name: 'Samsung Galaxy S24',
    category: 'mobile',
    subcategory: 'flagship',
    brand: 'Samsung',
    price: 849,
    rating: 4.6,
    image: '/images/galaxy-s24.jpg',
    description: 'AI-powered smartphone with advanced camera capabilities',
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      storage: '256GB',
      display: '6.2" Dynamic AMOLED 2X',
      camera: '50MP triple camera',
      battery: '4000mAh'
    },
    features: ['Galaxy AI', 'Circle to Search', 'Live Translate', 'S Pen support'],
    inStock: true
  },
  
  // Headphones
  {
    id: 'headphone-1',
    name: 'Sony WH-1000XM5',
    category: 'headphone',
    subcategory: 'noise-canceling',
    brand: 'Sony',
    price: 399,
    rating: 4.8,
    image: '/images/sony-wh1000xm5.jpg',
    description: 'Industry-leading noise canceling wireless headphones',
    specs: {
      driver: '30mm',
      frequency: '4Hz-40kHz',
      battery: '30 hours',
      charging: 'USB-C quick charge',
      weight: '250g'
    },
    features: ['Industry-leading ANC', 'Multipoint connection', 'Speak-to-chat', 'LDAC support'],
    inStock: true
  },
  {
    id: 'headphone-2',
    name: 'SteelSeries Arctis 7P',
    category: 'headphone',
    subcategory: 'gaming',
    brand: 'SteelSeries',
    price: 179,
    rating: 4.5,
    image: '/images/steelseries-arctis-7p.jpg',
    description: 'Wireless gaming headset with premium audio',
    specs: {
      driver: '40mm neodymium',
      frequency: '20Hz-20kHz',
      battery: '24 hours',
      microphone: 'Retractable',
      weight: '308g'
    },
    features: ['2.4GHz wireless', 'DTS Headphone:X v2.0', 'ClearCast microphone', 'USB-C'],
    inStock: true
  },
  
  // Keyboards
  {
    id: 'keyboard-1',
    name: 'Logitech MX Keys',
    category: 'keyboard',
    subcategory: 'wireless',
    brand: 'Logitech',
    price: 129,
    rating: 4.6,
    image: '/images/logitech-mx-keys.jpg',
    description: 'Advanced wireless keyboard for professionals',
    specs: {
      layout: 'Full-size',
      switches: 'Low-profile tactile',
      battery: '10 days (backlight on)',
      connectivity: 'Bluetooth/USB receiver',
      weight: '810g'
    },
    features: ['Smart illumination', 'Multi-device', 'Easy-Switch', 'USB-C charging'],
    inStock: true
  },
  {
    id: 'keyboard-2',
    name: 'Corsair K70 RGB',
    category: 'keyboard',
    subcategory: 'mechanical',
    brand: 'Corsair',
    price: 169,
    rating: 4.7,
    image: '/images/corsair-k70.jpg',
    description: 'Mechanical gaming keyboard with RGB lighting',
    specs: {
      layout: 'Full-size',
      switches: 'Cherry MX Red',
      backlighting: 'Per-key RGB',
      connectivity: 'USB',
      weight: '1200g'
    },
    features: ['Cherry MX switches', 'Per-key RGB', 'Media keys', 'Aircraft-grade aluminum'],
    inStock: true
  }
]