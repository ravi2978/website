import React from 'react'
import { MessageSquare, CheckCircle, ArrowRight, DollarSign, Clock, Heart, Shield } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const benefits = [
  { icon: DollarSign, title: 'Cost-Effective', desc: 'Mediation typically costs significantly less than contested litigation, preserving more assets for both parties and your family.' },
  { icon: Clock, title: 'Faster Resolution', desc: 'Cases that might take years in court can often be resolved in weeks through mediation, reducing stress for everyone involved.' },
  { icon: Heart, title: 'Less Adversarial', desc: 'A collaborative process that preserves co-parenting relationships and minimizes the emotional impact on children and families.' },
  { icon: Shield, title: 'Confidential', desc: 'Mediation sessions are private and confidential, unlike court proceedings which become part of the public record.' },
]

const process = [
  { step: '01', title: 'Agreement to Mediate', desc: 'Both parties agree to participate in mediation and select a neutral mediator (or Attorney Lee serves as attorney-mediator).' },
  { step: '02', title: 'Joint Sessions', desc: 'The parties and their attorneys meet with the mediator to discuss the issues in dispute in a structured, controlled environment.' },
  { step: '03', title: 'Private Caucuses', desc: 'The mediator may meet privately with each side to explore interests, concerns, and possible solutions without the other party present.' },
  { step: '04', title: 'Negotiation', desc: 'With the mediator\'s guidance, the parties work toward mutually acceptable solutions on each issue.' },
  { step: '05', title: 'Written Agreement', desc: 'A formal Memorandum of Understanding is prepared documenting all agreed terms.' },
  { step: '06', title: 'Court Filing', desc: 'The agreement is submitted to the court for approval and incorporation into a legally binding court order.' },
]

const issues = [
  'Division of marital property and debts',
  'Spousal support / alimony terms',
  'Parenting plans and custody arrangements',
  'Child support calculations',
  'Business valuation and division',
  'Retirement account division (QDROs)',
  'School and extracurricular decisions',
  'Holiday and vacation schedules',
]

export default function Mediation() {
  return (
    <div>
      <PageHeader
        title="Family Law Mediation"
        subtitle="A less adversarial, cost-effective path to resolving family law disputes outside of court."
        breadcrumbs={[{ label: 'Family Law', href: '/family-law' }, { label: 'Mediation' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Mediation Services</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 mb-6">Resolve Disputes Respectfully</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mediation offers divorcing couples and separated parents a way to resolve disputes respectfully and efficiently, without the stress, expense, and unpredictability of courtroom litigation. A neutral mediator helps both parties communicate effectively and work toward solutions that work for everyone.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Attorney Claire Wen Lee is a trained family law mediator who brings both legal expertise and interpersonal skill to the mediation process. Whether you need her to represent you in mediation or to serve as the neutral mediator, she provides the clarity and guidance needed to reach durable agreements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Mediation is particularly valuable for families with children, as it helps establish cooperative co-parenting patterns rather than entrenching conflict. Research consistently shows that children fare better when their parents resolve disputes cooperatively.
              </p>

              <div className="p-5 bg-gold-50 border border-gold-200 rounded-xl">
                <h4 className="text-navy-700 font-bold mb-3">Issues Resolved Through Mediation</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {issues.map(issue => (
                    <div key={issue} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      {issue}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-navy-700 font-bold text-xl mb-6">Benefits of Mediation</h3>
              <div className="space-y-4">
                {benefits.map(b => (
                  <div key={b.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="text-navy-700 font-bold text-base mb-1">{b.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-navy-700 mb-2">The Mediation Process</h2>
              <p className="text-gray-600 text-sm">What to expect during family law mediation at JWLegal.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map(p => (
                <div key={p.step} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-extrabold text-navy-100 mb-2">{p.step}</div>
                  <h3 className="text-navy-700 font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Consider Mediation for Your Family Law Matter"
        subtitle="Mediation can be a faster, less expensive, and more humane way to resolve family disputes. Contact us to learn if mediation is right for your situation."
      />
    </div>
  )
}
