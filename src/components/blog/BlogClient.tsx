'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { IconCalendar } from '@/components/shared/SvgIcons'
import { ARTICLES, FILTERS } from '@/data/blogArticles'

export default function BlogClient() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  
  const filteredArticles = activeFilter === 'Tous' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === activeFilter)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#081A2A', margin: 0 }}>Derniers articles</h2>
        <div className="blog-filters" style={{ overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '0.5rem', WebkitOverflowScrolling: 'touch' }}>
          {FILTERS.map((f, i) => (
            <button 
              key={i} 
              type="button"
              className={`blog-filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-grid">
        {filteredArticles.map((article, i) => {
          const isFeatured = i === 0 && activeFilter === 'Tous';
          return (
            <article key={article.id} className={`blog-card animate-card hover-lift ${isFeatured ? 'blog-card-featured' : 'blog-card-standard'}`}>
              <Link href={`/blog/${article.slug}`} style={{ display: 'flex', flexDirection: 'column', height: '100%', flexGrow: 1 }}>
                <div className="blog-card-img-wrapper">
                  <div className="blog-card-fallback">
                     <article.icon width="64" height="64" style={{ opacity: 0.2 }} />
                  </div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="blog-card-img" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  {isFeatured && (
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', backgroundColor: '#B68A42', color: '#fff', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                      À LA UNE
                    </div>
                  )}
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><article.icon width="14" height="14" /> {article.category}</span>
                    <span style={{ color: 'rgba(8, 26, 42, 0.4)', fontWeight: 400 }}>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#667085', fontWeight: 500 }}><IconCalendar width="14" height="14" /> {article.date}</span>
                  </div>
                  <h3 className="blog-card-title">{article.title}</h3>
                  <p className="blog-card-excerpt">{article.excerpt}</p>
                  <div className="blog-card-link">
                    Lire l'article <span>→</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </>
  )
}
