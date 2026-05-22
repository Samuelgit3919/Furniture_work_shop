import Link from 'next/link'

const footerLinks = {
  Collections: [
    { label: 'Living Room', href: '/products?category=living' },
    { label: 'Bedroom', href: '/products?category=bedroom' },
    { label: 'Dining Room', href: '/products?category=dining' },
    { label: 'Office Furniture', href: '/products?category=office' },
    { label: 'Hotel Collection', href: '/products?category=hotel' },
    { label: 'Outdoor', href: '/products?category=outdoor' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Workshop', href: '/about#workshop' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Branches', href: '/branches' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Contact: [
    { label: 'Bishoftu (Main)', href: '/branches#bishoftu' },
    { label: 'Addis Ababa', href: '/branches#addis' },
    { label: 'WhatsApp Us', href: 'https://wa.me/251911234567' },
    { label: 'info@melakufurniture.et', href: 'mailto:info@melakufurniture.et' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#C9A84C] to-[#9A7530] rounded-[4px] flex items-center justify-center">
                <span className="font-serif font-bold text-white text-lg">M</span>
              </div>
              <span className="font-serif font-semibold text-white text-[1.15rem] tracking-wide">
                Melaku Furniture
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-[270px] mb-6">
              Premium Ethiopian furniture crafted with passion, precision, and pride. Bringing modern design to every Ethiopian home since 2005.
            </p>
            <div className="flex gap-3">
              {['📘', '📸', '📺', '✈️'].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 border border-white/15 rounded-[4px] flex items-center justify-center text-sm hover:border-[#C9A84C] hover:text-[#E8C97A] transition-all duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-white text-[0.95rem] font-medium mb-5">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-[#E8C97A] text-[0.82rem] font-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-white/30 text-[0.78rem]">
            © 2025 <span className="text-[#E8C97A]">Melaku Furniture</span>. All rights reserved.
          </span>
          <span className="text-white/30 text-[0.78rem]">
            Made with ❤️ in <span className="text-[#E8C97A]">Ethiopia</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
