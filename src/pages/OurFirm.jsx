import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Star, Globe2, Users, ArrowRight, Shield, Scale, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactCTA from '../components/ContactCTA'

const subPages = [
  {
    icon: Heart,
    label: 'Our Philosophy',
    href: '/our-firm/philosophy',
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    description: 'Learn about the core values and guiding principles that shape every aspect of our legal practice.'
  },
  {
    icon: Star,
    label: 'Client Testimonials',
    href: '/our-firm/testimonials',
    color: 'bg-gold-100',
    iconColor: 'text-gold-600',
    description: 'Read firsthand accounts from clients who have trusted JWLegal with their most important legal matters.'
  },
  {
    icon: Globe2,
    label: 'Community Involvement',
    href: '/our-firm/community',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    description: 'Discover how JWLegal gives back to the Maryland community through outreach and pro bono services.'
  },
  {
    icon: Users,
    label: 'Referring Attorneys',
    href: '/our-firm/referring-attorneys',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    description: 'Information for attorneys seeking to refer clients for immigration or family law matters in Maryland.'
  },
]

const values = [
  { icon: Shield, title: 'Integrity', description: 'We uphold the highest ethical standards in everything we do, providing honest counsel even when the truth is difficult.' },
  { icon: Heart, title: 'Compassion', description: 'We understand the emotional weight of legal challenges and approach every client with empathy and genuine care.' },
  { icon: Scale, title: 'Excellence', description: 'We pursue exceptional legal outcomes through rigorous preparation, strategic thinking, and continuous learning.' },
  { icon: Users, title: 'Community', description: 'We are deeply invested in the communities we serve, offering pro bono services and participating in outreach programs.' },
]

export default function OurFirm() {
  return (
    <div>
      <PageHeader
        title="Our Firm"
        subtitle="JWLegal, LLC — Where Family Law and Immigration Law Come Together"
        breadcrumbs={[{ label: 'Our Firm' }]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">About JWLegal</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mb-6">
                A Different Kind of Law Firm
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                JWLegal, LLC was founded with a singular mission: to provide Maryland families with the highest quality legal representation in immigration and family law. We believe these two practice areas are deeply intertwined, and having an attorney who excels in both gives our clients a distinct advantage.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Based in Columbia, Maryland, we serve clients throughout Howard County, Baltimore, and the greater Washington, D.C. metropolitan area. Our boutique firm model means every client receives direct attention from Attorney Claire Wen Lee — not a paralegal or associate.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We take pride in our diverse client base and our ability to communicate effectively in both English and Mandarin Chinese. At JWLegal, every client is treated with dignity, respect, and the personal attention their case deserves.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Boutique firm, personalized service',
                  'Bilingual English & Mandarin',
                  'Immigration & Family Law focus',
                  'Serving all of Maryland',
                  'Columbia, MD office',
                  'Free initial consultations',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <div className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-6">Firm At a Glance</div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: '15+', label: 'Years Experience' },
                    { value: '500+', label: 'Cases Handled' },
                    { value: '2', label: 'Practice Areas' },
                    { value: '100%', label: 'Client Focus' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center p-4 bg-navy-800/50 rounded-xl">
                      <div className="text-3xl font-extrabold text-gold-400">{stat.value}</div>
                      <div className="text-navy-300 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-gold-400 font-bold text-sm uppercase tracking-wider">Practice Jurisdictions</h3>
                  {['State of Maryland', 'U.S. District Court for the District of Maryland', 'U.S. Immigration Courts', 'Board of Immigration Appeals'].map(j => (
                    <div key={j} className="flex items-center gap-2 text-navy-200 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" />
                      {j}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="section-heading text-center">Our Core Values</h2>
            <p className="section-subheading mx-auto text-center">These principles guide every decision we make and every interaction we have with our clients.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-700 transition-colors">
                  <v.icon className="w-7 h-7 text-navy-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-navy-700 font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-navy-700">Explore More About Our Firm</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {subPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="group flex items-start gap-5 bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-navy-200 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${page.color}`}>
                  <page.icon className={`w-7 h-7 ${page.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-navy-700 font-bold text-lg mb-1 group-hover:text-gold-600 transition-colors">{page.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{page.description}</p>
                  <div className="flex items-center gap-1.5 text-gold-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
