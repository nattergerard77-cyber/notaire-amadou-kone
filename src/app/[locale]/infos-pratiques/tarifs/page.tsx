import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { TARIFS } from '@/lib/constants'

export default function TarifsPage() {
  return (
    <main>
      <InnerHero 
        title="Tarifs & Honoraires" 
        tag="TRANSPARENCE" 
        subtitle="Les honoraires du notaire sont réglementés par l'État pour assurer l'égalité des citoyens." 
        className="hero-bg-photo hero-bg-contact contact-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'Infos pratiques' }, { label: 'Tarifs' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          
          <div className="premium-card animate-fade-up" style={{ overflow: 'hidden' }}>
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#081A2A', color: '#fff' }}>
                    <th style={{ padding: '1.5rem', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Type d'acte</th>
                    <th style={{ padding: '1.5rem', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Base / Montant</th>
                    <th style={{ padding: '1.5rem', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Taux / Fixe</th>
                    <th style={{ padding: '1.5rem', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Délai indicatif</th>
                  </tr>
                </thead>
                <tbody>
                  {TARIFS.map((t, i) => (
                    <tr key={i} style={{ borderBottom: i !== TARIFS.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none', transition: 'background-color 0.2s' }} className="hover:bg-gray-50">
                      <td style={{ padding: '1.5rem', color: '#081A2A', fontWeight: 500 }}>{t.acte}</td>
                      <td style={{ padding: '1.5rem', color: '#667085', fontSize: '0.95rem' }}>{t.base}</td>
                      <td style={{ padding: '1.5rem', color: '#D8B26E', fontWeight: 600 }}>{t.taux}</td>
                      <td style={{ padding: '1.5rem', color: '#667085', fontSize: '0.9rem' }}>{t.delai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden" style={{ padding: '1rem' }}>
              {TARIFS.map((t, i) => (
                <div key={i} style={{ padding: '1.5rem', backgroundColor: i % 2 === 0 ? '#fff' : '#F9FAFB', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#081A2A', fontSize: '1.1rem', marginBottom: '1rem' }}>{t.acte}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                    <div>
                      <span style={{ display: 'block', color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Base</span>
                      <span style={{ color: '#667085' }}>{t.base}</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Taux / Fixe</span>
                      <span style={{ color: '#D8B26E', fontWeight: 600 }}>{t.taux}</span>
                    </div>
                    <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                      <span style={{ display: 'block', color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Délai indicatif</span>
                      <span style={{ color: '#667085' }}>{t.delai}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: '#667085', fontSize: '0.95rem', fontStyle: 'italic' }}>
              * Les montants indiqués sont purement indicatifs. Un devis détaillé prenant en compte 
              les débours et frais annexes vous sera remis avant toute intervention.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
