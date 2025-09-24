import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Device Recommendation Platform',
  description: 'Find the perfect device with AI-powered recommendations',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col relative">
          <Header />
          <main className="flex-1 pt-20 page-enter">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}