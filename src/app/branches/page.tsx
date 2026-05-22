import Image from 'next/image'
import { branches } from '@/lib/data'
import { SectionLabel, SectionTitle, Reveal } from '@/components/ui'
import CTASection from '@/components/sections/CTASection'

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#0D0D0D] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#2a1a08] to-[#8B5E3C]/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <SectionLabel text="Our Locations" />
          <SectionTitle className="text-white">
            Find a Branch <em className="text-[#E8C97A] not-italic italic">Near You</em>
          </SectionTitle>
          <p className="text-white/50 text-sm mt-2 font-light">
            {branches.length} showrooms across Ethiopia
          </p>
        </div>
      </div>

      {/* Branch cards */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-10">
          {branches.map((branch, i) => (
            <Reveal key={branch.id} delay={i * 0.08} id={branch.city.toLowerCase().replace(' ', '')}>
              <div className={`bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-350 grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Image */}
                <div className={`relative h-[300px] lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="bg-[#C9A84C] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-[2px]">
                      {i === 0 ? 'Main Branch' : branch.city}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className={`p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-serif text-[#2A2218] text-2xl font-bold mb-2">{branch.name}</h2>
                  <p className="text-[#6B6460] text-sm mb-6 leading-relaxed">{branch.address}</p>

                  <div className="flex flex-col gap-3 mb-7">
                    {[
                      { icon: '📞', label: 'Phone', value: branch.phone },
                      { icon: '🕒', label: 'Hours', value: branch.hours },
                      { icon: '🏭', label: 'Type', value: branch.type },
                    ].map((detail) => (
                      <div key={detail.label} className="flex items-start gap-3">
                        <span className="text-[#C9A84C] text-lg mt-0.5">{detail.icon}</span>
                        <div>
                          <p className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] mb-0.5">{detail.label}</p>
                          <p className="text-[#2A2218] text-sm font-medium">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#C9A84C] text-white text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-[2px] transition-colors duration-200"
                    >
                      📍 Open in Google Maps
                    </a>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 border border-[#8B5E3C]/25 text-[#2A2218] text-xs font-medium uppercase tracking-widest px-5 py-3 rounded-[2px] transition-all hover:border-[#8B5E3C]"
                    >
                      📞 Call Branch
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="py-12 bg-[#F2EDE3]">
        <div className="max-w-[1280px] mx-auto px-6">
          <Reveal className="text-center mb-8">
            <SectionLabel text="Ethiopia Coverage" />
            <SectionTitle className="text-center">
              We're <em className="text-[#8B5E3C] not-italic italic">All Over</em> Ethiopia
            </SectionTitle>
          </Reveal>
          <Reveal>
            <div className="bg-white rounded-[4px] overflow-hidden shadow-sm h-[380px] flex items-center justify-center border border-[#F2EDE3]">
              <div className="text-center">
                <span className="text-6xl block mb-4">🗺️</span>
                <p className="font-serif text-[#2A2218] text-xl mb-2">Interactive Map</p>
                <p className="text-[#6B6460] text-sm mb-4">
                  Embed your Google Maps API key in <code className="bg-[#F2EDE3] px-1.5 py-0.5 rounded text-xs">src/app/branches/page.tsx</code>
                </p>
                <code className="text-xs text-[#6B6460] bg-[#F2EDE3] px-3 py-2 rounded block max-w-md mx-auto">
                  {'<iframe src="https://maps.google.com/maps?q=Addis+Ababa&output=embed" />'}
                </code>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
