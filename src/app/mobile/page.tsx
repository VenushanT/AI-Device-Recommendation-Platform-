import { categories } from '@/data/categories'
import { devices } from '@/data/devices'
import CategoryPage from '@/components/CategoryPage'

export default function MobilePage() {
  const category = categories.find(c => c.id === 'mobile')!
  const categoryDevices = devices.filter(d => d.category === 'mobile')

  return (
    <CategoryPage
      category={category}
      devices={categoryDevices}
    />
  )
}