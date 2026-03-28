import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Phone, Clock, AlertCircle, ArrowRight, CheckCircle, Users } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const services = [
  { title: 'Emergency Bond Hearings', desc: 'Immediate legal action to request a bond hearing before an immigration judge to secure your loved one\'s release from detention.' },
  { title: 'Removal Defense', desc: 'Comprehensive defense against deportation orders, including motions to terminate, cancellation of removal, and appeals.' },
  { title: 'Habeas Corpus Petitions', desc: 'Filing federal habeas corpus petitions to challenge unlawful detention in U.S. District Court.' },
  { title: 'Voluntary Departure', desc: 'When appropriate, negotiating voluntary departure as an alternative to a formal deportation order.' },
  { title: 'Stay of Removal', desc: 'Emergency motions to stay a removal order when a client faces an imminent deportation flight.' },
  { title: 'Post-Order Relief', desc: 'Filing motions to reopen or reconsider after a removal order has been entered.' },
]

const steps = [
  { step: '1', title: 'Call Immediately', desc: 'Contact JWLegal as soon as you learn a loved one has been detained. Time is critical — bond hearings must be requested quickly.' },
  { step: '2', title: 'Gather Information', desc: 'We\'ll help you locate the detained person using the ICE detainee locator and gather details about their case.' },
  { step: '3', title: 'Retention & Strategy', desc: 'We quickly assess the case, identify relief options, and develop an urgent legal strategy.' },
  { step: '4', title: 'Bond Hearing', desc: 'We file for a bond hearing as soon as possible and present the strongest case for release at the hearing.' },
  { step: '5', title: 'Ongoing Defense', desc: 'Following release (or while detained), we build the full removal defense case for immigration court hearings.' },
]

export default function DetainedIndividuals() {
  return (
    <div>
      <PageHeader
        title="Detained Individuals"
        subtitle="Urgent legal representation for individuals held in immigration detention throughout Maryland and the mid-Atlantic region."
        breadcrumbs={[
          { label: 'Immigration Law', href: '/immigration-law' },
          { label: 'Detained Individuals' }
        ]}
      />

      {/* Urgent banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold text-sm">Has a family member been detained by ICE? Time is critical.</span>
          </div>
          <a href="tel:4105289300" className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-4 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors flex-shrink-0">
            <Phone className="w-4 h-4" />
            Call Now: (410) 528-9300
          </a>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Detention Defense</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 mb-6">When Every Hour Counts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Immigration detention is a terrifying experience for individuals and their families. When a loved one is detained by ICE, the fear and confusion can feel overwhelming. JWLegal provides urgent, experienced legal representation to help secure release and build the strongest possible defense.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Attorney Claire Wen Lee has represented numerous detained individuals before immigration courts throughout Maryland. She understands the detention system, knows how to navigate it effectively, and brings urgency and compassion to every detention matter.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We regularly handle cases in immigration courts across Maryland and have experience representing clients detained at the following facilities: Howard County Detention Center, Dorchester County Detention Center, and facilities in the mid-Atlantic region.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-700 font-bold mb-1">Act Immediately</h4>
                    <p className="text-red-600 text-sm">Bond hearings must be requested promptly. The longer a person remains detained, the harder it can be to secure release. Call us now — we accept urgent detention cases.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-navy-700 font-bold text-xl mb-2">Services for Detained Individuals</h3>
              {services.map(s => (
                <div key={s.title} className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-navy-700 font-semibold text-sm">{s.title}</div>
                    <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-navy-700 mb-2">What to Do When a Loved One Is Detained</h2>
              <p className="text-gray-600 text-sm">Follow these steps immediately if a family member is detained by immigration authorities.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map(s => (
                <div key={s.step} className="text-center p-5 bg-navy-50 rounded-xl border border-navy-100">
                  <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold-400 font-extrabold text-sm">{s.step}</span>
                  </div>
                  <h3 className="text-navy-700 font-bold text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Urgent: Is a Family Member Detained?"
        subtitle="Do not wait. Contact JWLegal immediately. Attorney Lee handles urgent detention matters and can provide immediate guidance on next steps."
      />
    </div>
  )
}
