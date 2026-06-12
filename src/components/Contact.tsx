import type { MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../data'
import { useLocale } from '../i18n/LocaleProvider'
import { Reveal } from './Reveal'

export function Contact() {
  const { t } = useLocale()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="contact__card">
          <div className="contact__content">
            <span className="section__label">{t.contact.label}</span>
            <h2 className="contact__title">{t.contact.title}</h2>
            <p className="contact__desc">{t.contact.desc}</p>
          </div>

          <div className="contact__actions">
            <a href={`mailto:${siteConfig.email}`} className="btn btn--primary btn--large">
              {siteConfig.email}
            </a>
            <div className="contact__socials">
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact__social">
                GitHub
              </a>
              <a href={siteConfig.telegram} target="_blank" rel="noreferrer" className="contact__social">
                Telegram
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="contact__social">
                LinkedIn
              </a>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLocale()
  const { pathname } = useLocation()

  const handleTopClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.history.replaceState(null, '', pathname)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} {siteConfig.name}. {t.footer.madeWith}</p>
        <Link
          to="/"
          className="footer__top"
          onClick={handleTopClick}
          aria-label={t.a11y.backToTop}
        >
          {t.footer.backToTop} ↑
        </Link>
      </div>
    </footer>
  )
}
