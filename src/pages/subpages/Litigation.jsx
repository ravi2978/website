import React from 'react'
import { Scale, CheckCircle, ArrowRight, Shield } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const litigationServices = [
  {
    title: 'Divorce & Separation',
    desc: 'Both contested and uncontested divorce proceedings, including grounds-based and no-fault divorce under Maryland law. We guide you through every phase of the process.',
  },
  {
    title: 'Child Custody & Visitation',
    desc: 'Legal and physical custody disputes, parenting plans, visitation schedules, and relocation requests. We always keep the best interests of your children at the forefront.',
  },
  {
    title: 'Child Support',
    desc: 'Calculation, enforcement, and modification of child support obligations under Maryland\'s guidelines. We ensure every child receives the financial support they deserve.',
  },
  {
    title: 'Spousal Support / Alimony',
    desc: 'Arguing for appropriate alimony awards or defending against unreasonable requests. We understand the factors Maryland courts consider and use them strategically.',
  },
  {
    title: 'Marital Property Division',
    desc: 'Equitable distribution of marital assets and debts, including real estate, retirement accounts, businesses, and complex financial instruments.',
  },
  {
    title: 'Post-Decree Modifications',
    desc: 'When circumstances change substantially, we file motions to modify existing court orders on custody, support, or visitation to reflect your family\'s current reality.',
  },
  {
    title: 'Enforcement Actions',
    desc: 'When a court order is violated, we take swift legal action through contempt motions and other enforcement mechanisms to hold the other party accountable.',
  },
  {
    title: 'Protective Orders',
    desc: 'Emergency and final protective orders for victims of domestic violence. We move quickly to ensure your safety and the safety of your children.',
  },
]

const why = [
  'When the other party is uncooperative or acting in bad faith',
  'When there are significant assets or complex financial issues at stake',
  'When domestic violence or safety concerns are present',
  'When one party refuses reasonable settlement proposals',
  'When custody disputes involve allegations of abuse or neglect',
  'When a prior court order needs immediate enforcement',
]

export default function Litigation() {
  return (
    <div>
      <PageHeader
        title="Family Law Litigation"
        subtitle="When negotiation fails, JWLegal provides skilled, aggressive advocacy in Maryland family courts."
        breadcrumbs={[{ label: 'Family Law', href: '/family-law' }, { label: 'Litigation' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Courtroom Advocacy</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 mb-6">When You Need to Fight</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While JWLegal always explores alternatives to litigation first, we understand that sometimes going to court is unavoidable or simply the best option for our client. When litigation is the path forward, we are fully prepared to be fierce, effective advocates in Maryland family courts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Attorney Claire Wen Lee has extensive courtroom experience, having represented clients in hundreds of contested hearings and trials before Maryland circuit courts. She combines thorough case preparation with compelling oral advocacy to give clients the best possible chance of success.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From the initial complaint through discovery, motions practice, hearings, and trial, we handle every aspect of your family law litigation with skill, strategy, and unwavering dedication to your goals.
              </p>
              <div className="bg-navy-50 rounded-xl p-5 border border-navy-100">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-navy-700" />
                  <span className="font-bold text-navy-700 text-sm">When to Consider Litigation</span>
                </div>
                <ul className="space-y-2">
                  {why.map(w => (
                    <li key={w} className="flex items-start gap-2 text-gray-600 text-sm">
                      <ArrowRight className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-navy-700 font-bold text-xl mb-6">Litigation Services</h3>
              <div className="space-y-3">
                {litigationServices.map(s => (
                  <div key={s.title} className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Scale className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <h4 className="text-navy-700 font-semibold text-sm mb-0.5">{s.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Need Strong Courtroom Representation?"
        subtitle="If your family law matter requires aggressive advocacy in court, Attorney Claire Wen Lee is ready to fight for you. Contact us for a confidential consultation."
      />
    </div>
  )
}
