'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Zap, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative overflow-hidden">
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>
              
              {/* Logo container with hover animation */}
              <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 p-3 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Sparkles className="h-8 w-8 text-white group-hover:animate-spin transition-transform duration-500" />
              </div>
            </div>
            
            {/* Enhanced brand text */}
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                DeviceAI
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Enhanced Navigation - Desktop */}
          <nav className="hidden md:flex items-center">
            <div className="relative">
              <Link 
                href="/recommendations"
                className="group relative px-8 py-3 text-slate-300 hover:text-white font-medium transition-all duration-300 overflow-hidden"
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/30 group-hover:to-cyan-600/20 rounded-full transition-all duration-300 -z-10"></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-400/30 rounded-full transition-all duration-300"></div>
                
                {/* Text with icon */}
                <span className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-300" />
                  <span>AI Recommendations</span>
                </span>
                
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-500 rounded-full"></div>
              </Link>
            </div>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-3 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-cyan-900/20 transition-all duration-300 group"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu 
                className={`h-5 w-5 text-slate-300 group-hover:text-purple-400 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`h-5 w-5 text-slate-300 group-hover:text-purple-400 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-purple-500/20">
            <Link 
              href="/recommendations"
              className="group flex items-center space-x-3 px-6 py-4 text-slate-300 hover:text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-cyan-900/20 rounded-xl mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Zap className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-300" />
              <span>AI Recommendations</span>
              <div className="flex-1"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}