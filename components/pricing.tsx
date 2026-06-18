import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const PLANS = [
  {
    name: 'Découverte',
    price: 'Offert',
    period: 'premier cours',
    description: 'Le meilleur moyen de tester sans aucun risque.',
    features: [
      'Bilan posture & mobilité (15 min)',
      'Un cours complet en petit groupe',
      'Sans engagement, sans carte bancaire',
    ],
    cta: 'Réserver mon essai',
    featured: true,
  },
  {
    name: 'Carnet 10 séances',
    price: '190 €',
    period: 'valable 3 mois',
    description: 'La flexibilité pour pratiquer à votre rythme.',
    features: [
      '10 cours en petit groupe (max 6)',
      'Valable 3 mois',
      'Réservation libre des créneaux',
    ],
    cta: 'Choisir le carnet',
    featured: false,
  },
  {
    name: 'Illimité mensuel',
    price: '95 €',
    period: 'par mois',
    description: 'Pour ancrer une vraie habitude, sans engagement.',
    features: [
      'Cours illimités en petit groupe',
      'Sans engagement, résiliable à tout moment',
      'Suivi de progression tous les 2 mois',
    ],
    cta: 'Choisir l’illimité',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="pricing-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="up">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Tarifs
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2
              id="pricing-title"
              className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl"
            >
              Des formules claires, sans mauvaise surprise
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Commencez par un cours offert. Vous choisirez ensuite la formule
              qui vous ressemble.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} variant="up" delay={i * 120}>
              <article
                className={cn(
                  'card-hover group relative flex h-full flex-col rounded-2xl border p-8',
                  plan.featured
                    ? 'border-primary/40 bg-card shadow-glow ring-1 ring-primary/20 lg:-translate-y-2'
                    : 'border-border bg-card',
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    Le plus choisi
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-semibold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    / {plan.period}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <span
                        className={cn(
                          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
                          plan.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary',
                        )}
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#reservation"
                  className={cn(
                    'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                    plan.featured
                      ? 'bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-glow hover:brightness-105'
                      : 'border border-border bg-background text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/60',
                  )}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
