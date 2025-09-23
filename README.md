# AI Device Recommendation Platform

A modern Next.js application that provides AI-powered device recommendations using the Deepseek API. Users can browse through different device categories (laptops, smartphones, headphones, keyboards) with subcategories and get personalized recommendations based on their needs.

## Features

- **Category Navigation**: Browse devices by major categories with subcategories
- **AI Recommendations**: Get personalized device suggestions powered by Deepseek AI
- **Advanced Filtering**: Filter devices by subcategory, price, rating, and more
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Lucide React icons

## Categories & Subcategories

### 💻 Laptops
- Gaming Laptops
- Business Laptops  
- Ultrabooks
- Budget Laptops
- Workstations

### 📱 Smartphones
- Flagship Phones
- Mid-range Phones
- Budget Phones
- Camera Phones
- Gaming Phones

### 🎧 Headphones
- Wireless Headphones
- Noise Canceling
- Gaming Headsets
- Studio Monitors
- Earbuds

### ⌨️ Keyboards
- Mechanical Keyboards
- Gaming Keyboards
- Wireless Keyboards
- Ergonomic Keyboards
- Compact Keyboards

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Deepseek API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AI-Device-Recommendation-Platform-
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
DEEPSEEK_API_KEY=your_deepseek_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── laptops/           # Laptop category page
│   ├── mobile/            # Mobile category page
│   ├── headphones/        # Headphones category page
│   ├── keyboards/         # Keyboards category page
│   ├── recommendations/   # AI recommendations page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── CategoryPage.tsx  # Category page component
├── data/                 # Static data
│   ├── categories.ts     # Category definitions
│   └── devices.ts        # Device database
├── lib/                  # Utility functions
│   ├── deepseek.ts       # Deepseek AI client
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
    └── index.ts
```

## API Integration

The platform integrates with the Deepseek API to provide intelligent device recommendations. The AI analyzes:

- User requirements and preferences
- Budget constraints
- Usage patterns
- Experience level
- Device specifications and reviews

## Customization

### Adding New Devices

Edit `src/data/devices.ts` to add new devices:

```typescript
{
  id: 'device-id',
  name: 'Device Name',
  category: 'category-id',
  subcategory: 'subcategory-id',
  brand: 'Brand Name',
  price: 999,
  rating: 4.5,
  image: '/images/device.jpg',
  description: 'Device description',
  specs: {
    // Device specifications
  },
  features: ['Feature 1', 'Feature 2'],
  inStock: true
}
```

### Adding New Categories

Edit `src/data/categories.ts` to add new categories:

```typescript
{
  id: 'category-id',
  name: 'Category Name',
  icon: '🔧',
  description: 'Category description',
  subcategories: [
    // Subcategory definitions
  ]
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Environment Variables

- `DEEPSEEK_API_KEY`: Your Deepseek API key for AI recommendations
- `NEXT_PUBLIC_APP_URL`: The public URL of your application

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support and questions, please open an issue in the GitHub repository.