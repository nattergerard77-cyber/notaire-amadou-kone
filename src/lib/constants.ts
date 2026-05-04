export const CABINET = {
  name: 'MaÃ®tre Amadou KonÃ©',
  title: 'Notaire Ã  Bamako, Mali',
  shortName: 'Cabinet KonÃ©',
  phone: '+223 20 22 44 66',
  whatsapp: '22376000000',
  email: 'contact@maitre-amadou-kone.com',
  address: {
    street: 'Hamdallaye ACI 2000, Rue 327',
    city: 'Bamako',
    country: 'Mali',
    full: 'Hamdallaye ACI 2000, Rue 327, Bamako, Mali',
  },
  hours: {
    weekdays: 'Lundi â€“ Jeudi : 08h00 â€“ 17h00',
    friday: 'Vendredi : 08h00 â€“ 13h00',
    weekend: 'Samedi â€“ Dimanche : FermÃ©',
  },
  established: 2003,
  stats: { experience: '20+', actes: '5 000+', satisfaction: '98%' },
}

export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Ã€ propos', href: '/a-propos',
    children: [
      { label: "L'Ã©quipe", href: '/a-propos/equipe' },
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
    description: 'Vente, achat, hypothÃ¨que, viabilisation de terrains, baux commerciaux et rÃ©sidentiels.',
    prestations: [
      { name: 'Vente & achat', items: ['Avant-contrat (compromis)', 'Acte authentique de vente', 'Purge des droits de prÃ©emption', 'Publication fonciÃ¨re'] },
      { name: 'Titre foncier & terrain', items: ['Viabilisation de parcelles', 'Mutation de titre foncier', 'Division de terrain', 'Bornage et immatriculation'] },
      { name: 'HypothÃ¨que & prÃªt', items: ['Constitution d\'hypothÃ¨que', 'MainlevÃ©e d\'hypothÃ¨que', 'PrÃªt immobilier bancaire', 'Caution et garanties rÃ©elles'] },
      { name: 'Baux & locations', items: ['Bail commercial', 'Bail d\'habitation notariÃ©', 'Renouvellement de bail', 'RÃ©siliation amiable'] },
    ],
    documents: ['Carte d\'identitÃ© nationale', 'Titre foncier ou attestation', 'Plan de situation', 'Certificat de non-gage'],
  },
  {
    slug: 'famille-succession', title: 'Famille & succession', shortTitle: 'Famille', icon: 'Users',
    description: 'Testaments, hÃ©ritages, mariages, divorces, partage successoral et protection des personnes.',
    prestations: [
      { name: 'Mariage & contrat', items: ['Contrat de mariage', 'Changement de rÃ©gime matrimonial', 'Donation entre Ã©poux', 'Convention de PACS'] },
      { name: 'Succession', items: ['DÃ©claration de succession', 'Acte de notoriÃ©tÃ©', 'Partage successoral', 'Certificat d\'hÃ©rÃ©ditÃ©'] },
      { name: 'Testament', items: ['Testament authentique', 'Conservation de testament', 'RÃ©vocation de testament', 'Legs particulier'] },
      { name: 'Protection', items: ['Mandat de protection future', 'Tutelle et curatelle', 'Adoption', 'Habilitation familiale'] },
    ],
    documents: ['CNI des parties', 'Actes de naissance', 'Livret de famille', 'Acte de dÃ©cÃ¨s (succession)'],
  },
  {
    slug: 'droit-des-affaires', title: 'Droit des affaires', shortTitle: 'Affaires', icon: 'Briefcase',
    description: 'CrÃ©ation de sociÃ©tÃ©s, statuts, cessions de parts, fusions et acquisitions.',
    prestations: [
      { name: 'CrÃ©ation d\'entreprise', items: ['RÃ©daction des statuts', 'SARL, SA, SNC, SCS', 'Enregistrement lÃ©gal', 'Immatriculation RCCM'] },
      { name: 'Cession & acquisition', items: ['Cession de parts sociales', 'Cession de fonds de commerce', 'Fusion-acquisition', 'Audit juridique'] },
      { name: 'Vie de la sociÃ©tÃ©', items: ['Modification des statuts', 'Augmentation de capital', 'Dissolution et liquidation', 'PV d\'assemblÃ©e'] },
      { name: 'Contrats commerciaux', items: ['Contrats de partenariat', 'Franchises et licences', 'Contrats de distribution', 'SÃ©curisation de crÃ©ances'] },
    ],
    documents: ['CNI de chaque associÃ©', 'Attestation de domicile', 'DÃ©nomination sociale', 'Capital social'],
  },
  {
    slug: 'donations', title: 'Donations', shortTitle: 'Donations', icon: 'Heart',
    description: 'Donations simples, entre Ã©poux, gestion et optimisation de votre patrimoine.',
    prestations: [
      { name: 'Donation simple', items: ['Donation de biens immobiliers', 'Donation de somme d\'argent', 'Donation de biens mobiliers', 'Clauses particuliÃ¨res'] },
      { name: 'Donation-partage', items: ['RÃ©partition entre hÃ©ritiers', 'Ã‰vitement des conflits', 'Donation transgÃ©nÃ©rationnelle', 'Rapport Ã  succession'] },
      { name: 'Donation entre Ã©poux', items: ['Donation au dernier vivant', 'Droits du conjoint', 'PrÃ©rogatives en usufruit', 'RÃ©vocabilitÃ©'] },
      { name: 'Gestion patrimoniale', items: ['Bilan patrimonial', 'Optimisation fiscale', 'DÃ©membrement de propriÃ©tÃ©', 'Viager et rente'] },
    ],
    documents: ['CNI du donateur et bÃ©nÃ©ficiaire', 'Titre de propriÃ©tÃ©', 'Actes de naissance', 'Acte de mariage si applicable'],
  },
]

