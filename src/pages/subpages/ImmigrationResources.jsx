import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, ExternalLink, Globe, AlertCircle, ArrowRight, CheckCircle } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const uscisforms = [
  { form: 'I-130', title: 'Petition for Alien Relative', desc: 'Used to establish eligibility for a family member to apply for an immigrant visa.' },
  { form: 'I-485', title: 'Application to Register Permanent Residence', desc: 'Apply for a green card while in the United States.' },
  { form: 'I-765', title: 'Application for Employment Authorization', desc: 'Apply for the right to work in the United States.' },
  { form: 'I-131', title: 'Application for Travel Document', desc: 'Request advance parole to travel abroad with a pending green card application.' },
  { form: 'N-400', title: 'Application for Naturalization', desc: 'Apply to become a U.S. citizen.' },
  { form: 'I-589', title: 'Application for Asylum', desc: 'Seek protection from persecution in your home country.' },
  { form: 'I-212', title: 'Application for Permission to Reapply', desc: 'Request permission to reapply for admission after deportation.' },
  { form: 'I-601', title: 'Application for Waiver of Grounds of Inadmissibility', desc: 'Seek a waiver to overcome certain grounds of inadmissibility.' },
]

const externalResources = [
  { name: 'USCIS Official Website', url: 'https://www.uscis.gov', desc: 'Forms, case status, policy updates, and more from U.S. Citizenship and Immigration Services.' },
  { name: 'ICE Detainee Locator', url: 'https://locator.ice.gov', desc: 'Locate a detained immigrant using this official ICE online tool.' },
  { name: 'EOIR Immigration Court Finder', url: 'https://www.justice.gov/eoir', desc: 'Find immigration court locations and information about immigration court proceedings.' },
  { name: 'Maryland Legal Aid', url: 'https://www.mdlab.org', desc: 'Free civil legal services for low-income Marylanders, including immigration matters.' },
  { name: 'AILA Lawyer Referral', url: 'https://www.ailalawyer.com', desc: 'Find a qualified immigration attorney through the American Immigration Lawyers Association.' },
]

const faq = [
  { q: 'How long does the green card process take?', a: 'Processing times vary significantly depending on the category and the applicant\'s country of birth. Immediate relatives of U.S. citizens can typically complete the process in 12-24 months; other family categories may take years due to visa backlogs.' },
  { q: 'Can I stay in the U.S. while my case is pending?', a: 'It depends on your current status and visa type. Some applicants can remain in the U.S. throughout the process; others must complete consular processing abroad. Attorney Lee will assess your specific situation.' },
  { q: 'What is the difference between a green card and citizenship?', a: 'A green card grants permanent resident status, allowing you to live and work in the U.S. indefinitely. Citizenship, obtained through naturalization, provides additional benefits including the right to vote, a U.S. passport, and full protection against deportation.' },
  { q: 'What if I have a prior immigration violation?', a: 'Prior violations such as overstays, prior removals, or unlawful entries can create bars to immigration benefits or require waivers. Many situations can be remedied — but it\'s essential to consult with an attorney before filing anything.' },
]

export default function ImmigrationResources() {
  return (
    <div>
      <PageHeader
        title="Immigration Resources"
        subtitle="Helpful forms, links, and information for individuals navigating the U.S. immigration system."
        breadcrumbs={[{ label: 'Immigration Law', href: '/immigration-law' }, { label: 'Resources' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-amber-800 font-bold text-sm mb-1">Important Disclaimer</h4>
              <p className="text-amber-700 text-sm">The resources on this page are for informational purposes only and do not constitute legal advice. Immigration law is complex and highly fact-specific. Always consult with a qualified immigration attorney before filing any forms or taking action on your case.</p>
            </div>
          </div>

          {/* USCIS Forms */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Common USCIS Forms</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {uscisforms.map(f => (
                <div key={f.form} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-navy-700 text-gold-400 font-bold text-xs px-2.5 py-1 rounded">{f.form}</span>
                  </div>
                  <h3 className="text-navy-700 font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">* All USCIS forms are available free of charge at uscis.gov. Always use the most current version of any form.</p>
          </div>

          {/* External resources */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Helpful Links</span>
            </div>
            <div className="space-y-3">
              {externalResources.map(r => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-navy-200 transition-all group">
                  <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-navy-700 font-semibold text-sm group-hover:text-gold-600 transition-colors">{r.name}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-xs mt-0.5">{r.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Frequently Asked Questions</span>
            </div>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-navy-700 font-bold text-base mb-2 flex items-start gap-2">
                    <span className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">Q</span>
                    {item.q}
                  </h3>
                  <div className="pl-8">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Have Immigration Questions?"
        subtitle="These resources provide general information, but your situation is unique. Contact JWLegal for personalized guidance from Attorney Claire Wen Lee."
      />
    </div>
  )
}
