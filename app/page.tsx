import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Pillars } from '@/components/pillars'
import { Method } from '@/components/method'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: 'Studio Hélio',
  description:
    'Studio de Pilates et de mobilité en petits groupes à Bordeaux. Premier cours d’essai gratuit.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 rue des Remparts',
    addressLocality: 'Bordeaux',
    postalCode: '33000',
    addressCountry: 'FR',
  },
  email: 'hello@studiohelio.fr',
  telephone: '+33556000000',
  openingHours: 'Mo-Sa 07:00-21:00',
  priceRange: '€€',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Pillars />
        <Method />
        <Pricing />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
