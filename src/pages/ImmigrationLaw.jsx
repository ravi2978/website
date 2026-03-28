import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Users, Shield, ArrowRight, CheckCircle, FileText, Clock, Award } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactCTA from '../components/ContactCTA'

const services = [
  {
    icon: Shield,
    title: 'Detained Individuals',
    href: '/immigration-law/detained-individuals',
    description: 'Immediate legal assistance for individuals detained by ICE or held in immigration detention facilities throughout Maryland and the mid-Atlantic region.',
    items: ['Bond hearings', 'Removal defense', 'Habeas corpus petitions', 'Emergency representation'],
    color: 'border-red-200 bg-red-50',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-700',
  },
  {
    icon: Users,
    title: 'Individuals & Families',
    href: '/immigration-law/individuals-families',
    description: 'Comprehensive immigration services for individuals and families seeking to build their lives in the United States through lawful immigration pathways.',
    items: ['Family-based petitions', 'Adjustment of status', 'Naturalization & citizenship', 'DACA & work authorization'],
    color: 'border-navy-200 bg-navy-50',
    iconBg: 'bg-navy-100',
    iconColor: 'text-navy-700',
  },
]

const processSteps = [
  { step: '01', title: 'Initial Consultation', description: 'We review your immigration history, goals, and options in a confidential consultation.' },
  { step: '02', title: 'Case Assessment', description: 'Attorney Lee evaluates your eligibility, identifies potential challenges, and develops a strategy.' },
  { step: '03', title: 'Document Preparation', description: 'We meticulously prepare and review all required forms, supporting documents, and submissions.' },
  { step: '04', title: 'Filing & Follow-Up', description: 'We file your case with the appropriate agency and provide updates throughout the process.' },
  { step: '05', title: 'Hearings & Interviews', description: 'We prepare you thoroughly and represent you at all immigration hearings and interviews.' },
  { step: '06', title: 'Resolution', description: 'We work tirelessly to achieve the best possible outcome and guide you through next steps.' },
]

const areas = [
  'Family-Based Petitions (I-130)',
  'Adjustment of Status',
  'Consular Processing',
  'Naturalization & Citizenship',
  'DACA Applications & Renewals',
  'Work Authorization (EAD)',
  'Removal Defense',
  'Bond Hearings',
  'Asylum Applications',
  'Waivers of Inadmissibility',
  'VAWA Petitions',
  'U & T Visa Applications',
  'Green Card Applications',
  'TPS Applications',
]

export default function ImmigrationLaw() {
  return (
    <div>
      <PageHeader
        title="Immigration Law"
        subtitle="Expert immigration legal services for individuals, families, and detained persons throughout Maryland."
        breadcrumbs={[{ label: 'Immigration Law' }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Immigration Practice</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mb-6">
                Navigating Immigration Law With Confidence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Immigration law is one of the most complex and constantly evolving areas of American law. A single error in paperwork or a missed deadline can have life-altering consequences for you and your family. Attorney Claire Wen Lee brings over 15 years of focused immigration practice to guide you through the process with precision and care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're pursuing a visa, green card, citizenship, or facing removal proceedings, JWLegal has the experience and dedication to achieve the best possible outcome. We serve Maryland's diverse immigrant communities and provide bilingual services in English and Mandarin Chinese.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our immigration practice covers everything from routine visa applications to complex removal defense cases. We treat every case with the urgency and attention it deserves, because we understand that for our clients, this is not just a legal matter — it is their life.
              </p>
            </div>

            <div className="bg-navy-700 rounded-2xl p-8 text-white">
              <Globe className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-6">Areas of Immigration Practice</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {areas.map(area => (
                  <div key={area} className="flex items-center gap-2 text-navy-200 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-navy-600">
                <Link to="/resources/immigration" className="flex items-center gap-2 text-gold-400 font-semibold text-sm hover:text-gold-300 transition-colors">
                  <FileText className="w-4 h-4" />
                  Immigration Resources & Forms
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
            <h2 className="section-heading text-center">Immigration Services</h2>
            <p className="section-subheading mx-auto text-center">We provide specialized services for two distinct immigration client groups.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map(s => (
              <div key={s.title} className={`rounded-2xl border-2 p-8 ${s.color}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${s.iconBg}`}>
                  <s.icon className={`w-7 h-7 ${s.iconColor}`} />
                </div>
                <h3 className="text-xl font-extrabold text-navy-700 mb-3">{s.title}</h3>
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
                  className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
            <h2 className="section-heading text-center">Our Immigration Process</h2>
            <p className="section-subheading mx-auto text-center">We guide you through every step of the immigration process with clarity and expertise.</p>
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
        title="Questions About Your Immigration Status?"
        subtitle="Contact JWLegal today for a confidential consultation with Attorney Claire Wen Lee. We'll help you understand your options and chart the best path forward."
      />
    </div>
  )
}
