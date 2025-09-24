import { Device } from '@/types'

export const devices: Device[] = [
  // Laptops - More diverse price ranges
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
  {
    id: 'laptop-3',
    name: 'Dell XPS 13',
    category: 'laptop',
    subcategory: 'ultrabook',
    brand: 'Dell',
    price: 999,
    rating: 4.5,
    image: '/images/dell-xps-13.jpg',
    description: 'Premium ultrabook with excellent build quality and portability',
    specs: {
      processor: 'Intel Core i7-1360P',
      ram: '16GB LPDDR5',
      storage: '512GB SSD',
      display: '13.4" FHD+ InfinityEdge',
      battery: 'Up to 12 hours'
    },
    features: ['Ultra-portable design', 'InfinityEdge display', 'Premium materials', 'Fast charging'],
    inStock: true
  },
  {
    id: 'laptop-4',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptop',
    subcategory: 'business',
    brand: 'Lenovo',
    price: 1599,
    rating: 4.7,
    image: '/images/thinkpad-x1.jpg',
    description: 'Business laptop with military-grade durability and security features',
    specs: {
      processor: 'Intel Core i7-1365U',
      ram: '16GB LPDDR5',
      storage: '1TB SSD',
      display: '14" WUXGA IPS',
      battery: 'Up to 15 hours'
    },
    features: ['MIL-SPEC durability', 'TrackPoint', 'ThinkShield security', 'Rapid charging'],
    inStock: true
  },
  {
    id: 'laptop-5',
    name: 'Acer Aspire 5',
    category: 'laptop',
    subcategory: 'budget',
    brand: 'Acer',
    price: 599,
    rating: 4.2,
    image: '/images/acer-aspire-5.jpg',
    description: 'Affordable laptop for everyday computing and light productivity',
    specs: {
      processor: 'AMD Ryzen 5 7520U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      display: '15.6" FHD IPS',
      battery: 'Up to 8 hours'
    },
    features: ['Budget-friendly', 'Decent performance', 'Full-size keyboard', 'Multiple ports'],
    inStock: true
  },
  
  // Smartphones - More options
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
  {
    id: 'mobile-3',
    name: 'Google Pixel 8',
    category: 'mobile',
    subcategory: 'mid-range',
    brand: 'Google',
    price: 699,
    rating: 4.5,
    image: '/images/pixel-8.jpg',
    description: 'Pure Android experience with excellent camera AI features',
    specs: {
      processor: 'Google Tensor G3',
      storage: '128GB',
      display: '6.2" OLED 120Hz',
      camera: '50MP dual camera',
      battery: '4575mAh'
    },
    features: ['Pure Android', 'Pixel camera AI', 'Fast security updates', 'Magic Eraser'],
    inStock: true
  },
  {
    id: 'mobile-4',
    name: 'OnePlus 12',
    category: 'mobile',
    subcategory: 'flagship',
    brand: 'OnePlus',
    price: 799,
    rating: 4.4,
    image: '/images/oneplus-12.jpg',
    description: 'Fast-charging flagship with premium performance',
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      storage: '256GB',
      display: '6.82" LTPO AMOLED 120Hz',
      camera: '50MP Hasselblad triple camera',
      battery: '5400mAh'
    },
    features: ['100W SuperVOOC charging', 'Hasselblad cameras', 'OxygenOS', 'Alert slider'],
    inStock: true
  },
  
  // Headphones - Expanded selection
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
  {
    id: 'headphone-3',
    name: 'Audio-Technica ATH-M50x',
    category: 'headphone',
    subcategory: 'studio',
    brand: 'Audio-Technica',
    price: 149,
    rating: 4.6,
    image: '/images/ath-m50x.jpg',
    description: 'Professional monitor headphones for studio and mixing',
    specs: {
      driver: '45mm large-aperture',
      frequency: '15Hz-28kHz',
      impedance: '38 ohms',
      cable: 'Detachable',
      weight: '285g'
    },
    features: ['Professional monitoring', 'Exceptional clarity', 'Detachable cables', 'Foldable design'],
    inStock: true
  },
  {
    id: 'headphone-4',
    name: 'Apple AirPods Pro',
    category: 'headphone',
    subcategory: 'earbuds',
    brand: 'Apple',
    price: 249,
    rating: 4.7,
    image: '/images/airpods-pro.jpg',
    description: 'Premium wireless earbuds with spatial audio',
    specs: {
      driver: 'Custom high-excursion',
      battery: '6 hours (ANC on)',
      charging: 'MagSafe/Lightning',
      features: 'Active Noise Cancellation',
      weight: '5.4g each'
    },
    features: ['Spatial Audio', 'Adaptive Transparency', 'Personalized Volume', 'MagSafe charging'],
    inStock: true
  },
  
  // Keyboards - More variety
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
  },
  {
    id: 'keyboard-3',
    name: 'Keychron K8',
    category: 'keyboard',
    subcategory: 'mechanical',
    brand: 'Keychron',
    price: 89,
    rating: 4.4,
    image: '/images/keychron-k8.jpg',
    description: 'Wireless mechanical keyboard for Mac and Windows',
    specs: {
      layout: 'Tenkeyless (87 keys)',
      switches: 'Gateron mechanical',
      battery: '72 hours',
      connectivity: 'Bluetooth/USB-C',
      weight: '755g'
    },
    features: ['Hot-swappable switches', 'Mac/Windows compatible', 'RGB backlight', 'Aluminum frame'],
    inStock: true
  },
  {
    id: 'keyboard-4',
    name: 'Razer DeathStalker V2 Pro',
    category: 'keyboard',
    subcategory: 'gaming',
    brand: 'Razer',
    price: 249,
    rating: 4.5,
    image: '/images/razer-deathstalker.jpg',
    description: 'Ultra-thin wireless gaming keyboard with low-profile switches',
    specs: {
      layout: 'Full-size',
      switches: 'Razer Low-Profile Optical',
      battery: '40 hours',
      connectivity: 'HyperSpeed Wireless/USB-C',
      weight: '775g'
    },
    features: ['Low-profile optical switches', 'HyperSpeed wireless', 'Per-key RGB', 'Ultra-thin design'],
    inStock: true
  }
]