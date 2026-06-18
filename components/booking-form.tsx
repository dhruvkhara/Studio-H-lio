'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormValues {
  name: string
  email: string
  phone: string
  slot: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const SLOTS = [
  'Lundi — matin (7h–12h)',
  'Lundi — soir (17h–21h)',
  'Mercredi — matin (7h–12h)',
  'Mercredi — midi (12h–14h)',
  'Vendredi — soir (17h–21h)',
  'Samedi — matin (7h–12h)',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) {
    errors.name = 'Merci d’indiquer votre nom.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères.'
  }
  if (!values.email.trim()) {
    errors.email = 'Merci d’indiquer votre email.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Cet email ne semble pas valide.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Merci d’indiquer votre téléphone.'
  } else if (!PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Numéro invalide (ex. 06 12 34 56 78).'
  }
  if (!values.slot) {
    errors.slot = 'Choisissez un créneau souhaité.'
  }
  return errors
}

const INITIAL: FormValues = { name: '', email: '', phone: '', slot: '' }

export function BookingForm() {
  const [values, setValues] = useState<FormValues>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>(
    {},
  )
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  )

  const update = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setErrors(validate({ ...values, [field]: value }))
    }
  }

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, phone: true, slot: true })
    if (Object.keys(nextErrors).length > 0) {
      // focus first invalid field
      const first = Object.keys(nextErrors)[0]
      document.getElementById(`booking-${first}`)?.focus()
      return
    }
    setStatus('submitting')
    // Fake submission — no backend
    await new Promise((resolve) => setTimeout(resolve, 1100))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center rounded-2xl border border-primary/30 bg-card p-10 text-center shadow-glow"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2
            className="h-9 w-9 animate-[hero-rise_0.6s_var(--ease-out-expo)_forwards]"
            aria-hidden="true"
          />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
          Merci, {values.name.split(' ')[0]} !
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
          Votre demande pour le créneau «&nbsp;{values.slot}&nbsp;» est bien
          enregistrée. Nous revenons vers vous très vite pour confirmer votre
          cours d’essai gratuit.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(INITIAL)
            setErrors({})
            setTouched({})
            setStatus('idle')
          }}
          className="mt-8 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Faire une autre demande
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
      aria-label="Réserver un cours d’essai gratuit"
    >
      <div className="grid gap-5">
        <Field
          id="booking-name"
          label="Nom complet"
          error={touched.name ? errors.name : undefined}
        >
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={
              touched.name && errors.name ? 'booking-name-error' : undefined
            }
            placeholder="Camille Rivière"
            className={inputClass(touched.name && !!errors.name)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="booking-email"
            label="Email"
            error={touched.email ? errors.email : undefined}
          >
            <input
              id="booking-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={
                touched.email && errors.email
                  ? 'booking-email-error'
                  : undefined
              }
              placeholder="camille@email.fr"
              className={inputClass(touched.email && !!errors.email)}
            />
          </Field>

          <Field
            id="booking-phone"
            label="Téléphone"
            error={touched.phone ? errors.phone : undefined}
          >
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              aria-invalid={touched.phone && !!errors.phone}
              aria-describedby={
                touched.phone && errors.phone
                  ? 'booking-phone-error'
                  : undefined
              }
              placeholder="06 12 34 56 78"
              className={inputClass(touched.phone && !!errors.phone)}
            />
          </Field>
        </div>

        <Field
          id="booking-slot"
          label="Créneau souhaité"
          error={touched.slot ? errors.slot : undefined}
        >
          <select
            id="booking-slot"
            name="slot"
            value={values.slot}
            onChange={(e) => update('slot', e.target.value)}
            onBlur={() => handleBlur('slot')}
            aria-invalid={touched.slot && !!errors.slot}
            aria-describedby={
              touched.slot && errors.slot ? 'booking-slot-error' : undefined
            }
            className={cn(inputClass(touched.slot && !!errors.slot), 'appearance-none bg-[length:1.25rem] pr-10')}
          >
            <option value="" disabled>
              Choisissez un créneau…
            </option>
            {SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </Field>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            'Réserver mon cours d’essai gratuit'
          )}
        </button>
        <p className="text-center text-sm text-muted-foreground">
          Sans engagement · réponse sous 24 h
        </p>
      </div>
    </form>
  )
}

function inputClass(hasError?: boolean) {
  return cn(
    'w-full rounded-xl border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-all duration-200 focus:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15',
    hasError
      ? 'border-destructive focus-visible:ring-destructive/15'
      : 'border-border hover:border-primary/40',
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-sm text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  )
}
