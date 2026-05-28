import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  HeartHandshake,
  Home,
  Landmark,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

type Params = {
  params: {
    slug: string
    locale?: string
  }
}

type Card = {
  title: string
  icon: 'home' | 'landmark' | 'briefcase' | 'family' | 'heart' | 'scale' | 'file' | 'shield' | 'clock' | 'lock'
  items: string[]
  wide?: boolean
}

type DomainData = {
  title: string
  breadcrumb: string
  subtitle: string
  mainTitle: string
  ctaTitle: string
  services: Card[]
  documents: string[]
  benefits: {
    title: string
    text: string
    icon: 'shield' | 'clock' | 'lock' | 'scale' | 'heart' | 'briefcase' | 'file'
  }[]
  faqs: string[]
}

const iconMap = {
  home: Home,
  landmark: Landmark,
  briefcase: BriefcaseBusiness,
  family: UsersRound,
  heart: HeartHandshake,
  scale: Scale,
  file: FileText,
  shield: ShieldCheck,
  clock: Clock3,
  lock: LockKeyhole,
}

const DOMAIN_DATA: Record<string, DomainData> = {
  immobilier: {
    title: 'Droit immobilier',
    breadcrumb: 'Droit immobilier',
    subtitle: 'Vente, achat, hypothèque, viabilisation de terrains, baux commerciaux et résidentiels.',
    mainTitle: 'Nos prestations en droit immobilier',
    ctaTitle: 'Prêt à concrétiser votre projet immobilier ?',
    services: [
      {
        title: 'Vente & achat',
        icon: 'heart',
        items: [
          'Avant-contrat (compromis)',
          'Acte authentique de vente',
          'Purge des droits de préemption',
          'Publication foncière',
        ],
      },
      {
        title: 'Titre foncier & terrain',
        icon: 'file',
        items: [
          'Viabilisation de parcelles',
          'Mutation de titre foncier',
          'Division de terrain',
          'Bornage et immatriculation',
        ],
      },
      {
        title: 'Hypothèque & prêt',
        icon: 'landmark',
        items: [
          'Constitution d’hypothèque',
          'Mainlevée d’hypothèque',
          'Prêt immobilier bancaire',
          'Caution et garanties réelles',
        ],
      },
      {
        title: 'Baux & locations',
        icon: 'home',
        wide: true,
        items: [
          'Bail commercial',
          'Bail d’habitation notarié',
          'Renouvellement de bail',
          'Résiliation amiable',
        ],
      },
    ],
    documents: [
      'Carte d’identité nationale',
      'Titre foncier ou attestation',
      'Plan de situation',
      'Certificat de non-gage',
    ],
    benefits: [
      {
        title: 'Sécurité juridique',
        text: 'Des actes authentiques conformes à la loi et une protection renforcée de vos intérêts.',
        icon: 'shield',
      },
      {
        title: 'Réactivité',
        text: 'Un traitement rapide et efficace de votre dossier, dans le respect des délais.',
        icon: 'clock',
      },
      {
        title: 'Confidentialité',
        text: 'Vos informations sont traitées avec la plus stricte discrétion et professionnalisme.',
        icon: 'lock',
      },
    ],
    faqs: [
      'Quels sont les frais liés à un acte immobilier ?',
      'Quel est le délai pour obtenir un titre foncier ?',
      'Quels documents sont nécessaires pour une vente ?',
      'Peut-on annuler un compromis de vente ?',
    ],
  },

  'famille-succession': {
    title: 'Famille & succession',
    breadcrumb: 'Famille & succession',
    subtitle: 'Testaments, héritages, mariages, divorces, partage successoral et protection des personnes.',
    mainTitle: 'Nos prestations en droit de la famille et des successions',
    ctaTitle: 'Besoin d’un accompagnement serein pour votre dossier familial ?',
    services: [
      {
        title: 'Mariage & contrat',
        icon: 'heart',
        items: [
          'Contrat de mariage',
          'Changement de régime matrimonial',
          'Donation entre époux',
          'Convention de PACS',
        ],
      },
      {
        title: 'Succession',
        icon: 'family',
        items: [
          'Déclaration de succession',
          'Acte de notoriété',
          'Partage successoral',
          'Certificat d’hérédité',
        ],
      },
      {
        title: 'Testament',
        icon: 'file',
        items: [
          'Testament authentique',
          'Conservation de testament',
          'Révocation de testament',
          'Legs particulier',
        ],
      },
      {
        title: 'Protection',
        icon: 'shield',
        wide: true,
        items: [
          'Mandat de protection future',
          'Tutelle et curatelle',
          'Adoption',
          'Habilitation familiale',
        ],
      },
    ],
    documents: [
      'CNI des parties',
      'Actes de naissance',
      'Livret de famille',
      'Acte de décès',
    ],
    benefits: [
      {
        title: 'Écoute humaine',
        text: 'Un accompagnement clair et respectueux dans les moments importants de la vie familiale.',
        icon: 'heart',
      },
      {
        title: 'Discrétion absolue',
        text: 'Vos informations personnelles et familiales sont traitées avec la plus grande confidentialité.',
        icon: 'lock',
      },
      {
        title: 'Conseil personnalisé',
        text: 'Chaque situation familiale est étudiée avec précision pour sécuriser vos décisions.',
        icon: 'scale',
      },
    ],
    faqs: [
      'Comment préparer une succession ?',
      'Quand faut-il établir un testament authentique ?',
      'Quels documents fournir pour un contrat de mariage ?',
      'Comment se déroule un partage successoral ?',
    ],
  },

  affaires: {
    title: 'Droit des affaires',
    breadcrumb: 'Droit des affaires',
    subtitle: 'Création de sociétés, statuts, cessions de parts, fusions et acquisitions.',
    mainTitle: 'Nos prestations en droit des entreprises et OHADA',
    ctaTitle: 'Structurons votre projet d’entreprise en toute sécurité.',
    services: [
      {
        title: 'Création d’entreprise',
        icon: 'briefcase',
        items: [
          'Rédaction des statuts',
          'SARL, SA, SNC, SCS',
          'Enregistrement légal',
          'Immatriculation RCCM',
        ],
      },
      {
        title: 'Cession & acquisition',
        icon: 'file',
        items: [
          'Cession de parts sociales',
          'Cession de fonds de commerce',
          'Fusion-acquisition',
          'Audit juridique',
        ],
      },
      {
        title: 'Vie de la société',
        icon: 'landmark',
        items: [
          'Modification des statuts',
          'Augmentation de capital',
          'Dissolution et liquidation',
          'PV d’assemblée',
        ],
      },
      {
        title: 'Contrats commerciaux',
        icon: 'scale',
        wide: true,
        items: [
          'Contrats de partenariat',
          'Franchises et licences',
          'Contrats de distribution',
          'Sécurisation de créances',
        ],
      },
    ],
    documents: [
      'CNI de chaque associé',
      'Attestation de domicile',
      'Dénomination sociale',
      'Capital social',
    ],
    benefits: [
      {
        title: 'Rigueur juridique',
        text: 'Des actes structurés et conformes aux exigences du droit OHADA.',
        icon: 'scale',
      },
      {
        title: 'Rapidité d’exécution',
        text: 'Une prise en charge efficace des formalités pour accélérer vos démarches.',
        icon: 'clock',
      },
      {
        title: 'Sécurisation',
        text: 'Vos opérations commerciales sont encadrées avec précision et prudence.',
        icon: 'shield',
      },
    ],
    faqs: [
      'Quels documents fournir pour créer une société ?',
      'Quel est le délai pour immatriculer une entreprise ?',
      'Comment sécuriser une cession de parts sociales ?',
      'Pourquoi faire authentifier des actes de société ?',
    ],
  },

  'droit-des-affaires': {
    title: 'Droit des affaires',
    breadcrumb: 'Droit des affaires',
    subtitle: 'Création de sociétés, statuts, cessions de parts, fusions et acquisitions.',
    mainTitle: 'Nos prestations en droit des entreprises et OHADA',
    ctaTitle: 'Structurons votre projet d’entreprise en toute sécurité.',
    services: [
      {
        title: 'Création d’entreprise',
        icon: 'briefcase',
        items: [
          'Rédaction des statuts',
          'SARL, SA, SNC, SCS',
          'Enregistrement légal',
          'Immatriculation RCCM',
        ],
      },
      {
        title: 'Cession & acquisition',
        icon: 'file',
        items: [
          'Cession de parts sociales',
          'Cession de fonds de commerce',
          'Fusion-acquisition',
          'Audit juridique',
        ],
      },
      {
        title: 'Vie de la société',
        icon: 'landmark',
        items: [
          'Modification des statuts',
          'Augmentation de capital',
          'Dissolution et liquidation',
          'PV d’assemblée',
        ],
      },
      {
        title: 'Contrats commerciaux',
        icon: 'scale',
        wide: true,
        items: [
          'Contrats de partenariat',
          'Franchises et licences',
          'Contrats de distribution',
          'Sécurisation de créances',
        ],
      },
    ],
    documents: [
      'CNI de chaque associé',
      'Attestation de domicile',
      'Dénomination sociale',
      'Capital social',
    ],
    benefits: [
      {
        title: 'Rigueur juridique',
        text: 'Des actes structurés et conformes aux exigences du droit OHADA.',
        icon: 'scale',
      },
      {
        title: 'Rapidité d’exécution',
        text: 'Une prise en charge efficace des formalités pour accélérer vos démarches.',
        icon: 'clock',
      },
      {
        title: 'Sécurisation',
        text: 'Vos opérations commerciales sont encadrées avec précision et prudence.',
        icon: 'shield',
      },
    ],
    faqs: [
      'Quels documents fournir pour créer une société ?',
      'Quel est le délai pour immatriculer une entreprise ?',
      'Comment sécuriser une cession de parts sociales ?',
      'Pourquoi faire authentifier des actes de société ?',
    ],
  },

  donations: {
    title: 'Donations',
    breadcrumb: 'Donations',
    subtitle: 'Donations simples, entre époux, gestion et optimisation de votre patrimoine.',
    mainTitle: 'Nos prestations en matière de donations et transmission',
    ctaTitle: 'Préparez une transmission sereine et sécurisée.',
    services: [
      {
        title: 'Donation simple',
        icon: 'heart',
        items: [
          'Donation de biens immobiliers',
          'Donation de somme d’argent',
          'Donation de biens mobiliers',
          'Clauses particulières',
        ],
      },
      {
        title: 'Donation-partage',
        icon: 'family',
        items: [
          'Répartition entre héritiers',
          'Évitement des conflits',
          'Donation transgénérationnelle',
          'Rapport à succession',
        ],
      },
      {
        title: 'Donation entre époux',
        icon: 'scale',
        items: [
          'Donation au dernier vivant',
          'Droits du conjoint',
          'Prérogatives en usufruit',
          'Révocabilité',
        ],
      },
      {
        title: 'Gestion patrimoniale',
        icon: 'landmark',
        wide: true,
        items: [
          'Bilan patrimonial',
          'Optimisation fiscale',
          'Démembrement de propriété',
          'Viager et rente',
        ],
      },
    ],
    documents: [
      'CNI du donateur et du bénéficiaire',
      'Titre de propriété',
      'Actes de naissance',
      'Acte de mariage si applicable',
    ],
    benefits: [
      {
        title: 'Clarté patrimoniale',
        text: 'Une vision claire pour organiser votre transmission dans les meilleures conditions.',
        icon: 'file',
      },
      {
        title: 'Transmission sécurisée',
        text: 'Des actes authentiques pour protéger les volontés et limiter les contestations.',
        icon: 'shield',
      },
      {
        title: 'Conseils adaptés',
        text: 'Un accompagnement personnalisé selon votre situation familiale et patrimoniale.',
        icon: 'heart',
      },
    ],
    faqs: [
      'Quelle différence entre donation simple et donation-partage ?',
      'Une donation peut-elle être révoquée ?',
      'Quels biens peut-on transmettre par donation ?',
      'Quels documents prévoir pour une donation ?',
    ],
  },
}

