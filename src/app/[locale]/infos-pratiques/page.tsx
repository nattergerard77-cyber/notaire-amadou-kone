import { Metadata } from 'next'
import Link from 'next/link'
import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import SectionTitle from '@/components/shared/SectionTitle'
import PageWithSidebar from '@/components/shared/PageWithSidebar'
import { generatePageMetadata } from '@/lib/metadata'
import { FileText, Calculator, HelpCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Infos pratiques — Cabinet Maître Amadou Koné',
  description: 'Tarifs, documents requis, FAQ et prise de rendez-vous pour vos actes notariaux au Mali.',
  path: '/infos-pratiques',
})

const INFOS = [
  { title: 'Tarifs & honoraires', href: '/infos-pratiques/tarifs', icon: Calculator, desc: 'Comprendre le coût des actes et les taxes.' },
  { title: 'Documents requis', href: '/infos-pratiques/documents-requis', icon: FileText, desc: 'La liste des pièces pour votre dossier.' },
  { title: 'FAQ', href: '/infos-pratiques/faq', icon: HelpCircle, desc: 'Réponses aux questions fréquentes.' },
  { title: 'Prendre rendez-vous', href: '/infos-pratiques/rendez-vous', icon: Calendar, desc: 'Réservez votre créneau en ligne.' },
]

export default function InfosPratiquesPage() {
  return (
    <>
      <InnerHero 
        title="Infos pratiques" 
        subtitle="Tout ce qu'il faut savoir avant votre visite au cabinet" 
        className="hero-bg-photo hero-bg-contact"
      />
      <Breadcrumb items={[{ label: 'Infos pratiques' }]} />
      <PageWithSidebar>
        <SectionTitle title="Préparer votre dossier" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {INFOS.map((info) => (
            <Link key={info.href} href={info.href} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-gold-light transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center mb-4 group-hover:bg-gold-light transition-colors">
                <info.icon size={20} className="text-gold-dark" />
              </div>
              <h3 className="font-medium text-navy mb-2">{info.title}</h3>
              <p className="text-sm text-gray-500">{info.desc}</p>
            </Link>
          ))}
        </div>
      </PageWithSidebar>
    </>
  )
}