export const TEAM = [
  { id: 'amadou-kone', name: 'MaÃ®tre Amadou KonÃ©', role: 'Notaire titulaire', initials: 'AK', color: '#0C447C', bio: 'DiplÃ´mÃ© de l\'Ã‰cole Nationale d\'Administration du Mali, MaÃ®tre KonÃ© exerce depuis plus de 20 ans. SpÃ©cialiste en droit immobilier et droit des successions.', specialites: ['Droit immobilier', 'Successions', 'Droit international privÃ©'] },
  { id: 'salimata-dembele', name: 'MaÃ®tre Salimata DembÃ©lÃ©', role: 'Notaire associÃ©e', initials: 'SD', color: '#085041', bio: 'SpÃ©cialisÃ©e en droit de la famille et droit des affaires. Elle accompagne les entreprises maliennes dans leurs structurations juridiques depuis 2016.', specialites: ['Droit de la famille', 'Droit des affaires', 'Donations'] },
  { id: 'oumar-traore', name: 'Oumar TraorÃ©', role: 'Clerc principal', initials: 'OT', color: '#633806', bio: 'Clerc expÃ©rimentÃ©, Oumar gÃ¨re la rÃ©daction des actes courants et l\'accueil des clients. Plus de 10 ans au sein du cabinet.', specialites: ['RÃ©daction d\'actes', 'Suivi de dossiers', 'Relations clients'] },
  { id: 'aminata-coulibaly', name: 'Aminata Coulibaly', role: 'Clerc junior', initials: 'AC', color: '#3C3489', bio: 'Juriste diplÃ´mÃ©e, Aminata assure le suivi des dossiers immobiliers et la veille juridique du cabinet.', specialites: ['Dossiers immobiliers', 'Veille juridique', 'Recherches fonciÃ¨res'] },
  { id: 'kadiatou-sanogo', name: 'Kadiatou Sanogo', role: 'SecrÃ©taire juridique', initials: 'KS', color: '#712B13', bio: 'Responsable de l\'accueil, de la gestion des rendez-vous et de l\'administration des dossiers clients.', specialites: ['Gestion administrative', 'Accueil clients', 'Planification RDV'] },
]

