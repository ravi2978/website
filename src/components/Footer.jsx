import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Scale } from 'lucide-react'

const practiceLinks = [
  { label: 'Immigration Law Overview', href: '/immigration-law' },
  { label: 'Detained Individuals', href: '/immigration-law/detained-individuals' },
  { label: 'Individuals & Families', href: '/immigration-law/individuals-families' },
  { label: 'Family Law Overview', href: '/family-law' },
  { label: 'Litigation', href: '/family-law/litigation' },
  { label: 'Mediation', href: '/family-law/mediation' },
  { label: 'Collaboration', href: '/family-law/collaboration' },
]

const firmLinks = [
  { label: 'About Our Firm', href: '/our-firm' },
  { label: 'Our Philosophy', href: '/our-firm/philosophy' },
  { label: 'Meet Claire Wen Lee', href: '/meet-claire' },
  { label: 'Testimonials', href: '/our-firm/testimonials' },
  { label: 'Community', href: '/our-firm/community' },
  { label: 'Referring Attorneys', href: '/our-firm/referring-attorneys' },
  { label: 'News & Updates', href: '/news' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center border border-gold-500/30">
                <span className="text-gold-500 font-extrabold text-sm">JW</span>
              </div>
              <div>
                <span className="text-gold-400 font-extrabold text-xl">JW</span>
                <span className="text-white font-extrabold text-xl">Legal</span>
              </div>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed mb-4 italic font-medium border-l-2 border-gold-500 pl-3">
              "Where Family Law and Immigration Law Come Together"
            </p>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              JWLegal, LLC provides compassionate, skilled legal representation in immigration and family law matters throughout Maryland.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-navy-700 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-navy-700 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-navy-700 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-navy-700">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Firm */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-navy-700">
              Our Firm
            </h3>
            <ul className="space-y-2">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-navy-700">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <div className="text-navy-300 text-sm">
                  Columbia, Maryland 21044<br />
                  <span className="text-navy-400 text-xs">Serving clients throughout MD</span>
                </div>
              </li>
              <li>
                <a href="tel:4435452121" className="flex items-center gap-3 text-navy-300 hover:text-gold-400 text-sm transition-colors group">
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  (443) 545-2121
                </a>
              </li>
              <li>
                <a href="mailto:info@jwlegal.com" className="flex items-center gap-3 text-navy-300 hover:text-gold-400 text-sm transition-colors group">
                  <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  info@jwlegal.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-navy-400 text-xs uppercase tracking-wider mb-2 font-semibold">Office Hours</h4>
              <div className="text-navy-300 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-navy-200">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-navy-200">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-navy-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-navy-400 text-xs">
            <div className="flex items-center gap-2">
              <Scale className="w-3.5 h-3.5 text-gold-600" />
              <span>&copy; {new Date().getFullYear()} JWLegal, LLC. All Rights Reserved. Claire Wen Lee, Attorney at Law.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <span className="text-navy-700">|</span>
              <Link to="/contact" className="hover:text-gold-400 transition-colors">Disclaimer</Link>
              <span className="text-navy-700">|</span>
              <Link to="/contact" className="hover:text-gold-400 transition-colors">Site Map</Link>
            </div>
          </div>
          <p className="text-navy-500 text-xs mt-3 leading-relaxed">
            Attorney Advertising. The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
