import { siteConfig } from '../data'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="hero__badge">
          <span className="hero__badge-dot" />
          Открыта к новым проектам
        </p>


        <h1 className="hero__title">
          <span className="hero__name">Дарья Маркова</span> 
          <br />
          <em>{siteConfig.role}</em>
        </h1>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            Смотреть проекты
          </a>
          <a href="#contact" className="btn btn--ghost">
            Написать мне
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">7+</span>
            <span className="hero__stat-label">лет опыта</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">20+</span>
            <span className="hero__stat-label">проектов</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">100+</span>
            <span className="hero__stat-label">довольных клиентов</span>
          </div>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Прокрутить вниз">
        <span />
      </a>
    </section>
  )
}
