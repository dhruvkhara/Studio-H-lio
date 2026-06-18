import { Users, GraduationCap, LineChart } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const PILLARS = [
  {
    icon: Users,
    title: 'Petits groupes (max 6)',
    description:
      'Chaque mouvement est corrigé en temps réel. Vous progressez en toute sécurité, sans jamais vous blesser.',
  },
  {
    icon: GraduationCap,
    title: 'Coachs qualifiés',
    description:
      '3 coachs certifiés, avec plus de 400 heures de formation chacun. Un accompagnement précis et bienveillant.',
  },
  {
    icon: LineChart,
    title: 'Progrès mesurés',
    description:
      'Un bilan initial puis un point tous les 2 mois pour suivre vos progrès, concrètement et durablement.',
  },
]

export function Pillars() {
  return (
    <section
      id="avantages"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="pillars-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="up">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Pourquoi Hélio
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2
              id="pillars-title"
              className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl"
            >
              Une approche premium, pensée pour durer
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} variant="up" delay={i * 120}>
              <article className="card-hover group h-full rounded-2xl border border-border bg-card p-8">
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                  <pillar.icon
                    className="h-7 w-7 transition-transform duration-500 ease-out group-hover:scale-90"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                {/* animated bottom hairline that grows on hover */}
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-10 bg-primary/60 transition-all duration-500 ease-out group-hover:w-full"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
