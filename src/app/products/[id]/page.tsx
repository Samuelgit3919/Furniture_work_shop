'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, Heart, MessageCircle, Share2 } from 'lucide-react'
import { products } from '@/lib/data'
import { Stars, Reveal } from '@/components/ui'
import { formatPrice, cn } from '@/lib/utils'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  if (!product) notFound()

  const [activeColor, setActiveColor] = useState(0)
  const [isFav, setIsFav] = useState(false)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  const whatsappMsg = encodeURIComponent(
    `Hello Melaku Furniture! I'm interested in: *${product.name}* (${formatPrice(product.price)}). Please send more details.`
  )

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24">
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B6460] mb-8">
          <Link href="/" className="hover:text-[#C9A84C]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#C9A84C]">Products</Link>
          <span>/</span>
          <span className="text-[#2A2218]">{product.name}</span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority
              />
              {product.tag && (
                <span className="absolute top-4 left-4 bg-[#C9A84C] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-[2px]">
                  {product.tag}
                </span>
              )}
              <button
                onClick={() => setIsFav(!isFav)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#C9A84C] hover:text-white transition-all"
              >
                <Heart size={16} fill={isFav ? 'currentColor' : 'none'} className={isFav ? 'text-[#C9A84C]' : ''} />
              </button>
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1}>
            <div className="pt-2">
              <p className="text-[#6B6460] text-xs tracking-widest uppercase mb-2 capitalize">{product.category}</p>
              <h1 className="font-serif text-[2rem] font-bold text-[#2A2218] leading-tight mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-5">
                <Stars rating={product.rating} />
                <span className="text-[#6B6460] text-sm">({product.reviewCount} reviews)</span>
              </div>

              <p className="text-[#6B6460] leading-[1.8] text-sm mb-6 font-light">{product.description}</p>

              {/* Price */}
              <div className="flex items-end gap-3 mb-7">
                <span className="font-serif text-2xl font-bold text-[#9A7530]">
                  {formatPrice(product.price)}
                </span>
                {product.salePrice && (
                  <span className="text-[#6B6460] text-base line-through mb-0.5">
                    {formatPrice(product.salePrice)}
                  </span>
                )}
              </div>

              {/* Colors */}
              {product.colors && (
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#2A2218] mb-3">
                    Color: <span className="text-[#C9A84C]">{product.colors[activeColor]}</span>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color, i) => (
                      <button
                        key={color}
                        onClick={() => setActiveColor(i)}
                        className={cn(
                          'px-3.5 py-1.5 text-xs border rounded-[2px] transition-all',
                          i === activeColor
                            ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#9A7530] font-semibold'
                            : 'border-[#F2EDE3] text-[#6B6460] hover:border-[#C9A84C]'
                        )}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs */}
              <div className="bg-[#F2EDE3] rounded-[4px] p-4 mb-7 grid grid-cols-2 gap-3">
                {product.dimensions && (
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] mb-1">Dimensions</p>
                    <p className="text-sm text-[#2A2218] font-medium">{product.dimensions}</p>
                  </div>
                )}
                {product.materials && (
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] mb-1">Materials</p>
                    <p className="text-sm text-[#2A2218] font-medium">{product.materials.slice(0, 2).join(', ')}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/251911234567?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb955] text-white font-semibold text-sm uppercase tracking-wide py-4 rounded-[2px] transition-colors"
                >
                  <MessageCircle size={18} /> Inquire on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border border-[#8B5E3C]/30 text-[#2A2218] font-medium text-sm uppercase tracking-wide py-4 rounded-[2px] transition-all hover:border-[#8B5E3C] hover:bg-[#8B5E3C]/5"
                >
                  Request Custom Order
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2A2218] mb-8">
              You Might Also <em className="text-[#8B5E3C] not-italic italic">Like</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`} className="group">
                  <div className="relative h-[220px] rounded-[4px] overflow-hidden mb-3">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="font-serif font-medium text-[#2A2218] group-hover:text-[#8B5E3C] transition-colors">
                    {p.name}
                  </p>
                  <p className="text-[#9A7530] text-sm font-semibold mt-1">{formatPrice(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
