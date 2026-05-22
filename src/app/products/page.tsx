'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Search, SlidersHorizontal } from 'lucide-react'
import { products, categories } from '@/lib/data'
import { SectionLabel, SectionTitle, Stars } from '@/components/ui'
import { formatPrice, cn } from '@/lib/utils'
import { Suspense } from 'react'

function ProductsContent() {
  const searchParams = useSearchParams()
  const initCategory = searchParams.get('category') || 'all'

  const [activeCategory, setActiveCategory] = useState(initCategory)
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('default')

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') result = result.filter((p) => p.category === activeCategory)
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      )
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    return result
  }, [activeCategory, search, sortBy])

  const toggleFav = (id: string) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24">
      {/* Page header */}
      <div className="bg-[#0D0D0D] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#2a1a08] to-[#8B5E3C]/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <SectionLabel text="Our Collection" />
          <SectionTitle className="text-white">
            All <em className="text-[#E8C97A] not-italic italic">Products</em>
          </SectionTitle>
          <p className="text-white/50 text-sm font-light mt-1">
            {filtered.length} products found
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6460]" />
            <input
              type="text"
              placeholder="Search furniture..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[#F2EDE3] rounded-[2px] bg-white text-sm text-[#2A2218] placeholder:text-[#6B6460] focus:outline-none focus:border-[#C9A84C] transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 flex-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-4 py-2 text-[0.75rem] font-medium tracking-wide uppercase border rounded-[2px] transition-all',
                activeCategory === 'all'
                  ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                  : 'text-[#6B6460] border-[#F2EDE3] hover:border-[#0D0D0D]'
              )}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 text-[0.75rem] font-medium tracking-wide uppercase border rounded-[2px] transition-all',
                  activeCategory === cat.id
                    ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                    : 'text-[#6B6460] border-[#F2EDE3] hover:border-[#0D0D0D]'
                )}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-[#6B6460]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#F2EDE3] rounded-[2px] px-3 py-2 text-[0.78rem] text-[#2A2218] bg-white focus:outline-none focus:border-[#C9A84C]"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-[#6B6460]"
            >
              <p className="font-serif text-2xl mb-2">No products found</p>
              <p className="text-sm">Try adjusting your search or filters.</p>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${search}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.05, 0.4) }}
                  className="group cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative h-[270px] rounded-[4px] overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-[0.6rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-[2px] z-10 capitalize">
                        {product.tag}
                      </span>
                    )}
                    <button
                      onClick={(e) => { e.preventDefault(); toggleFav(product.id) }}
                      className={cn(
                        'absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all',
                        favorites.includes(product.id)
                          ? 'bg-[#C9A84C] text-white opacity-100'
                          : 'bg-white text-[#2A2218] hover:bg-[#C9A84C] hover:text-white'
                      )}
                    >
                      <Heart size={14} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link
                        href={`/products/${product.id}`}
                        className="bg-white text-[#0D0D0D] text-[0.72rem] font-semibold uppercase tracking-wide px-4 py-2 rounded-[2px] translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <p className="font-serif text-[1rem] font-medium text-[#2A2218] mb-1 group-hover:text-[#8B5E3C] transition-colors">
                      {product.name}
                    </p>
                    <p className="text-[#6B6460] text-[0.78rem] mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-[#9A7530]">{formatPrice(product.price)}</span>
                        {product.salePrice && (
                          <span className="text-[#6B6460] text-xs line-through ml-2">
                            {formatPrice(product.salePrice)}
                          </span>
                        )}
                      </div>
                      <Stars rating={product.rating} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  )
}
