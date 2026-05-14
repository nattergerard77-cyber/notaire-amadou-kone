import type { Metadata } from 'next'
import { CABINET } from './constants'

const siteUrl = 'https://www.maitre-amadou-kone.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Maître Amadou Koné',
  title: {
    default: 'Maître Amadou Koné - Notaire à Bamako, Mali',
    template: `%s | Maître Amadou Koné - Notaire à Bamako`,
  },
  description:
    'Cabinet notarial à Bamako, Mali. Maître Amadou Koné vous accompagne pour vos actes immobiliers, successions, donations, affaires et conseils juridiques.',
  keywords: [
    'notaire Bamako', 'notaire Mali', 'acte notarié Mali',
    'achat immobilier Bamako', 'succession Mali', 'droit des affaires Mali',
    'Maître Amadou Koné', 'cabinet notarial Bamako',
    'titre foncier Mali', 'donation Mali',
  ],
  authors: [{ name: 'Maître Amadou Koné' }],
  creator: 'Maître Amadou Koné',
  publisher: 'Cabinet Notarial Maître Amadou Koné',
  openGraph: {
    type: 'website',
    locale: 'fr_ML',
    url: siteUrl,
    siteName: 'Maître Amadou Koné',
    title: 'Maître Amadou Koné - Notaire à Bamako, Mali',
    description: 'Cabinet notarial à Bamako, Mali. Maître Amadou Koné vous accompagne pour vos actes immobiliers, successions, donations, affaires et conseils juridiques.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Cabinet Maître Amadou Koné - Notaire Bamako' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maître Amadou Koné - Notaire à Bamako, Mali',
    description: 'Cabinet notarial à Bamako, Mali. Maître Amadou Koné vous accompagne pour vos actes immobiliers, successions, donations, affaires et conseils juridiques.',
    images: ['/images/og-image.jpg'],
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
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
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
