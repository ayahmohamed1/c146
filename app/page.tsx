import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy Birthday Meso! 🎂',
  description: 'A special birthday message for Meso',
  openGraph: {
    title: 'Happy Birthday Meso! 🎂',
    description: 'A special birthday message for Meso',
    images: [{ url: '/images/link.jpg', width: 1080, height: 1031, alt: 'Birthday gift' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday Meso! 🎂',
    description: 'A special birthday message for Meso',
    images: ['/images/link.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.aya
  return <GiftClient data={data} />
}
