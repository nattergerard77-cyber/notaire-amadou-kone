import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import InnerHero from '@/components/layout/InnerHero'
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageWithSidebar from '@/components/shared/PageWithSidebar'
import { formatDate } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/metadata'
// import { allArticles } from 'contentlayer/generated'

interface Props {
  params: { slug: string; locale: string }
}

const mockArticles = [
  {
    title: "Comment sécuriser l'achat d'un terrain à Bamako en 2025",
    date: "2025-04-15",
    author: "Maître Amadou Koné",
    category: "Immobilier",
    excerpt: "Vérification du titre foncier, risques à éviter, rôle du notaire dans la transaction immobilière au Mali.",
    tag: "Guide pratique",
    slug: "acheter-terrain-bamako-2025",
    body: { code: "" } // Placeholder for MDX content
  }
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = mockArticles.find(a => a.slug === params.slug)
  if (!article) return {}

  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${params.slug}`,
  })
}

export default function ArticlePage({ params }: Props) {
  const article = mockArticles.find(a => a.slug === params.slug)
  if (!article) notFound()

  return (
    <>
      <InnerHero title={article.title} tag={article.category} />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: article.title }]} />
      
      <PageWithSidebar showRdv>
        <article className="prose prose-navy max-w-none">
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-4 border-b border-gray-100">
            <span>Par {article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="bg-gold-pale text-gold-dark px-2 py-0.5 rounded font-medium">{article.tag}</span>
          </div>
          
          <div className="text-gray-600 leading-relaxed space-y-6">
             <p className="text-lg font-medium text-navy">{article.excerpt}</p>
             <p>Contenu de l'article en cours de chargement...</p>
             <p>Dans un environnement réel, le contenu MDX serait rendu ici via Contentlayer.</p>
          </div>
        </article>
      </PageWithSidebar>
    </>
  )
}
