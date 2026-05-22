import Image from 'next/image'
import { SectionLabel, SectionTitle, Reveal } from '@/components/ui'
import CTASection from '@/components/sections/CTASection'

const timeline = [
  { year: '2005', title: 'The Beginning', desc: 'Founded in a small workshop in Bishoftu with 5 artisans and a vision to create world-class Ethiopian furniture.' },
  { year: '2009', title: 'First Showroom', desc: 'Opened our first dedicated showroom in Bishoftu, attracting hotels and high-end residential clients.' },
  { year: '2013', title: 'Expansion to Addis Ababa', desc: 'Launched our second branch in Addis Ababa, serving the capital with the same premium quality.' },
  { year: '2017', title: 'Manufacturing Scale-Up', desc: 'Invested in modern CNC machinery while preserving hand-finishing — blending technology with craftsmanship.' },
  { year: '2020', title: 'National Recognition', desc: 'Became a household name known for quality and excellence.' },
  { year: '2024', title: 'Digital Presence', desc: 'Launched our online platform, making it easier for Ethiopians everywhere to discover and order our furniture.' },
]

const values = [
  { icon: '🏛️', title: 'Heritage', desc: 'We honor Ethiopian woodworking traditions while embracing modern design.' },
  { icon: '⭐', title: 'Excellence', desc: 'Every piece that leaves our workshop meets our uncompromising quality standards.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest pricing, honest timelines, and honest relationships with every customer.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Responsible sourcing of local wood and eco-friendly finishing processes.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <div className="bg-[#0D0D0D] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#2a1a08] to-[#8B5E3C]/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <SectionLabel text="Our Story" />
          <SectionTitle className="text-white max-w-[600px]">
            Two Decades of{' '}
            <em className="text-[#E8C97A] not-italic italic">Ethiopian Craftsmanship</em>
          </SectionTitle>
          <p className="text-white/55 text-base font-light mt-3 max-w-[520px] leading-relaxed">
            From a small Bishoftu workshop to Ethiopia's most trusted furniture brand — this is our story.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative h-[400px] rounded-[4px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85"
                  alt="Melaku Furniture workshop"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionLabel text="Mission & Vision" />
                <SectionTitle>
                  Built on <em className="text-[#8B5E3C] not-italic italic">Purpose</em>
                </SectionTitle>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mb-6">
                  <h3 className="font-serif text-lg font-semibold text-[#2A2218] mb-2">Our Mission</h3>
                  <p className="text-[#6B6460] text-sm leading-[1.85] font-light">
                    To design and craft exceptional furniture that elevates Ethiopian living spaces, celebrating local craftsmanship while embracing modern aesthetics — making premium furniture accessible to every Ethiopian home and business.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#2A2218] mb-2">Our Vision</h3>
                  <p className="text-[#6B6460] text-sm leading-[1.85] font-light">
                    To be recognized as Africa's most admired furniture brand — one that proudly carries the quality and spirit of Ethiopian craftsmanship onto the world stage.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F2EDE3]" id="workshop">
        <div className="max-w-[1280px] mx-auto px-6">
          <Reveal className="text-center mb-14">
            <SectionLabel text="Our Journey" />
            <SectionTitle className="text-center">
              A Timeline of <em className="text-[#8B5E3C] not-italic italic">Growth</em>
            </SectionTitle>
          </Reveal>

          <div className="relative">
            {/* Center line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/25 -translate-x-1/2" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.07}>
                  <div className={`flex items-start gap-8 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <span className="font-serif text-[#C9A84C] text-2xl font-bold block mb-1">{item.year}</span>
                      <h3 className="font-serif text-[#2A2218] text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#6B6460] text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                    {/* Dot */}
                    <div className="hidden lg:flex w-16 justify-center flex-shrink-0 mt-2">
                      <div className="w-4 h-4 rounded-full bg-[#C9A84C] border-4 border-[#F2EDE3] shadow" />
                    </div>
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <Reveal className="text-center mb-12">
            <SectionLabel text="Our Values" />
            <SectionTitle className="text-center">
              What We <em className="text-[#8B5E3C] not-italic italic">Stand For</em>
            </SectionTitle>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="border border-[#F2EDE3] rounded-[4px] p-7 hover:border-[#C9A84C]/35 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-3xl mb-4 block">{v.icon}</span>
                  <h3 className="font-serif text-[#2A2218] text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-[#6B6460] text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop images */}
      <section className="py-20 bg-[#F2EDE3]">
        <div className="max-w-[1280px] mx-auto px-6">
          <Reveal className="text-center mb-12">
            <SectionLabel text="The Workshop" />
            <SectionTitle className="text-center">
              Where Every Piece <em className="text-[#8B5E3C] not-italic italic">Begins</em>
            </SectionTitle>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=700&q=80',
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80',
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80',
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative rounded-[4px] overflow-hidden" style={{ height: i === 0 ? '320px' : '220px' }}>
                  <Image src={src} alt="Workshop" fill sizes="33vw" className="object-cover hover:scale-[1.04] transition-transform duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
