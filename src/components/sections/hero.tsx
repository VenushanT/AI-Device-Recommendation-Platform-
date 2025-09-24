import Link from 'next/link'import Link from 'next/link'import Link from 'next/link'

import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'

import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'import { ArrowRight, Sparkles, Zap, Star, Target, Award } from 'lucide-react'

export default function Hero() {

  return (

    <section className="relative py-32 overflow-hidden min-h-screen flex items-center">

      {/* Enhanced animated background patterns */}export default function Hero() {export default function Hero() {

      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10 animate-pulse"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10"></div>  return (  return (

      

      {/* Enhanced floating elements with staggered animations */}    <section className="relative py-32 overflow-hidden min-h-screen flex items-center">    <section className="relative py-32 overflow-hidden min-h-screen flex items-center">

      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-xl float-slow"></div>

      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-full blur-xl float-delayed"></div>      {/* Enhanced animated background patterns */}      {/* Enhanced animated background patterns */}

      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-lg float" style={{animationDelay: '1s'}}></div>

      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-xl float" style={{animationDelay: '3s'}}></div>      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10 animate-pulse"></div>      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10 animate-pulse"></div>

      

      <div className="container relative z-10">      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10"></div>      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10"></div>

        <div className="max-w-6xl mx-auto text-center">

          {/* Enhanced icon with multiple animations */}            

          <div className="flex items-center justify-center mb-12 stagger-item">

            <div className="relative magnetic-hover">      {/* Enhanced floating elements with staggered animations */}      {/* Enhanced floating elements with staggered animations */}

              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 rounded-full blur-2xl opacity-40 pulse-glow"></div>

              <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 p-6 rounded-full shadow-2xl">      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-xl float-slow"></div>      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-xl float-slow"></div>

                <Sparkles className="h-12 w-12 text-white animate-pulse" />

              </div>      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-full blur-xl float-delayed"></div>      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-full blur-xl float-delayed"></div>

            </div>

          </div>      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-lg float" style={{animationDelay: '1s'}}></div>      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-lg float" style={{animationDelay: '1s'}}></div>

          

          {/* Enhanced typography with staggered animations */}      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-xl float" style={{animationDelay: '3s'}}></div>      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-xl float" style={{animationDelay: '3s'}}></div>

          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold mb-12 leading-tight stagger-item">

            <div className="mb-4">            

              <span className="gradient-text block">Find Your Perfect</span>

            </div>      <div className="container relative z-10">      <div className="container relative z-10">

            <div className="mb-4">

              <span className="text-slate-200">Device with </span>        <div className="max-w-6xl mx-auto text-center">        <div className="max-w-6xl mx-auto text-center">

              <span className="text-neon relative inline-block">

                AI Power          {/* Enhanced icon with multiple animations */}          {/* Enhanced icon with multiple animations */}

                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>

              </span>          <div className="flex items-center justify-center mb-12 stagger-item">          <div className="flex items-center justify-center mb-12 stagger-item">

            </div>

          </h1>            <div className="relative magnetic-hover">            <div className="relative magnetic-hover">

          

          {/* Enhanced subtitle */}              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 rounded-full blur-2xl opacity-40 pulse-glow"></div>              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 rounded-full blur-2xl opacity-40 pulse-glow"></div>

          <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed stagger-item">

            Get personalized device recommendations powered by advanced AI.               <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 p-6 rounded-full shadow-2xl">              <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 p-6 rounded-full shadow-2xl">

            <br className="hidden md:block" />

            <span className="text-purple-300">Compare, analyze, and choose</span> the perfect tech for your lifestyle.                <Sparkles className="h-12 w-12 text-white animate-pulse" />                <Sparkles className="h-12 w-12 text-white animate-pulse" />

          </p>

                        </div>              </div>

          {/* Enhanced CTA buttons */}

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 stagger-item">            </div>            </div>

            <Link

              href="/recommendations"          </div>          </div>

              className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold text-xl rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 magnetic-hover overflow-hidden"

            >                    

              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative flex items-center reveal-on-hover">          {/* Enhanced typography with staggered animations */}          {/* Enhanced typography with staggered animations */}

                <Zap className="mr-4 h-7 w-7 group-hover:animate-bounce" />

                Get AI Recommendations          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold mb-12 leading-tight stagger-item">          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold mb-12 leading-tight stagger-item">

                <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-500" />

              </div>            <div className="mb-4">            <div className="mb-4">

            </Link>

                          <span className="gradient-text block">Find Your Perfect</span>              <span className="gradient-text block">Find Your Perfect</span>

            <Link

              href="#categories"            </div>            </div>

              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md text-white font-bold text-xl rounded-2xl border-2 border-purple-400/30 hover:border-purple-400/60 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-800/60 transform hover:scale-105 transition-all duration-500 magnetic-hover shadow-xl hover:shadow-2xl"

            >            <div className="mb-4">            <div className="mb-4">

              <Target className="mr-3 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />

              Explore Categories              <span className="text-slate-200">Device with </span>              <span className="text-slate-200">Device with </span>

            </Link>

          </div>              <span className="text-neon relative inline-block">              <span className="text-neon relative inline-block">

          

          {/* Enhanced statistics with better animations */}                AI Power                AI Power

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-item">

            {[                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>

              { icon: "💰", label: "Bang for Buck", color: "from-emerald-400 to-emerald-600" },

              { icon: "🎯", label: "Perfect Match", color: "from-purple-400 to-purple-600" },              </span>              </span>

              { icon: "⚡", label: "Smart Choice", color: "from-cyan-400 to-cyan-600" },

              { icon: "🏆", label: "Best Value", color: "from-amber-400 to-amber-600" }            </div>            </div>

            ].map((stat, index) => (

              <div           </h1>          </h1>

                key={index} 

                className="glass-card p-8 hover:scale-110 transition-all duration-500 magnetic-hover reveal-on-hover group cursor-pointer"                    

              >

                <div className="text-6xl md:text-7xl mb-4 group-hover:animate-bounce">          {/* Enhanced subtitle */}          {/* Enhanced subtitle */}

                  {stat.icon}

                </div>          <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed stagger-item">          <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed stagger-item">

                <div className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>

                  {stat.label}            Get personalized device recommendations powered by advanced AI.             Get personalized device recommendations powered by advanced AI. 

                </div>

                <div className="w-full h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent group-hover:via-purple-400 transition-all duration-500 rounded-full"></div>            <br className="hidden md:block" />            <br className="hidden md:block" />

              </div>

            ))}            <span className="text-purple-300">Compare, analyze, and choose</span> the perfect tech for your lifestyle.            <span className="text-purple-300">Compare, analyze, and choose</span> the perfect tech for your lifestyle.

          </div>

        </div>          </p>          </p>

      </div>

                          

      {/* Scroll indicator */}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">          {/* Enhanced CTA buttons */}          {/* Enhanced CTA buttons */}

        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">

          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 stagger-item">          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 stagger-item">

        </div>

      </div>            <Link            <Link

    </section>

  )              href="/recommendations"              href="/recommendations"

}
              className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold text-xl rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 magnetic-hover overflow-hidden"              className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold text-xl rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 magnetic-hover overflow-hidden"

            >            >

              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative flex items-center reveal-on-hover">              <div className="relative flex items-center reveal-on-hover">

                <Zap className="mr-4 h-7 w-7 group-hover:animate-bounce" />                <Zap className="mr-4 h-7 w-7 group-hover:animate-bounce" />

                Get AI Recommendations                Get AI Recommendations

                <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-500" />                <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-500" />

              </div>              </div>

            </Link>            </Link>

                        

            <Link            <Link

              href="#categories"              href="#categories"

              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md text-white font-bold text-xl rounded-2xl border-2 border-purple-400/30 hover:border-purple-400/60 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-800/60 transform hover:scale-105 transition-all duration-500 magnetic-hover shadow-xl hover:shadow-2xl"              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md text-white font-bold text-xl rounded-2xl border-2 border-purple-400/30 hover:border-purple-400/60 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-800/60 transform hover:scale-105 transition-all duration-500 magnetic-hover shadow-xl hover:shadow-2xl"

            >            >

              <Target className="mr-3 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />              <Target className="mr-3 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />

              Explore Categories              Explore Categories

            </Link>            </Link>

          </div>          </div>

                    

          {/* Enhanced statistics with better animations */}          {/* Enhanced statistics with better animations */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-item">          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-item">

            {[            {[

              { icon: "💰", label: "Bang for Buck", color: "from-emerald-400 to-emerald-600", delay: "0.1s" },              { icon: "💰", label: "Bang for Buck", color: "from-emerald-400 to-emerald-600", delay: "0.1s" },

              { icon: "🎯", label: "Perfect Match", color: "from-purple-400 to-purple-600", delay: "0.2s" },              { icon: "🎯", label: "Perfect Match", color: "from-purple-400 to-purple-600", delay: "0.2s" },

              { icon: "⚡", label: "Smart Choice", color: "from-cyan-400 to-cyan-600", delay: "0.3s" },              { icon: "⚡", label: "Smart Choice", color: "from-cyan-400 to-cyan-600", delay: "0.3s" },

              { icon: "🏆", label: "Best Value", color: "from-amber-400 to-amber-600", delay: "0.4s" }              { icon: "🏆", label: "Best Value", color: "from-amber-400 to-amber-600", delay: "0.4s" }

            ].map((stat, index) => (            ].map((stat, index) => (

              <div               <div 

                key={index}                 key={index} 

                className="glass-card p-8 hover:scale-110 transition-all duration-500 magnetic-hover reveal-on-hover group cursor-pointer"                className="glass-card p-8 hover:scale-110 transition-all duration-500 magnetic-hover reveal-on-hover group cursor-pointer"

                style={{animationDelay: stat.delay}}                style={{animationDelay: stat.delay}}

              >              >

                <div className="text-6xl md:text-7xl mb-4 group-hover:animate-bounce">                <div className="text-6xl md:text-7xl mb-4 group-hover:animate-bounce">

                  {stat.icon}                  {stat.icon}

                </div>                </div>

                <div className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>                <div className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>

                  {stat.label}                  {stat.label}

                </div>                </div>

                <div className="w-full h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent group-hover:via-purple-400 transition-all duration-500 rounded-full"></div>                <div className="w-full h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent group-hover:via-purple-400 transition-all duration-500 rounded-full"></div>

              </div>              </div>

            ))}            ))}

          </div>          </div>

        </div>        </div>

      </div>      </div>

            

      {/* Scroll indicator */}      {/* Scroll indicator */}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">

        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">

          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>

        </div>        </div>

      </div>      </div>

    </section>    </section>

  )  )

}}>
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
              { number: "💰", label: "Bang for Buck", color: "from-emerald-400 to-emerald-600" },
              { number: "🎯", label: "Perfect Match", color: "from-purple-400 to-purple-600" },
              { number: "⚡", label: "Smart Choice", color: "from-cyan-400 to-cyan-600" },
              { number: "🏆", label: "Best Value", color: "from-amber-400 to-amber-600" }
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