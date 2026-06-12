import { useLocale } from '../i18n/LocaleProvider'

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="hero">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="hero__badge">
          <span className="hero__badge-dot" />
          {t.hero.badge}
        </p>

        <h1 className="hero__title">
          <span className="hero__name">{t.hero.name}</span>
          <br />
          <em className="hero__role">{t.hero.role}</em>
        </h1>

        <p className="hero__subtitle">{t.hero.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            {t.hero.viewProjects}
          </a>
          <a href="#contact" className="btn btn--ghost btn--ghost-gradient gradient-border">
            {t.hero.writeMe}
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">8<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">{t.hero.yearsExperience}</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">20<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">{t.hero.projectsCount}</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">100<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">{t.hero.happyClients}</span>
          </div>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label={t.a11y.scrollDown}>
        <span />
      </a>
    </section>
  )
}
