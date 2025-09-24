# 🤖 AI Device Recommendation Platform# AI Device Recommendation Platform



> **A modern, intelligent device recommendation system powered by Google's Gemini AI**A modern Next.js application that provides AI-powered device recommendations using the Gemini API. Users can browse through different device categories (laptops, smartphones, headphones, keyboards) with subcategories and get personalized recommendations based on their needs.



Transform the way users discover and choose technology devices with our AI-powered recommendation platform. Built with Next.js 14 and enhanced by Gemini AI, this platform provides personalized device suggestions across multiple categories including laptops, smartphones, headphones, and keyboards.## Features



![Next.js](https://img.shields.io/badge/Next.js-14.0.3-000000?style=for-the-badge&logo=next.js&logoColor=white)- **Category Navigation**: Browse devices by major categories with subcategories

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)- **AI Recommendations**: Get personalized device suggestions powered by Gemini AI

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)- **Advanced Filtering**: Filter devices by subcategory, price, rating, and more

![Gemini AI](https://img.shields.io/badge/Gemini_AI-Powered-4285F4?style=for-the-badge&logo=google&logoColor=white)- **Responsive Design**: Optimized for desktop and mobile devices

- **Modern UI**: Built with Tailwind CSS and Lucide React icons

## ✨ Key Features

## Categories & Subcategories

### 🎯 **Smart AI Recommendations**

- **Gemini-Powered Intelligence**: Leverages Google's advanced Gemini AI for sophisticated device analysis### 💻 Laptops

- **Context-Aware Suggestions**: Understands user needs, budget constraints, and usage patterns- Gaming Laptops

- **Fallback Logic**: Robust system ensures recommendations even when AI is unavailable- Business Laptops  

- Ultrabooks

### 📱 **Comprehensive Device Categories**- Budget Laptops

- **💻 Laptops**: Gaming, Business, Creative, Budget-friendly options- Workstations

- **📱 Smartphones**: Flagship, Mid-range, Budget, Camera-focused devices

- **🎧 Headphones**: Gaming, Studio, Wireless, Noise-canceling varieties### 📱 Smartphones

- **⌨️ Keyboards**: Mechanical, Wireless, Gaming, Productivity-focused- Flagship Phones

- Mid-range Phones

### 🎨 **Modern User Experience**- Budget Phones

- **Responsive Design**: Seamless experience across desktop, tablet, and mobile- Camera Phones

- **Dark/Light Themes**: Automatic theme switching based on user preference- Gaming Phones

- **Intuitive Navigation**: Category-based browsing with smooth transitions

- **Real-time Recommendations**: Instant AI-powered suggestions### 🎧 Headphones

- Wireless Headphones

### 🔧 **Technical Excellence**- Noise Canceling

- **Next.js 14 App Router**: Latest React framework with optimal performance- Gaming Headsets

- **TypeScript**: Full type safety for reliable development- Studio Monitors

- **Tailwind CSS**: Utility-first styling with custom design system- Earbuds

- **Server-Side Rendering**: Fast initial page loads and SEO optimization

### ⌨️ Keyboards

## 🚀 Quick Start- Mechanical Keyboards

- Gaming Keyboards

### Prerequisites- Wireless Keyboards

- **Node.js** 18.0 or higher- Ergonomic Keyboards

- **npm** or **yarn** package manager- Compact Keyboards

- **Gemini API Key** (free from Google AI Studio)

## Getting Started

### 1. Clone the Repository

```bash### Prerequisites

git clone https://github.com/VenushanT/AI-Device-Recommendation-Platform-.git

cd AI-Device-Recommendation-Platform-- Node.js 18+ 

```- npm or yarn

- Gemini API key

### 2. Install Dependencies

```bash### Installation

npm install

# or1. Clone the repository:

yarn install```bash

```git clone <repository-url>

cd AI-Device-Recommendation-Platform-

### 3. Configure Environment```

```bash

# Copy the example environment file2. Install dependencies:

cp .env.local.example .env.local```bash

npm install

# Edit .env.local with your Gemini API key```

```

3. Set up environment variables:

### 4. Get Your Gemini API KeyCreate a `.env.local` file in the root directory:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)```bash

2. Sign in with your Google account```env

3. Click "Create API Key"GEMINI_API_KEY=your_gemini_api_key_here

4. Copy the generated key (starts with "AIza")```

5. Add to your `.env.local` file:NEXT_PUBLIC_APP_URL=http://localhost:3000

```

```env

GEMINI_API_KEY=your_actual_gemini_api_key_here4. Run the development server:

``````bash

npm run dev

### 5. Launch the Application```

```bash

npm run dev5. Open [http://localhost:3000](http://localhost:3000) in your browser.

# or

yarn dev## Project Structure

```

```

Visit [http://localhost:3000](http://localhost:3000) to see your application running! 🎉src/

├── app/                    # Next.js app router pages

## 📁 Project Structure│   ├── api/               # API routes

│   ├── laptops/           # Laptop category page

```│   ├── mobile/            # Mobile category page

AI-Device-Recommendation-Platform/│   ├── headphones/        # Headphones category page

├── 📂 src/│   ├── keyboards/         # Keyboards category page

│   ├── 📂 app/                     # Next.js App Router│   ├── recommendations/   # AI recommendations page

│   │   ├── 📂 api/│   ├── layout.tsx         # Root layout

│   │   │   └── 📂 recommendations/ # AI recommendation API│   ├── page.tsx          # Home page

│   │   ├── 📂 globals.css          # Global styles│   └── globals.css       # Global styles

│   │   ├── 📂 layout.tsx           # Root layout├── components/            # React components

│   │   ├── 📂 page.tsx             # Home page│   ├── layout/           # Layout components

│   │   ├── 📂 laptops/             # Laptop category pages│   ├── sections/         # Page sections

│   │   ├── 📂 mobile/              # Smartphone category pages│   └── CategoryPage.tsx  # Category page component

│   │   ├── 📂 headphones/          # Headphone category pages├── data/                 # Static data

│   │   ├── 📂 keyboards/           # Keyboard category pages│   ├── categories.ts     # Category definitions

│   │   └── 📂 recommendations/     # Recommendation results page│   └── devices.ts        # Device database

│   ├── 📂 components/              # Reusable UI components├── lib/                  # Utility functions

│   │   ├── 📂 CategoryCard.tsx     # Device category cards│   ├── gemini.ts         # Gemini AI client

│   │   ├── 📂 DeviceGrid.tsx       # Device display grid│   └── utils.ts          # Helper functions

│   │   ├── 📂 Navbar.tsx           # Navigation component└── types/                # TypeScript type definitions

│   │   ├── 📂 RecommendationForm.tsx # AI input form    └── index.ts

│   │   └── 📂 DeviceCard.tsx       # Individual device cards```

│   ├── 📂 lib/                     # Utility libraries

│   │   ├── 📂 gemini.ts            # Gemini AI integration## API Integration

│   │   └── 📂 utils.ts             # Helper functions

│   ├── 📂 data/                    # Static data and typesThe platform integrates with the Gemini API to provide intelligent device recommendations. The AI analyzes:

│   │   ├── 📂 devices.ts           # Device database

│   │   └── 📂 types.ts             # TypeScript definitions- User requirements and preferences

│   └── 📂 styles/                  # Additional styling- Budget constraints

├── 📂 public/                      # Static assets- Usage patterns

├── 📂 .env.local.example           # Environment template- Experience level

├── 📂 tailwind.config.js           # Tailwind configuration- Device specifications and reviews

├── 📂 package.json                 # Dependencies and scripts

└── 📂 README.md                    # Project documentation## Customization

```

### Adding New Devices

## 🤖 AI Integration Details

Edit `src/data/devices.ts` to add new devices:

### Gemini AI Features

- **Advanced Language Understanding**: Processes complex user requirements```typescript

- **Context-Aware Responses**: Maintains conversation context for better recommendations{

- **Structured Output**: Returns properly formatted device recommendations  id: 'device-id',

- **Error Handling**: Graceful fallback when API limits are reached  name: 'Device Name',

  category: 'category-id',

### Recommendation Process  subcategory: 'subcategory-id',

1. **User Input Analysis**: Gemini AI analyzes user requirements and preferences  brand: 'Brand Name',

2. **Device Matching**: AI matches requirements with our curated device database  price: 999,

3. **Intelligent Ranking**: Recommendations are ranked by relevance and value  rating: 4.5,

4. **Explanation Generation**: Each recommendation includes detailed reasoning  image: '/images/device.jpg',

  description: 'Device description',

### API Endpoints  specs: {

- `POST /api/recommendations` - Generate AI-powered device recommendations    // Device specifications

  },

## 🎨 Customization  features: ['Feature 1', 'Feature 2'],

  inStock: true

### Theme Configuration}

The platform uses a custom design system built with Tailwind CSS:```



```javascript### Adding New Categories

// tailwind.config.js

theme: {Edit `src/data/categories.ts` to add new categories:

  extend: {

    colors: {```typescript

      primary: {{

        50: '#eff6ff',  id: 'category-id',

        500: '#3b82f6',  name: 'Category Name',

        900: '#1e3a8a'  icon: '🔧',

      }  description: 'Category description',

    }  subcategories: [

  }    // Subcategory definitions

}  ]

```}

```

### Adding New Device Categories

1. Add category data to `src/data/devices.ts`## Deployment

2. Create category page in `src/app/[category]/`

3. Update navigation in `src/components/Navbar.tsx`### Vercel (Recommended)

4. Add category icon and styling

1. Push your code to GitHub

## 🔧 Development Scripts2. Connect your repository to Vercel

3. Add environment variables in Vercel dashboard

```bash4. Deploy

# Development server with hot reload

npm run dev### Other Platforms



# Production buildThe app can be deployed to any platform that supports Next.js:

npm run build

```bash

# Start production servernpm run build

npm run startnpm start

```

# Run linting

npm run lint## Environment Variables



# Type checking- `GEMINI_API_KEY`: Your Gemini API key for AI recommendations

npm run type-check- `NEXT_PUBLIC_APP_URL`: The public URL of your application

```

## License

## 🌟 Features in Detail

This project is licensed under the MIT License.

### Smart Device Matching

- **Budget Analysis**: Recommends devices within user's price range## Contributing

- **Use Case Optimization**: Matches devices to specific usage scenarios

- **Performance Scaling**: Balances performance needs with budget constraints1. Fork the repository

- **Future-Proofing**: Considers longevity and upgrade potential2. Create a feature branch

3. Make your changes

### User Experience Enhancements4. Submit a pull request

- **Progressive Loading**: Smooth loading states for better perceived performance

- **Error Boundaries**: Graceful error handling throughout the application## Support

- **Accessibility**: WCAG compliant design for inclusive user experience

- **Mobile Optimization**: Touch-friendly interface for mobile usersFor support and questions, please open an issue in the GitHub repository.

## 🔒 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `GEMINI_API_KEY` | Google Gemini AI API key | ✅ | `AIzaSyDFS1nTyefZ...` |
| `NEXT_PUBLIC_APP_URL` | Application base URL | ❌ | `http://localhost:3000` |

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Add environment variables
4. Deploy automatically

### Other Platforms
- **Netlify**: Full Next.js support with edge functions
- **Railway**: Simple deployment with automatic builds
- **DigitalOcean**: App Platform with container support

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Use TypeScript for all new code
- Follow the existing code style
- Add JSDoc comments for functions
- Test AI integrations thoroughly
- Update documentation for new features

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** - For powerful natural language processing
- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For seamless deployment platform

## 📞 Support

Need help? We're here for you:

- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/VenushanT/AI-Device-Recommendation-Platform-/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/VenushanT/AI-Device-Recommendation-Platform-/discussions)

---

<div align="center">

**Built with ❤️**

[🌟 Star this repo](https://github.com/VenushanT/AI-Device-Recommendation-Platform-) • [🐛 Report Bug](https://github.com/VenushanT/AI-Device-Recommendation-Platform-/issues) • [✨ Request Feature](https://github.com/VenushanT/AI-Device-Recommendation-Platform-/issues)

Made with Next.js • Powered by Gemini AI • Styled with Tailwind CSS

</div>
