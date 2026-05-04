import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { IconShieldLock, IconScale, IconFamily, IconDocumentPen, IconBriefcase, IconMapPin } from '@/components/shared/SvgIcons'

const VALUES = [
  { icon: IconShieldLock, title: 'Confidentialité absolue', desc: 'Soumis au secret professionnel de manière stricte et sans exception pour chaque dossier.' },
  { icon: IconScale, title: 'Impartialité', desc: 'En tant qu\'officier public, nous garantissons l\'équilibre et l\'équité des contrats pour toutes les parties.' },
  { icon: IconMapPin, title: 'Proximité', desc: 'Un accompagnement personnalisé et disponible pour nos clients à Bamako et partout au Mali.' },
  { icon: IconDocumentPen, title: 'Rigueur', desc: 'Une rédaction d\'actes méticuleuse pour assurer une sécurité juridique totale.' },
  { icon: IconBriefcase, title: 'Transparence', desc: 'Une information claire sur les coûts, les délais et les implications de chaque acte.' },
  { icon: IconFamily, title: 'Veille juridique', desc: 'Une mise à jour permanente de nos connaissances pour appliquer les dernières évolutions du droit malien.' },
]

export default function EngagementsPage() {
  return (
    <main>
      <InnerHero 
        title="Nos Engagements" 
        tag="VALEURS" 
        subtitle="L'éthique et le professionnalisme au cœur de notre pratique." 
        className="hero-bg-photo hero-bg-about about-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'À propos' }, { label: 'Engagements' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: '#081A2A', marginBottom: '1rem' }}>Nos valeurs fondamentales</h2>
            <div className="gold-divider" style={{ margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {VALUES.map((v, i) => (
              <div key={i} className="premium-card hover-lift animate-fade-up" style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', animationDelay: `${i * 100}ms` }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #D8B26E, #E6C98A)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <v.icon width="36" height="36" style={{ color: '#081A2A' }} />
                  <span style={{ fontSize: '2.5rem', fontWeight: 300, color: 'rgba(216,178,110,0.2)', lineHeight: 1, fontFamily: "'Cormorant Garamond', serif" }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 style={{ color: '#081A2A', fontSize: '1.25rem', marginBottom: '1rem' }}>{v.title}</h3>
                <p style={{ color: '#667085', fontSize: '0.95rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
