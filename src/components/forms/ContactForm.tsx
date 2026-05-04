'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactSchema, type ContactFormData } from '@/types/forms'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(ContactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (res.ok) { setStatus('success'); reset() } else setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div className="flex flex-col items-center py-12 text-center">
      <CheckCircle size={48} className="text-green-500 mb-4" />
      <h3 className="font-medium text-navy text-lg mb-2">Message envoyé !</h3>
      <p className="text-gray-500 text-sm mb-6">Nous vous répondrons dans les 24h ouvrées.</p>
      <button onClick={() => setStatus('idle')} className="btn-outline-dark text-sm">Envoyer un autre message</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {status === 'error' && <div className="flex items-center gap-2 bg-red-50 text-red-700 text-sm px-4 py-3 rounded-lg border border-red-100" role="alert"><AlertCircle size={16} />Une erreur est survenue. Veuillez réessayer.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label className="form-label">Prénom & Nom *</label><input type="text" className="form-input" placeholder="Moussa Diabaté" {...register('nom')} />{errors.nom && <p className="form-error">{errors.nom.message}</p>}</div>
        <div><label className="form-label">Téléphone *</label><input type="tel" className="form-input" placeholder="+223 XX XX XX XX" {...register('telephone')} />{errors.telephone && <p className="form-error">{errors.telephone.message}</p>}</div>
      </div>
      <div><label className="form-label">Email *</label><input type="email" className="form-input" placeholder="votre@email.ml" {...register('email')} />{errors.email && <p className="form-error">{errors.email.message}</p>}</div>
      <div><label className="form-label">Objet *</label>
        <select className="form-input" {...register('objet')}>
          <option value="">Choisissez un objet</option>
          <option value="renseignement">Demande de renseignement</option>
          <option value="devis">Demande de devis</option>
          <option value="rdv">Prise de rendez-vous</option>
          <option value="autre">Autre</option>
        </select>{errors.objet && <p className="form-error">{errors.objet.message}</p>}
      </div>
      <div><label className="form-label">Message *</label><textarea rows={5} className="form-input resize-none" placeholder="Décrivez votre situation..." {...register('message')} />{errors.message && <p className="form-error">{errors.message.message}</p>}</div>
      <div className="flex items-start gap-3">
        <input id="rgpd" type="checkbox" className="mt-0.5 w-4 h-4 accent-gold" {...register('rgpd')} />
        <label htmlFor="rgpd" className="text-xs text-gray-500 leading-relaxed cursor-pointer">J'accepte que mes données soient utilisées pour traiter ma demande. <a href="/politique-confidentialite" className="text-gold underline">Politique de confidentialité</a></label>
      </div>{errors.rgpd && <p className="form-error">{errors.rgpd.message}</p>}
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60">
        {status === 'loading' ? <><Loader2 size={16} className="animate-spin" />Envoi en cours…</> : 'Envoyer le message'}
      </button>
    </form>
  )
}
