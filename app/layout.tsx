import type { Metadata } from 'next'
import PasswordGate from '@/components/PasswordGate'
import './globals.css'
export const metadata: Metadata = {
  title: 'A Special Gift For You 🎁',
  description: 'A heartfelt birthday message just for you.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://happybirthdaymeso.vercel.app'),
  openGraph: {
    type: 'website',
    images: [{ url: '/images/link.jpg', width: 1080, height: 1031, alt: 'Birthday gift' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/link.jpg'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><PasswordGate>{children}</PasswordGate></body>
    </html>
  )
}
