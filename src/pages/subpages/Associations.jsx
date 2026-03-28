import React from 'react'
import { Users, Scale, Globe, ArrowRight } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const barAdmissions = [
  { name: 'Maryland State Bar Association', year: '2008', active: true },
  { name: 'U.S. District Court, District of Maryland', year: '2009', active: true },
  { name: 'Executive Office for Immigration Review (EOIR)', year: '2008', active: true },
  { name: 'Board of Immigration Appeals (BIA)', year: '2010', active: true },
  { name: 'U.S. Court of Appeals, Fourth Circuit', year: '2013', active: true },
]

const professionalOrgs = [
  {
    name: 'American Immigration Lawyers Association (AILA)',
    chapter: 'Maryland/DC Chapter',
    role: 'Member & Chapter Committee Volunteer',
    description: 'AILA is the national association of over 15,000 attorneys and law professors who practice and teach immigration law.',
    since: '2008',
  },
  {
    name: 'Maryland State Bar Association (MSBA)',
    chapter: 'Family Law Section',
    role: 'Active Member',
    description: 'MSBA represents all Maryland attorneys and provides educational resources, networking, and advocacy for the legal profession.',
    since: '2008',
  },
  {
    name: 'Howard County Bar Association',
    chapter: 'Full Member',
    role: 'Member',
    description: 'The local bar association for Howard County attorneys, providing networking, CLE, and community service opportunities.',
    since: '2015',
  },
  {
    name: 'International Academy of Collaborative Professionals (IACP)',
    chapter: 'National Member',
    role: 'Certified Collaborative Attorney',
    description: 'IACP supports the growth of collaborative practice as a humane and effective dispute resolution option for families.',
    since: '2019',
  },
  {
    name: 'National Immigration Project (NIP)',
    chapter: 'National Member',
    role: 'Member',
    description: 'NIP provides legal support, educational resources, and advocacy to advance the rights of immigrants and refugees.',
    since: '2011',
  },
  {
    name: 'Asian Pacific American Bar Association of Maryland (APABAM)',
    chapter: 'Maryland Chapter',
    role: 'Active Member',
    description: 'APABAM serves as a resource for Asian Pacific American legal professionals in Maryland and advocates for APA communities.',
    since: '2012',
  },
]

export default function Associations() {
  return (
    <div>
      <PageHeader
        title="Professional Associations"
        subtitle="Attorney Lee's professional memberships, bar admissions, and organizational affiliations."
        breadcrumbs={[{ label: 'Meet Claire', href: '/meet-claire' }, { label: 'Associations' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bar Admissions */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Bar Admissions & Court Licenses</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {barAdmissions.map(bar => (
                <div key={bar.name} className="flex items-start gap-3 p-4 bg-navy-50 rounded-xl border border-navy-100">
                  <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-navy-700 font-semibold text-sm">{bar.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-400 text-xs">Admitted {bar.year}</span>
                      {bar.active && (
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      )}
                      <span className="text-green-600 text-xs font-medium">Active</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Organizations */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Professional Organizations</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {professionalOrgs.map(org => (
                <div key={org.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                      <Users className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">Since {org.since}</span>
                  </div>
                  <h3 className="text-navy-700 font-bold text-base mb-0.5">{org.name}</h3>
                  <div className="text-gold-600 font-semibold text-xs mb-0.5">{org.chapter}</div>
                  <div className="text-gray-400 text-xs mb-3">{org.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{org.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
