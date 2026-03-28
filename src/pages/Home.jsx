import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Globe, Users, ArrowRight, Star, Shield, Heart, Award, MessageSquare,
  ChevronDown, BookOpen, Scale, Phone, Mail, MapPin, CheckCircle, Calendar
} from 'lucide-react'
import ContactCTA from '../components/ContactCTA'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Cases Handled' },
  { value: '2', label: 'Practice Areas' },
  { value: 'Columbia', label: 'Maryland Based' },
]

const testimonials = [
  {
    name: 'Maria G.',
    role: 'Immigration Client',
    stars: 5,
    text: 'Claire Wen Lee helped my family through a very difficult immigration process. Her expertise and compassion made all the difference. We are so grateful for her dedication and hard work.'
  },
  {
    name: 'David K.',
    role: 'Family Law Client',
    stars: 5,
    text: 'During the most stressful time of my life, Claire provided clear guidance and fought tirelessly for my rights. She truly understands what families go through and treats every case personally.'
  },
  {
    name: 'Jennifer L.',
    role: 'Immigration & Family Client',
    stars: 5,
    text: 'JWLegal is exceptional. Having an attorney who handles both immigration and family law matters was incredibly convenient. Claire is thorough, professional, and truly cares about her clients.'
  },
]

const news = [
  {
    date: 'March 2026',
    category: 'Immigration Law',
    title: 'Understanding Recent Changes to Immigration Policy in 2026',
    excerpt: 'New federal guidelines are reshaping the immigration landscape. Here\'s what Maryland families need to know about how these changes may affect pending cases and future applications.',
    href: '/news',
  },
  {
    date: 'February 2026',
    category: 'Family Law',
    title: 'Mediation vs. Litigation: Choosing the Right Path for Your Family',
    excerpt: 'When facing a divorce or custody dispute, understanding your options can save time, money, and emotional stress. Attorney Claire Wen Lee explains the key differences.',
    href: '/news',
  },
  {
    date: 'January 2026',
    category: 'Immigration Law',
    title: 'DACA Updates: What Recipients and Families Should Know',
    excerpt: 'Recent court decisions have created new uncertainty for DACA recipients. Our immigration team breaks down the current status and steps you should take to protect your status.',
    href: '/news',
  },
]

const features = [
  {
    icon: Heart,
    title: 'Personalized Attention',
    description: 'Every client receives direct access to Attorney Claire Wen Lee. We believe in building personal relationships and providing tailored legal strategies.'
  },
  {
    icon: Globe,
    title: 'Bilingual Services',
    description: 'We provide services in both English and Mandarin Chinese, ensuring clear communication with our diverse client base throughout Maryland.'
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'With over 15 years of experience and hundreds of successful cases, our track record speaks for itself across both immigration and family law matters.'
  },
  {
    icon: Shield,
    title: 'Compassionate Approach',
    description: 'Legal challenges are deeply personal. We approach every case with empathy and understanding, treating clients with dignity and respect throughout the process.'
  },
]

