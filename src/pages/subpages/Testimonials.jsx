import React, { useState } from 'react'
import { Star, Quote } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const testimonials = [
  {
    name: 'Maria G.',
    role: 'Immigration Client',
    type: 'Immigration Law',
    stars: 5,
    text: 'Claire Wen Lee helped my family through a very difficult immigration process. Her expertise and compassion made all the difference. We are so grateful for her dedication and hard work. She kept us informed throughout and made us feel like we were her only clients.'
  },
  {
    name: 'David K.',
    role: 'Family Law Client',
    type: 'Family Law',
    stars: 5,
    text: 'During the most stressful time of my life, Claire provided clear guidance and fought tirelessly for my rights. She truly understands what families go through and treats every case personally. I could not have navigated my divorce without her.'
  },
  {
    name: 'Jennifer L.',
    role: 'Immigration & Family Client',
    type: 'Both',
    stars: 5,
    text: 'JWLegal is exceptional. Having an attorney who handles both immigration and family law matters was incredibly convenient when my divorce had immigration implications. Claire is thorough, professional, and truly cares about her clients.'
  },
  {
    name: 'Robert T.',
    role: 'Family Law Client',
    type: 'Family Law',
    stars: 5,
    text: 'Attorney Lee helped me get a fair custody arrangement for my children. She was strategic, professional, and always had my children\'s best interests in mind. Her knowledge of Maryland family law is outstanding.'
  },
  {
    name: 'Wei C.',
    role: 'Immigration Client',
    type: 'Immigration Law',
    stars: 5,
    text: 'Attorney Lee helped me and my family with our green card applications. Being able to communicate in Mandarin made such a difference — I felt truly understood and my case was handled flawlessly. I became a U.S. citizen last year!'
  },
  {
    name: 'Sofia M.',
    role: 'Immigration Client',
    type: 'Immigration Law',
    stars: 5,
    text: 'When my husband was detained, I was terrified. Claire immediately took action and secured his release within days. Her knowledge of immigration detention procedures was crucial. She gave us our lives back.'
  },
  {
    name: 'Kevin B.',
    role: 'Family Law Client',
    type: 'Family Law',
    stars: 5,
    text: 'I chose collaborative divorce on Claire\'s advice and it was the best decision I made. The process was respectful and we reached a fair agreement without a bitter court battle. My children were spared a lot of unnecessary pain.'
  },
  {
    name: 'Ling Z.',
    role: 'Immigration Client',
    type: 'Immigration Law',
    stars: 5,
    text: 'JWLegal handled my naturalization case from start to finish. The process was smooth and Claire\'s preparation made me feel completely confident going into my interview. I am now a proud U.S. citizen!'
  },
  {
    name: 'Patricia H.',
    role: 'Family Law Client',
    type: 'Family Law',
    stars: 5,
    text: 'The mediation process Claire guided us through saved my family months of painful litigation. She helped us reach a fair settlement in our divorce that both sides could live with. I highly recommend her approach.'
  },
]

const filters = ['All', 'Immigration Law', 'Family Law', 'Both']

export default function Testimonials() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? testimonials : testimonials.filter(t => t.type === active)

  return (
    <div>
      <PageHeader
        title="Client Testimonials"
        subtitle="The trust our clients place in us is our greatest honor. Here are their stories in their own words."
        breadcrumbs={[{ label: 'Our Firm', href: '/our-firm' }, { label: 'Testimonials' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rating summary */}
          <div className="bg-navy-700 rounded-2xl p-8 mb-12 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-extrabold text-gold-400 mb-2">5.0</div>
                <div className="flex justify-center mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />)}
                </div>
                <div className="text-navy-300 text-sm">Average Rating</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-gold-400 mb-2">{testimonials.length}+</div>
                <div className="text-white font-semibold mb-1">Client Reviews</div>
                <div className="text-navy-300 text-sm">From satisfied clients</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-gold-400 mb-2">100%</div>
                <div className="text-white font-semibold mb-1">Would Recommend</div>
                <div className="text-navy-300 text-sm">Attorney Claire Wen Lee</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === f ? 'bg-navy-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Testimonials grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow relative">
                <Quote className="w-8 h-8 text-gold-200 absolute top-4 right-4" />
                <div className="flex mb-3">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block ${
                  t.type === 'Immigration Law' ? 'bg-navy-100 text-navy-700' :
                  t.type === 'Family Law' ? 'bg-gold-100 text-gold-700' :
                  'bg-gray-200 text-gray-700'
                }`}>
                  {t.type}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-navy-700 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gold-50 border border-gold-200 rounded-xl p-6 text-center">
            <p className="text-gray-600 text-sm">
              These testimonials represent the genuine experiences of former clients. Results may vary. Past performance does not guarantee future outcomes.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
