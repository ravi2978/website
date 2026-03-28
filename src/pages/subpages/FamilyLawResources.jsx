import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, ExternalLink, Users, AlertCircle, ArrowRight, BookOpen } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const mdForms = [
  { form: 'CC-DR-001', title: 'Complaint for Absolute Divorce', desc: 'Initiates a divorce proceeding in Maryland circuit court.' },
  { form: 'CC-DR-020', title: 'Child Support Guidelines Worksheet', desc: 'Calculates child support under Maryland\'s guidelines.' },
  { form: 'CC-DR-031', title: 'Parenting Plan', desc: 'Documents custody and visitation arrangements.' },
  { form: 'CC-DR-050', title: 'Property Disposition', desc: 'Addresses division of marital property and debts.' },
  { form: 'CC-DR-055', title: 'Financial Statement', desc: 'Discloses income, assets, and expenses for support calculations.' },
  { form: 'CC-DR-072', title: 'Joint Statement of the Parties', desc: 'Summarizes agreed and disputed issues before a hearing.' },
  { form: 'MDEC-003', title: 'Request for Waiver of Filing Fee', desc: 'Request to waive court fees based on financial need.' },
  { form: 'DV-001', title: 'Petition for Protective Order', desc: 'Emergency protection for victims of domestic violence.' },
]

const externalResources = [
  { name: 'Maryland Courts Self-Help Center', url: 'https://www.mdcourts.gov/legalhelp', desc: 'Official Maryland court forms and self-help legal information.' },
  { name: 'Maryland Child Support Administration', url: 'https://dhs.maryland.gov/child-support-services/', desc: 'State agency handling child support enforcement and services.' },
  { name: 'Maryland Volunteer Lawyers Service', url: 'https://mvlslaw.org', desc: 'Free legal services for low-income Marylanders in civil matters including family law.' },
  { name: 'House of Ruth Maryland', url: 'https://hruth.org', desc: 'Domestic violence advocacy, shelter, and legal services for survivors.' },
  { name: 'Maryland Mediation & Conflict Resolution Office', url: 'https://www.mdcourts.gov/courtoperations/macro', desc: 'Court-connected mediation services for family law matters.' },
]

const glossary = [
  { term: 'Absolute Divorce', def: 'A final, permanent dissolution of the marriage. Maryland requires grounds such as 12-month separation, mutual consent, adultery, cruelty, or desertion.' },
  { term: 'Legal Custody', def: 'The right and responsibility to make major decisions about a child\'s education, health, and welfare. Can be sole or joint.' },
  { term: 'Physical Custody', def: 'Where the child primarily lives. Can be primary with one parent or shared between both parents.' },
  { term: 'Alimony', def: 'Financial support paid by one spouse to the other after separation or divorce. Maryland courts consider many factors in awarding alimony.' },
  { term: 'Marital Property', def: 'Property acquired during the marriage by either or both spouses. Maryland courts divide marital property equitably (fairly) but not necessarily equally.' },
  { term: 'Pendente Lite', def: 'Latin for "pending the litigation." Temporary orders entered during a divorce proceeding for immediate issues like temporary custody or support.' },
  { term: 'Modification', def: 'A change to an existing court order. Requires showing a substantial change in circumstances since the original order was entered.' },
]

export default function FamilyLawResources() {
  return (
    <div>
      <PageHeader
        title="Family Law Resources"
        subtitle="Helpful information, court forms, and links for Maryland family law matters."
        breadcrumbs={[{ label: 'Family Law', href: '/family-law' }, { label: 'Resources' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-amber-800 font-bold text-sm mb-1">Important Disclaimer</h4>
              <p className="text-amber-700 text-sm">These resources are for general informational purposes only. Family law is highly fact-specific and the information here does not constitute legal advice. Please consult with an attorney regarding your individual circumstances before taking any legal action.</p>
            </div>
          </div>

          {/* Court Forms */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Common Maryland Family Law Forms</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mdForms.map(f => (
                <div key={f.form} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gold-500 text-white font-bold text-xs px-2 py-0.5 rounded">{f.form}</span>
                  </div>
                  <h3 className="text-navy-700 font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">* Maryland family court forms are available at mdcourts.gov. Forms vary by county — confirm the correct forms for your jurisdiction.</p>
          </div>

          {/* External Resources */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Helpful Links</span>
            </div>
            <div className="space-y-3">
              {externalResources.map(r => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-navy-200 transition-all group">
                  <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
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

          {/* Glossary */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Family Law Glossary</span>
            </div>
            <div className="space-y-4">
              {glossary.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <span className="bg-navy-700 text-gold-400 font-bold text-xs px-2.5 py-1 rounded flex-shrink-0">{item.term}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">{item.def}</p>
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
