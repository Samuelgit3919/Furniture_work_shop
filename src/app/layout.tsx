import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Melaku Furniture – Premium Ethiopian Furniture',
  description:
    'Melaku Furniture crafts premium, modern furniture for Ethiopian homes, hotels, and offices. Showrooms in Bishoftu and Addis Ababa.',
  keywords: ['Ethiopian furniture', 'Addis Ababa furniture', 'Bishoftu furniture', 'premium furniture Ethiopia', 'custom furniture', 'bedroom furniture', 'living room furniture'],
  openGraph: {
    title: 'Melaku Furniture – Premium Ethiopian Furniture',
    description: 'Handcrafted modern furniture for Ethiopian homes and businesses.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
