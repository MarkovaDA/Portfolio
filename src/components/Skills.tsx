import type { CSSProperties } from 'react'
import { skills } from '../data'
import { useLocale } from '../i18n/LocaleProvider'
import { Reveal } from './Reveal'

export function Skills() {
  const { t } = useLocale()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <div className="section__header">
            <span className="section__label">{t.skills.label}</span>
            <h2 className="section__title">{t.skills.title}</h2>
          </div>
        </Reveal>

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={Math.min(index * 60, 360)}>
              <div className="skill">
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
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="skills__tags">
          {['JavaScript', 'Typescript', 'React', 'Angular', 'Vue', 'webpack', 'git'].map((tag) => (
            <span key={tag} className="skills__tag">{tag}</span>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
