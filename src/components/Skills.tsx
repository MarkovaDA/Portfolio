import type { CSSProperties } from 'react'
import { skills } from '../data'
import { useLocale } from '../i18n/LocaleProvider'

export function Skills() {
  const { t } = useLocale()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section__header">
          <span className="section__label">{t.skills.label}</span>
          <h2 className="section__title">{t.skills.title}</h2>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill">
              <div className="skill__header">
                <span className="skill__name">{skill.name}</span>
                <span className="skill__level">{skill.level}%</span>
              </div>
              <div className="skill__bar">
                <div
                  className="skill__fill"
                  style={{ '--level': `${skill.level}%` } as CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="skills__tags">
          {['Git', 'Figma', 'Vite', 'Tailwind', 'REST API', 'Jest', 'Docker'].map((tag) => (
            <span key={tag} className="skills__tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
