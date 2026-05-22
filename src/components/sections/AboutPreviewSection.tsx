'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal, SectionLabel, SectionTitle } from '@/components/ui'

const stats = [
  { num: '12,000+', label: 'Happy Families' },
  { num: '4', label: 'City Branches' },
  { num: '200+', label: 'Artisans' },
]

export default function AboutPreviewSection() {
  return (
    <section className="py-24 bg-[#F2EDE3]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <Reveal className="relative h-[420px] lg:h-[520px]">
            {/* Main image */}
            <div className="absolute right-0 top-0 w-[75%] h-[370px] rounded-[4px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85"
                alt="Habesha Living showroom"
                fill
                className="object-cover"
                sizes="50vw"
              />
              {/* Wood grain overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/20 to-transparent mix-blend-multiply" />
            </div>

            {/* Accent image */}
            <div className="absolute left-0 bottom-0 w-[50%] h-[260px] rounded-[4px] overflow-hidden shadow-xl border-[6px] border-[#F2EDE3]">
              <Image
                src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=600&q=85"
                alt="Workshop craftsmanship"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>

            {/* Badge */}
            <div className="absolute right-4 bottom-16 lg:bottom-20 bg-[#C9A84C] text-white px-5 py-4 rounded-[4px] shadow-xl text-center z-10">
              <span className="font-serif text-3xl font-bold block leading-none">20+</span>
              <span className="text-[0.65rem] tracking-[0.12em] uppercase opacity-85 mt-1 block">
                Years of Excellence
              </span>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <SectionLabel text="Our Story" />
              <SectionTitle>
                Ethiopian{' '}
                <em className="text-[#8B5E3C] not-italic italic">Craftsmanship</em>
                <br />
                Meets Modern Design
              </SectionTitle>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[#6B6460] text-[0.95rem] leading-[1.85] font-light mb-4">
                Founded in 2005 in the heart of Addis Ababa, Habesha Living began as a small workshop with a single vision: to bring world-class furniture design to Ethiopian homes without sacrificing local craftsmanship and identity.
              </p>
              <p className="text-[#6B6460] text-[0.95rem] leading-[1.85] font-light mb-8">
                Today, we operate manufacturing facilities across four cities, employing over 200 skilled artisans who blend traditional Ethiopian woodworking techniques with contemporary design principles.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-3 gap-5 mb-9">
                {stats.map((s) => (
                  <div key={s.label} className="border-t border-[#8B5E3C]/20 pt-4">
                    <span className="font-serif text-[2rem] font-bold text-[#8B5E3C] block leading-tight">
                      {s.num}
                    </span>
                    <span className="text-[0.72rem] text-[#6B6460] tracking-wider uppercase mt-1 block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <Link
                href="/about"
                className="inline-block border border-[#8B5E3C]/35 text-[#2A2218] text-[0.82rem] font-medium tracking-[0.06em] uppercase px-6 py-3 rounded-[2px] transition-all duration-250 hover:border-[#8B5E3C] hover:bg-[#8B5E3C]/5"
              >
                Our Full Story →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
