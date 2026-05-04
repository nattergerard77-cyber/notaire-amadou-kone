import { Metadata } from 'next'
import Link from 'next/link'
import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import SectionTitle from '@/components/shared/SectionTitle'
import PageWithSidebar from '@/components/shared/PageWithSidebar'
import { generatePageMetadata } from '@/lib/metadata'
import { CABINET } from '@/lib/constants'

export const metadata: Metadata = generatePageMetadata({
  title: 'À propos — Cabinet Maître Amadou Koné',
  description: 'Découvrez le cabinet notarial de Maître Amadou Koné à Bamako, son histoire, ses engagements et son équipe.',
  path: '/a-propos',
})

export default function AboutPage() {
  return (
    <>
      <InnerHero 
        title="À propos du cabinet" 
        subtitle="Plus de 20 ans au service de la sécurité juridique au Mali" 
        className="hero-bg-photo hero-bg-about about-hero-new-bg"
      />
      <Breadcrumb items={[{ label: 'À propos' }]} />
      <PageWithSidebar>
        <section className="mb-12">
          <SectionTitle title="Un cabinet de référence à Bamako" />
          <p className="text-gray-600 leading-relaxed mb-6">
            Fondé en {CABINET.established} par Maître Amadou Koné, notre cabinet s'est imposé comme une institution 
            notariale de premier plan à Bamako. Nous accompagnons nos clients, particuliers comme entreprises, 
            dans les moments clés de leur vie et de leur développement.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre expertise couvre l'ensemble du droit notarial, avec une spécialisation reconnue en droit immobilier, 
            droit de la famille, successions et droit des affaires au Mali.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <Link href="/a-propos/equipe" className="bg-white p-6 rounded-xl border border-gray-100 hover:border-gold-light transition-all group">
              <h3 className="font-medium text-navy mb-2 group-hover:text-gold">L'équipe</h3>
              <p className="text-sm text-gray-500">Rencontrez nos notaires et collaborateurs.</p>
            </Link>
            <Link href="/a-propos/histoire" className="bg-white p-6 rounded-xl border border-gray-100 hover:border-gold-light transition-all group">
              <h3 className="font-medium text-navy mb-2 group-hover:text-gold">Histoire</h3>
              <p className="text-sm text-gray-500">Notre parcours et notre ancrage à Bamako.</p>
            </Link>
          </div>
        </section>
      </PageWithSidebar>
    </>
  )
}
