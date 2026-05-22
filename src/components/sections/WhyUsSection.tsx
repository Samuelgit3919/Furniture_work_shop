import { Reveal } from '@/components/ui'

const reasons = [
  { icon: '🏛️', title: 'Ethiopian Craftsmanship', text: 'Every piece is crafted by skilled Ethiopian artisans, blending centuries of woodworking tradition with modern precision techniques.' },
  { icon: '✂️', title: 'Custom Furniture', text: 'We design and build furniture tailored exactly to your specifications — dimensions, materials, colors, and finishes.' },
  { icon: '📍', title: '2 City Branches', text: 'Showrooms in Bishoftu and Addis Ababa — always close to where you are in Ethiopia.' },
  { icon: '🌲', title: 'Durable Materials', text: 'We source premium local woods — mahogany, teak, warka — combined with high-grade imported hardware and fabrics.' },
  { icon: '✨', title: 'Modern Designs', text: 'Our in-house design team stays at the forefront of global furniture trends while ensuring Ethiopian cultural resonance.' },
  { icon: '🚚', title: 'Fast Delivery', text: 'Door-to-door delivery and professional installation across all major Ethiopian cities within 7–14 business days.' },
]

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="flex-1 max-w-[80px] h-px bg-[#C9A84C]/30" />
            <span className="text-[#C9A84C] text-[0.68rem] tracking-[0.22em] uppercase font-semibold">Why Melaku Furniture</span>
            <span className="flex-1 max-w-[80px] h-px bg-[#C9A84C]/30" />
          </div>
          <h2 className="font-serif text-white text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-tight">
            The <em className="text-[#E8C97A] not-italic italic">Melaku</em> Difference
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="relative border border-white/[0.06] rounded-[4px] p-7 group hover:border-[#C9A84C]/30 transition-all duration-350 overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                <span className="text-3xl mb-5 block relative z-10">{r.icon}</span>
                <h3 className="font-serif text-white text-[1.1rem] font-medium mb-3 relative z-10">{r.title}</h3>
                <p className="text-white/45 text-[0.85rem] leading-[1.75] font-light relative z-10">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
