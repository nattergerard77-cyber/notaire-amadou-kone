import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'

const MILESTONES = [
  { year: '2003', title: 'Fondation du cabinet', desc: "Ouverture de l'étude par Maître Amadou Koné, après sa nomination en tant qu'officier public ministériel à Bamako." },
  { year: '2008', title: 'Développement', desc: 'Extension des compétences vers le droit des affaires pour accompagner les entreprises maliennes et internationales.' },
  { year: '2015', title: 'Modernisation', desc: 'Digitalisation des archives et mise en place de processus dématérialisés pour plus de réactivité.' },
  { year: '2023', title: '20 ans au service de vos droits', desc: 'Célébration de deux décennies de pratique notariale ininterrompue, avec plus de 5 000 actes authentiques dressés.' },
]

export default function HistoirePage() {
  return (
    <main>
      <InnerHero 
        title="Notre Histoire" 
        tag="20 ANS D'EXPÉRIENCE" 
        subtitle="L'évolution d'un cabinet notarial de référence fondé sur la rigueur et l'intégrité." 
        className="hero-bg-photo hero-bg-about about-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'À propos' }, { label: 'Histoire' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: '#081A2A', marginBottom: '1rem' }}>Étapes clés de notre développement</h2>
            <div className="gold-divider" style={{ margin: '0 auto' }} />
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '2px', backgroundColor: 'rgba(216,178,110,0.3)' }} className="timeline-line" />

            {MILESTONES.map((m, i) => (
              <div key={i} className="animate-fade-up" style={{ display: 'flex', gap: '2rem', marginBottom: i !== MILESTONES.length - 1 ? '3rem' : 0, animationDelay: `${i * 150}ms` }}>
                {/* Year Badge */}
                <div style={{ 
                  flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', 
                  backgroundColor: '#081A2A', border: '2px solid #D8B26E', color: '#D8B26E', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                  fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Jost', sans-serif"
                }}>
                  {m.year}
                </div>
                
                {/* Content Card */}
                <div className="premium-card hover-lift" style={{ padding: '2rem', flex: 1, marginTop: '-0.5rem' }}>
                  <h3 style={{ color: '#081A2A', fontSize: '1.4rem', marginBottom: '1rem' }}>{m.title}</h3>
                  <p style={{ color: '#667085', fontSize: '1rem', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .timeline-line { left: 16px !important; }
          }
        `}</style>
      </section>
    </main>
  )
}
