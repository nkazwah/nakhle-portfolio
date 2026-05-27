'use client'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Coming Soon */}
        <div className="glass p-16 rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-center">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01v.01H12v-.01z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Portfolio Coming Soon</h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            I'm curating a collection of my most impactful projects and case studies. This section will showcase architectural decisions, technical challenges overcome, and measurable results delivered.
          </p>
          <p className="text-slate-400">
            In the meantime, feel free to reach out to discuss specific projects and technical challenges you're interested in.
          </p>
        </div>

        {/* Featured Work Areas */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Enterprise Systems',
              description: 'Large-scale distributed systems handling millions of transactions',
            },
            {
              title: 'System Design',
              description: 'Architecture for scalability, reliability, and performance',
            },
            {
              title: 'Technical Leadership',
              description: 'Building high-performing teams and technical strategies',
            },
            {
              title: 'Database Optimization',
              description: 'Performance tuning and data architecture with DB2',
            },
          ].map((area, idx) => (
            <div key={idx} className="glass p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{area.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
