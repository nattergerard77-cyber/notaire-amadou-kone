import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CABINET, DOMAINES, TESTIMONIALS } from '@/lib/constants'
import { LogoMarkAK, DecorativePalace, DecorativeSeal, DecorativeScale, IconLaurel, IconDocumentPen, IconFamily, IconBuilding, IconBriefcase, IconHeartHands, IconScale, IconShieldLock, IconCalendar, IconPhone } from '@/components/shared/SvgIcons'

import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'Maître Amadou Koné - Notaire à Bamako, Mali',
  description: 'Cabinet notarial à Bamako, Mali. Maître Amadou Koné vous accompagne pour vos actes immobiliers, successions, donations, affaires et conseils juridiques.',
  alternates: {
    canonical: 'https://www.maitre-amadou-kone.com',
  },
  applicationName: 'Maître Amadou Koné',
  openGraph: {
    title: 'Maître Amadou Koné - Notaire à Bamako, Mali',
    description: 'Cabinet notarial à Bamako, Mali. Maître Amadou Koné vous accompagne pour vos actes immobiliers, successions, donations, affaires et conseils juridiques.',
    url: 'https://www.maitre-amadou-kone.com',
    siteName: 'Maître Amadou Koné',
    type: 'website',
    locale: 'fr_ML',
  },
}

const DOMAIN_ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'immobilier': IconBuilding,
  'famille-succession': IconFamily,
  'droit-des-affaires': IconBriefcase,
  'donations': IconHeartHands,
  'contact': IconDocumentPen,
  'conseil': IconScale
}

