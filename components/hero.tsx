import Image from 'next/image'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36"
      aria-labelledby="hero-title"
    >
      {/* soft warm backdrop accents — terracotta + sand glows on crisp white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-sand/50 blur-3xl"
      />
      {/* faint top hairline to anchor the floating header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 md:grid-cols-2 md:gap-10 md:px-6 md:pb-24">
        <div className="relative z-10">
          {/* Page-load choreography: staggered blur-up entrance */}
          <Reveal variant="blur" immediate delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-soft transition-colors duration-300 hover:border-primary/30 hover:text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Pilates &amp; mobilité · Bordeaux
            </span>
          </Reveal>

          <Reveal variant="blur" immediate delay={120}>
            <h1
              id="hero-title"
              className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl"
            >
              Renforcez votre corps{' '}
              <span className="text-primary">sans le casser.</span>
            </h1>
          </Reveal>

          <Reveal variant="blur" immediate delay={220}>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Du Pilates en petits groupes de 6 maximum, entièrement encadré,
              pour gagner en force, en souplesse et en sérénité — à votre
              rythme, sans vous blesser.
            </p>
          </Reveal>

          <Reveal variant="up" immediate delay={340}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#reservation"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Réserver mon cours d&apos;essai
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#methode"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Découvrir la méthode
              </a>
            </div>
          </Reveal>

          <Reveal variant="up" immediate delay={440}>
            <div className="mt-8 flex items-center gap-3">
              <div
                className="flex items-center gap-0.5 text-primary"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current transition-transform duration-300 hover:scale-125"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Premier cours offert · sans engagement
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" immediate delay={200} className="relative">
          <div className="group relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="zoom-frame relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-lift">
              <Image
                src="/images/hero-pilates.png"
                alt="Une pratiquante réalise un mouvement de Pilates contrôlé dans le studio lumineux de Studio Hélio"
                width={720}
                height={900}
                priority
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              {/* gradient wash at the bottom for text legibility on the floating card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent"
              />
            </div>
            {/* floating stat card */}
            <div className="animate-float-card absolute -bottom-5 left-5 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-lift backdrop-blur">
              <p className="font-heading text-2xl font-semibold text-foreground">
                6 max
              </p>
              <p className="text-sm text-muted-foreground">par cours</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
