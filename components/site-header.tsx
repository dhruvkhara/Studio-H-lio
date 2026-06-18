'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#avantages', label: 'Avantages' },
  { href: '#methode', label: 'La méthode' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#avis', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="Studio Hélio — accueil"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full bg-primary animate-dot-pulse transition-transform duration-300 group-hover:scale-125"
          />
          <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Studio Hélio
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservation"
          className="group relative hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:inline-flex md:items-center md:gap-1.5"
        >
          <span className="absolute -right-1 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[0.6rem] font-bold uppercase tracking-wide text-background shadow-soft">
            offert
          </span>
          Essai gratuit
          <ArrowRight className="hidden h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 lg:inline" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-border bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden',
          open
            ? 'max-h-[26rem] border-b opacity-100'
            : 'max-h-0 opacity-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Navigation mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground/20 px-1.5 text-[0.65rem] font-bold uppercase tracking-wide">
              offert
            </span>
            Essai gratuit
          </a>
        </nav>
      </div>
    </header>
  )
}
