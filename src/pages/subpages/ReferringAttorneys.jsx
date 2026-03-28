import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, Users, Globe, ArrowRight, Phone, Mail, CheckCircle, Star, Shield } from 'lucide-react'
import PageHeader from '../../components/PageHeader'

const referralAreas = [
  { icon: Globe, label: 'Immigration Law', items: ['Family-based petitions', 'Removal defense', 'Naturalization', 'Detained individuals', 'DACA/work authorization', 'Asylum matters'] },
  { icon: Users, label: 'Family Law', items: ['Divorce & separation', 'Child custody & support', 'Spousal support', 'Property division', 'Domestic violence', 'Post-decree modifications'] },
  { icon: Scale, label: 'Intersection Cases', items: ['Divorce with immigration implications', 'VAWA self-petitions', 'U-Visa for crime victims', 'International custody disputes', 'Cross-border family matters', 'Conditional residence removal'] },
]

const benefits = [
  { title: 'Prompt Response', desc: 'We respond to referral inquiries within one business day and provide timely case updates.' },
  { title: 'Client Care', desc: 'Your clients will receive the same quality attention that earned your trust in the first place.' },
  { title: 'Referral Coordination', desc: 'We coordinate closely with referring attorneys to ensure seamless transitions and continuity of care.' },
  { title: 'Co-Counsel Arrangements', desc: 'Open to co-counsel arrangements on complex matters that span multiple practice areas.' },
  { title: 'Ethical Standards', desc: 'All referral relationships are handled in strict compliance with Maryland Rules of Professional Conduct.' },
  { title: 'Regular Updates', desc: 'We keep you informed of case developments so you can maintain the attorney-client relationship with your client.' },
]

export default function ReferringAttorneys() {
  return (
    <div>
      <PageHeader
        title="Referring Attorneys"
        subtitle="Information for attorneys seeking to refer clients for immigration or family law representation in Maryland."
        breadcrumbs={[{ label: 'Our Firm', href: '/our-firm' }, { label: 'Referring Attorneys' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Attorney Referrals</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 mb-6">Partner With JWLegal</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                JWLegal welcomes referrals from attorneys throughout Maryland and the mid-Atlantic region. We understand that your clients are your most valuable relationships, and we take that responsibility seriously.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether your client needs specialized immigration counsel, family law representation, or assistance with a matter at the intersection of both areas, Attorney Claire Wen Lee is prepared to provide the focused, high-quality representation they deserve.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We handle referrals with the utmost professionalism and confidentiality. Our commitment to your client reflects on your practice, and we never take that responsibility lightly.
              </p>

              <div className="flex flex-col gap-3">
                <a href="tel:4105289300" className="inline-flex items-center gap-3 text-navy-700 hover:text-gold-600 font-semibold transition-colors">
                  <Phone className="w-5 h-5 text-gold-500" />
                  (410) 528-9300 — Direct Attorney Line
                </a>
                <a href="mailto:info@jwlegal.com" className="inline-flex items-center gap-3 text-navy-700 hover:text-gold-600 font-semibold transition-colors">
                  <Mail className="w-5 h-5 text-gold-500" />
                  info@jwlegal.com — Referral Inquiries
                </a>
              </div>
            </div>

            <div className="bg-navy-700 rounded-2xl p-8 text-white">
              <Star className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-6">Why Refer to JWLegal?</h3>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map(b => (
                  <div key={b.title} className="border-b border-navy-600 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span className="text-white font-semibold text-sm">{b.title}</span>
                    </div>
                    <p className="text-navy-300 text-xs leading-relaxed pl-6">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Areas of referral */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-navy-700 mb-2">Areas Accepting Referrals</h2>
              <p className="text-gray-600 text-sm">We welcome client referrals in the following practice areas:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {referralAreas.map(area => (
                <div key={area.label} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-navy-700 font-bold text-lg mb-3">{area.label}</h3>
                  <ul className="space-y-2">
                    {area.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-3 h-3 text-gold-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gold-50 border border-gold-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-navy-700 font-bold mb-1">Ethical Compliance</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All attorney referral arrangements at JWLegal are conducted in strict compliance with the Maryland Rules of Professional Conduct, including Rules 1.5(e) and 7.2. We are committed to transparency and ethical practice in all professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
