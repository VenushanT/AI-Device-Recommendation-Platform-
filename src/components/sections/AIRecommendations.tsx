import Link from 'next/link'
import { Brain, Zap, Target, TrendingUp, Sparkles } from 'lucide-react'

export default function AIRecommendations() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-transparent to-purple-900/5"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg blur opacity-60"></div>
              <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-slate-600 dark:text-slate-400">Powered by AI</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Smart Recommendations
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Get personalized device recommendations powered by advanced AI that understands your unique needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="group flex items-start space-x-6 p-6 glass rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-cyan-600 p-4 rounded-2xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  Smart Analysis
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our advanced AI analyzes your requirements, budget, and usage patterns to find devices that perfectly match your needs with precision and insight.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-6 glass rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-cyan-600 to-teal-600 p-4 rounded-2xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  Precise Matching
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Get recommendations that consider technical specifications, performance requirements, and personal preferences for the perfect match.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-6 glass rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-pink-600 to-rose-600 p-4 rounded-2xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                  Real-time Updates
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Stay updated with the latest device releases, price changes, and market trends for informed decisions that save you time and money.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/recommendations"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <Sparkles className="mr-3 h-5 w-5" />
                  Try AI Recommendations
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 border border-white/30 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-60"></div>
                      <div className="relative w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      Tell us your needs
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 ml-14 leading-relaxed">
                    Share your budget, usage requirements, and preferences with our intelligent questionnaire
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 border border-white/30 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full blur opacity-60"></div>
                      <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      AI analyzes options
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 ml-14 leading-relaxed">
                    Our AI processes thousands of devices and reviews instantly using advanced algorithms
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 border border-white/30 hover:border-pink-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full blur opacity-60"></div>
                      <div className="relative w-10 h-10 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                      Get perfect matches
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 ml-14 leading-relaxed">
                    Receive personalized recommendations with detailed explanations and comparison insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}