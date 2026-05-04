import Link from 'next/link'
import { Home, Users, Briefcase, Heart, FileText, HelpCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  Home, Users, Briefcase, Heart, FileText, HelpCircle,
}

interface Props {
  slug: string
  title: string
  description: string
  icon: string
  className?: string
}

export default function DomainCard({ slug, title, description, icon, className }: Props) {
  const Icon = iconMap[icon as keyof typeof iconMap] || FileText

  return (
    <Link
      href={`/domaines/${slug}`}
      className={cn(
        'group card-domain flex flex-col bg-white',
        className
      )}
      aria-label={`En savoir plus sur ${title}`}
    >
      <div className="w-10 h-10 rounded-lg bg-gold-pale flex items-center justify-center mb-4 group-hover:bg-gold-light/30 transition-colors">
        <Icon size={18} className="text-gold-dark" strokeWidth={1.5} />
      </div>
      <h3 className="font-medium text-navy text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1.5 mt-4 text-gold text-xs font-medium group-hover:gap-2.5 transition-all">
        En savoir plus <ArrowRight size={13} />
      </div>
    </Link>
  )
}
