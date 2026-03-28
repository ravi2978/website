import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'

const navItems = [
  {
    label: 'Our Firm',
    href: '/our-firm',
    children: [
      { label: 'Firm Overview', href: '/our-firm' },
      { label: 'Our Philosophy', href: '/our-firm/philosophy' },
      { label: 'Testimonials', href: '/our-firm/testimonials' },
      { label: 'Community', href: '/our-firm/community' },
      { label: 'Referring Attorneys', href: '/our-firm/referring-attorneys' },
    ],
  },
  {
    label: 'Meet Claire',
    href: '/meet-claire',
    children: [
      { label: 'Biography', href: '/meet-claire' },
      { label: 'Experience', href: '/meet-claire/experience' },
      { label: 'Education', href: '/meet-claire/education' },
      { label: 'Associations', href: '/meet-claire/associations' },
      { label: 'Publications', href: '/meet-claire/publications' },
      { label: 'Awards', href: '/meet-claire/awards' },
    ],
  },
  {
    label: 'Immigration Law',
    href: '/immigration-law',
    children: [
      { label: 'Overview', href: '/immigration-law' },
      { label: 'Detained Individuals', href: '/immigration-law/detained-individuals' },
      { label: 'Individuals & Families', href: '/immigration-law/individuals-families' },
      { label: 'Resources', href: '/resources/immigration' },
    ],
  },
  {
    label: 'Family Law',
    href: '/family-law',
    children: [
      { label: 'Overview', href: '/family-law' },
      { label: 'Litigation', href: '/family-law/litigation' },
      { label: 'Mediation', href: '/family-law/mediation' },
      { label: 'Collaboration', href: '/family-law/collaboration' },
      { label: 'Resources', href: '/resources/family-law' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `block px-4 py-3 text-sm font-medium transition-colors duration-150 border-b border-gray-50 last:border-0 ${
              isActive
                ? 'bg-navy-50 text-navy-700 border-l-2 border-l-gold-500 pl-3'
                : 'text-gray-700 hover:bg-navy-50 hover:text-navy-700'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

function MobileAccordion({ item, onClose }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  if (!item.children) {
    return (
      <NavLink
        to={item.href}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
            isActive ? 'bg-navy-700 text-white' : 'text-navy-700 hover:bg-navy-50'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-navy-700 hover:bg-navy-50 rounded-lg transition-colors"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pl-4 pb-2 space-y-1">
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              to={child.href}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? 'bg-gold-100 text-navy-700' : 'text-gray-600 hover:text-navy-700 hover:bg-gray-50'
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRefs = useRef({})
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeDropdown && !e.target.closest('[data-dropdown]')) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy-700 text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
          <span className="hidden sm:block text-navy-200 text-xs">Serving clients throughout Maryland</span>
          <a href="tel:4435452121" className="flex items-center gap-1.5 font-semibold text-gold-400 hover:text-gold-300 transition-colors ml-auto">
            <Phone className="w-3.5 h-3.5" />
            (443) 545-2121
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center">
              <span className="text-gold-500 font-extrabold text-sm leading-none">JW</span>
            </div>
            <div>
              <span className="text-gold-500 font-extrabold text-xl">JW</span>
              <span className="text-navy-700 font-extrabold text-xl">Legal</span>
              <div className="text-[10px] text-gray-500 font-medium -mt-1 tracking-wider uppercase leading-none">Immigration & Family Law</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  data-dropdown
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                      location.pathname.startsWith(item.href)
                        ? 'text-navy-700 bg-navy-50'
                        : 'text-gray-700 hover:text-navy-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  <DropdownMenu items={item.children} isOpen={activeDropdown === item.label} />
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                      isActive ? 'text-navy-700 bg-navy-50' : 'text-gray-700 hover:text-navy-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/consultations"
              className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Schedule Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          mobileOpen ? 'max-h-screen shadow-xl' : 'max-h-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <MobileAccordion key={item.label} item={item} onClose={() => setMobileOpen(false)} />
          ))}
          <div className="pt-3 border-t border-gray-100">
            <Link
              to="/consultations"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-4 py-3 rounded-lg text-sm transition-all duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
