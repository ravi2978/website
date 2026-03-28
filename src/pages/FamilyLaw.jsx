import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, Users, Heart, MessageSquare, ArrowRight, CheckCircle, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactCTA from '../components/ContactCTA'

const services = [
  {
    icon: Scale,
    title: 'Litigation',
    href: '/family-law/litigation',
    description: 'When negotiation fails or the other party is uncooperative, our skilled litigators advocate aggressively for your rights in Maryland family courts.',
    items: ['Divorce proceedings', 'Contested custody hearings', 'Child support enforcement', 'Post-decree modifications'],
    accent: 'bg-navy-700',
    textColor: 'text-white',
  },
  {
    icon: MessageSquare,
    title: 'Mediation',
    href: '/family-law/mediation',
    description: 'A cost-effective, less adversarial alternative where a neutral mediator helps parties reach mutually agreeable solutions outside of court.',
    items: ['Divorce mediation', 'Parenting plan development', 'Property division', 'Support agreements'],
    accent: 'bg-gold-500',
    textColor: 'text-white',
  },
  {
    icon: Heart,
    title: 'Collaboration',
    href: '/family-law/collaboration',
    description: 'The collaborative process allows parties to resolve disputes with the help of their attorneys and other professionals in a cooperative, non-adversarial environment.',
    items: ['Collaborative divorce', 'Parenting coordination', 'Neutral financial advisors', 'Child specialists'],
    accent: 'bg-green-600',
    textColor: 'text-white',
  },
]

const processSteps = [
  { step: '01', title: 'Initial Consultation', description: 'We listen to your situation and explain all available options in a private, judgment-free consultation.' },
  { step: '02', title: 'Strategy & Goals', description: 'Together we define your objectives and select the most appropriate legal approach for your family.' },
  { step: '03', title: 'Document Gathering', description: 'We help you gather financial records, parenting documents, and all necessary supporting materials.' },
  { step: '04', title: 'Negotiation', description: 'We engage the other party or their counsel to pursue the most favorable resolution possible.' },
  { step: '05', title: 'Court / Agreement', description: 'Whether through settlement or litigation, we represent your interests at every stage.' },
  { step: '06', title: 'Resolution & Support', description: 'We finalize agreements, ensure court orders are entered correctly, and remain available for future needs.' },
]

const areas = [
  'Divorce & Separation',
  'Child Custody & Visitation',
  'Child Support',
  'Spousal Support / Alimony',
  'Property Division',
  'Prenuptial Agreements',
  'Post-Decree Modifications',
  'Domestic Violence Protection',
  'Paternity',
  'Adoption',
  'Guardianship',
  'Name Changes',
]

export default function FamilyLaw() {
  return (
    <div>
      <PageHeader
        title="Family Law"
        subtitle="Compassionate, strategic legal counsel for Maryland families facing life's most challenging transitions."
        breadcrumbs={[{ label: 'Family Law' }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Family Law Practice</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mb-6">
                Protecting Your Family's Best Interests
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Family law matters are among the most emotionally charged and personally significant legal issues anyone can face. Whether you're going through a divorce, navigating child custody, or planning for your family's future, you deserve an attorney who combines legal skill with genuine compassion.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Attorney Claire Wen Lee approaches every family law matter with sensitivity and strategic focus. She understands that children's wellbeing, financial security, and family relationships are at stake — and she works tirelessly to protect what matters most to you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                JWLegal offers three distinct approaches to family law resolution — litigation, mediation, and collaboration — allowing you to choose the path that best fits your family's unique circumstances and goals.
              </p>
            </div>

            <div className="bg-navy-700 rounded-2xl p-8 text-white">
              <Users className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-6">Areas of Family Law Practice</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {areas.map(area => (
                  <div key={area} className="flex items-center gap-2 text-navy-200 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-navy-600">
                <Link to="/resources/family-law" className="flex items-center gap-2 text-gold-400 font-semibold text-sm hover:text-gold-300 transition-colors">
                  <FileText className="w-4 h-4" />
                  Family Law Resources
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="section-heading text-center">Three Paths to Resolution</h2>
            <p className="section-subheading mx-auto text-center">Every family situation is unique. We offer three distinct approaches to help you reach the best outcome.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`${s.accent} p-6`}>
                  <s.icon className={`w-10 h-10 ${s.textColor} mb-3`} />
                  <h3 className={`text-xl font-extrabold ${s.textColor}`}>{s.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors group-hover:bg-gold-500"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="section-heading text-center">Our Family Law Process</h2>
            <p className="section-subheading mx-auto text-center">From your first call to final resolution, we support you through every step.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-5xl font-extrabold text-navy-100 mb-3 leading-none">{step.step}</div>
                <h3 className="text-navy-700 font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Facing a Family Law Challenge?"
        subtitle="You don't have to face it alone. Attorney Claire Wen Lee provides confidential, compassionate counsel to help you navigate this difficult time with clarity and confidence."
      />
    </div>
  )
}
