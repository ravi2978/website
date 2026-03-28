import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Calendar } from 'lucide-react'

export default function ContactCTA({
  title = "Ready to Take the Next Step?",
  subtitle = "Our experienced legal team is ready to help you navigate your situation with confidence and care. Contact us today for a confidential consultation.",
  dark = true
}) {
  return (
    <section className={`py-20 ${dark ? 'bg-navy-700' : 'bg-navy-50'} relative overflow-hidden`}>
      {dark && (
        <>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500 rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-gold-500 rounded-full" />
          </div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gold-500" />
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="w-12 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-navy-700'}`}>
          {title}
        </h2>
        <p className={`text-lg mb-10 max-w-2xl mx-auto leading-relaxed ${dark ? 'text-navy-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/consultations"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-base"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:4435452121"
            className={`inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg border-2 transition-all duration-200 text-base ${
              dark
                ? 'border-white text-white hover:bg-white hover:text-navy-700'
                : 'border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white'
            }`}
          >
            <Phone className="w-5 h-5" />
            (443) 545-2121
          </a>
        </div>
        <p className={`mt-6 text-sm ${dark ? 'text-navy-400' : 'text-gray-400'}`}>
          Confidential consultation &bull; Serving clients throughout Maryland
        </p>
      </div>
    </section>
  )
}