export const FAQ_DATA = [
  { question: 'Quelle est la diffÃ©rence entre un notaire et un avocat ?', answer: 'Le notaire est un officier public ministÃ©riel qui confÃ¨re aux actes qu\'il rÃ©dige la valeur authentique et force exÃ©cutoire. Il conseille toutes les parties avec impartialitÃ©. L\'avocat dÃ©fend les intÃ©rÃªts d\'une seule partie devant les tribunaux.', category: 'gÃ©nÃ©ral' },
  { question: 'Combien de temps dure une signature chez le notaire ?', answer: 'Une signature simple (procuration, testament) dure 30 Ã  60 minutes. Une vente immobiliÃ¨re ou une succession peut nÃ©cessiter 1h Ã  2h selon la complexitÃ© du dossier.', category: 'gÃ©nÃ©ral' },
  { question: 'Est-il obligatoire de passer par un notaire pour vendre un bien immobilier au Mali ?', answer: 'Au Mali, tout transfert de propriÃ©tÃ© immobiliÃ¨re doit faire l\'objet d\'un acte authentique dressÃ© par un notaire pour Ãªtre opposable aux tiers et permettre la publication fonciÃ¨re.', category: 'immobilier' },
  { question: 'Les actes notariÃ©s maliens sont-ils reconnus Ã  l\'Ã©tranger ?', answer: 'Oui, dans le cadre des conventions de la CEDEAO et des accords bilatÃ©raux signÃ©s par le Mali. Pour les pays hors zone, une apostille ou lÃ©galisation peut Ãªtre nÃ©cessaire.', category: 'gÃ©nÃ©ral' },
  { question: 'Comment calculer les frais de notaire pour une vente immobiliÃ¨re ?', answer: 'Les frais comprennent les Ã©moluments du notaire (2-4% du prix), les droits d\'enregistrement, la TVA et les dÃ©bours. Notre Ã©quipe vous remet un devis prÃ©cis avant toute intervention.', category: 'tarifs' },
  { question: 'Puis-je prendre rendez-vous en dehors des heures d\'ouverture ?', answer: 'Sur demande spÃ©ciale et pour des urgences avÃ©rÃ©es, le cabinet peut organiser des rendez-vous exceptionnels. Contactez-nous directement par tÃ©lÃ©phone ou WhatsApp.', category: 'gÃ©nÃ©ral' },
  { question: 'Faut-il un contrat de mariage chez le notaire ?', answer: 'Ce n\'est pas obligatoire mais fortement recommandÃ© pour protÃ©ger les intÃ©rÃªts de chaque Ã©poux. Le contrat doit Ãªtre signÃ© avant la cÃ©lÃ©bration du mariage.', category: 'famille' },
  { question: 'Quel est le dÃ©lai pour rÃ©gler une succession au Mali ?', answer: 'La dÃ©claration de succession doit Ãªtre dÃ©posÃ©e dans les 6 mois suivant le dÃ©cÃ¨s. Le rÃ¨glement complet dÃ©pend de la complexitÃ© du patrimoine et peut durer de 1 Ã  plusieurs mois.', category: 'succession' },
]

export const TARIFS = [
  { acte: 'Vente immobiliÃ¨re', base: 'Prix de vente', taux: '2 % Ã  4 %', delai: '7 Ã  15 jours' },
  { acte: 'Donation immobiliÃ¨re', base: 'Valeur du bien', taux: '1,5 % Ã  3 %', delai: '10 Ã  20 jours' },
  { acte: 'Succession', base: 'Actif net successoral', taux: '1 % Ã  3 %', delai: '30 Ã  60 jours' },
  { acte: 'Contrat de mariage', base: 'Forfait', taux: 'dÃ¨s 35 000 FCFA', delai: '5 Ã  10 jours' },
  { acte: 'Constitution de sociÃ©tÃ©', base: 'Capital social', taux: '1,5 % Ã  2,5 %', delai: '10 Ã  21 jours' },
  { acte: 'Procuration simple', base: 'Forfait', taux: 'dÃ¨s 15 000 FCFA', delai: '2 Ã  5 jours' },
  { acte: 'Testament authentique', base: 'Forfait', taux: 'dÃ¨s 25 000 FCFA', delai: '3 Ã  7 jours' },
  { acte: 'Bail commercial notariÃ©', base: 'Valeur locative annuelle', taux: '1 % Ã  2 %', delai: '7 Ã  14 jours' },
  { acte: 'Donation simple', base: 'Valeur du bien donnÃ©', taux: '1 % Ã  2,5 %', delai: '5 Ã  15 jours' },
  { acte: 'Cession de parts sociales', base: 'Valeur des parts', taux: '1 % Ã  2 %', delai: '7 Ã  14 jours' },
]