export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="hero-section hero-bg-photo hero-bg-home home-hero-new-bg">

        <div className="section-container relative z-10">
          <div className="hero-grid">

            {/* Left Content */}
            <div className="hero-copy">
              <span className="hero-kicker animate-fade-up">
                Cabinet Notarial Bamako
              </span>
              <h1 className="hero-title animate-fade-up">
                Votre notaire<br />de confiance à Bamako
              </h1>

              <p className="hero-text animate-fade-up" style={{ animationDelay: '100ms' }}>
                Maître Amadou Koné vous accompagne dans tous vos actes notariaux — 
                immobilier, succession, famille et droit des affaires — avec rigueur, discrétion 
                et proximité depuis 2003.
              </p>

              <div className="hero-actions animate-fade-up" style={{ animationDelay: '200ms' }}>
                <Link href="/infos-pratiques/rendez-vous" className="btn-primary" style={{ padding: '0.875rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  Prendre rendez-vous <IconCalendar width="18" height="18" />
                </Link>
                <Link href="/domaines" className="btn-outline" style={{ padding: '0.875rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                  Nos domaines <span style={{ transition: 'transform 0.2s' }} className="arrow-icon">→</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-stats animate-fade-up" style={{ animationDelay: '300ms' }}>
                {[
                  { value: '20+', label: "ans d'expérience", Icon: IconBuilding },
                  { value: '5 000+', label: 'actes rédigés', Icon: IconDocumentPen },
                  { value: '98%', label: 'clients satisfaits', Icon: IconFamily },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <s.Icon width="36" height="36" style={{ color: '#D8B26E', opacity: 0.9, strokeWidth: '1' }} />
                      <div>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', fontSize: '2rem', fontWeight: 400, lineHeight: 1 }}>{s.value}</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginTop: '0.25rem', textTransform: 'lowercase' }}>{s.label}</p>
                      </div>
                    </div>
                    {i < 2 && <div className="stat-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.1)', height: '40px', alignSelf: 'center' }} />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="animate-fade-in premium-card-dark expertise-panel animate-card hover-lift" style={{ padding: '2.5rem', animationDelay: '400ms' }}>
              <p style={{ color: '#D8B26E', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                Nos domaines d'expertise
              </p>
              
              <div className="expertise-grid" style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { slug: 'immobilier', title: 'Immobilier', Icon: IconBuilding },
                  { slug: 'famille-succession', title: 'Famille', Icon: IconFamily },
                  { slug: 'affaires', title: 'Affaires', Icon: IconBriefcase },
                  { slug: 'donations', title: 'Donations', Icon: IconHeartHands },
                  { slug: 'contact', title: "Rédaction d'actes", Icon: IconDocumentPen },
                  { slug: 'contact', title: 'Conseil juridique', Icon: IconScale }
                ].map((d, i) => (
                  <Link key={i} href={`/${d.slug === 'contact' ? 'contact' : 'domaines/' + d.slug}`}
                    className="domain-link"
                    style={{
                      backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px', padding: '1rem 1.25rem', color: 'rgba(255,255,255,0.85)',
                      fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      transition: 'all 0.3s ease', textDecoration: 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <d.Icon width="20" height="20" className="domain-icon" style={{ color: '#D8B26E', strokeWidth: '1.2', transition: 'color 0.3s' }} />
                      <span>{d.title}</span>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>›</span>
                  </Link>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <IconPhone width="24" height="24" style={{ color: '#D8B26E' }} />
                  <div>
                    <a href={`tel:${CABINET.phone}`} style={{ color: '#D8B26E', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', display: 'block' }}>
                      {CABINET.phone}
                    </a>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>Lun–Jeu : 08h–17h • Ven : 08h–13h</span>
                  </div>
                </div>
                <a href={`tel:${CABINET.phone}`} className="call-link" style={{ color: '#ffffff', fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Nous appeler <span className="arrow-icon" style={{ transition: 'transform 0.2s' }}>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .btn-outline:hover .arrow-icon { transform: translateX(4px); }
          .domain-link:hover {
            background-color: rgba(216,178,110,0.05) !important;
            border-color: rgba(216,178,110,0.4) !important;
            color: #ffffff !important;
          }
          .domain-link:hover .domain-icon { color: #E6C98A !important; }
          .call-link:hover .arrow-icon { transform: translateX(4px); }
        `}</style>
      </section>

      {/* ══════════ DOMAINES ══════════ */}
      <section className="domains-section" style={{ backgroundColor: '#FAF7F2', padding: '6rem 0' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#B68A42', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Notre savoir-faire
            </span>
            <h2 style={{ color: '#081A2A', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Nos domaines d'expertise
            </h2>
            <div className="gold-divider" style={{ margin: '1rem auto 1.5rem' }} />
            <p style={{ color: '#667085', fontSize: '1.05rem', margin: '0 auto', maxWidth: '600px' }}>
              Une couverture complète de vos besoins juridiques et patrimoniaux au Mali.
            </p>
          </div>

          <div className="domains-grid">
            {DOMAINES.map((d) => {
              const Icon = DOMAIN_ICONS[d.slug] || IconDocumentPen;
              return (
                <Link key={d.slug} href={`/domaines/${d.slug}`} className="domain-card animate-card hover-lift">
                  <div className="domain-card-icon">
                    <Icon width="32" height="32" />
                  </div>
                  <h3 className="domain-card-title">{d.title}</h3>
                  <p className="domain-card-desc">{d.description}</p>
                  <div className="domain-card-link">
                    En savoir plus <span>→</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════ POURQUOI NOUS ══════════ */}
      <section style={{ backgroundColor: '#ffffff', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.02, backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 20px)' }} />
        <div className="section-container relative z-10">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#B68A42', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Nos engagements
            </span>
            <h2 style={{ color: '#081A2A', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Pourquoi choisir notre cabinet ?</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 0' }} />
          </div>

          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {[
              { icon: IconLaurel, title: "20 ans d'expérience", desc: 'Fondé en 2003, le cabinet Maître Amadou Koné est une référence notariale à Bamako avec plus de 5 000 actes rédigés.' },
              { icon: IconShieldLock, title: 'Confidentialité absolue', desc: 'Vos dossiers sont traités avec la plus stricte discrétion, conformément au secret professionnel notarial.' },
              { icon: IconScale, title: 'Impartialité & rigueur', desc: 'Officier public ministériel, le notaire conseille toutes les parties avec équité, neutralité et précision juridique.' },
            ].map((item) => (
              <div key={item.title} className="why-card animate-card hover-lift">
                <item.icon width="48" height="48" style={{ color: '#D8B26E', margin: '0 auto 1.5rem' }} />
                <h3 style={{ color: '#081A2A', marginBottom: '1rem', fontWeight: 500 }}>{item.title}</h3>
                <p style={{ color: '#667085', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TÉMOIGNAGES ══════════ */}
      <section style={{ backgroundColor: '#FAF7F2', padding: '6rem 0' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#B68A42', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Témoignages
            </span>
            <h2 style={{ color: '#081A2A', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Ce que disent nos clients</h2>
            <div className="gold-divider" style={{ margin: '1rem auto' }} />
          </div>
          
          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
        <style>{`
          .hover-bg-gold:hover { background-color: #D8B26E !important; color: #fff !important; }
        `}</style>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ backgroundColor: '#081A2A', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <DecorativeScale style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: '300px', height: '300px', opacity: 0.05, color: '#D8B26E', pointerEvents: 'none' }} />
        
        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="cta-band animate-card hover-lift">

            <div>
              <h2 style={{ color: '#ffffff', fontSize: '2.5rem', margin: 0, marginBottom: '0.5rem' }}>
                Besoin d'un conseil notarial ?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: '500px' }}>
                Notre équipe vous reçoit du lundi au vendredi, de 8h à 17h. Contactez-nous pour sécuriser vos projets.
              </p>
            </div>
            
            <div className="cta-actions" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/infos-pratiques/rendez-vous" className="btn-primary gold-glow-hover">
                <IconCalendar width="18" height="18" /> Prendre rendez-vous
              </Link>
              <a href={`tel:${CABINET.phone}`} className="btn-outline">
                <IconPhone width="18" height="18" /> Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      <IconCalendar style={{display:'none'}}/> {/* Preload SVG components if needed */}
    </>
  )
}
