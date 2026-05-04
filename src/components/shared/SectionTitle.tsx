interface Props { title: string; subtitle?: string; centered?: boolean; light?: boolean }

export default function SectionTitle({ title, subtitle, centered = false, light = false }: Props) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className={`font-serif text-3xl font-normal mb-2 ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      <div className={`gold-divider ${centered ? 'mx-auto' : ''}`} />
      {subtitle && <p className={`text-sm leading-relaxed mt-2 max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-gray-500'}`}>{subtitle}</p>}
    </div>
  )
}
