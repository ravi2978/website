import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Scale } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-navy-700 border border-gold-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Scale className="w-10 h-10 text-gold-400" />
        </div>
        <div className="text-8xl font-extrabold text-gold-400 mb-4">404</div>
        <h1 className="text-3xl font-extrabold text-white mb-4">Page Not Found</h1>
        <p className="text-navy-200 text-lg mb-10 leading-relaxed">
          We couldn't find the page you were looking for. It may have been moved, renamed, or may not exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy-700 font-bold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
