import Link from 'next/link'
import { Github, Twitter, Mail, Zap, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass border-t border-white/20 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-60"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">DeviceAI</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
              Find the perfect device with AI-powered recommendations. 
              Compare specifications, read reviews, and make informed decisions
              with our intelligent platform.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
              >
                <Twitter className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-cyan-500" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-purple-500" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/laptops" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/headphones" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  Headphones
                </Link>
              </li>
              <li>
                <Link href="/keyboards" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  Keyboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/recommendations" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  AI Recommendations
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:pl-2">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              &copy; 2025 DeviceAI. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-slate-600 dark:text-slate-400 text-sm">
                Made with
              </span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-slate-600 dark:text-slate-400 text-sm">
                and AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}