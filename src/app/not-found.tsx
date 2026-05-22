import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center text-center px-6">
      <div>
        <p className="font-serif text-[8rem] font-bold text-[#C9A84C]/20 leading-none">404</p>
        <h1 className="font-serif text-white text-3xl font-semibold mb-3 -mt-4">Page Not Found</h1>
        <p className="text-white/45 text-sm font-light mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. Let's get you back to discovering beautiful furniture.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#C9A84C] hover:bg-[#9A7530] text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-[2px] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
