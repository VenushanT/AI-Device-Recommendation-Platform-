import { categories } from '@/data/categories'
import { devices } from '@/data/devices'
import CategoryPage from '@/components/CategoryPage'

export default function LaptopsPage() {
  const category = categories.find(c => c.id === 'laptop')!
  const categoryDevices = devices.filter(d => d.category === 'laptop')

  return (
    <CategoryPage
      category={category}
      devices={categoryDevices}
    />
  )
}