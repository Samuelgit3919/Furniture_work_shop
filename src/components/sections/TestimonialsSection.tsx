'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/data'
import { SectionLabel, SectionTitle, Reveal, Stars } from '@/components/ui'

export default function TestimonialsSection() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const pages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel text="Testimonials" />
          <SectionTitle className="text-center">
            What Our <em className="text-[#8B5E3C] not-italic italic">Customers</em> Say
          </SectionTitle>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {visible.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="border border-[#F2EDE3] rounded-[4px] p-7 group hover:border-[#C9A84C]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-serif text-5xl text-[#E8C97A]/50 leading-none mb-2">"</div>
                <p className="text-[#6B6460] text-[0.9rem] leading-[1.75] mb-6 font-light italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9A7530] to-[#8B5E3C] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[0.9rem] text-[#2A2218]">{t.name}</p>
                    <p className="text-[#6B6460] text-[0.72rem]">{t.role}</p>
                    <Stars rating={t.rating} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  i === page ? 'w-8 bg-[#C9A84C]' : 'w-[5px] bg-[#C9A84C]/25 hover:bg-[#C9A84C]/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
