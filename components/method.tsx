import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    number: '01',
    title: 'Réservez votre cours d’essai gratuit',
    description:
      'En quelques secondes, choisissez un créneau qui vous convient. Aucun engagement, aucune carte bancaire.',
  },
  {
    number: '02',
    title: 'On réalise votre bilan posture & mobilité',
    description:
      'Un point de 15 minutes avec un coach pour comprendre votre corps, vos objectifs et vos éventuelles fragilités.',
  },
  {
    number: '03',
    title: 'Vous pratiquez et on suit vos progrès',
    description:
      'Vous rejoignez un créneau adapté à votre emploi du temps, et nous mesurons votre évolution dans le temps.',
  },
]

export function Method() {
  return (
    <section
      id="methode"
      className="scroll-mt-24 bg-secondary/50 py-20 md:py-28"
      aria-labelledby="method-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <Reveal variant="left" className="order-2 md:order-1">
          <div className="group relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-primary/10 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="zoom-frame relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-lift">
              <Image
                src="/images/small-group.png"
                alt="Un coach corrige la posture d’une participante pendant un cours de Pilates en petit groupe"
                width={760}
                height={620}
                className="h-[360px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal variant="right">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Comment ça marche
            </span>
          </Reveal>
          <Reveal variant="right" delay={80}>
            <h2
              id="method-title"
              className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl"
            >
              Trois étapes simples pour commencer
            </h2>
          </Reveal>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.number} variant="right" delay={i * 120}>
                <div className="group flex gap-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card font-heading text-lg font-semibold text-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="up" delay={120}>
            <a
              href="#reservation"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Commencer maintenant
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
