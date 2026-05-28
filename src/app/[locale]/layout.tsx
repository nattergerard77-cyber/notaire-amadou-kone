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
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LegalService",
                  "name": "Maître Amadou Koné",
                  "alternateName": "Cabinet Notarial Maître Amadou Koné",
                  "url": "https://www.maitre-amadou-kone.com",
                  "areaServed": {
                    "@type": "City",
                    "name": "Bamako"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bamako",
                    "addressCountry": "ML"
                  },
                  "telephone": "+223 75 87 41 99",
                  "logo": "https://www.maitre-amadou-kone.com/images/favicon.png"
                },
                {
                  "@type": "WebSite",
                  "name": "Maître Amadou Koné",
                  "alternateName": "Maître Amadou Koné - Notaire à Bamako, Mali",
                  "url": "https://www.maitre-amadou-kone.com"
                }
              ]
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
