import { z } from 'zod'

export const ContactSchema = z.object({
  nom: z.string().min(2, 'Votre nom doit comporter au moins 2 caractères'),
  telephone: z.string().min(8, 'Numéro de téléphone invalide'),
  email: z.string().email('Adresse email invalide'),
  objet: z.enum(['renseignement', 'devis', 'rdv', 'autre'], { errorMap: () => ({ message: 'Veuillez choisir un objet' }) }),
  message: z.string().min(20, 'Votre message doit comporter au moins 20 caractères'),
  rgpd: z.literal(true, { errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' }) }),
})
export type ContactFormData = z.infer<typeof ContactSchema>

export const RdvSchema = z.object({
  prenom: z.string().min(2, 'Prénom requis'),
  nom: z.string().min(2, 'Nom requis'),
  telephone: z.string().min(8, 'Numéro invalide'),
  email: z.string().email('Email invalide'),
  domaine: z.enum(['immobilier', 'famille-succession', 'droit-des-affaires', 'donations', 'autre']),
  date: z.string().min(1, 'Veuillez choisir une date'),
  heure: z.string().min(1, 'Veuillez choisir un créneau'),
  description: z.string().optional(),
})
export type RdvFormData = z.infer<typeof RdvSchema>
