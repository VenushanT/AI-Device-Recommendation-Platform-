'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="glass border-b border-white/20 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-xl">
                <Zap className="h-7 w-7 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold gradient-text">
              DeviceAI
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '/laptops', label: 'Laptops' },
              { href: '/mobile', label: 'Smartphones' },
              { href: '/headphones', label: 'Headphones' },
              { href: '/keyboards', label: 'Keyboards' },
              { href: '/recommendations', label: 'AI Recommendations' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="relative text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 animate-slide-up">
            <div className="flex flex-col space-y-6">
              {[
                { href: '/laptops', label: 'Laptops' },
                { href: '/mobile', label: 'Smartphones' },
                { href: '/headphones', label: 'Headphones' },
                { href: '/keyboards', label: 'Keyboards' },
                { href: '/recommendations', label: 'AI Recommendations' }
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}