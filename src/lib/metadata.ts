import type { Metadata } from 'next'
import { CABINET } from './constants'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maitre-amadou-kone.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${CABINET.name} â€” Notaire Ã  Bamako, Mali`,
    template: `%s | ${CABINET.name} â€” Notaire Bamako`,
  },
  description:
    'Cabinet notarial de MaÃ®tre Amadou KonÃ© Ã  Bamako. Expert en droit immobilier, successions, droit des affaires et donations au Mali. Prenez rendez-vous en ligne.',
  keywords: [
    'notaire Bamako', 'notaire Mali', 'acte notariÃ© Mali',
    'achat immobilier Bamako', 'succession Mali', 'droit des affaires Mali',
    'MaÃ®tre Amadou KonÃ©', 'cabinet notarial Bamako',
    'titre foncier Mali', 'donation Mali',
  ],
  authors: [{ name: CABINET.name }],
  creator: CABINET.name,
  publisher: CABINET.shortName,
  openGraph: {
    type: 'website',
    locale: 'fr_ML',
    url: siteUrl,
    siteName: `${CABINET.name} â€” Notaire`,
    title: `${CABINET.name} â€” Notaire Ã  Bamako, Mali`,
    description: 'Cabinet notarial de rÃ©fÃ©rence Ã  Bamako. Droit immobilier, successions, famille, droit des affaires.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Cabinet MaÃ®tre Amadou KonÃ© â€” Notaire Bamako' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CABINET.name} â€” Notaire Ã  Bamako`,
    description: 'Cabinet notarial de rÃ©fÃ©rence Ã  Bamako, Mali.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: siteUrl,
    languages: { 'fr': `${siteUrl}/fr`, 'en': `${siteUrl}/en` },
  },
  verification: {
    google: 'VOTRE_GOOGLE_VERIFICATION_CODE',
  },
}

export function generatePageMetadata(params: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  return {
    title: params.title,
    description: params.description,
    alternates: { canonical: `${siteUrl}${params.path}` },
    openGraph: {
      title: params.title,
      description: params.description,
      url: `${siteUrl}${params.path}`,
      images: [{ url: params.image || '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}
