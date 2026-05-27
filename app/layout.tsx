import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nakhle Kazwah | Principal Software Architect',
  description: 'Enterprise software architecture, system design, and leadership. Specialized in Smalltalk, Java, DB2, Python.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚡</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {children}
      </body>
    </html>
  )
}
