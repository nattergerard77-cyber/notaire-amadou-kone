import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import CookieBanner from '@/components/layout/CookieBanner'
import { defaultMetadata } from '@/lib/metadata'
import '../globals.css'

export const metadata: Metadata = defaultMetadata

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Cabinet Maître Amadou Koné',
              description: 'Cabinet notarial de référence à Bamako, Mali.',
              url: 'https://www.maitre-amadou-kone.com',
              telephone: '+22320224466',
              email: 'contact@maitre-amadou-kone.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hamdallaye ACI 2000, Rue 327',
                addressLocality: 'Bamako',
                addressCountry: 'ML',
              },
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main style={{ paddingTop: '88px' }}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
