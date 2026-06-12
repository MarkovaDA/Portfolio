import { useLocale } from '../i18n/LocaleProvider'
import { useTheme } from '../theme/ThemeProvider'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-switch"
      onClick={toggleTheme}
      aria-label={isDark ? t.a11y.switchToLight : t.a11y.switchToDark}
      title={isDark ? t.a11y.switchToLight : t.a11y.switchToDark}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
