import { categories } from '@/data/categories'
import { devices } from '@/data/devices'
import CategoryPage from '@/components/CategoryPage'

export default function HeadphonesPage() {
  const category = categories.find(c => c.id === 'headphone')!
  const categoryDevices = devices.filter(d => d.category === 'headphone')

  return (
    <CategoryPage
      category={category}
      devices={categoryDevices}
    />
  )
}