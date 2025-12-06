import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { getProductById, getRelatedProducts } from '../data/products'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const product = getProductById(id || '')
  const relatedProducts = getRelatedProducts(id || '')

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-indigo-600">Products</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedSize === size
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="secondary" size="lg">
                ♥ Wishlist
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button className="pb-4 border-b-2 border-indigo-600 text-indigo-600 font-medium">
                Description
              </button>
              <button className="pb-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                Reviews ({product.reviewCount})
              </button>
              <button className="pb-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                Shipping & Returns
              </button>
            </nav>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {product.description} This premium dog toy is designed with your pet's happiness and safety in mind. 
              Made from high-quality, non-toxic materials that are built to last through hours of playtime.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Perfect for dogs of all ages and sizes, this toy helps promote healthy exercise, mental stimulation, 
              and the natural instinct to play. Whether your dog loves to fetch, chew, or cuddle, this toy delivers 
              endless entertainment and companionship.
            </p>
            <h4 className="text-lg font-semibold mb-3">Care Instructions</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Hand wash with mild soap and water</li>
              <li>Air dry completely before use</li>
              <li>Inspect regularly for damage</li>
              <li>Remove if toy becomes damaged</li>
              <li>Supervise playtime for safety</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default ProductDetail