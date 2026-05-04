'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { if (!localStorage.getItem('cookie-consent')) setVisible(true) }, [])
  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false) }
  const reject = () => { localStorage.setItem('cookie-consent', 'rejected'); setVisible(false) }
  if (!visible) return null
  return (
    <div className="animate-fade-up" style={{
      position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 50,
      backgroundColor: '#ffffff', borderRadius: '12px',
      boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #f3f4f6',
      maxWidth: '400px', padding: '1.5rem'
    }}>
      <h3 style={{ fontFamily: "'Jost', sans-serif", fontSize: '1rem', fontWeight: 600, color: '#081A2A', marginBottom: '0.5rem' }}>
        Respect de votre vie privée
      </h3>
      <p style={{ color: '#667085', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem', fontFamily: "'Jost', sans-serif" }}>
        Ce site utilise des cookies essentiels pour améliorer votre expérience.{' '}
        <Link href="/politique-confidentialite" style={{ color: '#D8B26E', textDecoration: 'none', fontWeight: 500 }}>
          En savoir plus.
        </Link>
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button onClick={accept} className="btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }}>
          Accepter
        </button>
        <button onClick={reject} className="btn-outline" style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }}>
          Refuser
        </button>
      </div>
    </div>
  )
}
