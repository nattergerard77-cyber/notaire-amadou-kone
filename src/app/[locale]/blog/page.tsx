import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { IconScale, IconCalendar, IconPhone } from '@/components/shared/SvgIcons'
import BlogClient from '@/components/blog/BlogClient'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog — Actualités juridiques au Mali — Cabinet Maître Koné',
  description: 'Conseils, guides et actualités sur le droit immobilier, la famille et les affaires au Mali.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <section className="area-hero hero-bg-photo hero-bg-blog blog-hero-new-bg">
        
        <div className="section-container area-hero-inner">
          <p className="area-kicker animate-fade-up">NOTRE EXPERTISE</p>
          <h1 className="animate-fade-up" style={{ animationDelay: '100ms' }}>Actualités & Conseils</h1>
          <div className="area-hero-line animate-fade-in" style={{ animationDelay: '200ms' }} />
          <p className="area-hero-subtitle animate-fade-up" style={{ animationDelay: '300ms' }}>
            L'expertise du cabinet partagée pour vous éclairer sur vos droits.
          </p>
        </div>
      </section>

      {/* ══════════ MAIN ══════════ */}
      <section className="area-page">
        <div className="section-container">
          <div className="area-breadcrumb">
            <Link href="/">Accueil</Link> <span>/</span> <span>Blog</span>
          </div>

          <div style={{ padding: '4rem 0 6rem' }}>
            
            <BlogClient />

            {/* CTA Final */}
            <div className="cta-band hover-lift animate-card" style={{ marginTop: '5rem', gridTemplateColumns: '1fr auto', padding: '3.5rem 4rem' }}>
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '0.5rem', color: '#fff', margin: 0 }}>Besoin d'un conseil notarial personnalisé ?</h2>
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

          </div>
        </div>
      </section>
    </main>
  )
}
