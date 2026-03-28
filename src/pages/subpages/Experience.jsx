import React from 'react'
import { Briefcase, Scale, Globe, ArrowRight } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const experiences = [
  {
    period: '2015 – Present',
    title: 'Managing Partner',
    org: 'JWLegal, LLC',
    location: 'Columbia, Maryland',
    current: true,
    description: 'Founded and manages a boutique immigration and family law firm serving clients throughout Maryland. Handles all aspects of client representation including consultation, case strategy, document preparation, negotiation, and litigation.',
    highlights: [
      'Manages a diverse caseload of immigration and family law matters',
      'Represents clients in U.S. Immigration Court and Maryland family courts',
      'Provides bilingual services in English and Mandarin Chinese',
      'Supervises firm operations and supports community outreach programs',
    ],
  },
  {
    period: '2011 – 2015',
    title: 'Associate Attorney',
    org: 'Maryland Family & Immigration Law Group',
    location: 'Baltimore, Maryland',
    current: false,
    description: 'Represented clients in both immigration and family law matters before state and federal courts. Developed expertise in complex removal proceedings and high-conflict custody disputes.',
    highlights: [
      'Lead counsel on over 150 family law matters',
      'Represented respondents in removal proceedings',
      'Argued before the Maryland Court of Special Appeals',
      'Mentored junior associates in case preparation',
    ],
  },
  {
    period: '2008 – 2011',
    title: 'Staff Attorney',
    org: 'Immigrant Rights Legal Services',
    location: 'Silver Spring, Maryland',
    current: false,
    description: 'Provided free legal services to low-income immigrants facing removal and other immigration challenges. Developed a deep commitment to serving vulnerable populations and underserved communities.',
    highlights: [
      'Handled complex asylum and removal defense cases',
      'Conducted intake interviews and legal screenings',
      'Participated in immigration court clinics',
      'Trained volunteers and law students',
    ],
  },
]

const courtAdmissions = [
  { court: 'Maryland State Courts', year: '2008' },
  { court: 'U.S. District Court, District of Maryland', year: '2009' },
  { court: 'U.S. Immigration Courts (EOIR)', year: '2008' },
  { court: 'Board of Immigration Appeals', year: '2010' },
  { court: 'U.S. Court of Appeals, Fourth Circuit', year: '2013' },
]

export default function Experience() {
  return (
    <div>
      <PageHeader
        title="Professional Experience"
        subtitle="Over 15 years of dedicated legal practice in immigration law and family law across Maryland."
        breadcrumbs={[{ label: 'Meet Claire', href: '/meet-claire' }, { label: 'Experience' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Career Timeline</span>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-10">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-14">
                      <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                        exp.current ? 'bg-gold-500 border-gold-200' : 'bg-navy-700 border-navy-200'
                      }`}>
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>

                      <div className={`rounded-xl p-6 border ${exp.current ? 'border-gold-200 bg-gold-50' : 'border-gray-100 bg-gray-50'}`}>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            exp.current ? 'bg-gold-500 text-white' : 'bg-navy-100 text-navy-700'
                          }`}>
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Current</span>
                          )}
                        </div>
                        <h3 className="text-navy-700 font-extrabold text-xl mb-0.5">{exp.title}</h3>
                        <div className="text-gold-600 font-semibold text-sm mb-0.5">{exp.org}</div>
                        <div className="text-gray-400 text-xs mb-4">{exp.location}</div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{exp.description}</p>
                        <ul className="space-y-1.5">
                          {exp.highlights.map(h => (
                            <li key={h} className="flex items-start gap-2 text-gray-600 text-sm">
                              <ArrowRight className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy-700 rounded-xl p-6 text-white">
                <Scale className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="font-bold text-lg mb-4 text-gold-400">Court Admissions</h3>
                <ul className="space-y-3">
                  {courtAdmissions.map(c => (
                    <li key={c.court} className="border-b border-navy-600 pb-3 last:border-0 last:pb-0">
                      <div className="text-white text-sm font-medium">{c.court}</div>
                      <div className="text-navy-400 text-xs">Admitted {c.year}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <Globe className="w-8 h-8 text-navy-700 mb-4" />
                <h3 className="font-bold text-navy-700 text-lg mb-2">Language Skills</h3>
                <div className="space-y-2">
                  {[
                    { lang: 'English', level: 'Native', pct: 100 },
                    { lang: 'Mandarin Chinese', level: 'Fluent', pct: 95 },
                  ].map(l => (
                    <div key={l.lang}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-navy-700 font-medium">{l.lang}</span>
                        <span className="text-gray-500">{l.level}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-500 rounded-full" style={{ width: `${l.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
