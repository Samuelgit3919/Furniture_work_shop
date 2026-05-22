'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { SectionLabel, SectionTitle, Reveal } from '@/components/ui'
import { cn } from '@/lib/utils'

const channels = [
  { icon: '📱', label: 'WhatsApp', value: '+251 91 123 4567', href: 'https://wa.me/251911234567', color: 'bg-green-50 text-green-600' },
  { icon: '✈️', label: 'Telegram', value: '@MelakuFurniture', href: 'https://t.me/MelakuFurniture', color: 'bg-blue-50 text-blue-600' },
  { icon: '📞', label: 'Phone', value: '+251 11 234 5678', href: 'tel:+251112345678', color: 'bg-[#F2EDE3] text-[#9A7530]' },
  { icon: '📧', label: 'Email', value: 'info@melakufurniture.et', href: 'mailto:info@melakufurniture.et', color: 'bg-[#F2EDE3] text-[#9A7530]' },
]

const branches = ['Bishoftu (Main)', 'Addis Ababa']

type FormData = {
  name: string
  phone: string
  email: string
  branch: string
  interest: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', branch: '', interest: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  const inputBase = "w-full px-4 py-3 border border-[#F2EDE3] rounded-[2px] bg-[#FAF8F5] text-sm text-[#2A2218] placeholder:text-[#6B6460] focus:outline-none focus:border-[#C9A84C] transition-colors"

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#0D0D0D] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#2a1a08] to-[#8B5E3C]/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <SectionLabel text="Get In Touch" />
          <SectionTitle className="text-white">
            Let's <em className="text-[#E8C97A] not-italic italic">Talk Furniture</em>
          </SectionTitle>
          <p className="text-white/50 text-sm mt-2 font-light max-w-md">
            Our design consultants respond within 24 hours. Visit a showroom or reach out directly.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - channels & info */}
            <div>
              <Reveal>
                <SectionLabel text="Contact Channels" />
                <SectionTitle>
                  Reach Us <em className="text-[#8B5E3C] not-italic italic">Directly</em>
                </SectionTitle>
                <p className="text-[#6B6460] text-sm leading-[1.85] font-light mt-3 mb-8 max-w-md">
                  Pick your preferred channel. Our team in both branches is ready to assist you with product selection, custom orders, and delivery.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {channels.map((ch, i) => (
                  <Reveal key={ch.label} delay={i * 0.07}>
                    <a
                      href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 border border-[#F2EDE3] rounded-[4px] hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-250 group"
                    >
                      <div className={`w-11 h-11 rounded-[4px] flex items-center justify-center text-xl flex-shrink-0 ${ch.color}`}>
                        {ch.icon}
                      </div>
                      <div>
                        <p className="text-[0.65rem] text-[#6B6460] uppercase tracking-widest mb-0.5">{ch.label}</p>
                        <p className="text-sm font-medium text-[#2A2218] group-hover:text-[#C9A84C] transition-colors">{ch.value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* Working hours */}
              <Reveal>
                <div className="bg-[#F2EDE3] rounded-[4px] p-6">
                  <h3 className="font-serif text-[#2A2218] text-lg font-semibold mb-4">Working Hours</h3>
                  <div className="flex flex-col gap-2.5 text-sm">
                    {[
                      { day: 'Monday – Friday', hours: '8:00 AM – 8:00 PM' },
                      { day: 'Saturday', hours: '8:00 AM – 8:00 PM' },
                      { day: 'Sunday', hours: '10:00 AM – 6:00 PM' },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between">
                        <span className="text-[#6B6460] font-light">{row.day}</span>
                        <span className="text-[#2A2218] font-medium">{row.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right - form */}
            <Reveal delay={0.1}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-20 border border-[#F2EDE3] rounded-[4px] bg-white"
                >
                  <CheckCircle size={52} className="text-[#C9A84C] mb-5" />
                  <h3 className="font-serif text-2xl font-bold text-[#2A2218] mb-2">Message Received!</h3>
                  <p className="text-[#6B6460] text-sm font-light max-w-xs">
                    Thank you, {form.name || 'valued customer'}! Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',branch:'',interest:'',message:'' }) }}
                    className="mt-8 text-sm text-[#C9A84C] underline hover:text-[#9A7530]"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[#F2EDE3] rounded-[4px] p-8 flex flex-col gap-4">
                  <h3 className="font-serif text-[#2A2218] text-xl font-semibold mb-1">Send an Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] block mb-1.5">Full Name *</label>
                      <input required className={inputBase} placeholder="Abebe Kebede" value={form.name} onChange={set('name')} />
                    </div>
                    <div>
                      <label className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] block mb-1.5">Phone *</label>
                      <input required className={inputBase} placeholder="+251 91 000 0000" value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>

                  <div>
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] block mb-1.5">Email Address</label>
                    <input type="email" className={inputBase} placeholder="abebe@example.com" value={form.email} onChange={set('email')} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] block mb-1.5">Nearest Branch</label>
                      <select className={inputBase} value={form.branch} onChange={set('branch')}>
                        <option value="">Select branch…</option>
                        {branches.map((b) => <option key={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] block mb-1.5">I'm Interested In</label>
                      <select className={inputBase} value={form.interest} onChange={set('interest')}>
                        <option value="">Select…</option>
                        <option>Living Room Furniture</option>
                        <option>Bedroom Set</option>
                        <option>Dining Room</option>
                        <option>Office Furniture</option>
                        <option>Hotel / Commercial</option>
                        <option>Custom Order</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#6B6460] block mb-1.5">Message</label>
                    <textarea
                      className={cn(inputBase, 'min-h-[120px] resize-y')}
                      placeholder="Tell us about your space, furniture needs, dimensions, or any questions..."
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={cn(
                      'flex items-center justify-center gap-2 bg-[#0D0D0D] hover:bg-[#C9A84C] text-white text-sm font-semibold uppercase tracking-widest py-4 rounded-[2px] transition-all duration-250 mt-1',
                      loading && 'opacity-70 cursor-not-allowed'
                    )}
                  >
                    {loading ? (
                      <span className="animate-pulse">Sending…</span>
                    ) : (
                      <><Send size={16} /> Send Inquiry</>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
