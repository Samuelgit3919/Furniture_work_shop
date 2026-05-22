'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { categories } from '@/lib/data'
import { SectionLabel, SectionTitle, Reveal } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <Reveal>
            <SectionLabel text="Collections" />
            <SectionTitle>
              Browse by <em className="text-[#8B5E3C] not-italic italic">Category</em>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#6B6460] text-sm font-light max-w-[260px] text-right leading-relaxed hidden md:block">
              Over 500+ unique furniture pieces across every style and room.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.07} className={cn(cat.span && 'col-span-2 lg:col-span-2')}>
              <Link href={`/products?category=${cat.id}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={cn(
                    'relative overflow-hidden rounded-[4px] group cursor-pointer',
                    cat.span ? 'h-[320px] md:h-[380px]' : 'h-[240px] md:h-[270px]'
                  )}
                >
                  {/* Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes={cat.span ? '66vw' : '33vw'}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Icon top-left */}
                  <span className="absolute top-4 left-4 text-2xl opacity-60">{cat.icon}</span>

                  {/* Info bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                    <div>
                      <p className="font-serif text-white text-xl font-semibold leading-tight">
                        {cat.name}
                      </p>
                      <p className="text-white/50 text-xs tracking-widest uppercase mt-1">
                        {cat.count} pieces
                      </p>
                    </div>
                    {/* Arrow */}
                    <div className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-white text-sm transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C]">
                      →
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
