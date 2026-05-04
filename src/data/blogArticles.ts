import { IconBuilding, IconFamily, IconBriefcase, IconHeartHands, IconScale } from '@/components/shared/SvgIcons'

export const FILTERS = ['Tous', 'Immobilier', 'Famille & succession', 'Affaires', 'Donations', 'Conseils pratiques']

export const ARTICLES = [
  { 
    id: '1', 
    slug: 'securiser-transaction-immobiliere-bamako',
    category: 'Immobilier', 
    date: '12 mai 2024', 
    title: 'Comment sécuriser une transaction immobilière à Bamako ?', 
    excerpt: 'Les étapes essentielles pour acheter ou vendre un bien immobilier en toute sécurité avec l’accompagnement d’un notaire.', 
    image: '/images/blog/immobilier-transaction.png', 
    icon: IconBuilding,
    content: [
      { type: 'intro', text: 'L’achat ou la vente d’un bien immobilier est une étape majeure qui implique des sommes importantes. À Bamako, le marché immobilier est dynamique, mais il présente aussi des risques si la transaction n’est pas encadrée par des professionnels du droit.' },
      { type: 'section', title: '1. Vérifier l’identité des parties', text: 'Avant tout engagement, le notaire procède à une vérification rigoureuse de l’identité du vendeur et de sa capacité juridique à vendre le bien (majorité, absence de tutelle, régime matrimonial).' },
      { type: 'section', title: '2. Contrôler les documents du bien', text: 'Il est indispensable de vérifier le titre foncier, l’origine de propriété, et de s’assurer qu’aucune hypothèque ou saisie ne pèse sur le bien. Cette étape garantit que l’acheteur deviendra le seul propriétaire légitime.' },
      { type: 'section', title: '3. Formaliser l’accord devant notaire', text: 'La signature du compromis puis de l’acte authentique de vente scelle la transaction. Le notaire rédige l’acte de manière impartiale, en veillant à protéger les intérêts de l’acheteur et du vendeur.' },
      { type: 'section', title: '4. Publier et conserver l’acte', text: 'Une fois signé, le notaire se charge des formalités d’enregistrement et de publication foncière, rendant la vente opposable aux tiers et incontestable.' },
      { type: 'advice', text: 'Avant tout paiement important, faites vérifier les pièces par un professionnel. Ne remettez jamais de fonds sans un reçu notarié.' },
      { type: 'conclusion', text: 'Notre cabinet vous accompagne à chaque étape de votre projet immobilier pour vous garantir une sécurité juridique totale. N’hésitez pas à prendre rendez-vous pour une consultation.' }
    ]
  },
  { 
    id: '2', 
    slug: 'succession-familiale-etapes',
    category: 'Famille & succession', 
    date: '08 mai 2024', 
    title: 'Succession familiale : les étapes à connaître', 
    excerpt: 'Comprendre les démarches notariales pour éviter les conflits entre héritiers.', 
    image: '/images/blog/succession-famille.png', 
    icon: IconFamily,
    content: [
      { type: 'intro', text: 'La perte d’un proche est une épreuve douloureuse. Le règlement de sa succession ajoute souvent une charge administrative complexe. L’intervention du notaire permet d’apaiser les tensions et d’assurer une répartition équitable selon la loi.' },
      { type: 'section', title: '1. Identifier les héritiers', text: 'Le notaire établit avec précision la liste des personnes appelées à hériter, en recherchant l’existence éventuelle d’un testament ou d’une donation entre époux.' },
      { type: 'section', title: '2. Réunir les actes nécessaires', text: 'Les documents d’état civil, les livrets de famille, et les titres de propriété doivent être rassemblés pour permettre au notaire de dresser un inventaire complet du patrimoine du défunt.' },
      { type: 'section', title: '3. Établir l’acte de notoriété', text: 'Cet acte officiel désigne les héritiers et précise leurs droits respectifs. Il est indispensable pour débloquer les comptes bancaires et effectuer les démarches administratives.' },
      { type: 'section', title: '4. Organiser le partage', text: 'Les héritiers peuvent décider de rester en indivision ou de procéder au partage des biens. Le notaire rédige l’acte de partage en veillant à l’équilibre des lots.' },
      { type: 'advice', text: 'Une succession bien préparée limite les incompréhensions. N’attendez pas pour consulter un notaire et faire le point sur votre situation patrimoniale.' },
      { type: 'conclusion', text: 'Le cabinet de Maître Koné vous accompagne avec humanité et rigueur dans le règlement de vos successions familiales.' }
    ]
  },
  { 
    id: '3', 
    slug: 'creer-societe-passer-par-notaire',
    category: 'Affaires', 
    date: '02 mai 2024', 
    title: 'Créer une société : pourquoi passer par le notaire ?', 
    excerpt: 'Les points juridiques à sécuriser avant de lancer son activité.', 
    image: '/images/blog/creation-societe.png', 
    icon: IconBriefcase,
    content: [
      { type: 'intro', text: 'Lancer son entreprise est un projet enthousiasmant. Toutefois, la pérennité de votre activité dépend en grande partie de la solidité de ses fondations juridiques. Le notaire est un partenaire incontournable pour sécuriser votre projet.' },
      { type: 'section', title: '1. Choisir la forme juridique', text: 'SARL, SA, SAS, SUARL... Le choix de la structure juridique a des conséquences fiscales et sociales importantes. Le notaire vous conseille la forme la plus adaptée à votre projet et à votre situation personnelle.' },
      { type: 'section', title: '2. Rédiger les statuts', text: 'Les statuts sont le règlement intérieur de votre société. Une rédaction sur mesure par un notaire permet de prévenir les situations de blocage et de protéger les intérêts de chaque associé.' },
      { type: 'section', title: '3. Sécuriser les apports et responsabilités', text: 'Le notaire s’assure de la réalité des apports en capital (numéraire ou nature) et vous informe sur l’étendue de votre responsabilité vis-à-vis des créanciers de l’entreprise.' },
      { type: 'section', title: '4. Anticiper les conflits entre associés', text: 'L’intégration de clauses spécifiques (agrément, exclusion, préemption) dans les statuts permet de régler à l’avance les potentiels litiges entre associés.' },
      { type: 'advice', text: 'Des statuts bien rédigés évitent de nombreux litiges. Ne négligez pas cette étape cruciale en utilisant des modèles standardisés trouvés sur internet.' },
      { type: 'conclusion', text: 'Notre pôle droit des affaires vous assiste de la création à la transmission de votre entreprise pour sécuriser votre parcours entrepreneurial.' }
    ]
  },
  { 
    id: '4', 
    slug: 'vente-immobiliere-documents',
    category: 'Immobilier', 
    date: '28 avril 2024', 
    title: 'Vente immobilière : les documents essentiels à préparer', 
    excerpt: 'La liste des pièces indispensables pour une transaction rapide et sécurisée.', 
    image: '/images/blog/documents-immobilier.png', 
    icon: IconBuilding,
    content: [
      { type: 'intro', text: 'La vente d’un bien immobilier requiert la constitution d’un dossier complet. Pour éviter les retards et rassurer l’acquéreur, il est primordial de réunir l’ensemble des pièces nécessaires en amont de la signature.' },
      { type: 'section', title: '1. Les pièces d’identité', text: 'Le notaire doit s’assurer de l’identité exacte des parties. Prévoyez vos pièces d’identité en cours de validité (carte NINA, passeport), vos extraits d’acte de naissance et, le cas échéant, votre contrat de mariage.' },
      { type: 'section', title: '2. Les documents du bien', text: 'Le vendeur doit fournir le titre de propriété original, le plan cadastral à jour, et l’extrait du livre foncier récent démontrant que le bien est libre de toute charge.' },
      { type: 'section', title: '3. Les attestations utiles', text: 'Selon la nature du bien, des documents complémentaires peuvent être exigés : quittances d’impôts fonciers, permis de construire, procès-verbaux d’assemblée générale pour les copropriétés.' },
      { type: 'section', title: '4. Le rôle du notaire', text: 'Le notaire centralise ces documents, effectue les vérifications légales et purge les éventuels droits de préemption avant de rédiger l’acte de vente final.' },
      { type: 'advice', text: 'Préparer les documents à l’avance accélère la vente et démontre votre sérieux face à un acquéreur potentiel.' },
      { type: 'conclusion', text: 'Confiez-nous la constitution de votre dossier de vente. Nous vous guiderons pas à pas pour une transaction sereine.' }
    ]
  },
  { 
    id: '5', 
    slug: 'donation-parents-enfants',
    category: 'Donations', 
    date: '22 avril 2024', 
    title: 'Donation entre parents et enfants : ce qu’il faut savoir', 
    excerpt: 'Préparer une transmission patrimoniale claire et sécurisée.', 
    image: '/images/blog/donation-famille.png', 
    icon: IconHeartHands,
    content: [
      { type: 'intro', text: 'Transmettre son patrimoine de son vivant à ses enfants est un acte de prévoyance fort. La donation permet d’aider ses proches tout en anticipant sa succession, à condition d’en maîtriser les règles juridiques.' },
      { type: 'section', title: '1. Définir le bien ou la somme à transmettre', text: 'Il peut s’agir d’un bien immobilier (terrain, maison), d’une somme d’argent ou de valeurs mobilières. Le notaire évalue avec vous la faisabilité de l’opération sans vous démunir.' },
      { type: 'section', title: '2. Comprendre les conséquences juridiques', text: 'Une donation est un acte irrévocable. Elle implique un transfert de propriété immédiat. Toutefois, il est possible de prévoir des aménagements, comme la réserve d’usufruit (conserver l’usage ou les revenus du bien).' },
      { type: 'section', title: '3. Prévenir les conflits familiaux', text: 'Le notaire veille à ce que la donation respecte la réserve héréditaire de chaque enfant, afin d’éviter toute contestation et tout risque de réduction lors de l’ouverture de la succession.' },
      { type: 'section', title: '4. Formaliser la donation', text: 'L’intervention du notaire est obligatoire pour la donation de biens immobiliers et fortement recommandée pour les donations importantes d’argent (dons manuels) afin de les officialiser et de figer leur valeur.' },
      { type: 'advice', text: 'Une donation doit être pensée dans une vision familiale globale. Prenez le temps d’en discuter avec l’ensemble de vos héritiers.' },
      { type: 'conclusion', text: 'Nos experts en droit de la famille vous conseillent pour organiser la transmission de votre patrimoine dans les meilleures conditions fiscales et civiles.' }
    ]
  },
  { 
    id: '6', 
    slug: 'contrat-mariage-proteger-patrimoine',
    category: 'Conseils pratiques', 
    date: '15 avril 2024', 
    title: 'Contrat de mariage : protéger son patrimoine', 
    excerpt: 'Pourquoi établir un contrat de mariage et comment le rédiger.', 
    image: '/images/blog/contrat-mariage.png', 
    icon: IconScale,
    content: [
      { type: 'intro', text: 'Le mariage n’est pas seulement un engagement personnel, c’est aussi l’union de deux patrimoines. Établir un contrat de mariage permet d’adapter les règles de cette union à la situation spécifique de votre couple.' },
      { type: 'section', title: '1. Comprendre le rôle du contrat de mariage', text: 'Par défaut, les époux sont soumis au régime légal (communauté de biens réduite aux acquêts). Le contrat de mariage permet d’opter pour un autre régime, comme la séparation de biens ou la communauté universelle.' },
      { type: 'section', title: '2. Protéger les biens personnels', text: 'En cas de divorce ou de décès, le régime matrimonial détermine le partage du patrimoine. Le contrat permet de garantir que les biens acquis avant le mariage ou reçus par héritage restent la propriété exclusive de l’époux concerné.' },
      { type: 'section', title: '3. Anticiper les situations familiales et professionnelles', text: 'Si l’un des conjoints exerce une profession à risque (chef d’entreprise, artisan), le contrat de séparation de biens est essentiel pour protéger le patrimoine familial des créanciers professionnels.' },
      { type: 'section', title: '4. Faire rédiger le contrat par le notaire', text: 'Le contrat de mariage doit obligatoirement être reçu par un notaire avant la célébration du mariage. Le notaire vous explique les implications de chaque régime pour vous aider à faire le bon choix.' },
      { type: 'advice', text: 'Le contrat de mariage n’est pas un manque de confiance, c’est un outil de clarté juridique qui protège chaque époux.' },
      { type: 'conclusion', text: 'Pour choisir le régime matrimonial adapté à votre vie personnelle et professionnelle, venez rencontrer l’un de nos notaires.' }
    ]
  }
]
