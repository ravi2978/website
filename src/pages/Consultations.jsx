import React, { useState } from 'react'
import { Calendar, CheckCircle, Clock, Phone, MessageSquare, ArrowRight, Send, Users, Scale } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const reasons = [
  { icon: Scale, title: 'Understand Your Rights', desc: 'Know exactly where you stand legally before making any decisions that could affect your future.' },
  { icon: Users, title: 'Evaluate Your Options', desc: 'Explore all available legal pathways with an experienced attorney who can identify your best course of action.' },
  { icon: Clock, title: 'Act Before Deadlines', desc: 'Immigration and family law matters often have strict deadlines. Early consultation prevents costly delays.' },
  { icon: MessageSquare, title: 'Get Clear Answers', desc: 'Receive honest, plain-language answers to your specific questions without judgment or pressure.' },
]

const whatToExpect = [
  'Confidential, private setting',
  'Approximately 60 minutes',
  'Review of your specific situation',
  'Assessment of legal options',
  'Discussion of timeline and costs',
  'Direct answers to your questions',
  'No pressure to retain our services',
  'Written follow-up if needed',
]

export default function Consultations() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', practiceArea: '', preferred: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <div>
      <PageHeader
        title="Schedule a Consultation"
        subtitle="Take the first step toward protecting your future. Schedule a confidential consultation with Attorney Claire Wen Lee."
        breadcrumbs={[{ label: 'Consultations' }]}
      />

      {/* Why consult */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="section-heading text-center">Why Schedule a Consultation?</h2>
            <p className="section-subheading mx-auto text-center">
              A consultation with Attorney Lee is the most important first step you can take. Here's what you gain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(r => (
              <div key={r.title} className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-700 transition-colors">
                  <r.icon className="w-7 h-7 text-navy-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-navy-700 font-bold mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect + form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - What to expect */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">What to Expect</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 mb-6">Your Consultation Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your consultation with Attorney Claire Wen Lee is a private, no-pressure opportunity to discuss your legal situation and understand your options. We want you to leave feeling informed and empowered, regardless of whether you decide to retain our firm.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {whatToExpect.map(item => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span className="text-navy-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-navy-700 rounded-xl p-6 text-white">
                <h3 className="text-gold-400 font-bold mb-4">How to Prepare</h3>
                <ul className="space-y-2 text-navy-200 text-sm">
                  {[
                    'Gather relevant documents (IDs, court orders, visa documents)',
                    'Write down your key questions ahead of time',
                    'Note important dates and timelines related to your matter',
                    'Be prepared to share relevant background information',
                    'Bring contact information for opposing parties if applicable',
                  ].map(tip => (
                    <li key={tip} className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-5 bg-gold-50 border border-gold-200 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-gold-600" />
                  <span className="font-bold text-navy-700">Prefer to call?</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Reach us directly at:</p>
                <a href="tel:4105289300" className="text-gold-600 font-bold text-lg hover:text-gold-700 transition-colors">
                  (410) 528-9300
                </a>
                <p className="text-gray-400 text-xs mt-1">Monday–Friday, 9:00 AM – 5:00 PM</p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-gold-500" />
                  <h3 className="text-xl font-extrabold text-navy-700">Request a Consultation</h3>
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Request Received!</h3>
                    <p className="text-gray-600 text-sm">
                      We'll contact you within one business day to confirm your consultation. For urgent matters, call (410) 528-9300.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-navy-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                        <input type="text" name="firstName" required value={form.firstName} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                          placeholder="Jane" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                        <input type="text" name="lastName" required value={form.lastName} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                          placeholder="Smith" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                        placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Phone <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                        placeholder="(410) 555-1234" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Practice Area <span className="text-red-500">*</span></label>
                      <select name="practiceArea" required value={form.practiceArea} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 bg-white">
                        <option value="">Select...</option>
                        <option value="immigration">Immigration Law</option>
                        <option value="family">Family Law</option>
                        <option value="both">Both / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Preferred Contact Method</label>
                      <select name="preferred" value={form.preferred} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 bg-white">
                        <option value="">No preference</option>
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Brief Description <span className="text-red-500">*</span></label>
                      <textarea name="message" required value={form.message} onChange={handleChange} rows={4}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 resize-none"
                        placeholder="Please briefly describe your legal matter..." />
                    </div>
                    <p className="text-xs text-gray-400">Submitting this form does not create an attorney-client relationship.</p>
                    <button type="submit" disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 text-white font-bold px-6 py-3.5 rounded-lg transition-all duration-200 shadow-md">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                          Submitting...
                        </span>
                      ) : (
                        <><Send className="w-4 h-4" /> Request Consultation</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
