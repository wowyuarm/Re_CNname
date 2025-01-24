/**
 * @fileoverview 应用程序的根布局组件
 */
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chinese Name Generator',
  description: 'Generate your personalized Chinese name based on your preferences and personality.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a365d" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 