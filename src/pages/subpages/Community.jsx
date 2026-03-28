import React from 'react'
import { Heart, Globe, Users, BookOpen, ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const initiatives = [
  {
    icon: Globe,
    title: 'Immigration Legal Aid Clinics',
    description: 'JWLegal participates in quarterly immigration legal aid clinics in Howard County, providing free consultations and guidance to low-income immigrants who cannot afford private legal counsel.',
    impact: '200+ individuals served annually',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Know Your Rights Workshops',
    description: 'Attorney Lee conducts educational workshops at community centers, libraries, and churches throughout Maryland, empowering immigrants and families with knowledge of their legal rights.',
    impact: '12+ workshops per year',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Heart,
    title: 'Pro Bono Family Law Services',
    description: 'We reserve a portion of our practice for pro bono family law matters, focusing on domestic violence survivors seeking protective orders and low-income parents navigating custody matters.',
    impact: '50+ pro bono cases',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Users,
    title: 'Community Partnership Program',
    description: 'JWLegal partners with local nonprofits, cultural organizations, and social service agencies to provide integrated support for immigrant families navigating both legal and social challenges.',
    impact: '15+ partner organizations',
    color: 'bg-gold-100 text-gold-600',
  },
]

const partners = [
  'Howard County Office of Human Rights & Equity',
  'Latino Economic Development Center',
  'International Rescue Committee - Baltimore',
  'Catholic Charities of Baltimore',
  'Maryland Legal Aid',
  'Asian Pacific American Legal Resource Center',
  'CASA de Maryland',
  'Heartly House (Domestic Violence Services)',
]

export default function Community() {
  return (
    <div>
      <PageHeader
        title="Community Involvement"
        subtitle="JWLegal is deeply committed to serving and uplifting the communities of Maryland through outreach, education, and pro bono legal services."
        breadcrumbs={[{ label: 'Our Firm', href: '/our-firm' }, { label: 'Community' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Our Commitment</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-700 mb-6">Beyond the Courtroom</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              JWLegal was built on the belief that access to quality legal representation should not be determined by one's financial means or immigration status. We actively work to close the justice gap in Maryland's immigrant and low-income communities through pro bono service, education, and advocacy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Attorney Claire Wen Lee is personally involved in community outreach and believes that a strong community is the foundation of a just society. Her commitment to service extends well beyond the legal work she does for paying clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {initiatives.map(init => (
              <div key={init.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${init.color}`}>
                  <init.icon className="w-6 h-6" />
                </div>
                <h3 className="text-navy-700 font-bold text-lg mb-2">{init.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{init.description}</p>
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 border border-gray-200 text-navy-700 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500" />
                  {init.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-navy-700 font-bold text-xl mb-4">Community Partners</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We collaborate with these outstanding organizations to maximize our impact in Maryland communities.
              </p>
              <ul className="space-y-2">
                {partners.map(p => (
                  <li key={p} className="flex items-center gap-3 text-gray-700 text-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-700 rounded-2xl p-8 text-white">
              <h3 className="text-gold-400 font-bold text-xl mb-4">Get Involved</h3>
              <p className="text-navy-200 text-sm leading-relaxed mb-6">
                Are you a nonprofit, community organization, or social service agency looking to partner with JWLegal? We are always seeking new partnerships to expand our community impact.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Refer individuals needing pro bono services',
                  'Host a Know Your Rights workshop',
                  'Partner on community legal clinics',
                  'Collaborate on immigrant outreach',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-navy-200 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@jwlegal.com"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Contact Us to Partner
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
