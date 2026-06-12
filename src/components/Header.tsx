import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data'
import { useLocale } from '../i18n/LocaleProvider'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
  const { t, navLinks } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label={siteConfig.name}>
          <span className="header__logo-word">{siteConfig.name}</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              className="header__link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="header__nav-lang">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="header__actions">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Link to="/#contact" className="btn btn--primary header__cta">
            {t.nav.cta}
          </Link>
        </div>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
