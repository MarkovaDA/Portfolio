import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Project } from '../data'
import {
  getLocalizedProjectBySlug,
  getLocalizedProjects,
  getMessages,
  getNavLinks,
  type Locale,
  type Messages,
  type NavLink,
} from './index'

const STORAGE_KEY = 'portfolio-locale'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
  navLinks: NavLink[]
  projects: Project[]
  getProjectBySlug: (slug: string) => Project | undefined
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  return 'ru'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const t = useMemo(() => getMessages(locale), [locale])
  const navLinks = useMemo(() => getNavLinks(locale), [locale])
  const projects = useMemo(() => getLocalizedProjects(locale), [locale])

  const getProjectBySlug = useCallback(
    (slug: string) => getLocalizedProjectBySlug(slug, locale),
    [locale],
  )

  useEffect(() => {
    document.documentElement.lang = locale
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
    document.title = locale === 'ru' ? 'Портфолио' : 'Portfolio'
  }, [locale, t.meta.description])

  const value = useMemo(
    () => ({ locale, setLocale, t, navLinks, projects, getProjectBySlug }),
    [locale, setLocale, t, navLinks, projects, getProjectBySlug],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
