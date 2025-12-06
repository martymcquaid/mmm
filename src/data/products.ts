import { Product } from '../types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Squeaky Tennis Ball Set',
    description: 'Durable tennis balls with built-in squeakers for endless fetch fun. Perfect for dogs of all sizes who love to chase and chew.',
    price: 12.99,
    originalPrice: 19.99,
    image: 'https://images.unsplash.com/photo-1583337134247-85d2792c5b88?w=400&h=400&fit=crop',
    category: 'Balls',
    tags: ['squeaky', 'fetch', 'outdoor', 'durable'],
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    features: ['Built-in squeaker', 'Non-toxic rubber', 'Weather resistant', 'Pack of 3'],
    sizes: ['Small', 'Medium', 'Large']
  },
  {
    id: '2',
    name: 'Plush Squirrel Toy',
    description: 'Ultra-soft plush squirrel with crinkle sounds and a hidden squeaker. Your dog will love carrying this cuddly companion everywhere.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    category: 'Plush',
    tags: ['plush', 'squeaky', 'crinkle', 'cuddly'],
    rating: 4.8,
    reviewCount: 189,
    inStock: true,
    features: ['Double-stitched seams', 'Machine washable', 'Crinkle paper inside', 'Embroidered details']
  },
  {
    id: '3',
    name: 'Rope Tug Toy',
    description: 'Heavy-duty cotton rope toy perfect for tug-of-war games and dental health. Helps clean teeth while providing interactive play.',
    price: 9.99,
    originalPrice: 14.99,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
    category: 'Rope',
    tags: ['tug', 'dental', 'interactive', 'durable'],
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    features: ['100% cotton', 'Machine washable', 'Helps clean teeth', 'Multiple knots']
  },
  {
    id: '4',
    name: 'Interactive Treat Ball',
    description: 'Mental stimulation toy that dispenses treats as your dog plays. Adjustable difficulty levels keep your pup engaged and challenged.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1607626713962-9b4e8f8c9a2c?w=400&h=400&fit=crop',
    category: 'Interactive',
    tags: ['treat dispenser', 'mental stimulation', 'puzzle', 'training'],
    rating: 4.6,
    reviewCount: 298,
    inStock: true,
    features: ['Adjustable difficulty', 'Dishwasher safe', 'BPA-free plastic', 'Works with most treats']
  },
  {
    id: '5',
    name: 'Flying Disc',
    description: 'Aerodynamic flying disc designed for long-distance fetch. Soft edges are gentle on your dog\'s mouth while maintaining flight stability.',
    price: 11.99,
    originalPrice: 16.99,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
    category: 'Outdoor',
    tags: ['fetch', 'flying disc', 'outdoor', 'soft'],
    rating: 4.4,
    reviewCount: 167,
    inStock: true,
    features: ['Soft rubber edges', 'Floats on water', 'Bright colors', 'Durable construction']
  },
  {
    id: '6',
    name: 'Chew Bone Toy',
    description: 'Flavored nylon chew bone that lasts for weeks. Helps satisfy natural chewing instincts while promoting dental health.',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1583337134247-85d2792c5b88?w=400&h=400&fit=crop',
    category: 'Chew',
    tags: ['chew', 'dental', 'long-lasting', 'flavored'],
    rating: 4.2,
    reviewCount: 203,
    inStock: true,
    features: ['Bacon flavor', 'Aggressive chewer approved', 'Helps reduce plaque', 'Made in USA']
  },
  {
    id: '7',
    name: 'Plush Duck Toy',
    description: 'Adorable plush duck with multiple squeakers and crinkle material. Perfect for dogs who love to carry and squeak their toys.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    category: 'Plush',
    tags: ['plush', 'squeaky', 'crinkle', 'multiple squeakers'],
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    features: ['3 squeakers', 'Crinkle wings', 'Reinforced stitching', 'Machine washable']
  },
  {
    id: '8',
    name: 'Puzzle Feeder Toy',
    description: 'Slow feeder puzzle toy that makes mealtime fun and challenging. Helps prevent fast eating and provides mental stimulation.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1607626713962-9b4e8f8c9a2c?w=400&h=400&fit=crop',
    category: 'Interactive',
    tags: ['puzzle', 'slow feeder', 'mental stimulation', 'mealtime'],
    rating: 4.5,
    reviewCount: 178,
    inStock: true,
    features: ['Non-slip base', 'Dishwasher safe', 'Adjustable difficulty', 'Reduces anxiety']
  },
  {
    id: '9',
    name: 'Tug Rope with Ball',
    description: 'Combination toy featuring a durable rope with a rubber ball center. Perfect for both solo play and interactive tug games.',
    price: 15.99,
    originalPrice: 21.99,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
    category: 'Rope',
    tags: ['tug', 'ball', 'rope', 'versatile'],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    features: ['Natural cotton rope', 'Durable rubber ball', 'Two textures', 'Great for tug']
  },
  {
    id: '10',
    name: 'Squeaky Hedgehog',
    description: 'Cute hedgehog plush toy with multiple squeakers and spiky texture that dogs love. Perfect for cuddling and gentle chewing.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    category: 'Plush',
    tags: ['squeaky', 'plush', 'hedgehog', 'texture'],
    rating: 4.4,
    reviewCount: 198,
    inStock: true,
    features: ['Multiple squeakers', 'Spiky texture', 'No stuffing', 'Machine washable']
  },
  {
    id: '11',
    name: 'Fetch Launcher',
    description: 'Ergonomic ball launcher that throws balls 2-3 times farther. Saves your arm while giving your dog the exercise they need.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
    category: 'Outdoor',
    tags: ['launcher', 'fetch', 'exercise', 'ergonomic'],
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    features: ['Hands-free pickup', 'Adjustable distance', 'Comfortable grip', 'Compatible with tennis balls']
  },
  {
    id: '12',
    name: 'Antler Chew Toy',
    description: 'Natural deer antler chew that\'s long-lasting and rich in minerals. Perfect for aggressive chewers and provides hours of entertainment.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1583337134247-85d2792c5b88?w=400&h=400&fit=crop',
    category: 'Chew',
    tags: ['natural', 'long-lasting', 'minerals', 'aggressive chewer'],
    rating: 4.8,
    reviewCount: 267,
    inStock: true,
    features: ['100% natural', 'No additives', 'Rich in minerals', 'Odor-free']
  }
]

export const categories = [
  'All',
  'Balls',
  'Plush',
  'Rope',
  'Interactive',
  'Outdoor',
  'Chew'
]

export const featuredProducts = products.slice(0, 6)

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products
  return products.filter(product => product.category === category)
}

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = getProductById(productId)
  if (!product) return []
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit)
}