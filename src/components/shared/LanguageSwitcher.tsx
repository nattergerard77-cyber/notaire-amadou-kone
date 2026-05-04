'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { routing } from '@/i18n/routing'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1" aria-label="Changement de langue">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`text-xs px-2 py-1 rounded transition-colors ${
            locale === loc
              ? 'bg-gold-light text-navy font-medium'
              : 'text-white/50 hover:text-white/80'
          }`}
          aria-pressed={locale === loc}
          lang={loc}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
