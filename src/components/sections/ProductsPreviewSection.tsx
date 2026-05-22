'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { products } from '@/lib/data'
import { SectionLabel, SectionTitle, Reveal, Stars } from '@/components/ui'
import { formatPrice, cn } from '@/lib/utils'

const tabs = ['All', 'New', 'Custom', 'Sale']

export default function ProductsPreviewSection() {
  const [activeTab, setActiveTab] = useState('All')
  const [favorites, setFavorites] = useState<string[]>([])

  const filtered = products
    .filter((p) => {
      if (activeTab === 'All') return true
      return p.tag?.toLowerCase() === activeTab.toLowerCase()
    })
    .slice(0, 4)

  const toggleFav = (id: string) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <SectionLabel text="Featured" />
            <SectionTitle>
              Our <em className="text-[#8B5E3C] not-italic italic">Bestsellers</em>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-4 py-2 text-[0.75rem] font-medium tracking-[0.06em] uppercase border rounded-[2px] transition-all duration-200',
                    activeTab === tab
                      ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                      : 'bg-transparent text-[#6B6460] border-[#F2EDE3] hover:border-[#0D0D0D] hover:text-[#0D0D0D]'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative h-[280px] rounded-[4px] overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  {/* Tag */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-[2px] z-10 capitalize">
                      {product.tag}
                    </span>
                  )}

                  {/* Favorite */}
                  <button
                    onClick={(e) => { e.preventDefault(); toggleFav(product.id) }}
                    className={cn(
                      'absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-250 z-10 opacity-0 group-hover:opacity-100',
                      favorites.includes(product.id)
                        ? 'bg-[#C9A84C] text-white opacity-100'
                        : 'bg-white text-[#2A2218] hover:bg-[#C9A84C] hover:text-white'
                    )}
                  >
                    <Heart size={14} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-white text-[#0D0D0D] text-[0.72rem] font-semibold tracking-[0.06em] uppercase px-4 py-2 rounded-[2px] translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <Link href={`/products/${product.id}`}>
                  <p className="font-serif text-[1.02rem] font-medium text-[#2A2218] mb-1 group-hover:text-[#8B5E3C] transition-colors">
                    {product.name}
                  </p>
                  <p className="text-[#6B6460] text-[0.8rem] mb-2 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#9A7530] text-[1rem]">
                        {formatPrice(product.price)}
                      </span>
                      {product.salePrice && (
                        <span className="text-[#6B6460] text-[0.75rem] line-through ml-2">
                          {formatPrice(product.salePrice)}
                        </span>
                      )}
                    </div>
                    <Stars rating={product.rating} />
                  </div>
                  <p className="text-[#6B6460] text-[0.7rem] mt-0.5">({product.reviewCount} reviews)</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <Reveal className="text-center mt-10">
          <Link
            href="/products"
            className="inline-block border border-[#8B5E3C]/30 text-[#2A2218] text-[0.82rem] font-medium tracking-[0.06em] uppercase px-8 py-3.5 rounded-[2px] transition-all duration-250 hover:border-[#8B5E3C] hover:bg-[#8B5E3C]/5"
          >
            View All 500+ Products
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
