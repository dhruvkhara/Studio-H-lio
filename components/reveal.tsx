'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'blur' | 'fade'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in ms before the reveal transition kicks in */
  delay?: number
  /** Render as a different element if needed */
  as?: 'div' | 'li' | 'section' | 'article'
  /** Entrance direction / style */
  variant?: RevealVariant
  /** Run once on mount instead of waiting for scroll (for above-the-fold hero) */
  immediate?: boolean
}

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  blur: 'reveal-blur',
  fade: 'reveal',
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  variant = 'up',
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    if (immediate) {
      // Defer to next frame so the transition actually plays on mount
      const t = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(t)
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [immediate, delay])

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'reveal',
        VARIANT_CLASS[variant],
        visible && 'is-visible',
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
