import React from 'react'
import { Heart, Scale, Shield, Users, Star, CheckCircle } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const pillars = [
  {
    icon: Heart,
    title: 'Client-Centered Practice',
    description: 'At JWLegal, every decision we make starts with one question: what is best for our client? We refuse to take a one-size-fits-all approach to legal representation. Each client\'s goals, circumstances, and concerns drive our strategy from day one.'
  },
  {
    icon: Scale,
    title: 'Honest, Transparent Counsel',
    description: 'We believe our clients deserve the truth, even when it\'s not what they want to hear. We provide honest assessments of your legal position, realistic expectations about outcomes, and clear explanations of costs — so you can make fully informed decisions.'
  },
  {
    icon: Shield,
    title: 'Zealous Advocacy',
    description: 'When you retain JWLegal, we become your dedicated advocates. Whether we are negotiating a settlement or arguing before a judge, we bring the same level of preparation, skill, and tenacity to every matter regardless of its size or complexity.'
  },
  {
    icon: Users,
    title: 'Accessible Communication',
    description: 'Legal jargon and confusing processes should never be a barrier to justice. We communicate in plain language, respond promptly to client inquiries, and ensure that you always know what is happening with your case and why.'
  },
]

const beliefs = [
  'Every client deserves direct access to their attorney',
  'Legal representation should be culturally sensitive and linguistically accessible',
  'Immigration and family law matters require both strategic skill and human compassion',
  'Clients make better decisions when fully informed',
  'The legal system can and should work for everyone, regardless of background',
  'Long-term client relationships are built on trust and results',
]

export default function FirmPhilosophy() {
  return (
    <div>
      <PageHeader
        title="Our Philosophy"
        subtitle="The principles and values that guide every aspect of how we practice law at JWLegal."
        breadcrumbs={[{ label: 'Our Firm', href: '/our-firm' }, { label: 'Our Philosophy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mb-6">Law With a Human Touch</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When Claire Wen Lee founded JWLegal, she did so with a clear vision: to create a law firm that combines legal excellence with genuine human connection. Too often, clients feel like case numbers in a large firm system. At JWLegal, we believe that is fundamentally wrong.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our philosophy is rooted in the belief that effective legal representation must be personal, transparent, and compassionate. The people who come to us are facing some of the most significant challenges of their lives — immigration uncertainty, family breakdown, or the fear of losing loved ones to deportation. They deserve an attorney who truly cares about their outcome.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {pillars.map(p => (
              <div key={p.title} className="flex gap-5 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-navy-700 font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote + Beliefs */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <blockquote className="bg-navy-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 left-4 text-gold-400 text-8xl font-serif leading-none opacity-20">"</div>
                <p className="text-navy-100 text-lg italic leading-relaxed relative z-10 mb-6">
                  I started JWLegal because I wanted to practice law the right way — with integrity, compassion, and genuine dedication to each person I represent. Immigration and family law affect people at their most vulnerable, and that demands nothing less than our very best.
                </p>
                <div className="border-t border-navy-600 pt-4">
                  <div className="text-gold-400 font-bold">Claire Wen Lee</div>
                  <div className="text-navy-400 text-sm">Founder & Managing Partner, JWLegal</div>
                </div>
              </blockquote>
            </div>

            <div>
              <h3 className="text-navy-700 font-bold text-xl mb-4">We Believe That...</h3>
              <ul className="space-y-3">
                {beliefs.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 bg-gold-50 border border-gold-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-gold-500" />
                  <span className="font-bold text-navy-700 text-sm">Our Promise to You</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When you hire JWLegal, you are not just getting a lawyer — you are gaining a dedicated partner who will be with you every step of the way. We are invested in your outcome because your success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
