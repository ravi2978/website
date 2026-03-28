import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-5 text-sm text-navy-300">
            <Link to="/" className="flex items-center gap-1 hover:text-gold-400 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-3.5 h-3.5 text-navy-500" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-gold-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-navy-200">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Gold accent line */}
        <div className="w-12 h-1 bg-gold-500 rounded-full mb-5" />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-navy-200 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
