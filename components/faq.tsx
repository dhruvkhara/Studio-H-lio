'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    question: 'Faut-il être souple pour commencer ?',
    answer:
      'Non, bien au contraire. Le Pilates est justement là pour développer votre souplesse et votre mobilité, progressivement. On part de là où vous en êtes aujourd’hui.',
  },
  {
    question: 'Combien de fois par semaine pratiquer ?',
    answer:
      'De 1 à 3 fois par semaine selon votre objectif. Une fois par semaine suffit pour ressentir les premiers bénéfices ; deux à trois pour progresser plus vite.',
  },
  {
    question: 'Est-ce adapté après une blessure ?',
    answer:
      'Oui, avec l’accord de votre médecin. Nos coachs adaptent chaque mouvement à votre situation et le bilan initial nous permet de travailler en toute sécurité.',
  },
  {
    question: 'Comment annuler un cours ?',
    answer:
      'Jusqu’à 12 heures avant le début du cours, gratuitement et en quelques clics. Au-delà, la séance est décomptée.',
  },
  {
    question: 'Où se trouve le studio ?',
    answer:
      'Au 12 rue des Remparts, en plein cœur de Bordeaux. Le studio est ouvert du lundi au samedi, de 7h à 21h.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <Reveal variant="up">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Questions fréquentes
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2
              id="faq-title"
              className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl"
            >
              Tout ce que vous voulez savoir
            </h2>
          </Reveal>
        </div>

        <ul className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <Reveal as="li" key={faq.question} variant="up" delay={i * 80}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border bg-card transition-all duration-300',
                    isOpen
                      ? 'border-primary/30 shadow-soft'
                      : 'border-border hover:border-primary/20',
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                    >
                      <span className="font-heading text-lg font-medium text-foreground">
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                          isOpen
                            ? 'rotate-45 bg-primary text-primary-foreground'
                            : 'bg-secondary text-primary',
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
