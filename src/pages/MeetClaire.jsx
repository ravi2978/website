import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Award, BookOpen, Users, Star, ArrowRight, CheckCircle, Globe, GraduationCap, Briefcase } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactCTA from '../components/ContactCTA'

const subPages = [
  { label: 'Experience', href: '/meet-claire/experience', icon: Briefcase, desc: 'Legal career highlights and professional milestones' },
  { label: 'Education', href: '/meet-claire/education', icon: GraduationCap, desc: 'Academic background and continuing legal education' },
  { label: 'Associations', href: '/meet-claire/associations', icon: Users, desc: 'Professional memberships and bar admissions' },
  { label: 'Publications', href: '/meet-claire/publications', icon: BookOpen, desc: 'Articles, papers, and speaking engagements' },
  { label: 'Awards', href: '/meet-claire/awards', icon: Award, desc: 'Recognition and honors received' },
]

const credentials = [
  { label: 'Bar Admission', value: 'Maryland State Bar' },
  { label: 'Federal Courts', value: 'U.S. District Court, D. Maryland' },
  { label: 'Immigration Courts', value: 'Executive Office for Immigration Review' },
  { label: 'Languages', value: 'English & Mandarin Chinese' },
  { label: 'Practice Since', value: '2008' },
  { label: 'Firm Founded', value: 'JWLegal, LLC' },
]

export default function MeetClaire() {
  return (
    <div>
      <PageHeader
        title="Meet Claire Wen Lee"
        subtitle="Managing Partner & Attorney at Law — JWLegal, LLC"
        breadcrumbs={[{ label: 'Meet Claire' }]}
      />

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Photo / Credential sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Photo placeholder */}
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-navy-100 to-navy-200 overflow-hidden mb-6 shadow-xl relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-navy-200 border-4 border-white shadow-md flex items-center justify-center mb-4">
                      <Scale className="w-14 h-14 text-navy-500" />
                    </div>
                    <div className="text-navy-700 font-bold text-lg">Claire Wen Lee</div>
                    <div className="text-navy-500 text-sm">Attorney at Law</div>
                    <div className="flex mt-3">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />)}
                    </div>
                  </div>
                  <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur rounded-xl p-3 text-center">
                    <div className="text-navy-700 font-bold text-sm">JWLegal, LLC</div>
                    <div className="text-gray-500 text-xs">Columbia, Maryland</div>
                  </div>
                </div>

                {/* Credentials */}
                <div className="bg-navy-700 rounded-xl p-6 text-white">
                  <h3 className="text-gold-400 font-bold text-sm uppercase tracking-wider mb-4">Credentials</h3>
                  <ul className="space-y-3">
                    {credentials.map(c => (
                      <li key={c.label} className="border-b border-navy-600 pb-3 last:border-0 last:pb-0">
                        <div className="text-navy-400 text-xs uppercase tracking-wider mb-0.5">{c.label}</div>
                        <div className="text-white text-sm font-medium">{c.value}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Biography</span>
              </div>

              <h2 className="text-3xl font-extrabold text-navy-700 mb-6">
                Dedicated to Your Family's Future
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Claire Wen Lee is the Managing Partner of JWLegal, LLC, serving clients throughout Maryland with expertise in both immigration law and family law. With over 15 years of dedicated practice, Claire has helped hundreds of families navigate complex legal challenges with skill, compassion, and an unwavering commitment to achieving the best possible outcomes.
                </p>
                <p>
                  Before founding JWLegal, Claire gained invaluable experience working at prominent Maryland law firms where she honed her skills in both practice areas. This breadth of experience allows her to recognize when immigration and family law matters intersect — a critical skill that benefits many of her clients, particularly those facing family disputes with cross-border dimensions.
                </p>
                <p>
                  Claire's fluency in both English and Mandarin Chinese allows her to serve Maryland's Chinese-speaking community effectively, providing legal counsel in their native language and ensuring nothing is lost in translation during critical legal proceedings. She is deeply connected to the diverse communities of Howard County and the greater Baltimore-Washington metropolitan area.
                </p>
                <p>
                  Outside the courtroom, Claire is active in bar associations and community organizations. She regularly participates in legal education seminars and contributes to publications that help the public understand their legal rights. She is known for her approachable manner, strategic thinking, and genuine care for each client she represents.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="my-8 border-l-4 border-gold-500 pl-6 bg-gold-50 py-4 pr-4 rounded-r-xl">
                <p className="text-navy-700 italic text-lg font-medium leading-relaxed">
                  "My goal is not just to win cases, but to help families build stable, secure futures. Every client who walks through my door has a story that matters, and I take that responsibility seriously."
                </p>
                <footer className="mt-2 text-gold-600 font-semibold text-sm">— Claire Wen Lee</footer>
              </blockquote>

              {/* Key qualifications */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  'Licensed Maryland Attorney',
                  'Immigration Court Practitioner',
                  'Family Law Mediator',
                  'Bilingual English/Mandarin',
                  'Federal Court Admitted',
                  'Community Advocate',
                ].map(q => (
                  <div key={q} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span className="text-navy-700 text-sm font-medium">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-navy-700 mb-2">Learn More About Claire</h2>
            <p className="text-gray-600">Explore Claire's full professional background, accomplishments, and credentials.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-navy-200 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center group-hover:bg-navy-700 transition-colors flex-shrink-0">
                  <page.icon className="w-6 h-6 text-navy-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-navy-700 font-bold mb-1 group-hover:text-gold-600 transition-colors">{page.label}</h3>
                  <p className="text-gray-500 text-sm leading-snug">{page.desc}</p>
                  <div className="flex items-center gap-1 text-gold-500 text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                    View <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