export const DOCUMENTS = {
  'Vente / achat immobilier': ['Carte d\'identitÃ© nationale (CNI)', 'Titre foncier ou attestation de propriÃ©tÃ©', 'Acte de naissance', 'Plan de situation du bien', 'Certificat de non-gage', 'Certificat d\'urbanisme si disponible'],
  'Succession': ['Acte de dÃ©cÃ¨s du dÃ©funt', 'Livret de famille', 'Actes de naissance de chaque hÃ©ritier', 'Testament si existant', 'Titres de propriÃ©tÃ© du dÃ©funt', 'RelevÃ©s bancaires et placements'],
  'CrÃ©ation de sociÃ©tÃ©': ['CNI de chaque associÃ©', 'Attestation de domicile', 'DÃ©nomination sociale choisie', 'Objet social dÃ©taillÃ©', 'Capital social et rÃ©partition', 'Adresse du siÃ¨ge social'],
  'Mariage / contrat matrimonial': ['CNI des deux Ã©poux', 'Actes de naissance des deux Ã©poux', 'Acte de mariage civil', 'Ã‰tat des biens personnels', 'RÃ©gime matrimonial souhaitÃ©'],
  'Donation': ['CNI du donateur', 'CNI du ou des bÃ©nÃ©ficiaires', 'Titre de propriÃ©tÃ© du bien Ã  donner', 'Actes de naissance', 'Justificatif de valeur du bien'],
}

export const HISTORY = [
  { year: '2003', event: 'Ouverture du cabinet par MaÃ®tre Amadou KonÃ© au quartier Bamako-Coura' },
  { year: '2008', event: 'IntÃ©gration officielle au Conseil SupÃ©rieur du Notariat du Mali' },
  { year: '2012', event: 'DÃ©mÃ©nagement dans les locaux actuels Ã  Hamdallaye ACI 2000' },
  { year: '2016', event: 'ArrivÃ©e de MaÃ®tre Salimata DembÃ©lÃ© comme notaire associÃ©e' },
  { year: '2019', event: 'Lancement du service de conseil aux entreprises et PME maliennes' },
  { year: '2021', event: 'Digitalisation des dossiers et lancement du RDV en ligne' },
  { year: '2025', event: 'Plus de 5 000 actes rÃ©digÃ©s â€” cabinet de rÃ©fÃ©rence Ã  Bamako' },
]

export const ENGAGEMENTS = [
  { num: '01', title: 'ConfidentialitÃ© absolue', desc: 'Vos dossiers sont traitÃ©s avec la plus stricte discrÃ©tion, conformÃ©ment au secret professionnel notarial garanti par la loi.' },
  { num: '02', title: 'Transparence tarifaire', desc: 'Nos honoraires sont rÃ©glementÃ©s et vous sont communiquÃ©s clairement par devis Ã©crit avant toute intervention.' },
  { num: '03', title: 'DisponibilitÃ© & rÃ©activitÃ©', desc: 'Un suivi personnalisÃ© de vos dossiers avec des rÃ©ponses garanties sous 24h ouvrÃ©es Ã  toutes vos demandes.' },
  { num: '04', title: 'ImpartialitÃ©', desc: 'En tant\'officier public, le notaire conseille toutes les parties avec Ã©quitÃ© et neutralitÃ© absolue.' },
  { num: '05', title: 'Veille juridique permanente', desc: 'Mise Ã  jour continue de nos connaissances pour vous offrir un conseil conforme Ã  la lÃ©gislation malienne en vigueur.' },
  { num: '06', title: 'AccessibilitÃ©', desc: 'Locaux accessibles, service en franÃ§ais et en bambara, rendez-vous adaptÃ©s Ã  vos contraintes personnelles.' },
]

