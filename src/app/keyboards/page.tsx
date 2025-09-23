import { categories } from '@/data/categories'
import { devices } from '@/data/devices'
import CategoryPage from '@/components/CategoryPage'

export default function KeyboardsPage() {
  const category = categories.find(c => c.id === 'keyboard')!
  const categoryDevices = devices.filter(d => d.category === 'keyboard')

  return (
    <CategoryPage
      category={category}
      devices={categoryDevices}
    />
  )
}