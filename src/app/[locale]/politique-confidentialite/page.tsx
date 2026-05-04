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

const IconClock = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
    <path d="M9.5 12.5 11 14l3.5-4" />
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
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

const privacySections = [
  {
    number: "01",
    title: "Collecte des donnÃ©es",
    icon: <IconDoc />,
    text: "Nous collectons les donnÃ©es que vous nous communiquez volontairement via les formulaires de contact et de prise de rendez-vous : nom, email, tÃ©lÃ©phone et message. Ces informations sont nÃ©cessaires pour traiter efficacement vos demandes.",
  },
  {
    number: "02",
    title: "Utilisation des donnÃ©es",
    icon: <IconUser />,
    text: "Vos donnÃ©es servent uniquement Ã  rÃ©pondre Ã  vos demandes, Ã  organiser vos rendez-vous et Ã  assurer le suivi qualifiÃ© de nos Ã©changes dans un cadre strictement confidentiel et notarial.",
  },
  {
    number: "03",
    title: "Conservation des donnÃ©es",
    icon: <IconClock />,
    text: "Les donnÃ©es sont conservÃ©es uniquement pendant la durÃ©e nÃ©cessaire au traitement administratif et juridique de vos demandes, conformÃ©ment aux obligations applicables.",
  },
  {
    number: "04",
    title: "Partage des donnÃ©es",
    icon: <IconShield />,
    text: "Vos donnÃ©es ne sont ni vendues ni cÃ©dÃ©es Ã  des tiers. Elles peuvent Ãªtre traitÃ©es par des prestataires techniques uniquement lorsque cela est nÃ©cessaire au bon fonctionnement du site, dans le respect de la confidentialitÃ©.",
  },
  {
    number: "05",
    title: "SÃ©curitÃ©",
    icon: <IconLock />,
    text: "Le cabinet met en Å“uvre des mesures techniques et organisationnelles raisonnables afin de protÃ©ger vos donnÃ©es contre tout accÃ¨s non autorisÃ©, perte, modification ou divulgation.",
  },
  {
    number: "06",
    title: "Vos droits",
    icon: <IconShield />,
    text: "Vous disposez dâ€™un droit dâ€™accÃ¨s, de rectification, de suppression et de limitation concernant vos informations personnelles. Vous pouvez exercer ces droits en contactant directement le cabinet.",
  },
  {
    number: "07",
    title: "Contact relatif aux donnÃ©es personnelles",
    icon: <IconMail />,
    text: "Pour toute demande relative Ã  la confidentialitÃ© ou Ã  la gestion de vos informations personnelles, vous pouvez contacter le cabinet par email, tÃ©lÃ©phone ou courrier.",
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="legal-hero hero-bg-photo hero-bg-privacy privacy-hero-new-bg">

        <div className="legal-container legal-hero__inner">
          <span className="legal-kicker">ConfidentialitÃ©</span>
          <h1>Politique de confidentialitÃ©</h1>
          <div className="legal-gold-line" />
          <p>
            Nous accordons une importance particuliÃ¨re Ã  la confidentialitÃ© et Ã 
            la protection des donnÃ©es de nos visiteurs et clients.
          </p>
        </div>
      </section>

      <main className="legal-page">
        <div className="legal-container">
          <nav className="legal-breadcrumb" aria-label="Fil dâ€™Ariane">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <strong>Politique de confidentialitÃ©</strong>
          </nav>

          <div className="legal-layout">
            <div className="legal-content">
              {privacySections.map((section) => (
                <section className="legal-card animate-card hover-lift" key={section.title}>
                  <div className="legal-card__icon">{section.icon}</div>
                  <div>
                    <div className="legal-card__number">{section.number}</div>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                  </div>
                </section>
              ))}
            </div>

            <aside className="legal-sidebar animate-card hover-lift">
              <div className="legal-sidebar__icon">
                <IconPhone />
              </div>
              <h2>Besoin dâ€™aide ?</h2>
              <p>
                Notre Ã©quipe est Ã  votre Ã©coute pour toute question concernant la
                protection de vos donnÃ©es personnelles.
              </p>

              <div className="legal-sidebar__list">
                <a href="tel:+22320224466">
                  <IconPhone />
                  <span>+223 20 22 44 66</span>
                </a>
                <a href="mailto:contact@maitre-amadou-kone.com">
                  <IconMail />
                  <span>contact@maitre-amadou-kone.com</span>
                </a>
                <div>
                  <IconMap />
                  <span>Hamdallaye ACI 2000, Rue 327, Bamako, Mali</span>
                </div>
                <div>
                  <IconClock />
                  <span>Lunâ€“Jeu : 08hâ€“17h Â· Ven : 08hâ€“13h</span>
                </div>
              </div>

              <div className="legal-sidebar__actions">
                <Link href="/contact" className="legal-btn legal-btn--gold">
                  Nous contacter
                </Link>
                <Link
                  href="/infos-pratiques/rendez-vous"
                  className="legal-btn legal-btn--outline"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </aside>
          </div>

          <section className="legal-cta animate-card hover-lift">
            <div className="legal-cta__icon">
              <IconShield />
            </div>
            <div>
              <h2>Une question concernant vos donnÃ©es ?</h2>
              <p>
                Notre cabinet reste Ã  votre disposition pour toute demande
                relative Ã  la confidentialitÃ© ou Ã  la gestion de vos informations
                personnelles.
              </p>
            </div>
            <div className="legal-cta__actions">
              <Link href="/contact" className="legal-btn legal-btn--gold">
                Nous contacter
              </Link>
              <a href="tel:+22320224466" className="legal-btn legal-btn--dark">
                Nous appeler
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
