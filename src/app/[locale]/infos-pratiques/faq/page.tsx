'use client'
import { useState } from 'react'
import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
const FAQ = [
  { question: "Quel est le rôle du notaire ?", answer: "Le notaire est un officier public nommé par l'État pour conférer l'authenticité aux actes juridiques. Il assure la sécurité de vos transactions immobilières, familiales et professionnelles." },
  { question: "Combien coûtent les frais de notaire ?", answer: "Les honoraires (ou émoluments) sont réglementés par l'État et varient selon la nature et la valeur de l'acte. Nous vous fournissons toujours une estimation claire avant de commencer." },
  { question: "Quand dois-je consulter un notaire ?", answer: "Il est conseillé de consulter un notaire avant tout engagement important : achat immobilier, mariage, création d'entreprise, rédaction de testament, etc." },
  { question: "Vos consultations sont-elles payantes ?", answer: "Le premier rendez-vous de conseil général est souvent gratuit. Si la consultation nécessite une étude approfondie ou l'ouverture d'un dossier, des honoraires de conseil seront appliqués après votre accord." },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <main>
      <InnerHero 
        title="Foire Aux Questions" 
        tag="INFORMATIONS UTILES" 
        subtitle="Trouvez rapidement des réponses aux questions fréquentes sur le rôle du notaire et nos procédures." 
        className="hero-bg-photo hero-bg-contact contact-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'Infos pratiques' }, { label: 'FAQ' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container" style={{ maxWidth: '800px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQ.map((item, i) => (
              <div key={i} className="premium-card animate-fade-up" style={{ padding: '0', animationDelay: `${i * 100}ms` }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.5rem 2rem', background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontFamily: "'Jost', sans-serif"
                  }}
                >
                  <span style={{ color: '#081A2A', fontSize: '1.1rem', fontWeight: 500 }}>{item.question}</span>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', backgroundColor: open === i ? '#081A2A' : '#F7F1E8', 
                    color: open === i ? '#D8B26E' : '#B68A42', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s', flexShrink: 0
                  }}>
                    {open === i ? '−' : '+'}
                  </div>
                </button>
                <div style={{ 
                  maxHeight: open === i ? '500px' : '0', overflow: 'hidden', 
                  transition: 'max-height 0.3s ease-in-out',
                  padding: open === i ? '0 2rem 1.5rem' : '0 2rem 0'
                }}>
                  <p style={{ color: '#667085', fontSize: '1rem', lineHeight: 1.7, margin: 0, borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem' }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}
