// Types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  tag?: 'bestseller' | 'new' | 'custom' | 'sale'
  salePrice?: number
  rating: number
  reviewCount: number
  materials?: string[]
  dimensions?: string
  colors?: string[]
}

export interface Branch {
  id: string
  city: string
  name: string
  address: string
  phone: string
  hours: string
  type: string
  mapUrl: string
  image: string
}

export interface Category {
  id: string
  name: string
  count: number
  image: string
  icon: string
  span?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  rating: number
  initials: string
}

export interface GalleryItem {
  id: string
  image: string
  alt: string
  category: string
}
