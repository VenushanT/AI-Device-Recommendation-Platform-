# AI Device Recommendation Platform - Setup & Testing

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ installed
- Gemini API key

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/VenushanT/AI-Device-Recommendation-Platform-.git
cd AI-Device-Recommendation-Platform-

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Gemini API key

# Start development server
npm run dev
```

### 🧪 Testing Checklist

- [ ] Homepage loads at http://localhost:3000
- [ ] Category navigation works (Laptops, Smartphones, Headphones, Keyboards)
- [ ] Device filtering and sorting works
- [ ] AI Recommendations page loads
- [ ] Search functionality works
- [ ] Responsive design on mobile devices
- [ ] All animations and transitions work smoothly

### 🎨 Features Included

✅ **Unique Color Theme** - Modern blue-purple gradient design
✅ **Responsive Design** - Works on all device sizes  
✅ **AI Integration** - Gemini API for recommendations
✅ **Category System** - 4 main categories with subcategories
✅ **Advanced Filtering** - Sort by price, rating, brand
✅ **Modern UI** - Tailwind CSS with smooth animations

### 🔧 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
npx vercel --prod
```

### 📱 Available Pages

- `/` - Homepage with hero and categories
- `/laptops` - Laptop category page
- `/mobile` - Smartphone category page  
- `/headphones` - Headphones category page
- `/keyboards` - Keyboards category page
- `/recommendations` - AI-powered recommendations

### 🔑 Environment Variables

```bash
```
GEMINI_API_KEY=your_gemini_api_key_here
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 🎯 Performance Optimizations

- Next.js 14 with App Router
- Optimized images and assets
- Code splitting and lazy loading
- SEO optimized meta tags
- Fast refresh during development

**Status: ✅ All systems operational and running neatly!**