import { MapPin, Clock, Mail, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BookingForm } from '@/components/booking-form'

const INFOS = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: '12 rue des Remparts, Bordeaux',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun–Sam · 7h–21h',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@studiohelio.fr',
    href: 'mailto:hello@studiohelio.fr',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '05 56 00 00 00',
    href: 'tel:+33556000000',
  },
]

export function ContactCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-secondary/50 py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div
        id="reservation"
        className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6"
      >
        <div>
          <Reveal variant="left">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Votre premier cours
            </span>
          </Reveal>
          <Reveal variant="left" delay={80}>
            <h2
              id="contact-title"
              className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl"
            >
              Réservez votre cours d’essai gratuit
            </h2>
          </Reveal>
          <Reveal variant="left" delay={140}>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Laissez-nous vos coordonnées et le créneau qui vous arrange. On
              vous recontacte pour confirmer — sans engagement, premier cours
              offert.
            </p>
          </Reveal>

          <Reveal variant="left" delay={200}>
            <ul className="mt-10 space-y-5">
              {INFOS.map((info, i) => (
                <li
                  key={info.label}
                  className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-soft ring-1 ring-border transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                    <info.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">
                        {info.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  )
}
