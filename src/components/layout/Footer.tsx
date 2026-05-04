import Link from 'next/link'
import { CABINET, NAV_LINKS, DOMAINES } from '@/lib/constants'
import { LogoMarkAK, IconPhone, IconMail, IconMapPin, IconClock, DecorativeScale } from '@/components/shared/SvgIcons'

export default function Footer() {
  const headingStyle: React.CSSProperties = {
    color: '#D8B26E', fontSize: '0.75rem', fontWeight: 600,
    letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem',
    fontFamily: "'Jost', sans-serif",
  }
  const linkStyle: React.CSSProperties = {
    display: 'block', color: 'rgba(255,255,255,0.62)', fontSize: '0.9rem',
    textDecoration: 'none', marginBottom: '0.75rem', fontFamily: "'Jost', sans-serif",
    transition: 'color 0.2s',
  }

  return (
    <footer style={{ backgroundColor: '#081A2A', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative SVG in background */}
      <DecorativeScale style={{ position: 'absolute', right: '-10%', bottom: '10%', width: '400px', height: '400px', opacity: 0.03, color: '#D8B26E', pointerEvents: 'none' }} />

      <div className="section-container" style={{ paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', zIndex: 10 }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
          {/* Brand */}
          <div>
            <Link href="/" className="site-logo-container" style={{ marginBottom: '1.5rem' }}>
              <div className="footer-emblem-crop">
                <img 
                  src="/images/logo-maitre-amadou-kone.png" 
                  alt="Logo Emblem" 
                />
              </div>
              <div className="site-logo-text">
                <span className="site-logo-text-title">Maître Amadou Koné</span>
                <span className="site-logo-text-subtitle">Notaire — Bamako, Mali</span>
              </div>
            </Link>
            
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Membre du Conseil Supérieur du Notariat du Mali. Cabinet notarial de référence depuis 2003 pour votre sécurité juridique.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href={`tel:${CABINET.phone}`} style={{ ...linkStyle, marginBottom: 0, display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D8B26E' }}>
                <IconPhone width="16" height="16" /> {CABINET.phone}
              </a>
              <a href={`mailto:${CABINET.email}`} style={{ ...linkStyle, marginBottom: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <IconMail width="16" height="16" /> {CABINET.email}
              </a>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <IconMapPin width="16" height="16" style={{ marginTop: '4px', flexShrink: 0 }} /> {CABINET.address.full}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <IconClock width="16" height="16" /> Lun–Jeu: 08h–17h · Ven: 08h–13h
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={headingStyle}>Navigation</p>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover-text-gold" style={linkStyle}>{l.label}</Link>
            ))}
          </div>

          {/* Domaines */}
          <div>
            <p style={headingStyle}>Domaines d'expertise</p>
            {DOMAINES.map((d) => (
              <Link key={d.slug} href={`/domaines/${d.slug}`} className="hover-text-gold" style={linkStyle}>{d.shortTitle}</Link>
            ))}
          </div>

          {/* Infos pratiques */}
          <div>
            <p style={headingStyle}>Infos pratiques</p>
            {[
              { label: 'Tarifs & honoraires', href: '/infos-pratiques/tarifs' },
              { label: 'Documents requis', href: '/infos-pratiques/documents-requis' },
              { label: 'Foire Aux Questions', href: '/infos-pratiques/faq' },
              { label: 'Prendre rendez-vous', href: '/infos-pratiques/rendez-vous' },
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="hover-text-gold" style={linkStyle}>{item.label}</Link>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', position: 'relative', zIndex: 10 }}>
        <div className="section-container footer-bottom" style={{
          padding: '1.5rem 24px', display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontFamily: "'Jost', sans-serif" }}>
            © 2006 Cabinet Maître Amadou Koné — Notaire à Bamako, Mali. Tous droits réservés.
          </p>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'Confidentialité', href: '/politique-confidentialite' },
              { label: 'Mentions légales', href: '/mentions-legales' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="hover-text-gold" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: "'Jost', sans-serif" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hover-text-gold:hover { color: #E6C98A !important; }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            padding: 2rem 16px !important;
          }
          .footer-bottom-links {
            flex-direction: column !important;
            gap: 0.75rem !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  )
}
