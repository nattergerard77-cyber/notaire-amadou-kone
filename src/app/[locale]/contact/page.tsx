'use client'
import { useState } from 'react'
import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { CABINET } from '@/lib/constants'
import { IconPhone, IconMail, IconMapPin, IconClock } from '@/components/shared/SvgIcons'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000) }

  return (
    <main>
      <InnerHero 
        title="Contact" 
        tag="NOUS JOINDRE" 
        subtitle="Prenez contact avec notre étude pour toute question ou demande de renseignements." 
        className="hero-bg-photo hero-bg-contact contact-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'Contact' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Info */}
            <div className="animate-fade-up">
              <h2 style={{ color: '#081A2A', marginBottom: '2rem' }}>Informations de contact</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                {[
                  { icon: IconMapPin, title: 'Adresse', content: CABINET.address.full },
                  { icon: IconPhone, title: 'Téléphone', content: CABINET.phone },
                  { icon: IconMail, title: 'Email', content: CABINET.email },
                  { icon: IconClock, title: 'Horaires', content: 'Lundi - Jeudi : 08h00 - 17h00\\nVendredi : 08h00 - 13h00' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1px solid rgba(216,178,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <item.icon width="24" height="24" style={{ color: '#D8B26E' }} />
                    </div>
                    <div>
                      <h4 style={{ color: '#081A2A', fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem' }}>{item.title}</h4>
                      <p style={{ color: '#667085', fontSize: '0.95rem', margin: 0, whiteSpace: 'pre-line' }}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Integration */}
              <div className="premium-card animate-card hover-lift" style={{ height: '250px', padding: 0, overflow: 'hidden' }}>
                <iframe
                  title="Carte Google Maps - Cabinet Maître Amadou Koné"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Hamdallaye%20ACI%202000,%20Rue%20327,%20Bamako,%20Mali&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>

            {/* Form */}
            <div className="premium-card animate-card hover-lift" style={{ padding: '3rem 2.5rem', animationDelay: '200ms' }}>
              <h3 style={{ color: '#081A2A', fontSize: '1.5rem', marginBottom: '2rem' }}>Envoyez-nous un message</h3>
              
              {submitted ? (
                 <div style={{ backgroundColor: '#E8F5E9', border: '1px solid #C8E6C9', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', color: '#2E7D32' }}>
                 <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Message envoyé !</p>
                 <p style={{ fontSize: '0.9rem' }}>Nous vous répondrons dans les meilleurs délais.</p>
               </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label className="form-label">Nom complet *</label>
                    <input required type="text" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Email *</label>
                    <input required type="email" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Sujet</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Message *</label>
                    <textarea required className="form-input" rows={6}></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1rem' }}>
                    Envoyer
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
