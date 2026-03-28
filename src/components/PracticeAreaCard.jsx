import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PracticeAreaCard({ icon: Icon, title, description, href, featured = false }) {
  return (
    <Link
      to={href}
      className={`group block rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
        featured
          ? 'bg-navy-700 border-navy-600 text-white'
          : 'bg-white border-gray-100 hover:border-gold-300'
      }`}
    >
      <div className="p-8">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 ${
          featured
            ? 'bg-gold-500/20 text-gold-400 group-hover:bg-gold-500 group-hover:text-white'
            : 'bg-navy-50 text-navy-700 group-hover:bg-navy-700 group-hover:text-white'
        }`}>
          <Icon className="w-7 h-7" />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${featured ? 'text-white' : 'text-navy-700'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-5 ${featured ? 'text-navy-200' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className={`flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 ${
          featured ? 'text-gold-400' : 'text-gold-500'
        }`}>
          Learn More
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}
