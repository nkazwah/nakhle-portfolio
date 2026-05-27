'use client'

export default function About() {
  const skills = [
    {
      category: 'Languages',
      items: ['Smalltalk', 'Java', 'Python', 'SQL'],
    },
    {
      category: 'Platforms & Tools',
      items: ['DB2', 'Enterprise Systems', 'Distributed Systems', 'Microservices'],
    },
    {
      category: 'Leadership',
      items: ['Team Building', 'Technical Strategy', 'Architecture Design', 'Mentorship'],
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a <span className="font-semibold text-blue-400">Principal Software Architect</span> with a proven track record of designing and implementing enterprise-scale solutions. My career has been defined by a passion for elegant system design, technical excellence, and empowering teams to build better software.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I focus on solving complex architectural challenges, bridging the gap between business needs and technical innovation. With experience across diverse technology stacks, I bring a holistic perspective to every project.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My background at IBM gave me deep insights into enterprise systems, reliability at scale, and the importance of maintainable architecture. I'm passionate about mentoring engineers and fostering cultures of technical excellence.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="glass p-4 rounded-lg border border-slate-700/50">
                <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="glass p-4 rounded-lg border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                <div className="text-sm text-slate-400">Systems Built</div>
              </div>
              <div className="glass p-4 rounded-lg border border-slate-700/50">
                <div className="text-3xl font-bold text-pink-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Dedicated</div>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="glass p-8 rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <h3 className="text-2xl font-bold text-white mb-4">Design Philosophy</h3>
          <p className="text-slate-300 leading-relaxed">
            I believe in writing code that's not just functional, but beautiful. Every system I design prioritizes clarity, maintainability, and performance. I champion for technical excellence while staying pragmatic about business constraints. Great architecture is invisible—it enables, rather than impedes.
          </p>
        </div>
      </div>
    </section>
  )
}
