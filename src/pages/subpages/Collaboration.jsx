import React from 'react'
import { Heart, Users, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import ContactCTA from '../../components/ContactCTA'

const team = [
  { role: 'Collaborative Attorneys', desc: 'Each party retains their own trained collaborative attorney who advocates for their client\'s interests while committed to a negotiated, non-litigated resolution.' },
  { role: 'Mental Health Professional', desc: 'A neutral mental health coach helps manage the emotional dimensions of the process, improving communication and helping parties stay focused on the future.' },
  { role: 'Financial Neutral', desc: 'A neutral financial specialist provides analysis of assets, income, and financial needs to help parties make informed decisions about property and support.' },
  { role: 'Child Specialist (Optional)', desc: 'When children are involved, a neutral child specialist can give children a voice in the process and provide guidance on parenting arrangements.' },
]

const commitments = [
  'Voluntary participation — either party may withdraw at any time',
  'Full transparency and disclosure of all relevant information',
  'Respectful communication, even on difficult issues',
  'Focus on meeting the needs of both parties and children',
  'No threats of litigation while the process is ongoing',
  'If the process fails, both attorneys must withdraw from the case',
]

const benefits = [
  { title: 'Control & Self-Determination', desc: 'You decide the outcome — not a judge. The collaborative process puts decision-making power where it belongs: with you and your family.' },
  { title: 'Privacy', desc: 'All collaborative discussions are confidential. No court hearings, no public records, no testimony about private family matters.' },
  { title: 'Comprehensive Solutions', desc: 'With financial and mental health professionals at the table, collaborative divorce addresses the full spectrum of family needs.' },
  { title: 'Better Co-Parenting', desc: 'The process builds communication skills and mutual respect, leading to better long-term co-parenting relationships.' },
]

export default function Collaboration() {
  return (
    <div>
      <PageHeader
        title="Collaborative Family Law"
        subtitle="A team-based, cooperative approach to resolving family law disputes with dignity and mutual respect."
        breadcrumbs={[{ label: 'Family Law', href: '/family-law' }, { label: 'Collaboration' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Collaborative Process</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 mb-6">Divorce Without Destruction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Collaborative law is a structured, team-based process for resolving family disputes without going to court. Unlike traditional litigation — which often entrenches conflict — the collaborative process is designed to help parties reach creative, mutually beneficial solutions in a respectful environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Attorney Claire Wen Lee is a certified collaborative attorney who has helped numerous Maryland families through this process. She is trained in the collaborative methodology and deeply committed to its principles of transparency, cooperation, and child-centered decision-making.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Collaborative law is ideal for couples who want to end their marriage respectfully, who want to protect their children from conflict, and who are willing to work in good faith toward fair solutions.
              </p>

              <div className="bg-navy-700 rounded-xl p-6 text-white">
                <Shield className="w-7 h-7 text-gold-400 mb-3" />
                <h3 className="text-gold-400 font-bold mb-4">The Collaborative Commitment</h3>
                <ul className="space-y-2">
                  {commitments.map(c => (
                    <li key={c} className="flex items-start gap-2 text-navy-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-navy-700 font-bold text-xl mb-6">The Collaborative Team</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Unlike mediation or litigation, the collaborative process brings together a team of professionals, each contributing specialized expertise to help your family reach a comprehensive agreement.
              </p>
              <div className="space-y-4">
                {team.map((member, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="text-navy-700 font-bold text-sm mb-1">{member.role}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{member.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-navy-700 mb-2">Why Choose Collaborative Law?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(b => (
                <div key={b.title} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-700 transition-colors">
                    <Star className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <h3 className="text-navy-700 font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Interested in a Collaborative Approach?"
        subtitle="The collaborative process may be the best path for your family. Schedule a consultation with Attorney Lee to learn if collaborative law is right for you."
      />
    </div>
  )
}
