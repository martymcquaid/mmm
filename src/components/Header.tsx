import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐕</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PawPlay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 transition-colors">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Cart (0)
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Products</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors py-2">Contact</Link>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Cart (0)
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header