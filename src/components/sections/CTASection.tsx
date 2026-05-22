import Link from 'next/link'
import { Reveal } from '@/components/ui'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0D0D0D]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#2a1a08] to-[#8B5E3C]/60" />
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
        <Reveal>
          <p className="text-[#C9A84C] text-[0.68rem] tracking-[0.22em] uppercase font-semibold mb-4">
            Ready to Transform Your Space?
          </p>
          <h2 className="font-serif text-white font-bold leading-[1.12] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Transform Your Home With
            <br />
            <em className="text-[#E8C97A] not-italic italic">Modern Ethiopian Furniture</em>
          </h2>
          <p className="text-white/55 text-[1rem] font-light mb-10 max-w-[480px] mx-auto leading-relaxed">
            Visit a showroom near you or reach out — our design consultants are ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#C9A84C] hover:bg-[#9A7530] text-white text-[0.82rem] font-semibold tracking-[0.07em] uppercase px-8 py-4 rounded-[2px] transition-all duration-250 hover:-translate-y-px"
            >
              Contact Us
            </Link>
            <Link
              href="/branches"
              className="border border-white/35 hover:border-white text-white text-[0.82rem] font-medium tracking-[0.07em] uppercase px-8 py-4 rounded-[2px] transition-all duration-250 hover:bg-white/10"
            >
              Visit Showroom
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
