'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, CABINET } from '@/lib/constants'
import { LogoMarkAK, IconPhone, IconClock } from '@/components/shared/SvgIcons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setIsOpen(false); setOpenMenu(null) }, [pathname])

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    backgroundColor: '#081A2A',
    boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
    transition: 'box-shadow 0.3s ease',
  }

  const linkStyle = (active: boolean): React.CSSProperties => ({
    color: active ? '#D8B26E' : 'rgba(255,255,255,0.72)',
    fontSize: '0.875rem', letterSpacing: '0.025em',
    transition: 'color 0.2s', textDecoration: 'none',
    background: 'none', border: 'none', cursor: 'pointer',
    fontFamily: "'Jost', sans-serif", padding: 0,
  })

  return (
    <header style={navStyle}>
      {/* Top bar */}
      <div style={{ backgroundColor: '#050E18', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'none' }} className="topbar-desktop">
        <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.375rem 24px' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <IconClock width="12" height="12" /> Lun–Jeu: 08h–17h · Ven: 08h–13h
          </span>
          <a href={`tel:${CABINET.phone}`} style={{ color: '#D8B26E', fontSize: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <IconPhone width="12" height="12" /> {CABINET.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 24px', maxWidth: '1180px', margin: '0 auto' }}>
        {/* Logo */}
        <Link href="/" className="site-logo-container">
          <div className="site-emblem-crop">
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

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {NAV_LINKS.map((link) => (
            <div key={link.href} style={{ position: 'relative' }}
              onMouseEnter={() => link.children && setOpenMenu(link.href)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {link.children ? (
                <>
                  <button style={linkStyle(pathname.startsWith(link.href))}>
                    {link.label} <span style={{ fontSize: '0.7em', marginLeft: '2px', opacity: 0.7 }}>▼</span>
                  </button>
                  {openMenu === link.href && (
                    <div className="animate-fade-in" style={{
                      position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                      paddingTop: '1.25rem', zIndex: 100, minWidth: '220px',
                    }}>
                      <div className="premium-card" style={{ padding: '0.5rem 0', borderRadius: '12px' }}>
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href} style={{
                            display: 'block', padding: '0.75rem 1.5rem',
                            fontSize: '0.875rem', color: pathname === child.href ? '#D8B26E' : '#101828',
                            fontWeight: pathname === child.href ? 500 : 400,
                            backgroundColor: pathname === child.href ? '#FAF7F2' : 'transparent',
                            textDecoration: 'none', transition: 'all 0.15s',
                            fontFamily: "'Jost', sans-serif",
                          }}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} style={linkStyle(pathname === link.href)}>
                  <span style={pathname === link.href ? { color: '#D8B26E', borderBottom: '1px solid #D8B26E', paddingBottom: '2px' } : {}}>{link.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/infos-pratiques/rendez-vous" className="nav-cta">
            Prendre RDV
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#fff', fontSize: '1.5rem', lineHeight: 1, padding: '0.25rem',
            }}
            aria-label="Menu"
            className="burger-btn"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="animate-fade-in" style={{ backgroundColor: '#0D1B2A', borderTop: '1px solid rgba(255,255,255,0.08)', maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
          <div style={{ padding: '1.5rem 24px', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '1180px', margin: '0 auto' }}>
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link href={link.href} style={{
                  display: 'block', padding: '0.75rem 0',
                  color: pathname.startsWith(link.href) ? '#D8B26E' : 'rgba(255,255,255,0.9)',
                  fontSize: '1rem', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontFamily: "'Jost', sans-serif",
                }}>{link.label}</Link>
                {link.children && (
                  <div style={{ paddingLeft: '1.5rem', borderLeft: '1px solid rgba(216,178,110,0.3)', margin: '0.5rem 0 1rem 0.5rem' }}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} style={{
                        display: 'block', padding: '0.5rem 0',
                        color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem',
                        textDecoration: 'none', fontFamily: "'Jost', sans-serif",
                      }}>{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/infos-pratiques/rendez-vous" className="btn-primary" style={{ textAlign: 'center', marginTop: '1.5rem', width: '100%' }}>
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .burger-btn { display: none !important; }
          .topbar-desktop { display: block !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
        }
        @media (max-width: 640px) {
          .nav-cta {
            padding: 0.6rem 1rem !important;
            font-size: 0.85rem !important;
          }
        }

      `}</style>
    </header>
  )
}
