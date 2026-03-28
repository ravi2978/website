import React from 'react'
import { BookOpen, Mic, FileText, ArrowRight, ExternalLink } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const articles = [
  {
    year: '2025',
    title: 'Navigating the Intersection of Family Law and Immigration Status in Maryland',
    publication: 'Maryland Bar Journal',
    type: 'Journal Article',
    description: 'Examines how immigration status affects family law proceedings, including divorce, custody, and property division, with practical guidance for practitioners.',
  },
  {
    year: '2024',
    title: 'DACA at a Crossroads: Current Status and Practitioner Guidance',
    publication: 'AILA Maryland/DC Chapter Newsletter',
    type: 'Practice Article',
    description: 'Provides an updated analysis of the DACA program\'s legal status following recent court decisions and offers practical advice for clients with pending renewals.',
  },
  {
    year: '2023',
    title: 'Collaborative Divorce as a Tool for Immigrant Families',
    publication: 'Maryland Family Law Quarterly',
    type: 'Journal Article',
    description: 'Explores how the collaborative divorce process can be particularly beneficial for immigrant families concerned about how divorce proceedings might affect immigration status.',
  },
  {
    year: '2022',
    title: 'Protecting Domestic Violence Survivors Through Immigration: VAWA and U-Visa Strategies',
    publication: 'National Immigration Project Newsletter',
    type: 'Practice Guide',
    description: 'A comprehensive guide for practitioners representing immigrant domestic violence survivors, covering VAWA self-petitions, U-Visa applications, and safety planning.',
  },
  {
    year: '2021',
    title: 'The Bond Hearing as a Critical Juncture: Advocacy Strategies in Immigration Detention',
    publication: 'Immigration Law Today (AILA)',
    type: 'Practice Article',
    description: 'Analyzes bond hearing procedures in immigration court and provides detailed advocacy strategies to maximize the likelihood of securing reasonable bond for detained clients.',
  },
  {
    year: '2020',
    title: 'Child Custody When One Parent Faces Deportation: Maryland Practitioner Guide',
    publication: 'Howard County Bar Association Newsletter',
    type: 'Practice Guide',
    description: 'Addresses the unique challenges that arise in custody proceedings when one parent is subject to removal, including emergency custody orders and international considerations.',
  },
]

const speaking = [
  {
    year: '2025',
    title: 'Immigration Consequences of Divorce: What Every Family Lawyer Must Know',
    event: 'Maryland Family Law Symposium',
    location: 'Annapolis, Maryland',
    role: 'Featured Panelist',
  },
  {
    year: '2024',
    title: 'Representing Detained Immigrants: A Practical Workshop',
    event: 'AILA Maryland/DC Chapter CLE Event',
    location: 'Baltimore, Maryland',
    role: 'Workshop Presenter',
  },
  {
    year: '2024',
    title: 'Know Your Rights: Immigration Law in 2024',
    event: 'Howard County Library Community Forum',
    location: 'Columbia, Maryland',
    role: 'Keynote Speaker',
  },
  {
    year: '2023',
    title: 'The Collaborative Approach to Family Law',
    event: 'Maryland Bar Association Annual Meeting',
    location: 'Ocean City, Maryland',
    role: 'Presenter',
  },
  {
    year: '2022',
    title: 'Bilingual Legal Services and Cultural Competency in Family Law',
    event: 'Asian Pacific American Bar Association of Maryland Annual Conference',
    location: 'Rockville, Maryland',
    role: 'Featured Speaker',
  },
]

export default function Publications() {
  return (
    <div>
      <PageHeader
        title="Publications & Speaking"
        subtitle="Attorney Lee's written contributions to legal scholarship and speaking engagements in the legal community."
        breadcrumbs={[{ label: 'Meet Claire', href: '/meet-claire' }, { label: 'Publications' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Publications */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Publications & Articles</span>
            </div>
            <div className="space-y-6">
              {articles.map((article, i) => (
                <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-navy-700 rounded-xl flex items-center justify-center">
                      <FileText className="w-7 h-7 text-gold-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full">{article.type}</span>
                      <span className="text-gray-400 text-xs">{article.year}</span>
                    </div>
                    <h3 className="text-navy-700 font-bold text-base mb-1 group-hover:text-gold-600 transition-colors">
                      {article.title}
                    </h3>
                    <div className="text-gold-600 text-sm font-semibold mb-2">{article.publication}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speaking */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Speaking Engagements</span>
            </div>
            <div className="space-y-4">
              {speaking.map((s, i) => (
                <div key={i} className="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mic className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full">{s.role}</span>
                      <span className="text-gray-400 text-xs">{s.year}</span>
                    </div>
                    <h3 className="text-navy-700 font-semibold text-sm mb-0.5">{s.title}</h3>
                    <div className="text-gold-600 text-xs font-medium">{s.event}</div>
                    <div className="text-gray-400 text-xs">{s.location}</div>
                  </div>
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
