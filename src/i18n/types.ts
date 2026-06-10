export type Locale = 'ru' | 'en'

export interface NavLink {
  href: string
  label: string
}

export interface ProjectTranslation {
  title: string
  description: string
  fullDescription: string
  slots: Record<string, { label: string; summary: string }>
}

export interface Messages {
  meta: {
    description: string
  }
  a11y: {
    language: string
    openMenu: string
    closeMenu: string
    scrollDown: string
    breadcrumbs: string
    projectPager: string
    projectScreens: string
    backToTop: string
  }
  nav: {
    about: string
    projects: string
    skills: string
    contact: string
    cta: string
  }
  hero: {
    badge: string
    name: string
    role: string
    tagline: string
    viewProjects: string
    writeMe: string
    yearsExperience: string
    projectsCount: string
    happyClients: string
  }
  about: {
    label: string
    title: string
    paragraphs: [string, string, string]
    highlights: [string, string, string]
  }
  projects: {
    label: string
    title: string
    desc: (count: number) => string
  }
  skills: {
    label: string
    title: string
  }
  contact: {
    label: string
    title: string
    desc: string
  }
  footer: {
    madeWith: string
    backToTop: string
  }
  projectPage: {
    home: string
    works: string
    back: string
    next: string
    repo: string
    demo: string
    screensTitle: string
    screenshot: string
  }
}
