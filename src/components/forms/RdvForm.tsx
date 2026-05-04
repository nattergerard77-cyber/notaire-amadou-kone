'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RdvSchema, type RdvFormData } from '@/types/forms'
import { CheckCircle, Loader2 } from 'lucide-react'

const CRENEAUX = ['08h00', '09h00', '10h00', '11h00', '14h00', '15h00', '16h00']

export default function RdvForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [creneau, setCreneau] = useState('')
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<RdvFormData>({ resolver: zodResolver(RdvSchema) })

  const onSubmit = async (data: RdvFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/rendez-vous', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (res.ok) { setStatus('success'); reset(); setCreneau('') } else setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div className="flex flex-col items-center py-12 text-center">
      <CheckCircle size={48} className="text-green-500 mb-4" />
      <h3 className="font-medium text-navy text-lg mb-2">Demande envoyée !</h3>
      <p className="text-gray-500 text-sm mb-6">Nous confirmerons votre RDV sous 24h ouvrées.</p>
      <button onClick={() => setStatus('idle')} className="btn-outline-dark text-sm">Nouvelle demande</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label className="form-label">Prénom *</label><input type="text" className="form-input" placeholder="Moussa" {...register('prenom')} />{errors.prenom && <p className="form-error">{errors.prenom.message}</p>}</div>
        <div><label className="form-label">Nom *</label><input type="text" className="form-input" placeholder="Diabaté" {...register('nom')} />{errors.nom && <p className="form-error">{errors.nom.message}</p>}</div>
        <div><label className="form-label">Téléphone *</label><input type="tel" className="form-input" placeholder="+223 XX XX XX XX" {...register('telephone')} />{errors.telephone && <p className="form-error">{errors.telephone.message}</p>}</div>
        <div><label className="form-label">Email *</label><input type="email" className="form-input" placeholder="exemple@mail.ml" {...register('email')} />{errors.email && <p className="form-error">{errors.email.message}</p>}</div>
        <div><label className="form-label">Domaine *</label>
          <select className="form-input" {...register('domaine')}>
            <option value="">Choisissez un domaine</option>
            <option value="immobilier">Droit immobilier</option>
            <option value="famille-succession">Famille & succession</option>
            <option value="droit-des-affaires">Droit des affaires</option>
            <option value="donations">Donations</option>
            <option value="autre">Autre</option>
          </select>{errors.domaine && <p className="form-error">{errors.domaine.message}</p>}
        </div>
        <div><label className="form-label">Date souhaitée *</label><input type="date" className="form-input" min={new Date().toISOString().split('T')[0]} {...register('date')} />{errors.date && <p className="form-error">{errors.date.message}</p>}</div>
      </div>
      <div>
        <label className="form-label">Créneau horaire *</label>
        <div className="flex flex-wrap gap-2">
          {CRENEAUX.map((c) => (
            <button key={c} type="button" onClick={() => { setCreneau(c); setValue('heure', c) }}
              className={`px-4 py-2 rounded text-sm border transition-all ${creneau === c ? 'bg-navy text-gold-light border-navy' : 'border-gray-200 text-gray-600 hover:border-gold-light'}`}>
              {c}
            </button>
          ))}
        </div>
        <input type="hidden" {...register('heure')} />
        {errors.heure && <p className="form-error">{errors.heure.message}</p>}
      </div>
      <div><label className="form-label">Précisions (optionnel)</label><textarea rows={3} className="form-input resize-none" placeholder="Décrivez brièvement votre situation..." {...register('description')} /></div>
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60">
        {status === 'loading' ? <><Loader2 size={16} className="animate-spin" />Envoi en cours…</> : 'Confirmer la demande de rendez-vous'}
      </button>
    </form>
  )
}
