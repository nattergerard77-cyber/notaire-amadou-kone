import Link from "next/link";

const IconDoc = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3h7l4 4v14H7V3Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
    <path d="M14 10h-4v4h4" />
  </svg>
);

const IconScale = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v18" />
    <path d="M5 7h14" />
    <path d="M6 7 3 14h6L6 7Z" />
    <path d="M18 7 15 14h6l-3-7Z" />
    <path d="M8 21h8" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.61a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const IconMap = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const legalSections = [
  {
    title: "Éditeur du site",
    icon: <IconDoc />,
    content: (
      <>
        <p>Le présent site est édité par le Cabinet de Maître Amadou Koné, Notaire.</p>
        <ul>
          <li>
            <strong>Adresse :</strong> Hamdallaye ACI 2000, Rue 327, Bamako, Mali
          </li>
          <li>
            <strong>Téléphone :</strong> +223 20 22 44 66
          </li>
          <li>
            <strong>Email :</strong> contact@notaire-kone.ml
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Directeur de la publication",
    icon: <IconUser />,
    content: <p>Maître Amadou Koné, Notaire titulaire de la charge.</p>,
  },
  {
    title: "Hébergement",
    icon: <IconGlobe />,
    content: (
      <p>
        Le site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #1135,
        Walnut, CA 91789, USA.
      </p>
    ),
  },
  {
    title: "Propriété intellectuelle",
    icon: <IconShield />,
    content: (
      <p>
        L’ensemble des contenus présents sur ce site relève de la législation
        malienne et internationale sur le droit d’auteur et la propriété
        intellectuelle. Toute reproduction totale ou partielle est strictement
        interdite sans autorisation expresse et préalable.
      </p>
    ),
  },
  {
    title: "Responsabilité",
    icon: <IconScale />,
    content: (
      <p>
        Le cabinet s’efforce de fournir des informations exactes et mises à jour.
        Toutefois, ces informations sont données à titre indicatif et ne sauraient
        remplacer un conseil personnalisé adapté à chaque situation.
      </p>
    ),
  },
  {
    title: "Contact",
    icon: <IconMail />,
    content: (
      <p>
        Pour toute question relative au site, vous pouvez contacter le cabinet
        aux coordonnées indiquées sur cette page.
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="legal-hero hero-bg-photo hero-bg-mentions mentions-hero-new-bg">

        <div className="legal-container legal-hero__inner">
          <span className="legal-kicker">Informations légales</span>
          <h1>Mentions légales</h1>
          <div className="legal-gold-line" />
          <p>
            Les informations légales relatives au site du Cabinet Maître Amadou
            Koné.
          </p>
        </div>
      </section>

      <main className="legal-page">
        <div className="legal-container">
          <nav className="legal-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <strong>Mentions légales</strong>
          </nav>

          <div className="legal-layout">
            <div className="legal-content legal-content--grid">
              {legalSections.map((section, index) => (
                <section
                  className={`legal-card animate-card hover-lift ${index < 2 ? "legal-card--half" : ""}`}
                  key={section.title}
                >
                  <div className="legal-card__icon">{section.icon}</div>
                  <div>
                    <h2>{section.title}</h2>
                    <div className="legal-card__text">{section.content}</div>
                  </div>
                </section>
              ))}
            </div>

            <aside className="legal-sidebar legal-sidebar--dark animate-card hover-lift">
              <div className="legal-sidebar__icon">
                <IconScale />
              </div>
              <h2>Informations clés</h2>

              <div className="legal-sidebar__list">
                <div>
                  <IconMap />
                  <span>Hamdallaye ACI 2000, Rue 327, Bamako, Mali</span>
                </div>
                <a href="tel:+22320224466">
                  <IconPhone />
                  <span>+223 20 22 44 66</span>
                </a>
                <a href="mailto:contact@notaire-kone.ml">
                  <IconMail />
                  <span>contact@notaire-kone.ml</span>
                </a>
                <div>
                  <IconClock />
                  <span>Lun–Jeu : 08h–17h · Ven : 08h–13h</span>
                </div>
              </div>

              <div className="legal-sidebar__actions">
                <Link
                  href="/infos-pratiques/rendez-vous"
                  className="legal-btn legal-btn--gold"
                >
                  Prendre rendez-vous
                </Link>
                <Link href="/contact" className="legal-btn legal-btn--dark">
                  Nous contacter
                </Link>
              </div>
            </aside>
          </div>

          <section className="legal-cta animate-card hover-lift">
            <div className="legal-cta__icon">
              <IconMail />
            </div>
            <div>
              <h2>Des questions sur nos mentions légales ?</h2>
              <p>
                Notre équipe reste disponible pour toute demande d’information
                complémentaire concernant l’utilisation de notre site.
              </p>
            </div>
            <div className="legal-cta__actions">
              <Link href="/contact" className="legal-btn legal-btn--gold">
                Nous contacter
              </Link>
              <Link
                href="/infos-pratiques/rendez-vous"
                className="legal-btn legal-btn--dark"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
