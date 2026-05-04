import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
const DOCUMENTS_REQUIS = [
  {
    title: "Vente / Achat Immobilier",
    items: ["Titre foncier", "Pièce d'identité des parties", "Plan cadastral", "Certificat d'urbanisme"]
  },
  {
    title: "Succession",
    items: ["Acte de décès", "Livret de famille", "Testament éventuel", "Liste des biens et dettes"]
  },
  {
    title: "Création de Société",
    items: ["Projet de statuts", "Pièces d'identité des associés", "Justificatif de domicile", "Attestation de dépôt des fonds"]
  },
  {
    title: "Donation",
    items: ["Titre de propriété du bien donné", "Pièces d'identité", "Livret de famille prouvant la filiation"]
  }
]

export default function DocumentsRequisPage() {
  return (
    <main>
      <InnerHero 
        title="Documents Requis" 
        tag="PRÉPARER VOTRE DOSSIER" 
        subtitle="Afin de traiter votre dossier avec efficacité, merci de préparer les documents suivants selon la nature de l'acte." 
        className="hero-bg-photo hero-bg-contact contact-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'Infos pratiques' }, { label: 'Documents' }]} />

      <section style={{ padding: '6rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="section-container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {DOCUMENTS_REQUIS.map((doc, i) => (
              <div key={i} className="premium-card hover-lift animate-fade-up" style={{ padding: '0', overflow: 'hidden', animationDelay: `${i * 100}ms` }}>
                <div style={{ backgroundColor: '#081A2A', padding: '1.5rem 2rem', borderBottom: '2px solid #D8B26E' }}>
                  <h3 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0 }}>{doc.title}</h3>
                </div>
                <div style={{ padding: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {doc.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#667085', fontSize: '0.95rem' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B26E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                          <path d="M16 13H8" />
                          <path d="M16 17H8" />
                          <path d="M10 9H8" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="premium-card" style={{ marginTop: '4rem', padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: '#F7F1E8', borderColor: 'transparent' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#D8B26E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#081A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div>
              <h4 style={{ color: '#081A2A', fontWeight: 600, marginBottom: '0.25rem' }}>Information importante</h4>
              <p style={{ color: '#667085', fontSize: '0.95rem', margin: 0 }}>
                Cette liste est purement indicative. D'autres pièces complémentaires peuvent vous être demandées selon la spécificité et la complexité de votre dossier juridique.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
