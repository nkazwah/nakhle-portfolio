'use client'

import { useState } from 'react'

export default function Career() {
  const [expandedId, setExpandedId] = useState<string | null>('role1')

  const roles = [
    {
      id: 'role1',
      title: 'Principal Software Architect / Engineer',
      company: 'Current Role',
      period: 'Present',
      description: 'Leading architectural initiatives and strategic technical decisions. Designing distributed systems and mentoring engineering teams to deliver enterprise-scale solutions.',
      highlights: [
        'Architect large-scale distributed systems',
        'Lead technical strategy and innovation',
        'Mentor senior engineers and architects',
        'Drive system design excellence',
      ],
    },
    {
      id: 'role2',
      title: 'Senior Software Engineer',
      company: 'IBM',
      period: 'Several Years',
      description: 'Developed and maintained critical enterprise systems. Worked with Smalltalk, Java, and DB2 to build reliable, performant solutions serving thousands of users.',
      highlights: [
        'Built enterprise-grade applications',
        'Optimized database performance',
        'Led technical design reviews',
        'Collaborated with global teams',
      ],
    },
  ]

  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {roles.map((role, index) => (
            <div
              key={role.id}
              onClick={() => setExpandedId(expandedId === role.id ? null : role.id)}
              className="cursor-pointer group"
            >
              <div className="glass p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all hover:bg-slate-900/50">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {role.title}
                      </h3>
                    </div>
                    <p className="text-blue-400 font-semibold mb-1">{role.company}</p>
                    <p className="text-slate-400 text-sm">{role.period}</p>
                  </div>
                  <div className="ml-4">
                    <svg
                      className={`w-6 h-6 text-slate-400 transition-transform ${
                        expandedId === role.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedId === role.id && (
                  <div className="mt-6 pt-6 border-t border-slate-700/50 space-y-4 animate-slide-up">
                    <p className="text-slate-300 leading-relaxed">{role.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {role.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Growth Areas */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🏗️',
              title: 'System Architecture',
              desc: 'Designing scalable, resilient systems',
            },
            {
              icon: '👥',
              title: 'Technical Leadership',
              desc: 'Building and mentoring great teams',
            },
            {
              icon: '⚡',
              title: 'Innovation',
              desc: 'Exploring emerging technologies',
            },
          ].map((area, idx) => (
            <div key={idx} className="glass p-6 rounded-lg border border-slate-700/50 text-center">
              <div className="text-4xl mb-3">{area.icon}</div>
              <h4 className="font-semibold text-white mb-2">{area.title}</h4>
              <p className="text-slate-400 text-sm">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
