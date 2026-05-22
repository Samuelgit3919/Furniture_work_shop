'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

// Section label with gold line
export function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div className={cn('flex items-center gap-3 mb-3', center && 'justify-center')}>
      <span className="w-7 h-px bg-[#C9A84C]" />
      <span className="text-[#C9A84C] text-[0.68rem] tracking-[0.22em] uppercase font-semibold">
        {text}
      </span>
    </div>
  )
}

// Section title
export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'font-serif text-[clamp(1.9rem,4vw,2.9rem)] font-semibold text-[#2A2218] leading-[1.18] mb-3',
        className
      )}
    >
      {children}
    </h2>
  )
}

// Animated reveal wrapper
export function Reveal({
  children,
  delay = 0,
  className,
  id,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  id?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Primary button
export function ButtonPrimary({
  children,
  href,
  onClick,
  className,
  type = 'button',
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}) {
  const base =
    'inline-block bg-[#C9A84C] hover:bg-[#9A7530] text-white text-[0.82rem] font-semibold tracking-[0.06em] uppercase px-6 py-3 rounded-[2px] transition-all duration-250 hover:-translate-y-px'
  if (href) {
    return (
      <a href={href} className={cn(base, className)}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cn(base, className)}>
      {children}
    </button>
  )
}

// Outline button
export function ButtonOutline({
  children,
  href,
  onClick,
  className,
  dark = false,
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  dark?: boolean
}) {
  const base = cn(
    'inline-block text-[0.82rem] font-medium tracking-[0.06em] uppercase px-6 py-3 border rounded-[2px] transition-all duration-250 hover:-translate-y-px',
    dark
      ? 'border-white/40 text-white hover:border-white hover:bg-white/10'
      : 'border-[#8B5E3C]/30 text-[#2A2218] hover:border-[#8B5E3C] hover:bg-[#8B5E3C]/5'
  )
  if (href) {
    return (
      <a href={href} className={cn(base, className)}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cn(base, className)}>
      {children}
    </button>
  )
}

// Stars component
export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={cn('text-sm', i <= rating ? 'text-[#C9A84C]' : 'text-gray-300')}>
          ★
        </span>
      ))}
    </div>
  )
}
