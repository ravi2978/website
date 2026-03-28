import React from 'react'
import { Award, Star, Trophy, Shield } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const awards = [
  {
    year: '2025',
    title: 'Super Lawyers — Rising Star',
    organization: 'Super Lawyers / Thomson Reuters',
    category: 'Immigration Law',
    description: 'Named to the Super Lawyers Rising Stars list, which recognizes attorneys who exhibit excellence in practice and have made a significant impact early in their careers. Only 2.5% of attorneys in Maryland receive this recognition.',
    icon: Star,
    featured: true,
  },
  {
    year: '2024',
    title: 'Best of Howard County — Best Attorney',
    organization: 'Columbia Flier / Baltimore Sun Media',
    category: 'Legal Services',
    description: 'Selected by readers of the Columbia Flier as one of the best attorneys in Howard County, Maryland, in recognition of outstanding client service and legal excellence.',
    icon: Trophy,
    featured: true,
  },
  {
    year: '2024',
    title: 'Client Satisfaction Award',
    organization: 'Martindale-Hubbell',
    category: 'Client Service',
    description: 'Received the Martindale-Hubbell Client Satisfaction Award based on verified client reviews reflecting exceptional legal service, communication, and outcomes.',
    icon: Award,
    featured: true,
  },
  {
    year: '2023',
    title: 'Pro Bono Excellence Award',
    organization: 'Maryland Legal Aid Foundation',
    category: 'Community Service',
    description: 'Awarded in recognition of outstanding pro bono legal services provided to low-income Maryland residents, with a particular focus on immigrant communities.',
    icon: Shield,
    featured: false,
  },
  {
    year: '2022',
    title: 'Top Immigration Attorney — Maryland',
    organization: 'Expertise.com',
    category: 'Immigration Law',
    description: 'Selected as one of Maryland\'s top immigration attorneys based on reputation, experience, professionalism, client reviews, and community involvement.',
    icon: Star,
    featured: false,
  },
  {
    year: '2021',
    title: 'Cultural Competency Award',
    organization: 'Asian Pacific American Bar Association of Maryland',
    category: 'Community & Diversity',
    description: 'Recognized for exemplary service to Maryland\'s Asian Pacific American community through legal representation, advocacy, and culturally sensitive legal services.',
    icon: Award,
    featured: false,
  },
  {
    year: '2020',
    title: 'Maryland Volunteer Lawyer Service Award',
    organization: 'Maryland Volunteer Lawyer Service',
    category: 'Pro Bono Service',
    description: 'Honored for providing over 200 hours of pro bono legal assistance to Marylanders who could not otherwise afford legal representation.',
    icon: Shield,
    featured: false,
  },
]

export default function Awards() {
  const featured = awards.filter(a => a.featured)
  const regular = awards.filter(a => !a.featured)

  return (
    <div>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Honors and recognition received by Attorney Claire Wen Lee for legal excellence and community service."
        breadcrumbs={[{ label: 'Meet Claire', href: '/meet-claire' }, { label: 'Awards' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured awards */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Notable Recognition</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((award, i) => (
                <div key={i} className="bg-navy-700 rounded-2xl p-7 text-white relative overflow-hidden group hover:bg-navy-800 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center mb-5">
                      <award.icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-1">{award.year}</div>
                    <h3 className="text-white font-extrabold text-lg mb-1">{award.title}</h3>
                    <div className="text-navy-300 text-sm mb-1">{award.organization}</div>
                    <div className="text-xs bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full inline-block mb-4">{award.category}</div>
                    <p className="text-navy-200 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regular awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Additional Honors</span>
            </div>
            <div className="space-y-4">
              {regular.map((award, i) => (
                <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <award.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-navy-700 font-bold text-base">{award.title}</h3>
                      <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{award.year}</span>
                    </div>
                    <div className="text-gold-600 text-sm font-semibold mb-0.5">{award.organization}</div>
                    <div className="text-gray-400 text-xs mb-2">{award.category}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-navy-50 border border-navy-100 rounded-xl p-6 text-center">
            <Star className="w-8 h-8 text-gold-500 mx-auto mb-3" />
            <p className="text-navy-700 font-semibold text-sm">
              Attorney Lee's recognition reflects her commitment to legal excellence, community service, and compassionate client representation across both immigration and family law practice areas.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
