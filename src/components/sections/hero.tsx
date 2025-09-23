import Link from 'next/link'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-full blur-xl float" style={{animationDelay: '2s'}}></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-60 pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-cyan-600 p-4 rounded-full">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="gradient-text">Find Your Perfect Device</span>
            <br />
            <span className="text-slate-700 dark:text-slate-300">with </span>
            <span className="text-neon">AI Power</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get personalized device recommendations powered by advanced AI. 
            <br className="hidden md:block" />
            Compare laptops, smartphones, headphones, and keyboards to make the best choice for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/recommendations"
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Zap className="mr-3 h-6 w-6" />
                Get AI Recommendations
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            
            <Link
              href="#categories"
              className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-md text-slate-700 dark:text-white font-bold text-lg rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Browse Categories
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Devices", color: "from-purple-400 to-purple-600" },
              { number: "50+", label: "Brands", color: "from-cyan-400 to-cyan-600" },
              { number: "4.8★", label: "User Rating", color: "from-emerald-400 to-emerald-600" },
              { number: "24/7", label: "AI Support", color: "from-purple-400 to-cyan-400" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}