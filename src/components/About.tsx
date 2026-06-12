import { useLocale } from '../i18n/LocaleProvider'

function HighlightItem({ text }: { text: string }) {
  const [title, ...rest] = text.split(' — ')
  return (
    <li>
      <strong>{title}</strong>
      {rest.length > 0 && <> — {rest.join(' — ')}</>}
    </li>
  )
}

const TEMP_HIDE_AVATAR = true

export function About() {
  const { t } = useLocale()

  return (
    <section id="about" className={`section about${TEMP_HIDE_AVATAR ? ' about--hide-visual' : ''}`}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">{t.about.label}</span>
          <h2 className="section__title">{t.about.title}</h2>
        </div>

        <div className="about__grid">
          <div className="about__visual">
            <div className="about__avatar">
              <span className="about__avatar-initials">ДМ</span>
              <div className="about__avatar-ring" aria-hidden="true" />
            </div>
          </div>

          <div className="about__content">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="about__text">
                {paragraph}
              </p>
            ))}

            <ul className="about__highlights">
              {t.about.highlights.map((item) => (
                <HighlightItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
