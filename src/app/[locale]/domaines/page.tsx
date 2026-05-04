import Link from 'next/link'
import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { DOMAINES } from '@/lib/constants'
import { IconBuilding, IconFamily, IconBriefcase, IconHeartHands, IconDocumentPen } from '@/components/shared/SvgIcons'

const ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'immobilier': IconBuilding,
  'famille-succession': IconFamily,
  'droit-des-affaires': IconBriefcase,
  'donations': IconHeartHands
}

export default function DomainesPage() {
  return (
    <main>
      <InnerHero className="domaines-hero-new-bg" title="Domaines d'Expertise" tag="NOTRE SAVOIR-FAIRE" subtitle="Découvrez les domaines dans lesquels nous vous accompagnons avec rigueur et sécurité." />
      <Breadcrumb items={[{ label: 'Domaines' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {DOMAINES.map((d, i) => {
              const Icon = ICONS[d.slug] || IconDocumentPen;
              return (
                <Link key={i} href={`/domaines/${d.slug}`} className="domain-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '12px', backgroundColor: '#081A2A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <Icon width="32" height="32" style={{ color: '#D8B26E' }} />
                  </div>
                  <h2 style={{ color: '#081A2A', fontSize: '1.75rem', marginBottom: '1rem' }}>{d.title}</h2>
                  <p style={{ color: '#667085', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem', flex: 1 }}>{d.description}</p>
                  
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                    <span style={{ color: '#D8B26E', fontWeight: 500, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="domain-link-arrow">
                      Découvrir nos prestations <span style={{ transition: 'transform 0.2s' }}>→</span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <style>{`
          .premium-card:hover .domain-link-arrow span { transform: translateX(4px); }
        `}</style>
      </section>
    </main>
  )
}
