import Hero from '@/components/sections/hero'
import AIRecommendations from '@/components/sections/AIRecommendations'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <AIRecommendations />
    </div>
  )
}