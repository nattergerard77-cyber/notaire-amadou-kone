import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DOMAINES } from '@/lib/constants'
import { CABINET } from '@/lib/constants'
import { MessageCircle, CalendarCheck } from 'lucide-react'

interface SidebarCard {
  title: string
  content: ReactNode
}

interface Props {
  children: ReactNode
  sidebarCards?: SidebarCard[]
  activePath?: string
  showDomains?: boolean
  showRdv?: boolean
}

export default function PageWithSidebar({ children, sidebarCards = [], activePath, showDomains = false, showRdv = true }: Props) {
  return (
    <div className="section-container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <main className="lg:col-span-2">{children}</main>
        <aside className="space-y-5" aria-label="Navigation et contact">
          {/* Domains nav */}
          {showDomains && (
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-medium text-navy text-sm mb-4 pb-3 border-b border-gray-200">
                Tous nos domaines
              </h3>
              <nav>
                <ul className="space-y-1">
                  {DOMAINES.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/domaines/${d.slug}`}
                        className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                          activePath === `/domaines/${d.slug}`
                            ? 'bg-gold-pale text-gold-dark font-medium'
                            : 'text-gray-600 hover:bg-gold-pale/50 hover:text-navy'
                        }`}
                      >
                        {d.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* RDV card */}
          {showRdv && (
            <div className="bg-navy rounded-xl p-5 text-white">
              <h3 className="font-serif text-gold-light text-base mb-2">Prendre rendez-vous</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Consultez notre équipe pour votre dossier.
              </p>
              <Link href="/infos-pratiques/rendez-vous" className="btn-primary block text-center text-xs py-2.5 mb-2">
                <CalendarCheck size={13} className="inline mr-1.5" />
                Réserver un créneau
              </Link>
              <a
                href={`https://wa.me/${CABINET.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366]/20 text-[#25D366] text-xs font-medium py-2.5 rounded hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle size={13} />
                WhatsApp direct
              </a>
            </div>
          )}

          {/* Custom sidebar cards */}
          {sidebarCards.map((card, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-medium text-navy text-sm mb-4 pb-3 border-b border-gray-200">{card.title}</h3>
              {card.content}
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
