import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://studiohelio.fr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Studio Hélio — Pilates & mobilité à Bordeaux',
  description:
    'Renforcez votre corps sans le casser. Pilates en petits groupes (max 6), encadré par des coachs certifiés, à Bordeaux. Réservez votre cours d’essai gratuit.',
  keywords: [
    'Pilates Bordeaux',
    'mobilité',
    'petits groupes',
    'cours d’essai gratuit',
    'studio Pilates',
    'renforcement',
  ],
  authors: [{ name: 'Studio Hélio' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Studio Hélio',
    title: 'Studio Hélio — Pilates & mobilité à Bordeaux',
    description:
      'Pilates en petits groupes (max 6), encadré, pour gagner en force, souplesse et sérénité. Premier cours offert.',
    images: [
      {
        url: '/images/hero-pilates.png',
        width: 1200,
        height: 630,
        alt: 'Studio Hélio — séance de Pilates dans un studio lumineux à Bordeaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Hélio — Pilates & mobilité à Bordeaux',
    description:
      'Renforcez votre corps sans le casser. Pilates en petits groupes à Bordeaux. Premier cours offert.',
    images: ['/images/hero-pilates.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#FAF9F7',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${jakarta.variable} light bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
