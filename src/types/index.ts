export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  tags: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  features: string[]
  sizes?: string[]
  colors?: string[]
}

export interface CartItem extends Product {
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface Review {
  id: string
  productId: string
  customerName: string
  rating: number
  title: string
  content: string
  date: string
  helpful: number
}