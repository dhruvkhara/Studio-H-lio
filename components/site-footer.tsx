import { MapPin, Mail, Phone } from 'lucide-react'

const NAV = [
  { href: '#avantages', label: 'Avantages' },
  { href: '#methode', label: 'La méthode' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#avis', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#top"
              className="group flex items-center gap-2"
              aria-label="Studio Hélio — accueil"
            >
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125"
              />
              <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
                Studio Hélio
              </span>
            </a>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              Pilates &amp; mobilité en petits groupes à Bordeaux. Pour un corps
              plus fort, plus souple et plus serein.
            </p>
          </div>

          <nav aria-label="Liens de pied de page">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Naviguer
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Nous trouver
            </h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                12 rue des Remparts, Bordeaux
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="mailto:hello@studiohelio.fr"
                  className="underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  hello@studiohelio.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="tel:+33556000000"
                  className="underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  05 56 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Studio Hélio · Ouvert depuis 2 ans à
            Bordeaux
          </p>
          <p>Lun–Sam · 7h–21h</p>
        </div>
      </div>
    </footer>
  )
}