export default function Home() {
  const [statsRef, statsInView] = useInView()
  const [aboutRef, aboutInView] = useInView()
  const [featuresRef, featuresInView] = useInView()
  const [testimonialsRef, testimonialsInView] = useInView()
  const [newsRef, newsInView] = useInView()

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold-500 opacity-5 rounded-full transform translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500 opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.015%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Maryland Immigration & Family Law</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Protecting<br />
                <span className="text-gold-400">What Matters</span><br />
                Most
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-navy-200 mb-8 leading-relaxed max-w-lg">
                Attorney <span className="text-white font-semibold">Claire Wen Lee</span> provides skilled, compassionate legal counsel in immigration law and family law throughout Maryland.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/consultations"
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Consultation
                </Link>
                <Link
                  to="/meet-claire"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy-700 font-bold px-8 py-4 rounded-lg transition-all duration-200 text-base"
                >
                  Meet Claire
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span className="text-navy-300 text-sm">Bilingual (English & Mandarin)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span className="text-navy-300 text-sm">Free Initial Consultation</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right – Attorney photo area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl bg-gradient-to-b from-navy-600 to-navy-800 border border-navy-500 overflow-hidden relative shadow-2xl">
                  {/* Decorative placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                    <div className="w-32 h-32 rounded-full bg-navy-500 border-4 border-gold-500/30 mb-4 flex items-center justify-center">
                      <Scale className="w-14 h-14 text-gold-400/50" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">Claire Wen Lee</div>
                      <div className="text-gold-400 text-sm">Managing Partner</div>
                      <div className="text-navy-300 text-xs mt-1">JWLegal, LLC</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    15+ Years
                  </div>
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                      <Scale className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <div className="text-navy-700 font-bold text-sm">Bar Admissions</div>
                      <div className="text-gray-500 text-xs">Maryland &bull; Federal Courts</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section ref={statsRef} className="bg-navy-700 py-10 border-t border-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <div className="text-3xl md:text-4xl font-extrabold text-gold-400 mb-1">{s.value}</div>
                <div className="text-navy-300 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="section-heading text-center">Our Practice Areas</h2>
            <p className="section-subheading mx-auto text-center">
              JWLegal focuses exclusively on immigration law and family law — two practice areas that often intersect and require specialized expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Immigration */}
            <Link
              to="/immigration-law"
              className="group bg-white rounded-2xl border border-gray-100 hover:border-navy-200 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="bg-navy-700 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                <Globe className="w-12 h-12 text-gold-400 mb-4 relative" />
                <h3 className="text-2xl font-bold text-white mb-2 relative">Immigration Law</h3>
                <p className="text-navy-200 text-sm relative">Expert guidance for individuals, families & detained persons</p>
              </div>
              <div className="p-8">
                <ul className="space-y-2 mb-6">
                  {['Family-based petitions & green cards', 'Naturalization & citizenship', 'Removal defense & detained individuals', 'Work visas & DACA/DAPA'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore Immigration Services <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Family Law */}
            <Link
              to="/family-law"
              className="group bg-white rounded-2xl border border-gray-100 hover:border-navy-200 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                <Users className="w-12 h-12 text-white mb-4 relative" />
                <h3 className="text-2xl font-bold text-white mb-2 relative">Family Law</h3>
                <p className="text-white/80 text-sm relative">Compassionate support through life's most challenging transitions</p>
              </div>
              <div className="p-8">
                <ul className="space-y-2 mb-6">
                  {['Divorce & legal separation', 'Child custody & visitation', 'Child support & alimony', 'Mediation & collaborative divorce'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore Family Law Services <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Claire */}
      <section ref={aboutRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/5] max-w-md rounded-2xl bg-gradient-to-b from-navy-100 to-navy-200 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-navy-200 border-4 border-white shadow-lg flex items-center justify-center mb-6">
                    <Scale className="w-20 h-20 text-navy-400" />
                  </div>
                  <div className="text-navy-600 font-bold text-xl">Claire Wen Lee</div>
                  <div className="text-navy-500 text-sm">Managing Partner, JWLegal, LLC</div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />)}
                    </div>
                    <span className="text-navy-700 text-sm font-semibold">5.0 Client Rating</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500 rounded-2xl opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-navy-700 rounded-xl opacity-20" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial="hidden"
              animate={aboutInView ? 'visible' : 'hidden'}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold-500" />
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Meet Your Attorney</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-navy-700 mb-2">
                Claire Wen Lee
              </motion.h2>
              <motion.div variants={fadeUp} className="text-gold-500 font-semibold mb-6">
                Managing Partner, JWLegal, LLC
              </motion.div>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                With over 15 years of dedicated legal practice, Claire Wen Lee has built a reputation as one of Maryland's most compassionate and effective immigration and family law attorneys. Her unique ability to handle both practice areas allows her to serve clients facing the intersection of family and immigration challenges.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-6">
                Claire is deeply committed to serving Maryland's diverse communities. As a bilingual attorney fluent in both English and Mandarin Chinese, she is uniquely positioned to serve clients from all backgrounds who require clear, culturally sensitive legal counsel.
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Maryland Bar', value: 'Licensed & Active' },
                  { label: 'Languages', value: 'English, Mandarin' },
                  { label: 'Location', value: 'Columbia, MD' },
                  { label: 'Experience', value: '15+ Years' },
                ].map(item => (
                  <div key={item.label} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-navy-700 font-semibold text-sm">{item.value}</div>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link to="/meet-claire" className="btn-primary">
                  Full Biography <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={featuresRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="section-heading text-center">Why Choose JWLegal?</h2>
            <p className="section-subheading mx-auto text-center">
              We go beyond legal representation. We become your trusted partner through every step of your legal journey.
            </p>
          </div>
          <motion.div
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-gold-200 transition-all duration-300 group">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-700 transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-navy-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-navy-700 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500 rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-gold-500 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <div className="w-10 h-1 bg-gold-500 rounded-full mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">What Our Clients Say</h2>
            <p className="text-navy-200 text-lg max-w-2xl mx-auto">
              Our clients' success stories are our greatest achievement. Here's what some of them have shared.
            </p>
          </div>
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-navy-800/50 backdrop-blur rounded-xl p-8 border border-navy-600 hover:border-gold-500/30 transition-colors duration-300">
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-navy-200 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-navy-600 pt-4">
                  <div className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-navy-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/our-firm/testimonials" className="btn-outline-white">
              Read More Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section ref={newsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="w-10 h-1 bg-gold-500 rounded-full mb-4" />
              <h2 className="section-heading mb-2">News & Updates</h2>
              <p className="section-subheading">Stay informed on the latest developments in immigration and family law.</p>
            </div>
            <Link to="/news" className="btn-secondary flex-shrink-0">
              All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <motion.div
            initial="hidden"
            animate={newsInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {news.map((post, i) => (
              <motion.article key={i} variants={fadeUp} className="card group overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className={`h-2 ${i === 0 ? 'bg-navy-700' : 'bg-gold-500'}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      i === 0 ? 'bg-navy-50 text-navy-700' : 'bg-gold-100 text-gold-700'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-navy-700 font-bold text-base mb-3 group-hover:text-gold-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link to={post.href} className="flex items-center gap-1.5 text-gold-500 font-semibold text-sm hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
