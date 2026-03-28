import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Globe, Users, BookOpen } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactCTA from '../components/ContactCTA'

const articles = [
  {
    date: 'March 15, 2026',
    category: 'Immigration Law',
    categoryColor: 'bg-navy-50 text-navy-700',
    title: 'Understanding Recent Changes to Immigration Policy in 2026',
    excerpt: 'New federal guidelines are reshaping the immigration landscape. Here\'s what Maryland families need to know about how these changes may affect pending cases and future applications for visas and green cards.',
    author: 'Claire Wen Lee',
    readTime: '5 min read',
    featured: true,
  },
  {
    date: 'February 28, 2026',
    category: 'Family Law',
    categoryColor: 'bg-gold-100 text-gold-700',
    title: 'Mediation vs. Litigation: Choosing the Right Path for Your Family',
    excerpt: 'When facing a divorce or custody dispute, understanding your options can save time, money, and emotional stress. Attorney Claire Wen Lee explains the key differences between mediation and courtroom litigation.',
    author: 'Claire Wen Lee',
    readTime: '6 min read',
    featured: true,
  },
  {
    date: 'January 22, 2026',
    category: 'Immigration Law',
    categoryColor: 'bg-navy-50 text-navy-700',
    title: 'DACA Updates: What Recipients and Families Should Know',
    excerpt: 'Recent court decisions have created new uncertainty for DACA recipients. Our immigration team breaks down the current status and steps you should take to protect your status and plan for the future.',
    author: 'Claire Wen Lee',
    readTime: '7 min read',
    featured: true,
  },
  {
    date: 'December 10, 2025',
    category: 'Family Law',
    categoryColor: 'bg-gold-100 text-gold-700',
    title: 'Child Custody in Maryland: A Comprehensive Guide for Parents',
    excerpt: 'Maryland courts use the "best interests of the child" standard when determining custody. This guide explains the different types of custody arrangements and how courts make these critical decisions.',
    author: 'Claire Wen Lee',
    readTime: '8 min read',
    featured: false,
  },
  {
    date: 'November 18, 2025',
    category: 'Immigration Law',
    categoryColor: 'bg-navy-50 text-navy-700',
    title: 'The Family-Based Immigration Process: Step by Step',
    excerpt: 'Reuniting families through immigration is one of the most rewarding aspects of our practice. This article walks through the complete process from petition filing to green card approval.',
    author: 'Claire Wen Lee',
    readTime: '9 min read',
    featured: false,
  },
  {
    date: 'October 5, 2025',
    category: 'Family Law',
    categoryColor: 'bg-gold-100 text-gold-700',
    title: 'Collaborative Divorce: A Better Way to End a Marriage',
    excerpt: 'The collaborative divorce process allows couples to resolve their differences respectfully and privately, without the stress and expense of courtroom battles. Learn how it works.',
    author: 'Claire Wen Lee',
    readTime: '5 min read',
    featured: false,
  },
  {
    date: 'September 12, 2025',
    category: 'Immigration Law',
    categoryColor: 'bg-navy-50 text-navy-700',
    title: 'What to Do If a Family Member Is Detained by ICE',
    excerpt: 'An ICE detention can be terrifying for any family. This guide explains your rights, the detention process, and the critical steps to take immediately to secure your loved one\'s release.',
    author: 'Claire Wen Lee',
    readTime: '6 min read',
    featured: false,
  },
  {
    date: 'August 20, 2025',
    category: 'Family Law',
    categoryColor: 'bg-gold-100 text-gold-700',
    title: 'Understanding Alimony in Maryland: What Courts Consider',
    excerpt: 'Alimony, or spousal support, is one of the most contested issues in Maryland divorce proceedings. Learn the factors courts weigh when determining whether to award alimony and for how long.',
    author: 'Claire Wen Lee',
    readTime: '7 min read',
    featured: false,
  },
  {
    date: 'July 8, 2025',
    category: 'Immigration Law',
    categoryColor: 'bg-navy-50 text-navy-700',
    title: 'Naturalization: Your Complete Guide to Becoming a U.S. Citizen',
    excerpt: 'For many immigrants, becoming a U.S. citizen is a lifelong dream. This comprehensive guide covers eligibility requirements, the application process, and the civics test.',
    author: 'Claire Wen Lee',
    readTime: '10 min read',
    featured: false,
  },
]

const categories = ['All', 'Immigration Law', 'Family Law']

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = filtered.filter(a => a.featured)
  const regular = filtered.filter(a => !a.featured)

  return (
    <div>
      <PageHeader
        title="News & Updates"
        subtitle="Legal insights, firm news, and updates on immigration and family law from Attorney Claire Wen Lee."
        breadcrumbs={[{ label: 'News' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
              />
            </div>
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? 'bg-navy-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Featured articles */}
              {featured.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Recent Articles</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {featured.map((post, i) => (
                      <article key={i} className="card group overflow-hidden hover:-translate-y-1 transition-all duration-300">
                        <div className={`h-2 ${post.category === 'Immigration Law' ? 'bg-navy-700' : 'bg-gold-500'}`} />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                              {post.category}
                            </span>
                            <span className="text-gray-400 text-xs">{post.readTime}</span>
                          </div>
                          <h3 className="text-navy-700 font-bold text-base mb-3 group-hover:text-gold-600 transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                            <span className="text-gray-400 text-xs">{post.date}</span>
                            <Link to="/news" className="flex items-center gap-1.5 text-gold-500 font-semibold text-sm hover:gap-2.5 transition-all">
                              Read <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular articles list */}
              {regular.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">More Articles</h2>
                  <div className="space-y-4">
                    {regular.map((post, i) => (
                      <article key={i} className="flex gap-6 items-start p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md hover:border-navy-200 transition-all duration-300 group">
                        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${post.category === 'Immigration Law' ? 'bg-navy-700' : 'bg-gold-500'}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${post.categoryColor}`}>
                              {post.category}
                            </span>
                            <span className="text-gray-400 text-xs">{post.date}</span>
                            <span className="text-gray-300 text-xs hidden sm:block">&bull;</span>
                            <span className="text-gray-400 text-xs hidden sm:block">{post.readTime}</span>
                          </div>
                          <h3 className="text-navy-700 font-bold text-base mb-1 group-hover:text-gold-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                        </div>
                        <Link to="/news" className="flex-shrink-0 hidden sm:flex items-center gap-1.5 text-gold-500 font-semibold text-sm hover:gap-2.5 transition-all mt-1">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
