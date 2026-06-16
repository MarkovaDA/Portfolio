/**
 * Базовый путь приложения (для GitHub Pages и локальной разработки).
 * Завершающий слеш необязателен: '/Portfolio' и '/Portfolio/' эквивалентны.
 */
export const SITE_BASE = '/Portfolio'

/** Для Vite `base` — всегда со слешем на конце (кроме корня). */
export function toViteBase(path: string = SITE_BASE): string {
  if (!path || path === '/') return '/'
  return path.endsWith('/') ? path : `${path}/`
}

/** Для React Router `basename` — без слеша на конце. */
export function toRouterBasename(path: string = SITE_BASE): string {
  if (!path || path === '/') return ''
  return path.replace(/\/+$/, '')
}

/** Путь к файлу из `public/` с учётом base (GitHub Pages / Vercel). */
export function assetPath(path: string): string {
  const normalized = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
