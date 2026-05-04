import Link from 'next/link'
import { Phone, Mail, Clock } from 'lucide-react'
import { CABINET } from '@/lib/constants'

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-navy rounded-2xl p-6 text-white">
        <h3 className="font-serif text-gold-light text-xl mb-4">Contact direct</h3>
        <div className="space-y-4">
          <a href={`tel:${CABINET.phone}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <Phone size={18} className="text-gold-light" />
            <span className="text-sm">{CABINET.phone}</span>
          </a>
          <a href={`mailto:${CABINET.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <Mail size={18} className="text-gold-light" />
            <span className="text-sm truncate">{CABINET.email}</span>
          </a>
          <div className="flex items-start gap-3 text-white/70">
            <Clock size={18} className="text-gold-light mt-0.5" />
            <div className="text-xs space-y-1">
              <p>{CABINET.hours.weekdays}</p>
              <p>{CABINET.hours.friday}</p>
            </div>
          </div>
        </div>
        <Link href="/infos-pratiques/rendez-vous" className="btn-primary w-full mt-6 text-center block py-2.5 text-xs">
          Prendre rendez-vous
        </Link>
      </div>
      
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="font-serif text-navy text-lg mb-3">Newsletter</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">
          Recevez nos derniers conseils juridiques et actualités notariales au Mali.
        </p>
        <form className="space-y-3">
          <input type="email" placeholder="votre@email.com" className="form-input text-xs" />
          <button type="submit" className="btn-outline-dark w-full py-2 text-xs">S'abonner</button>
        </form>
      </div>
    </div>
  )
}