function ServiceIcon({ name }: { name: Card['icon'] }) {
  const Icon = iconMap[name]
  return <Icon size={24} strokeWidth={1.6} />
}

function BenefitIcon({ name }: { name: DomainData['benefits'][number]['icon'] }) {
  const Icon = iconMap[name]
  return <Icon size={23} strokeWidth={1.6} />
}

function generateId(title: string) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export default function DomainDetailPage({ params }: Params) {
  const data = DOMAIN_DATA[params.slug]

  if (!data) {
    notFound()
  }

  return (
    <>
      <section className="area-hero hero-bg-photo hero-bg-domaines domaines-hero-new-bg">
        <div className="section-container area-hero-inner">
          <div>
            <p className="area-kicker">Domaine d’expertise</p>
            <h1>{data.title}</h1>
            <div className="area-hero-line" />
            <p className="area-hero-subtitle">{data.subtitle}</p>
          </div>
        </div>
      </section>

      <main className="area-page">
        <div className="section-container">
          <nav className="area-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/domaines">Domaines</Link>
            <ChevronRight size={14} />
            <span>{data.breadcrumb}</span>
          </nav>

          <div className="area-layout">
            <div className="area-main">
              <section className="area-section">
                <div className="area-section-heading">
                  <h2>{data.mainTitle}</h2>
                  <span />
                </div>

                <div className="area-services-showcase">
                  {/* Grande carte principale à gauche (Category 1) */}
                  {data.services[0] && (
                    <Link 
                      href={`#${generateId(data.services[0].title)}`}
                      className="area-services-main-card animate-card hover-lift"
                      aria-label={`Voir les détails : ${data.services[0].title}`}
                    >
                      <div className="area-service-icon">
                        <ServiceIcon name={data.services[0].icon} />
                      </div>
                      <div className="area-service-content">
                        <h3>{data.services[0].title}</h3>
                        <ul>
                          {data.services[0].items.slice(0, 4).map((item) => (
                            <li key={item}>
                              <CheckCircle2 size={18} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div style={{ marginTop: '20px', color: '#b68a42', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          Voir les détails <ChevronRight size={16} />
                        </div>
                      </div>
                      <div 
                        className="area-service-visual" 
                        style={{ 
                          backgroundImage: params.slug === 'immobilier' ? 'url("/images/blog/immobilier-transaction.png")' :
                                           params.slug === 'famille-succession' ? 'url("/images/blog/succession-famille.png")' :
                                           params.slug === 'affaires' || params.slug === 'droit-des-affaires' ? 'url("/images/blog/creation-societe.png")' :
                                           params.slug === 'donations' ? 'url("/images/blog/donation-famille.png")' : 'none'
                        }} 
                      />
                    </Link>
                  )}

                  {/* Colonne de 3 petites cartes à droite (Categories 2, 3, 4) */}
                  <div className="area-services-stack">
                    {data.services.slice(1, 4).map((service) => (
                      <Link 
                        key={service.title} 
                        href={`#${generateId(service.title)}`}
                        className="area-services-small-card animate-card hover-lift"
                        aria-label={`Voir les détails : ${service.title}`}
                      >
                        <div className="area-service-icon-small">
                          <ServiceIcon name={service.icon} />
                        </div>
                        <div className="area-service-info">
                          <h3>{service.title}</h3>
                          <ul>
                            {service.items.slice(0, 2).map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <ChevronRight className="area-service-arrow" size={20} />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Si plus de 4 services */}
                {data.services.length > 4 && (
                  <div className="area-services-grid" style={{ marginTop: '20px' }}>
                    {data.services.slice(4).map((service) => (
                      <Link
                        key={service.title}
                        href={`#${generateId(service.title)}`}
                        className={service.wide ? 'area-card area-card-wide animate-card hover-lift' : 'area-card animate-card hover-lift'}
                        aria-label={`Voir les détails : ${service.title}`}
                      >
                        <div className="area-card-icon">
                          <ServiceIcon name={service.icon} />
                        </div>
                        <div>
                          <h3>{service.title}</h3>
                          <ul>
                            {service.items.slice(0, 3).map((item) => (
                              <li key={item}>
                                <CheckCircle2 size={16} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div style={{ marginTop: '12px', color: '#b68a42', fontWeight: 600, fontSize: '0.85rem' }}>
                            Détails →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </section>

              {/* SECTION DÉTAILLÉE DES PRESTATIONS */}
              <section className="area-section">
                <div className="area-section-heading">
                  <h2>Détails des prestations</h2>
                  <span />
                </div>

                <div className="area-service-details-container">
                  {data.services.map((service) => (
                    <div 
                      key={service.title} 
                      id={generateId(service.title)}
                      className="area-service-detail-card area-service-detail-item animate-card"
                    >
                      <div className="area-service-detail-header">
                        <div className="area-service-detail-icon">
                          <ServiceIcon name={service.icon} />
                        </div>
                        <h3>{service.title}</h3>
                      </div>
                      
                      <div className="area-service-detail-content">
                        <div className="area-service-detail-description">
                          <p>
                            Notre cabinet vous accompagne dans toutes les démarches liées à {service.title.toLowerCase()}. 
                            Nous assurons la rédaction des actes, le conseil juridique et le suivi administratif pour garantir la sécurité de vos opérations.
                          </p>
                          <div className="area-service-detail-footer">
                            <Link href="/infos-pratiques/rendez-vous" className="area-primary-btn" style={{ padding: '0 20px', minHeight: '46px', fontSize: '0.9rem' }}>
                              <CalendarDays size={16} />
                              Prendre RDV
                            </Link>
                          </div>
                        </div>
                        
                        <div className="area-service-detail-list-wrapper">
                          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '15px', color: '#071827' }}>Services inclus :</h4>
                          <ul className="area-service-detail-list">
                            {service.items.map((item) => (
                              <li key={item}>
                                <CheckCircle2 size={18} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="area-section">
                <div className="area-section-heading">
                  <h2>Documents à prévoir</h2>
                  <span />
                </div>

                <div className="area-documents-grid">
                  {data.documents.map((document) => (
                    <div key={document} className="area-document-card animate-card hover-lift">
                      <CheckCircle2 size={20} />
                      <strong>{document}</strong>
                    </div>
                  ))}
                </div>

                <p className="area-note">
                  Liste indicative. D’autres documents peuvent être demandés selon la spécificité de votre dossier.
                </p>
              </section>

              <section className="area-section">
                <div className="area-section-heading">
                  <h2>Pourquoi choisir notre accompagnement ?</h2>
                  <span />
                </div>

                <div className="area-why-grid">
                  {data.benefits.map((benefit) => (
                    <article key={benefit.title} className="area-why-card animate-card hover-lift">
                      <div className="area-why-card-head">
                        <div className="area-why-card-icon">
                          <BenefitIcon name={benefit.icon} />
                        </div>
                        <h3 className="area-why-card-title">{benefit.title}</h3>
                      </div>
                      <p className="area-why-card-text">{benefit.text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="area-section">
                <div className="area-section-heading">
                  <h2>Questions fréquentes</h2>
                  <span />
                </div>

                <div className="area-faq-grid">
                  {data.faqs.map((faq) => (
                    <details key={faq} className="area-faq-item animate-card hover-lift">
                      <summary>
                        <span>{faq}</span>
                        <ChevronRight size={16} />
                      </summary>
                      <p>
                        Notre équipe vous apporte une réponse personnalisée selon la nature de votre dossier et les pièces disponibles.
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="area-sidebar">
              <div className="area-sidebar-cta animate-card hover-lift">
                <p>Besoin d’un accompagnement ?</p>
                <h2>Nous sommes à votre écoute.</h2>
                <span />
                <Link href="/infos-pratiques/rendez-vous" className="area-sidebar-button">
                  <CalendarDays size={18} />
                  Prendre rendez-vous
                </Link>
              </div>

              <div className="area-sidebar-list animate-card hover-lift">
                <Link href="/infos-pratiques/documents-requis" className="area-sidebar-item">
                  <FileText size={22} />
                  <span>
                    <strong>Documents requis</strong>
                    <small>Découvrez la liste des documents à prévoir.</small>
                  </span>
                  <ChevronRight size={17} />
                </Link>

                <a href="https://wa.me/22375874199" className="area-sidebar-item">
                  <MessageCircle size={22} />
                  <span>
                    <strong>WhatsApp</strong>
                    <small>Écrivez-nous directement sur WhatsApp.</small>
                  </span>
                  <ChevronRight size={17} />
                </a>

                <a href="tel:+22375874199" className="area-sidebar-item">
                  <Phone size={22} />
                  <span>
                    <strong>Téléphone</strong>
                    <small>+223 75 87 41 99<br />Lun–Jeu : 08h–17h</small>
                  </span>
                </a>

                <div className="area-sidebar-item">
                  <MapPin size={22} />
                  <span>
                    <strong>Adresse</strong>
                    <small>Hamdallaye ACI 2000, Rue 327, Bamako, Mali</small>
                  </span>
                </div>
              </div>
            </aside>
          </div>

          <section className="area-bottom-cta animate-card hover-lift">
            <div>
              <h2>{data.ctaTitle}</h2>
              <p>Nos experts vous accompagnent à chaque étape avec rigueur, clarté et confidentialité.</p>
            </div>

            <div className="area-bottom-actions">
              <Link href="/infos-pratiques/rendez-vous" className="area-primary-btn">
                <CalendarDays size={18} />
                Réserver un créneau
              </Link>
              <a href="https://wa.me/22375874199" className="area-outline-btn">
                <MessageCircle size={18} />
                WhatsApp direct
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
