import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { featuredProducts } from '../data/products'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Make Your Dog's
                <span className="block text-yellow-300">Tail Wag with Joy!</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                Discover premium dog toys designed for endless fun, durability, and happy pups everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Shop All Toys
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 text-gray-50" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path fill="currentColor" d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1440,50 L1440,100 L0,100 Z"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Durable, safe materials that stand up to even the most enthusiastic play</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dog-Approved Designs</h3>
                <p className="text-gray-600">Tested and loved by dogs of all sizes and breeds</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">Quick delivery to bring joy to your pup's doorstep</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Toys</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our most popular toys that dogs and their owners absolutely love
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/products">
                <Button size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Paws, Happy Owners</h2>
              <p className="text-xl text-gray-600">See what our customers are saying</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"My golden retriever absolutely loves the squeaky tennis balls! They're so durable and the squeaker keeps him entertained for hours."</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">Mike Chen</h4>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"The interactive treat ball has been a game-changer for my beagle. It keeps her mentally stimulated and slows down her eating."</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">Emily Rodriguez</h4>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"Amazing quality toys! My husky is a heavy chewer and these toys have lasted longer than any others we've tried."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Make Your Dog Happy?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of happy dogs and their owners. Shop our collection of premium toys today!
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Start Shopping
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Home
