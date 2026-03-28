import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', practiceArea: '', subject: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out today to schedule a confidential consultation with Attorney Claire Wen Lee."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Send a Message</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we will contact you within one business day. All communications are confidential.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Received!</h3>
                  <p className="text-green-700 text-sm">
                    Thank you for contacting JWLegal. Attorney Lee will review your message and respond within one business day. If you have an urgent matter, please call us at (410) 528-9300.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" name="firstName" required value={form.firstName} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" name="lastName" required value={form.lastName} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                        placeholder="(410) 555-1234"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Practice Area <span className="text-red-500">*</span></label>
                    <select
                      name="practiceArea" required value={form.practiceArea} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors bg-white"
                    >
                      <option value="">Select a practice area...</option>
                      <option value="immigration-general">Immigration Law - General</option>
                      <option value="immigration-detained">Immigration Law - Detained Individual</option>
                      <option value="immigration-family">Immigration Law - Family Based</option>
                      <option value="family-divorce">Family Law - Divorce</option>
                      <option value="family-custody">Family Law - Child Custody</option>
                      <option value="family-support">Family Law - Child/Spousal Support</option>
                      <option value="family-other">Family Law - Other</option>
                      <option value="both">Both Immigration & Family Law</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                    <input
                      type="text" name="subject" required value={form.subject} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                      placeholder="Brief description of your legal matter"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange} rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors resize-none"
                      placeholder="Please describe your legal situation and what help you are seeking..."
                    />
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    By submitting this form, you understand that no attorney-client relationship is formed until a written agreement is signed. This form is not confidential until such relationship is established.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 text-white font-bold px-6 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Office Information</span>
              </div>
              <h2 className="text-2xl font-extrabold text-navy-700 mb-6">Contact Details</h2>

              {/* Contact cards */}
              {[
                { icon: MapPin, label: 'Office Location', value: 'Columbia, Maryland 21044', sub: 'Serving clients throughout MD' },
                { icon: Phone, label: 'Phone', value: '(410) 528-9300', href: 'tel:4105289300' },
                { icon: Mail, label: 'Email', value: 'info@jwlegal.com', href: 'mailto:info@jwlegal.com' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-navy-700 font-semibold hover:text-gold-600 transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-navy-700 font-semibold">{item.value}</div>
                    )}
                    {item.sub && <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="p-5 bg-navy-700 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span className="font-bold text-sm uppercase tracking-wider">Office Hours</span>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
                    { day: 'Saturday', hours: 'By Appointment' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map(h => (
                    <div key={h.day} className="flex justify-between items-center text-sm border-b border-navy-600 pb-2 last:border-0 last:pb-0">
                      <span className="text-navy-300">{h.day}</span>
                      <span className={h.hours === 'Closed' ? 'text-navy-400' : 'text-white font-medium'}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">Columbia, Maryland</div>
                  <div className="text-xs">Howard County</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
