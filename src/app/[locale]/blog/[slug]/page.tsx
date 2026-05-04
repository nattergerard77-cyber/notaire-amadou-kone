import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { ARTICLES } from '@/data/blogArticles'
import { IconCalendar, IconScale, IconPhone } from '@/components/shared/SvgIcons'

export function generateStaticParams() {
  const locales = ['fr', 'en']
  return ARTICLES.flatMap((article) =>
    locales.map((locale) => ({
      locale,
      slug: article.slug,
    }))
  )
}

export function generateMetadata({ params }: { params: { slug: string; locale: string } }): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) return {}

  return generatePageMetadata({
    title: `${article.title} — Blog Notaire`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
  })
}

export default function ArticlePage({ params }: { params: { slug: string; locale: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) {
    notFound()
  }

  return (
    <main>
      <section className="area-hero hero-bg-photo hero-bg-blog blog-hero-new-bg" style={{ padding: '120px 0 80px' }}>
        
        <div className="section-container area-hero-inner">
          <div className="area-breadcrumb" style={{ marginBottom: '2.5rem', color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/">Accueil</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> <span style={{ color: '#D8B26E' }}>{article.title}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: '#D8B26E', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><article.icon width="16" height="16" /> {article.category}</span>
             <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}><IconCalendar width="16" height="16" /> {article.date}</span>
          </div>
          
          <h1 className="animate-fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: '#fff' }}>
            {article.title}
          </h1>
          
          <p className="animate-fade-up" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', lineHeight: 1.6, animationDelay: '100ms' }}>
            {article.excerpt}
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', backgroundColor: '#FAF7F2' }}>
        <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Article Image */}
          <div style={{ width: '100%', height: '450px', borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 40px rgba(8,26,42,0.1)', position: 'relative', backgroundColor: '#081A2A' }}>
             <div className="blog-card-fallback" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #071827 0%, #0D1B2A 100%)', color: '#D8B26E' }}>
                 <article.icon width="80" height="80" style={{ opacity: 0.2 }} />
             </div>
             <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>

          {/* Content */}
          <div style={{ fontSize: '1.1rem', color: '#101828', lineHeight: 1.8 }}>
            {article.content.map((block, i) => {
              if (block.type === 'intro') {
                return <p key={i} style={{ fontSize: '1.25rem', color: '#475467', marginBottom: '3rem', fontWeight: 400 }}>{block.text}</p>
              }
              if (block.type === 'section') {
                return (
                  <div key={i} style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '2rem', color: '#081A2A', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif" }}>{block.title}</h2>
                    <p style={{ color: '#475467' }}>{block.text}</p>
                  </div>
                )
              }
              if (block.type === 'advice') {
                return (
                  <div key={i} className="animate-card hover-lift" style={{ backgroundColor: '#fff', borderLeft: '4px solid #D8B26E', padding: '2rem', borderRadius: '0 16px 16px 0', margin: '3rem 0', boxShadow: '0 10px 30px rgba(8,26,42,0.05)' }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#D8B26E', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Cormorant Garamond', serif" }}>
                      <IconScale width="20" height="20" /> Conseil du Notaire
                    </h3>
                    <p style={{ fontStyle: 'italic', color: '#081A2A', fontWeight: 500, margin: 0 }}>"{block.text}"</p>
                  </div>
                )
              }
              if (block.type === 'conclusion') {
                return <p key={i} style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', color: '#475467' }}>{block.text}</p>
              }
              return null
            })}
          </div>

          {/* Return link */}
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <Link href="/blog" className="btn-outline" style={{ display: 'inline-flex', padding: '0.8rem 1.5rem', fontSize: '1rem', fontWeight: 600 }}>
              ← Retour aux articles
            </Link>
          </div>

        </div>
      </section>
      
      {/* CTA Final */}
      <section className="section-container" style={{ paddingBottom: '6rem' }}>
        <div className="cta-band hover-lift animate-card" style={{ gridTemplateColumns: '1fr auto', padding: '3.5rem 4rem' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '0.5rem', color: '#fff', margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>Besoin d'un conseil notarial personnalisé ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', margin: 0, maxWidth: '600px' }}>
              Notre équipe vous accompagne pour vos actes immobiliers, familiaux et professionnels.
            </p>
          </div>
          <div className="cta-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Link href="/infos-pratiques/rendez-vous" className="btn-primary" style={{ padding: '0.95rem 1.5rem', fontSize: '0.95rem' }}>
              Prendre rendez-vous <IconCalendar width="18" height="18" />
            </Link>
            <a href="tel:+22320294101" className="btn-outline" style={{ padding: '0.95rem 1.5rem', fontSize: '0.95rem' }}>
              Nous appeler <IconPhone width="18" height="18" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
