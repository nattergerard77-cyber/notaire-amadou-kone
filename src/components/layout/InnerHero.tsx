import { DecorativePalace } from '@/components/shared/SvgIcons'

interface Props { title: string; subtitle?: string; tag?: string; className?: string }

export default function InnerHero({ title, subtitle, tag, className }: Props) {
  return (
    <section className={className} style={{ backgroundColor: '#081A2A', position: 'relative', overflow: 'hidden' }}>
      <DecorativePalace style={{ position: 'absolute', right: '-5%', top: '0', width: '400px', height: '400px', opacity: 0.05, color: '#D8B26E', pointerEvents: 'none' }} />
      <div className="section-container relative z-10" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        {tag && (
          <span className="animate-fade-up" style={{
            display: 'inline-block', color: '#D8B26E', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>{tag}</span>
        )}
        <h1 className="animate-fade-up" style={{ color: '#ffffff', marginBottom: '1rem', animationDelay: '100ms' }}>
          {title}
        </h1>
        <div className="gold-divider animate-fade-up" style={{ animationDelay: '150ms' }} />
        {subtitle && (
          <p className="animate-fade-up" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '700px', marginTop: '1.5rem', animationDelay: '200ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
