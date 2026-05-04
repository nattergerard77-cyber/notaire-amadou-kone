import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { TEAM } from '@/lib/constants'
import { DecorativeScale } from '@/components/shared/SvgIcons'

export default function EquipePage() {
  return (
    <main>
      <InnerHero 
        title="L'Équipe du Cabinet" 
        tag="NOTRE FORCE" 
        subtitle="Une équipe expérimentée et engagée pour votre sécurité juridique." 
        className="hero-bg-photo hero-bg-team team-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'À propos' }, { label: 'Équipe' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {TEAM.map((member, i) => (
              <div key={i} className="premium-card hover-lift animate-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: '#081A2A', position: 'relative', textAlign: 'center' }}>
                  <img 
                    src={member.id === 'amadou-kone' ? '/images/equipe/maitre-amadou-kone.png' : `/images/equipe/${member.id}.png`} 
                    alt={member.name}
                    style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '2rem 1.5rem', position: 'relative' }}>
                    <DecorativeScale style={{ position: 'absolute', right: '5%', top: '10%', width: '100px', height: '100px', opacity: 0.05, color: '#D8B26E' }} />
                    <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                    <p style={{ color: '#D8B26E', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{member.role}</p>
                  </div>
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: '#667085', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>{member.bio}</p>
                  <div>
                    <p style={{ color: '#081A2A', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Spécialités</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {member.specialites.map((s, j) => (
                        <span key={j} style={{ 
                          backgroundColor: '#F7F1E8', color: '#B68A42', padding: '0.375rem 0.75rem', 
                          borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 500 
                        }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
