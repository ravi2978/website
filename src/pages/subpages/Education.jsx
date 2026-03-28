import React from 'react'
import { GraduationCap, BookOpen, Award, ArrowRight } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const education = [
  {
    degree: 'Juris Doctor (J.D.)',
    school: 'University of Maryland Francis King Carey School of Law',
    location: 'Baltimore, Maryland',
    year: '2008',
    honors: 'Cum Laude',
    details: [
      'Focus in Public Interest Law',
      'Member, Maryland Law Review',
      'Immigration Law Clinic participant',
      'Dean\'s List, multiple semesters',
      'Pro Bono Honor Award recipient',
    ],
  },
  {
    degree: 'Bachelor of Arts — Political Science & International Studies',
    school: 'Johns Hopkins University',
    location: 'Baltimore, Maryland',
    year: '2004',
    honors: 'Magna Cum Laude',
    details: [
      'Double Major: Political Science & International Studies',
      'Senior Thesis: Immigration Policy and Family Reunification',
      'Phi Beta Kappa honor society',
      'Dean\'s List, all semesters',
    ],
  },
]

const cle = [
  { year: '2025', title: 'Advanced Immigration Court Practice', provider: 'AILA National Conference' },
  { year: '2024', title: 'Family Law Mediation Certification', provider: 'Maryland Mediation & Conflict Resolution Office' },
  { year: '2024', title: 'DACA Policy Updates and Practice Strategies', provider: 'American Immigration Lawyers Association' },
  { year: '2023', title: 'Collaborative Law Training Program', provider: 'International Academy of Collaborative Professionals' },
  { year: '2023', title: 'Maryland Family Law Annual Update', provider: 'Maryland State Bar Association' },
  { year: '2022', title: 'Removal Defense Strategies Workshop', provider: 'National Immigration Project' },
  { year: '2022', title: 'Technology in Legal Practice', provider: 'Maryland Bar Foundation' },
  { year: '2021', title: 'Ethics in Immigration Practice', provider: 'AILA Maryland/DC Chapter' },
]

export default function Education() {
  return (
    <div>
      <PageHeader
        title="Education"
        subtitle="Academic credentials and continuing legal education that inform Attorney Lee's practice."
        breadcrumbs={[{ label: 'Meet Claire', href: '/meet-claire' }, { label: 'Education' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Academic */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Academic Background</span>
              </div>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className={`rounded-2xl p-7 border ${i === 0 ? 'bg-navy-700 text-white border-navy-600' : 'bg-gray-50 border-gray-100'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${i === 0 ? 'bg-gold-500/20' : 'bg-navy-100'}`}>
                      <GraduationCap className={`w-7 h-7 ${i === 0 ? 'text-gold-400' : 'text-navy-700'}`} />
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        i === 0 ? 'bg-gold-500/20 text-gold-300' : 'bg-navy-100 text-navy-700'
                      }`}>
                        Class of {edu.year}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        i === 0 ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                      }`}>
                        {edu.honors}
                      </span>
                    </div>
                    <h3 className={`font-extrabold text-xl mb-1 ${i === 0 ? 'text-white' : 'text-navy-700'}`}>{edu.degree}</h3>
                    <div className={`font-semibold mb-0.5 ${i === 0 ? 'text-gold-400' : 'text-gold-600'}`}>{edu.school}</div>
                    <div className={`text-xs mb-5 ${i === 0 ? 'text-navy-400' : 'text-gray-400'}`}>{edu.location}</div>
                    <ul className="space-y-1.5">
                      {edu.details.map(d => (
                        <li key={d} className={`flex items-start gap-2 text-sm ${i === 0 ? 'text-navy-200' : 'text-gray-600'}`}>
                          <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${i === 0 ? 'text-gold-400' : 'text-gold-500'}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CLE */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Continuing Legal Education</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Attorney Lee stays at the forefront of immigration and family law through rigorous continuing legal education, exceeding Maryland's requirements every year.
              </p>
              <div className="space-y-3">
                {cle.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                    <div className="text-center flex-shrink-0">
                      <div className="text-xs font-bold text-gold-600 bg-gold-100 rounded px-2 py-1">{item.year}</div>
                    </div>
                    <div>
                      <div className="text-navy-700 font-semibold text-sm">{item.title}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{item.provider}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
