import { useLocale } from '../i18n/LocaleProvider'
import type { Locale } from '../i18n/types'

const options: { value: Locale; label: string }[] = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
]

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div className="lang-switch" role="group" aria-label={t.a11y.language}>
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={`lang-switch__btn${locale === value ? ' lang-switch__btn--active' : ''}`}
          onClick={() => setLocale(value)}
          aria-pressed={locale === value}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
