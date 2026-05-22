'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryItems } from '@/lib/data'
import { SectionLabel, SectionTitle, Reveal } from '@/components/ui'
import { cn } from '@/lib/utils'

const allCategories = ['All', ...Array.from(new Set(galleryItems.map((g) => g.category)))]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#0D0D0D] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#2a1a08] to-[#8B5E3C]/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <SectionLabel text="Inspiration" />
          <SectionTitle className="text-white">
            Our Work, <em className="text-[#E8C97A] not-italic italic">Showcased</em>
          </SectionTitle>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 text-xs font-medium uppercase tracking-widest border rounded-[2px] transition-all',
                activeCategory === cat
                  ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                  : 'text-[#6B6460] border-[#F2EDE3] hover:border-[#0D0D0D]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.5) }}
                className="break-inside-avoid mb-3 rounded-[4px] overflow-hidden relative group cursor-pointer"
                style={{ height: [220, 160, 200, 240, 180, 210, 170, 230, 190, 220, 165, 210][i % 12] }}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <span className="text-white text-2xl block mb-1">⊕</span>
                    <span className="text-white/80 text-xs uppercase tracking-widest">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-[90vw] max-w-[820px] aspect-[4/3] rounded-[4px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].image}
                alt={filtered[lightbox].alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif text-lg">{filtered[lightbox].alt}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">{filtered[lightbox].category}</p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white"
            >
              <X size={22} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-sm">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
