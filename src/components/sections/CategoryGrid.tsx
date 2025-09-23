import Link from 'next/link'
import { categories } from '@/data/categories'

const gradients = [
  { bg: 'from-purple-600 to-blue-600', shadow: 'shadow-purple-500/25' },
  { bg: 'from-cyan-500 to-teal-600', shadow: 'shadow-cyan-500/25' },
  { bg: 'from-pink-500 to-rose-600', shadow: 'shadow-pink-500/25' },
  { bg: 'from-orange-500 to-amber-600', shadow: 'shadow-orange-500/25' }
]

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Explore Device Categories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Click on any category to discover devices that match your needs with AI-powered recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const gradient = gradients[index % gradients.length]
            return (
              <Link
                key={category.id}
                href={`/${category.id}`}
                className="group relative overflow-hidden"
              >
                <div className={`relative glass p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${gradient.shadow}`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="relative text-center">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient.bg} rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300 w-16 h-16 mx-auto`}></div>
                      <div className={`relative bg-gradient-to-r ${gradient.bg} p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center text-4xl`}>
                        {category.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Subcategories */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span
                          key={sub.id}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-xs rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          {sub.name}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm text-purple-700 dark:text-purple-300 text-xs rounded-full border border-purple-300/30">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}