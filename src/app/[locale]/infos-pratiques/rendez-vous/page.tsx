'use client'
import { useState } from 'react'
import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { CABINET } from '@/lib/constants'
import { IconCalendar, IconPhone, IconMail, IconMapPin } from '@/components/shared/SvgIcons'

export default function RendezVousPage() {
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main>
      <InnerHero 
        title="Prendre Rendez-vous" 
        tag="DISPONIBILITÉ" 
        subtitle="Planifiez un entretien avec notre équipe pour discuter de votre dossier en toute confidentialité." 
        className="hero-bg-photo hero-bg-contact contact-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'Infos pratiques' }, { label: 'Rendez-vous' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left Col: Info */}
            <div>
              <h2 style={{ color: '#081A2A', marginBottom: '1.5rem' }}>Nous sommes à votre écoute</h2>
              <p style={{ color: '#667085', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Afin de mieux préparer notre rencontre, veuillez nous fournir quelques détails sur l'objet de votre consultation. Un membre de notre équipe vous recontactera rapidement pour confirmer l'horaire.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F7F1E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconMapPin width="20" height="20" style={{ color: '#B68A42' }} />
                  </div>
                  <div>
                    <h4 style={{ color: '#081A2A', fontWeight: 600, marginBottom: '0.25rem' }}>Notre Étude</h4>
                    <p style={{ color: '#667085', fontSize: '0.9rem', margin: 0 }}>{CABINET.address.full}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F7F1E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconPhone width="20" height="20" style={{ color: '#B68A42' }} />
                  </div>
                  <div>
                    <h4 style={{ color: '#081A2A', fontWeight: 600, marginBottom: '0.25rem' }}>Téléphone</h4>
                    <p style={{ color: '#667085', fontSize: '0.9rem', margin: 0 }}>{CABINET.phone}</p>
                  </div>
                </div>
              </div>

              <div className="premium-card" style={{ padding: '2rem', backgroundColor: '#081A2A', borderColor: 'transparent' }}>
                <h4 style={{ color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" stroke="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Vous préférez WhatsApp ?
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Écrivez-nous directement pour une réponse encore plus rapide.</p>
                <a href={`https://wa.me/${CABINET.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%' }}>Ouvrir WhatsApp</a>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="premium-card animate-fade-up" style={{ padding: '3rem 2.5rem' }}>
              <h3 style={{ color: '#081A2A', fontSize: '1.5rem', marginBottom: '2rem' }}>Demande de rendez-vous</h3>
              
              {submitted ? (
                <div style={{ backgroundColor: '#E8F5E9', border: '1px solid #C8E6C9', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', color: '#2E7D32' }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Demande envoyée avec succès !</p>
                  <p style={{ fontSize: '0.9rem' }}>Notre secrétariat vous contactera dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label className="form-label">Nom complet *</label>
                      <input required type="text" className="form-input" placeholder="Ex: Oumar Diallo" />
                    </div>
                    <div>
                      <label className="form-label">Téléphone *</label>
                      <input required type="tel" className="form-input" placeholder="+223 ..." />
                    </div>
                  </div>
                  
                  <div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="votre@email.com" />
                  </div>

                  <div>
                    <label className="form-label">Objet de la consultation *</label>
                    <select required className="form-input">
                      <option value="">Sélectionnez un domaine</option>
                      <option value="immobilier">Droit immobilier</option>
                      <option value="famille">Famille & Succession</option>
                      <option value="affaires">Droit des affaires</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Créneau souhaité</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {['Matin (8h-12h)', 'Midi (12h-14h)', 'Après-midi (14h-17h)'].map(c => (
                        <label key={c} style={{ 
                          border: '1px solid #e5e7eb', padding: '0.5rem 1rem', borderRadius: '9999px', 
                          fontSize: '0.85rem', color: '#667085', cursor: 'pointer', fontFamily: "'Jost', sans-serif" 
                        }} className="hover:border-gold hover:text-gold">
                          <input type="radio" name="creneau" value={c} style={{ display: 'none' }} />
                          {c}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Message complémentaire</label>
                    <textarea className="form-input" rows={4} placeholder="Précisez votre demande..."></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1rem' }}>
                    Envoyer la demande
                  </button>
                  <p style={{ color: '#9ca3af', fontSize: '0.75rem', textAlign: 'center', margin: 0 }}>
                    Vos données sont traitées en toute confidentialité.
                  </p>
                </form>
              )}
            </div>
            
          </div>
        </div>
        <style>{`
          .hover\\:border-gold:hover { border-color: #D8B26E !important; }
          .hover\\:text-gold:hover { color: #D8B26E !important; }
          input:checked + span, label:has(input:checked) { background-color: #F7F1E8; border-color: #D8B26E; color: #B68A42; }
        `}</style>
      </section>
    </main>
  )
}
