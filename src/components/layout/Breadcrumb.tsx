import Link from 'next/link'

interface Item { label: string; href?: string }
interface Props { items: Item[] }

export default function Breadcrumb({ items }: Props) {
  const all = [{ label: 'Accueil', href: '/' }, ...items]
  return (
    <nav aria-label="Fil d'Ariane" style={{ backgroundColor: '#FAF7F2', borderBottom: '1px solid #e5e7eb' }}>
      <div className="section-container" style={{ padding: '1rem 24px' }}>
        <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', listStyle: 'none' }}>
          {all.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {i > 0 && <span style={{ color: '#D8B26E', fontSize: '0.8rem' }}>/</span>}
              {item.href && i < all.length - 1 ? (
                <Link href={item.href} style={{ fontSize: '0.85rem', color: '#667085', textDecoration: 'none', fontFamily: "'Jost', sans-serif", transition: 'color 0.2s' }} className="hover:text-gold">
                  {item.label}
                </Link>
              ) : (
                <span style={{ fontSize: '0.85rem', color: '#081A2A', fontWeight: 500, fontFamily: "'Jost', sans-serif" }} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
      <style>{`
        .hover\\:text-gold:hover { color: #D8B26E !important; }
      `}</style>
    </nav>
  )
}
