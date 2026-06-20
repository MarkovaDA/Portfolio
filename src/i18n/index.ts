import type { Locale, Messages, NavLink } from './types'
import { en } from './messages/en'
import { ru } from './messages/ru'
import { projectsEn } from './projects/en'
import { skillsEn } from './skills/en'
import type { Project, Skill } from '../data'
import { projects as projectsRu, skills as skillsRu } from '../data'

const messages: Record<Locale, Messages> = { ru, en }

export function getMessages(locale: Locale): Messages {
  return messages[locale]
}

export function getNavLinks(locale: Locale): NavLink[] {
  const t = getMessages(locale).nav
  return [
    { href: '/#about', label: t.about },
    { href: '/#projects', label: t.projects },
    { href: '/#skills', label: t.skills },
    { href: '/#contact', label: t.contact },
  ]
}

export function getLocalizedProjects(locale: Locale): Project[] {
  if (locale === 'ru') return projectsRu

  return projectsRu.map((project) => {
    const translation = projectsEn[project.slug]
    if (!translation) return project

    return {
      ...project,
      title: translation.title,
      description: translation.description,
      fullDescription: translation.fullDescription,
      slots: project.slots.map((slot) => {
        const slotTr = translation.slots[slot.id]
        if (!slotTr) return slot
        return {
          ...slot,
          label: slotTr.label,
          summary: slotTr.summary,
        }
      }),
    }
  })
}

export function getLocalizedProjectBySlug(slug: string, locale: Locale): Project | undefined {
  return getLocalizedProjects(locale).find((p) => p.slug === slug)
}

export function getLocalizedSkills(locale: Locale): Skill[] {
  if (locale === 'ru') return skillsRu

  return skillsRu.map((skill) => ({
    ...skill,
    name: skillsEn[skill.name] ?? skill.name,
  }))
}

export type { Locale, Messages, NavLink }
