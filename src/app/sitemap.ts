import { MetadataRoute } from 'next'
import { BLOG_ARTICLES, DOMAINES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.maitre-amadou-kone.com'

  // Pages statiques principales
  const staticPages = [
    '',
    '/domaines',
    '/blog',
    '/contact',
    '/a-propos',
    '/a-propos/equipe',
    '/a-propos/histoire',
    '/a-propos/engagements',
    '/mentions-legales',
    '/politique-confidentialite',
    '/infos-pratiques/rendez-vous',
    '/infos-pratiques/documents-requis',
    '/infos-pratiques/tarifs',
    '/infos-pratiques/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Pages des domaines d'expertise
  const domainPages = DOMAINES.map((domain) => ({
    url: `${baseUrl}/domaines/${domain.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Pages des articles de blog (uniquement les articles validés dans constants.ts)
  const blogPages = BLOG_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...domainPages, ...blogPages]
}
