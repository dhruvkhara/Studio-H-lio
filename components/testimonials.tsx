import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TESTIMONIALS = [
  {
    quote:
      'En 2 mois, mes douleurs au dos ont disparu. Je n’y aurais jamais cru.',
    name: 'Camille R.',
    role: 'Adhérente depuis 6 mois',
  },
  {
    quote:
      'Les petits groupes changent tout : on n’est pas un numéro, on est suivi.',
    name: 'Marc D.',
    role: 'Adhérent depuis 1 an',
  },
  {
    quote: 'Le seul sport que je n’ai jamais abandonné.',
    name: 'Inès B.',
    role: 'Adhérente depuis 8 mois',
  },
]

export function Testimonials() {
  return (
    <section
      id="avis"
      className="relative scroll-mt-24 overflow-hidden bg-foreground py-20 text-background md:py-28"
      aria-labelledby="testimonials-title"
    >
      {/* soft terracotta glow as the single warm accent on the dark band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="up">
            <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Elles &amp; ils en parlent
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2
              id="testimonials-title"
              className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.02em] text-background md:text-4xl"
            >
              Des résultats qui se ressentent vite
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} variant="up" delay={i * 120}>
              <figure className="group h-full rounded-2xl border border-background/15 bg-background/5 p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/40 hover:bg-background/[0.08]">
                <Quote
                  className="h-8 w-8 text-primary transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6"
                  aria-hidden="true"
                />
                <blockquote className="mt-5 text-pretty font-heading text-xl leading-relaxed text-background">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground transition-transform duration-500 ease-out group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-background">
                      {t.name}
                    </span>
                    <span className="block text-sm text-background/60">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
