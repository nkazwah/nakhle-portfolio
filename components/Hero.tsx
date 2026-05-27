'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-8">
          <div className="glass px-4 py-2 rounded-full border border-blue-500/30">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-sm font-semibold">
              ⚡ Senior Architect
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Enterprise Architecture
          </span>
          <br />
          <span className="text-slate-300">at Scale</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Principal Software Architect with deep expertise in building distributed systems, enterprise solutions, and leading high-performing technical teams.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            Explore My Work
            <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          </button>
          <button
            onClick={() => scrollToSection('career')}
            className="px-8 py-4 glass border border-blue-500/50 rounded-lg font-semibold text-blue-300 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
          >
            View Career Path
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Smalltalk', 'Java', 'DB2', 'Python', 'System Design'].map((tech) => (
            <div key={tech} className="glass px-4 py-2 rounded-full border border-slate-700/50 text-sm text-slate-300">
              {tech}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
