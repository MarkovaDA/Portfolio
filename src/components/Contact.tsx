import { Link } from 'react-router-dom'
import { siteConfig } from '../data'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card">
          <div className="contact__content">
            <span className="section__label">Контакты</span>
            <h2 className="contact__title">Давайте работать вместе</h2>
            <p className="contact__desc">
              Есть идея для проекта или просто хотите поздороваться?
              Напишите — отвечу в ближайшее время.
            </p>
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
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} {siteConfig.name}. Сделано с ♥</p>
        <Link to="/" className="footer__top">Наверх ↑</Link>
      </div>
    </footer>
  )
}
