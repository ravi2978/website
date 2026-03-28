import React from 'react'
import { Globe, Users, CheckCircle, ArrowRight, FileText } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const serviceCategories = [
  {
    title: 'Family-Based Immigration',
    icon: Users,
    services: [
      { name: 'Immediate Relative Petitions (I-130)', desc: 'For spouses, parents, and unmarried children under 21 of U.S. citizens.' },
      { name: 'Family Preference Category Petitions', desc: 'For siblings, adult children, and married children of citizens and LPRs.' },
      { name: 'Adjustment of Status (I-485)', desc: 'Apply for a green card while remaining in the United States.' },
      { name: 'Consular Processing', desc: 'Obtain an immigrant visa through a U.S. consulate abroad.' },
    ],
  },
  {
    title: 'Citizenship & Naturalization',
    icon: Globe,
    services: [
      { name: 'Naturalization (N-400)', desc: 'Complete guidance through the citizenship application, interview, and ceremony.' },
      { name: 'Citizenship by Derivation', desc: 'Determine and document citizenship acquired through a U.S. citizen parent.' },
      { name: 'Certificate of Citizenship (N-600)', desc: 'Official documentation confirming U.S. citizenship status.' },
      { name: 'Relinquishment & Renunciation', desc: 'Assistance with voluntary relinquishment of green card or citizenship when needed.' },
    ],
  },
  {
    title: 'Work Authorization & Visas',
    icon: FileText,
    services: [
      { name: 'Employment Authorization (EAD)', desc: 'Obtain the right to work lawfully in the United States.' },
      { name: 'DACA Applications & Renewals', desc: 'Comprehensive assistance with initial DACA applications and biennial renewals.' },
      { name: 'Advance Parole', desc: 'Permission to travel abroad without abandoning a pending green card application.' },
      { name: 'Nonimmigrant Visa Guidance', desc: 'Guidance on tourist, student, and other temporary visa applications and extensions.' },
    ],
  },
  {
    title: 'Special Immigration Cases',
    icon: CheckCircle,
    services: [
      { name: 'VAWA Self-Petitions', desc: 'Protection for domestic violence survivors who are immigrants.' },
      { name: 'U Visa for Crime Victims', desc: 'Immigration protection for victims of qualifying crimes who assist law enforcement.' },
      { name: 'T Visa for Trafficking Victims', desc: 'Protection for survivors of human trafficking.' },
      { name: 'Waivers of Inadmissibility', desc: 'Applications to overcome grounds of inadmissibility including prior violations.' },
    ],
  },
]

export default function IndividualsFamilies() {
  return (
    <div>
      <PageHeader
        title="Individuals & Families"
        subtitle="Comprehensive immigration legal services to help you and your family build a secure future in the United States."
        breadcrumbs={[
          { label: 'Immigration Law', href: '/immigration-law' },
          { label: 'Individuals & Families' }
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Immigration Services</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-700 mb-6">Helping Families Build Their American Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For many of our clients, immigration is not just a legal process — it is a deeply personal journey toward security, opportunity, and family unity. JWLegal provides comprehensive immigration services to individuals and families at every stage of the immigration process.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Attorney Claire Wen Lee brings cultural sensitivity and bilingual capability (English and Mandarin) to every case, ensuring that our diverse clients feel understood and supported throughout the legal process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map(cat => (
              <div key={cat.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-navy-700 font-extrabold text-xl">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.services.map(s => (
                    <div key={s.name} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start gap-2 mb-1">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-navy-700 font-semibold text-sm">{s.name}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed pl-5">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-700 rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <Globe className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="text-xl font-extrabold text-white mb-3">Bilingual Immigration Services</h3>
                <p className="text-navy-200 text-sm leading-relaxed">
                  Attorney Claire Wen Lee is fluent in both English and Mandarin Chinese, allowing her to serve Maryland's Chinese-speaking immigrant community with full cultural and linguistic comprehension. We also work with interpreters for other languages to ensure no client is left without full understanding of their legal situation.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-gold-400 mb-1">2</div>
                <div className="text-navy-300 text-sm">Languages</div>
                <div className="mt-4 text-3xl font-extrabold text-gold-400 mb-1">15+</div>
                <div className="text-navy-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
