'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), [])

  useEffect(() => {
    if (isHovered) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, isHovered])

  const slide = heroSlides[current]

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-[620px]"
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 border border-[#C9A84C]/35 bg-[#C9A84C]/10 px-4 py-2 mb-6">
                <span className="w-5 h-px bg-[#C9A84C]" />
                <span className="text-[#E8C97A] text-[0.68rem] tracking-[0.18em] uppercase font-medium">
                  Crafted in Ethiopia · Est. 2005
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-white font-bold leading-[1.05] mb-4"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)' }}
              >
                {slide.heading}{' '}
                <br />
                <em className="text-[#E8C97A] not-italic">for {slide.headingItalic}</em>{' '}
                <br />
                Homes
              </h1>

              {/* Subheading */}
              <p className="text-white/65 text-[1.05rem] font-light leading-[1.75] mb-9 max-w-[480px]">
                {slide.subheading}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.ctaLink}
                  className="bg-[#C9A84C] hover:bg-[#9A7530] text-white text-[0.82rem] font-semibold tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] transition-all duration-250 hover:-translate-y-px"
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/branches"
                  className="border border-white/40 hover:border-white text-white text-[0.82rem] font-medium tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] transition-all duration-250 hover:bg-white/10"
                >
                  Visit Branches
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 right-8 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-[5px] rounded-full transition-all duration-400',
              i === current ? 'w-7 bg-[#C9A84C]' : 'w-[5px] bg-white/35 hover:bg-white/55'
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[0.6rem] tracking-[0.18em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
      </div>

      {/* Slide counter */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-1">
        <span className="text-white font-serif text-xl font-semibold">
          0{current + 1}
        </span>
        <div className="w-px h-8 bg-white/20" />
        <span className="text-white/35 text-sm">0{heroSlides.length}</span>
      </div>
    </section>
  )
}
