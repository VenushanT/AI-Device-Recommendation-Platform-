import Hero from '@/components/sections/hero'
import CategoryGrid from '@/components/sections/CategoryGrid'
import AIRecommendations from '@/components/sections/AIRecommendations'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <CategoryGrid />
      <AIRecommendations />
    </div>
  )
}