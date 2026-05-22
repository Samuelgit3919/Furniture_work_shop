import Image from 'next/image'
import Link from 'next/link'
import { branches } from '@/lib/data'
import { SectionLabel, SectionTitle, Reveal } from '@/components/ui'

export default function BranchesPreviewSection() {
  return (
    <section className="py-24 bg-[#F2EDE3]">
      <div className="max-w-[1280px] mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel text="Our Locations" />
          <SectionTitle className="text-center">
            Find a Branch <em className="text-[#8B5E3C] not-italic italic">Near You</em>
          </SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {branches.map((branch, i) => (
            <Reveal key={branch.id} delay={i * 0.08}>
              <div className="bg-white rounded-[4px] overflow-hidden flex group hover:shadow-xl transition-shadow duration-350">
                {/* Image */}
                <div className="relative w-[170px] flex-shrink-0 overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    sizes="170px"
                    className="object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-[0.6rem] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded-[2px]">
                    {i === 0 ? 'Main Branch' : branch.city}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex-1">
                  <h3 className="font-serif text-[#2A2218] text-[1.05rem] font-semibold mb-1">
                    {branch.name}
                  </h3>
                  <p className="text-[#6B6460] text-[0.78rem] mb-4 leading-relaxed">{branch.address}</p>
                  <div className="flex flex-col gap-1.5 mb-4">
                    <span className="flex items-center gap-2 text-[0.77rem] text-[#2A2218]">
                      <span className="text-[#C9A84C]">📞</span> {branch.phone}
                    </span>
                    <span className="flex items-center gap-2 text-[0.77rem] text-[#2A2218]">
                      <span className="text-[#C9A84C]">🕒</span> {branch.hours}
                    </span>
                    <span className="flex items-center gap-2 text-[0.77rem] text-[#2A2218]">
                      <span className="text-[#C9A84C]">🏭</span> {branch.type}
                    </span>
                  </div>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#0D0D0D] hover:bg-[#C9A84C] text-white text-[0.7rem] font-semibold uppercase tracking-[0.07em] px-3.5 py-2 rounded-[2px] transition-colors duration-200"
                  >
                    📍 Open in Maps
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-8">
          <Link
            href="/branches"
            className="inline-block border border-[#8B5E3C]/30 text-[#2A2218] text-[0.82rem] font-medium tracking-[0.06em] uppercase px-8 py-3.5 rounded-[2px] transition-all duration-250 hover:border-[#8B5E3C] hover:bg-[#8B5E3C]/5"
          >
            View All Branches & Hours
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
