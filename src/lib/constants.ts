export const CABINET = {
  name: 'Maître Amadou Koné',
  title: 'Notaire à Bamako, Mali',
  shortName: 'Cabinet Koné',
  phone: '+223 75 87 41 99',
  whatsapp: '22375874199',
  email: 'contact@maitre-amadou-kone.com',
  address: {
    street: 'Hamdallaye ACI 2000, Rue 327',
    city: 'Bamako',
    country: 'Mali',
    full: 'Hamdallaye ACI 2000, Rue 327, Bamako, Mali',
  },
  hours: {
    weekdays: 'Lundi – Jeudi : 08h00 – 17h00',
    friday: 'Vendredi : 08h00 – 13h00',
    weekend: 'Samedi – Dimanche : Fermé',
  },
  established: 2003,
  stats: { experience: '20+', actes: '5 000+', satisfaction: '98%' },
}

export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  {
    label: 'À propos', href: '/a-propos',
    children: [
      { label: "L'équipe", href: '/a-propos/equipe' },
      { label: 'Histoire', href: '/a-propos/histoire' },
      { label: 'Engagements', href: '/a-propos/engagements' },
    ],
  },
  {
    label: 'Domaines', href: '/domaines',
    children: [
      { label: 'Droit immobilier', href: '/domaines/immobilier' },
      { label: 'Famille & succession', href: '/domaines/famille-succession' },
      { label: 'Droit des affaires', href: '/domaines/droit-des-affaires' },
      { label: 'Donations', href: '/domaines/donations' },
    ],
  },
  {
    label: 'Infos pratiques', href: '/infos-pratiques',
    children: [
      { label: 'Tarifs & honoraires', href: '/infos-pratiques/tarifs' },
      { label: 'Documents requis', href: '/infos-pratiques/documents-requis' },
      { label: 'FAQ', href: '/infos-pratiques/faq' },
      { label: 'Prendre RDV', href: '/infos-pratiques/rendez-vous' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const DOMAINES = [
  {
    slug: 'immobilier', title: 'Droit immobilier', shortTitle: 'Immobilier', icon: 'Home',
    description: 'Vente, achat, hypothèque, viabilisation de terrains, baux commerciaux et résidentiels.',
    prestations: [
      { name: 'Vente & achat', items: ['Avant-contrat (compromis)', 'Acte authentique de vente', 'Purge des droits de préemption', 'Publication foncière'] },
      { name: 'Titre foncier & terrain', items: ['Viabilisation de parcelles', 'Mutation de titre foncier', 'Division de terrain', 'Bornage et immatriculation'] },
      { name: 'Hypothèque & prêt', items: ['Constitution d\'hypothèque', 'Mainlevée d\'hypothèque', 'Prêt immobilier bancaire', 'Caution et garanties réelles'] },
      { name: 'Baux & locations', items: ['Bail commercial', 'Bail d\'habitation notarié', 'Renouvellement de bail', 'Résiliation amiable'] },
    ],
    documents: ['Carte d\'identité nationale', 'Titre foncier ou attestation', 'Plan de situation', 'Certificat de non-gage'],
  },
  {
    slug: 'famille-succession', title: 'Famille & succession', shortTitle: 'Famille', icon: 'Users',
    description: 'Testaments, héritages, mariages, divorces, partage successoral et protection des personnes.',
    prestations: [
      { name: 'Mariage & contrat', items: ['Contrat de mariage', 'Changement de régime matrimonial', 'Donation entre époux', 'Convention de PACS'] },
      { name: 'Succession', items: ['Déclaration de succession', 'Acte de notoriété', 'Partage successoral', 'Certificat d\'hérédité'] },
      { name: 'Testament', items: ['Testament authentique', 'Conservation de testament', 'Révocation de testament', 'Legs particulier'] },
      { name: 'Protection', items: ['Mandat de protection future', 'Tutelle et curatelle', 'Adoption', 'Habilitation familiale'] },
    ],
    documents: ['CNI des parties', 'Actes de naissance', 'Livret de famille', 'Acte de décès (succession)'],
  },
  {
    slug: 'droit-des-affaires', title: 'Droit des affaires', shortTitle: 'Affaires', icon: 'Briefcase',
    description: 'Création de sociétés, statuts, cessions de parts, fusions et acquisitions.',
    prestations: [
      { name: 'Création d\'entreprise', items: ['Rédaction des statuts', 'SARL, SA, SNC, SCS', 'Enregistrement légal', 'Immatriculation RCCM'] },
      { name: 'Cession & acquisition', items: ['Cession de parts sociales', 'Cession de fonds de commerce', 'Fusion-acquisition', 'Audit juridique'] },
      { name: 'Vie de la société', items: ['Modification des statuts', 'Augmentation de capital', 'Dissolution et liquidation', 'PV d\'assemblée'] },
      { name: 'Contrats commerciaux', items: ['Contrats de partenariat', 'Franchises et licences', 'Contrats de distribution', 'Sécurisation de créances'] },
    ],
    documents: ['CNI de chaque associé', 'Attestation de domicile', 'Dénomination sociale', 'Capital social'],
  },
  {
    slug: 'donations', title: 'Donations', shortTitle: 'Donations', icon: 'Heart',
    description: 'Donations simples, entre époux, gestion et optimisation de votre patrimoine.',
    prestations: [
      { name: 'Donation simple', items: ['Donation de biens immobiliers', 'Donation de somme d\'argent', 'Donation de biens mobiliers', 'Clauses particulières'] },
      { name: 'Donation-partage', items: ['Répartition entre héritiers', 'Évitement des conflits', 'Donation transgénérationnelle', 'Rapport à succession'] },
      { name: 'Donation entre époux', items: ['Donation au dernier vivant', 'Droits du conjoint', 'Prérogatives en usufruit', 'Révocabilité'] },
      { name: 'Gestion patrimoniale', items: ['Bilan patrimonial', 'Optimisation fiscale', 'Démembrement de propriété', 'Viager et rente'] },
    ],
    documents: ['CNI du donateur et bénéficiaire', 'Titre de propriété', 'Actes de naissance', 'Acte de mariage si applicable'],
  },
]

export const TEAM = [
  { id: 'amadou-kone', name: 'Maître Amadou Koné', role: 'Notaire titulaire', initials: 'AK', color: '#0C447C', bio: 'Diplômé de l\'École Nationale d\'Administration du Mali, Maître Koné exerce depuis plus de 20 ans. Spécialiste en droit immobilier et droit des successions.', specialites: ['Droit immobilier', 'Successions', 'Droit international privé'] },
  { id: 'salimata-dembele', name: 'Maître Salimata Dembélé', role: 'Notaire associée', initials: 'SD', color: '#085041', bio: 'Spécialisée en droit de la famille et droit des affaires. Elle accompagne les entreprises maliennes dans leurs structurations juridiques depuis 2016.', specialites: ['Droit de la famille', 'Droit des affaires', 'Donations'] },
  { id: 'oumar-traore', name: 'Oumar Traoré', role: 'Clerc principal', initials: 'OT', color: '#633806', bio: 'Clerc expérimenté, Oumar gère la rédaction des actes courants et l\'accueil des clients. Plus de 10 ans au sein du cabinet.', specialites: ['Rédaction d\'actes', 'Suivi de dossiers', 'Relations clients'] },
  { id: 'aminata-coulibaly', name: 'Aminata Coulibaly', role: 'Clerc junior', initials: 'AC', color: '#3C3489', bio: 'Juriste diplômée, Aminata assure le suivi des dossiers immobiliers et la veille juridique du cabinet.', specialites: ['Dossiers immobiliers', 'Veille juridique', 'Recherches foncières'] },
  { id: 'kadiatou-sanogo', name: 'Kadiatou Sanogo', role: 'Secrétaire juridique', initials: 'KS', color: '#712B13', bio: 'Responsable de l\'accueil, de la gestion des rendez-vous et de l\'administration des dossiers clients.', specialites: ['Gestion administrative', 'Accueil clients', 'Planification RDV'] },
]

export const FAQ_DATA = [
  { question: 'Quelle est la différence entre un notaire et un avocat ?', answer: 'Le notaire est un officier public ministériel qui confère aux actes qu\'il rédige la valeur authentique et force exécutoire. Il conseille toutes les parties avec impartialité. L\'avocat défend les intérêts d\'une seule partie devant les tribunaux.', category: 'général' },
  { question: 'Combien de temps dure une signature chez le notaire ?', answer: 'Une signature simple (procuration, testament) dure 30 à 60 minutes. Une vente immobilière ou une succession peut nécessiter 1h à 2h selon la complexité du dossier.', category: 'général' },
  { question: 'Est-il obligatoire de passer par un notaire pour vendre un bien immobilier au Mali ?', answer: 'Au Mali, tout transfert de propriété immobilière doit faire l\'objet d\'un acte authentique dressé par un notaire pour être opposable aux tiers et permettre la publication foncière.', category: 'immobilier' },
  { question: 'Les actes notariés maliens sont-ils reconnus à l\'étranger ?', answer: 'Oui, dans le cadre des conventions de la CEDEAO et des accords bilatéraux signés par le Mali. Pour les pays hors zone, une apostille ou légalisation peut être nécessaire.', category: 'général' },
  { question: 'Comment calculer les frais de notaire pour une vente immobilière ?', answer: 'Les frais comprennent les émoluments du notaire (2-4% du prix), les droits d\'enregistrement, la TVA et les débours. Notre équipe vous remet un devis précis avant toute intervention.', category: 'tarifs' },
  { question: 'Puis-je prendre rendez-vous en dehors des heures d\'ouverture ?', answer: 'Sur demande spéciale et pour des urgences avérées, le cabinet peut organiser des rendez-vous exceptionnels. Contactez-nous directement par téléphone ou WhatsApp.', category: 'général' },
  { question: 'Faut-il un contrat de mariage chez le notaire ?', answer: 'Ce n\'est pas obligatoire mais fortement recommandé pour protéger les intérêts de chaque époux. Le contrat doit être signé avant la célébration du mariage.', category: 'famille' },
  { question: 'Quel est le délai pour régler une succession au Mali ?', answer: 'La déclaration de succession doit être déposée dans les 6 mois suivant le décès. Le règlement complet dépend de la complexité du patrimoine et peut durer de 1 à plusieurs mois.', category: 'succession' },
]

export const TARIFS = [
  { acte: 'Vente immobilière', base: 'Prix de vente', taux: '2 % à 4 %', delai: '7 à 15 jours' },
  { acte: 'Donation immobilière', base: 'Valeur du bien', taux: '1,5 % à 3 %', delai: '10 à 20 jours' },
  { acte: 'Succession', base: 'Actif net successoral', taux: '1 % à 3 %', delai: '30 à 60 jours' },
  { acte: 'Contrat de mariage', base: 'Forfait', taux: 'dès 35 000 FCFA', delai: '5 à 10 jours' },
  { acte: 'Constitution de société', base: 'Capital social', taux: '1,5 % à 2,5 %', delai: '10 à 21 jours' },
  { acte: 'Procuration simple', base: 'Forfait', taux: 'dès 15 000 FCFA', delai: '2 à 5 jours' },
  { acte: 'Testament authentique', base: 'Forfait', taux: 'dès 25 000 FCFA', delai: '3 à 7 jours' },
  { acte: 'Bail commercial notarié', base: 'Valeur locative annuelle', taux: '1 % à 2 %', delai: '7 à 14 jours' },
  { acte: 'Donation simple', base: 'Valeur du bien donné', taux: '1 % à 2,5 %', delai: '5 à 15 jours' },
  { acte: 'Cession de parts sociales', base: 'Valeur des parts', taux: '1 % à 2 %', delai: '7 à 14 jours' },
]

export const DOCUMENTS = {
  'Vente / achat immobilier': ['Carte d\'identité nationale (CNI)', 'Titre foncier ou attestation de propriété', 'Acte de naissance', 'Plan de situation du bien', 'Certificat de non-gage', 'Certificat d\'urbanisme si disponible'],
  'Succession': ['Acte de décès du défunt', 'Livret de famille', 'Actes de naissance de chaque héritier', 'Testament si existant', 'Titres de propriété du défunt', 'Relevés bancaires et placements'],
  'Création de société': ['CNI de chaque associé', 'Attestation de domicile', 'Dénomination sociale choisie', 'Objet social détaillé', 'Capital social et répartition', 'Adresse du siège social'],
  'Mariage / contrat matrimonial': ['CNI des deux époux', 'Actes de naissance des deux époux', 'Acte de mariage civil', 'État des biens personnels', 'Régime matrimonial souhaité'],
  'Donation': ['CNI du donateur', 'CNI du ou des bénéficiaires', 'Titre de propriété du bien à donner', 'Actes de naissance', 'Justificatif de valeur du bien'],
}

export const HISTORY = [
  { year: '2003', event: 'Ouverture du cabinet par Maître Amadou Koné au quartier Bamako-Coura' },
  { year: '2008', event: 'Intégration officielle au Conseil Supérieur du Notariat du Mali' },
  { year: '2012', event: 'Déménagement dans les locaux actuels à Hamdallaye ACI 2000' },
  { year: '2016', event: 'Arrivée de Maître Salimata Dembélé comme notaire associée' },
  { year: '2019', event: 'Lancement du service de conseil aux entreprises et PME maliennes' },
  { year: '2021', event: 'Digitalisation des dossiers et lancement du RDV en ligne' },
  { year: '2025', event: 'Plus de 5 000 actes rédigés — cabinet de référence à Bamako' },
]

export const ENGAGEMENTS = [
  { num: '01', title: 'Confidentialité absolue', desc: 'Vos dossiers sont traités avec la plus stricte discrétion, conformément au secret professionnel notarial garanti par la loi.' },
  { num: '02', title: 'Transparence tarifaire', desc: 'Nos honoraires sont réglementés et vous sont communiqués clairement par devis écrit avant toute intervention.' },
  { num: '03', title: 'Disponibilité & réactivité', desc: 'Un suivi personnalisé de vos dossiers avec des réponses garanties sous 24h ouvrées à toutes vos demandes.' },
  { num: '04', title: 'Impartialité', desc: 'En tant qu\'officier public, le notaire conseille toutes les parties avec équité et neutralité absolue.' },
  { num: '05', title: 'Veille juridique permanente', desc: 'Mise à jour continue de nos connaissances pour vous offrir un conseil conforme à la législation malienne en vigueur.' },
  { num: '06', title: 'Accessibilité', desc: 'Locaux accessibles, service en français et en bambara, rendez-vous adaptés à vos contraintes personnelles.' },
]

export const TESTIMONIALS = [
  { text: 'Maître Koné a géré notre succession familiale avec un grand professionnalisme. Tout était clair, transparent et expliqué à chaque étape.', author: 'Mariam Diallo', location: 'Bamako' },
  { text: 'Rapide, efficace et disponible. Notre achat immobilier s\'est déroulé sans aucun problème grâce à son expertise et sa rigueur.', author: 'Ibrahim Traoré', location: 'Ségou' },
  { text: 'Un notaire qui prend le temps d\'expliquer chaque étape dans un langage clair. Je recommande vivement ce cabinet.', author: 'Fatoumata Coulibaly', location: 'Bamako' },
  { text: 'Le cabinet nous a accompagnés avec beaucoup de sérieux pour la rédaction de nos actes. Le suivi a été clair du début à la fin.', author: 'Aminata Keïta', location: 'Bamako' },
  { text: 'J\'ai apprécié la disponibilité de l\'équipe et la précision des conseils. Chaque document a été expliqué simplement.', author: 'Moussa Diarra', location: 'Kayes' },
  { text: 'Pour notre dossier immobilier, nous avions besoin d\'être rassurés. Le cabinet a su sécuriser chaque étape avec professionnalisme.', author: 'Awa Samaké', location: 'Koulikoro' },
  { text: 'Un service sérieux, discret et humain. Les démarches ont été traitées avec rigueur et dans les délais annoncés.', author: 'Oumar Cissé', location: 'Bamako' },
  { text: 'Nous avons été bien orientés pour une succession familiale délicate. L\'accompagnement a été calme, clair et respectueux.', author: 'Kadidia Touré', location: 'Sikasso' },
  { text: 'Le cabinet nous a aidés à structurer notre dossier d\'entreprise avec méthode. Les conseils étaient précis et adaptés.', author: 'Boubacar Konaté', location: 'Bamako' },
]

export const BLOG_ARTICLES = [
  { slug: 'securiser-transaction-immobiliere-bamako', title: 'Comment sécuriser l’achat d’un terrain à Bamako', excerpt: 'Vérification du titre foncier, risques à éviter, rôle du notaire dans la transaction immobilière au Mali.', date: '2025-04-15', author: 'Maître Amadou Koné', category: 'Immobilier', tag: 'Guide pratique' },
  { slug: 'succession-familiale-etapes', title: 'Succession au Mali : vos droits et les étapes clés', excerpt: 'Ce que la loi prévoit, les dérogations possibles et l’importance du testament.', date: '2025-03-02', author: 'Maître Salimata Dembélé', category: 'Succession', tag: 'Famille' },
  { slug: 'creer-societe-passer-par-notaire', title: 'Créer une société au Mali : pourquoi passer par un notaire ?', excerpt: 'De la rédaction des statuts à l’immatriculation au RCCM, tout le processus expliqué.', date: '2025-01-20', author: 'Maître Amadou Koné', category: 'Affaires', tag: 'Droit des affaires' },
  { slug: 'vente-immobiliere-documents', title: 'Vente immobilière : les documents indispensables', excerpt: 'Analyse des pièces nécessaires et leur impact sur la sécurité des transactions foncières.', date: '2024-12-10', author: 'Cabinet Koné', category: 'Immobilier', tag: 'Actualités légales' },
  { slug: 'donation-parents-enfants', title: 'Donation entre parents et enfants : guide pratique', excerpt: 'Les avantages fiscaux et juridiques de la transmission anticipée de patrimoine au Mali.', date: '2024-11-05', author: 'Maître Salimata Dembélé', category: 'Donations', tag: 'Guide pratique' },
  { slug: 'contrat-mariage-proteger-patrimoine', title: 'Le contrat de mariage pour protéger votre patrimoine', excerpt: 'Différences juridiques entre les régimes matrimoniaux et garanties offertes au Mali.', date: '2024-10-18', author: 'Maître Amadou Koné', category: 'Famille', tag: 'Famille' },
]
