'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Branches', href: '/branches' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#C9A84C] to-[#9A7530] rounded-[4px] flex items-center justify-center flex-shrink-0">
              <span className="font-serif font-bold text-white text-lg leading-none">M</span>
            </div>
            <div>
              <span className="font-serif font-semibold text-white text-[1.15rem] block leading-tight tracking-wide group-hover:text-[#E8C97A] transition-colors duration-300">
                Melaku Furniture
              </span>
              <span className="text-[#C9A84C] text-[0.6rem] tracking-[0.15em] uppercase font-sans font-light block">
                Premium Ethiopian Furniture
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-[0.8rem] font-medium tracking-[0.05em] uppercase transition-colors duration-200',
                    pathname === link.href
                      ? 'text-[#E8C97A]'
                      : 'text-white/75 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#C9A84C] hover:bg-[#9A7530] text-white text-[0.78rem] font-semibold tracking-[0.06em] uppercase px-5 py-2.5 rounded-[2px] transition-all duration-250 hover:-translate-y-px"
            >
              Get In Touch
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col pt-24 px-8"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'block text-2xl font-serif py-3 border-b border-white/10 transition-colors',
                      pathname === link.href ? 'text-[#E8C97A]' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="block w-full text-center bg-[#C9A84C] text-white text-sm font-semibold uppercase tracking-widest py-4 rounded-[2px]"
              >
                Get In Touch
              </Link>
              <div className="mt-6 flex flex-col gap-2 text-white/40 text-sm">
                <span>📞 +251 91 123 4567</span>
                <span>📧 info@melakufurniture.et</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