export const TESTIMONIALS = [
  { text: 'MaÃ®tre KonÃ© a gÃ©rÃ© notre succession familiale avec un grand professionnalisme. Tout Ã©tait clair, transparent et expliquÃ© Ã  chaque Ã©tape.', author: 'Mariam Diallo', location: 'Bamako' },
  { text: 'Rapide, efficace et disponible. Notre achat immobilier s\'est dÃ©roulÃ© sans aucun problÃ¨me grÃ¢ce Ã  son expertise et sa rigueur.', author: 'Ibrahim TraorÃ©', location: 'SÃ©gou' },
  { text: 'Un notaire qui prend le temps d\'expliquer chaque Ã©tape dans un langage clair. Je recommande vivement ce cabinet.', author: 'Fatoumata Coulibaly', location: 'Bamako' },
  { text: 'Le cabinet nous a accompagnÃ©s avec beaucoup de sÃ©rieux pour la rÃ©daction de nos actes. Le suivi a Ã©tÃ© clair du dÃ©but Ã  la fin.', author: 'Aminata KeÃ¯ta', location: 'Bamako' },
  { text: 'J\'ai apprÃ©ciÃ© la disponibilitÃ© de l\'Ã©quipe et la prÃ©cision des conseils. Chaque document a Ã©tÃ© expliquÃ© simplement.', author: 'Moussa Diarra', location: 'Kayes' },
  { text: 'Pour notre dossier immobilier, nous avions besoin d\'Ãªtre rassurÃ©s. Le cabinet a su sÃ©curiser chaque Ã©tape avec professionnalisme.', author: 'Awa SamakÃ©', location: 'Koulikoro' },
  { text: 'Un service sÃ©rieux, discret et humain. Les dÃ©marches ont Ã©tÃ© traitÃ©es avec rigueur et dans les dÃ©lais annoncÃ©s.', author: 'Oumar CissÃ©', location: 'Bamako' },
  { text: 'Nous avons Ã©tÃ© bien orientÃ©s pour une succession familiale dÃ©licate. L\'accompagnement a Ã©tÃ© calme, clair et respectueux.', author: 'Kadidia TourÃ©', location: 'Sikasso' },
  { text: 'Le cabinet nous a aidÃ©s Ã  structurer notre dossier d\'entreprise avec mÃ©thode. Les conseils Ã©taient prÃ©cis et adaptÃ©s.', author: 'Boubacar KonatÃ©', location: 'Bamako' },
]

export const BLOG_ARTICLES = [
  { slug: 'acheter-terrain-bamako-2025', title: 'Comment sÃ©curiser l\'achat d\'un terrain Ã  Bamako en 2025', excerpt: 'VÃ©rification du titre foncier, risques Ã  Ã©viter, rÃ´le du notaire dans la transaction immobiliÃ¨re au Mali.', date: '2025-04-15', author: 'MaÃ®tre Amadou KonÃ©', category: 'Immobilier', tag: 'Guide pratique' },
  { slug: 'succession-mali-droits', title: 'Succession au Mali : vos droits selon le Code civil et le droit coutumier', excerpt: 'Ce que la loi prÃ©voit, les dÃ©rogations possibles et l\'importance du testament.', date: '2025-03-02', author: 'MaÃ®tre Salimata DembÃ©lÃ©', category: 'Succession', tag: 'Famille' },
  { slug: 'creer-sarl-mali', title: 'CrÃ©er une SARL au Mali : Ã©tapes et documents indispensables', excerpt: 'De la rÃ©daction des statuts Ã  l\'immatriculation au RCCM, tout le processus expliquÃ©.', date: '2025-01-20', author: 'MaÃ®tre Amadou KonÃ©', category: 'Affaires', tag: 'Droit des affaires' },
  { slug: 'droits-enregistrement-immobilier', title: 'Nouvelles dispositions sur les droits d\'enregistrement immobilier au Mali', excerpt: 'Analyse des changements fiscaux et leur impact sur les transactions fonciÃ¨res.', date: '2024-12-10', author: 'Cabinet KonÃ©', category: 'ActualitÃ©', tag: 'ActualitÃ©s lÃ©gales' },
  { slug: 'contrat-mariage-mali', title: 'Le contrat de mariage : pourquoi le choisir et comment le rÃ©diger ?', excerpt: 'Les rÃ©gimes matrimoniaux applicables au Mali, leurs avantages et inconvÃ©nients.', date: '2024-11-05', author: 'MaÃ®tre Salimata DembÃ©lÃ©', category: 'Famille', tag: 'Guide pratique' },
  { slug: 'bail-commercial-location', title: 'Bail commercial ou location simple : quelle protection pour votre local ?', excerpt: 'DiffÃ©rences juridiques, droits du locataire et garanties du propriÃ©taire au Mali.', date: '2024-10-18', author: 'MaÃ®tre Amadou KonÃ©', category: 'Immobilier', tag: 'Immobilier' },
]
