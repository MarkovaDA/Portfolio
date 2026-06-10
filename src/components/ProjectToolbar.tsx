import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleProvider'
import { DecorativeArrow } from './DecorativeArrow'

interface ProjectRef {
  slug: string
  title: string
}

interface ProjectToolbarProps {
  projectTitle: string
  currentIndex: number
  total: number
  prev: ProjectRef | null
  next: ProjectRef | null
}

export function ProjectToolbar({
  projectTitle,
  currentIndex,
  total,
  prev,
  next,
}: ProjectToolbarProps) {
  const { t } = useLocale()

  return (
    <div className="project-page__toolbar">
      <div className="container project-page__toolbar-inner">
        <nav className="breadcrumbs" aria-label={t.a11y.breadcrumbs}>
          <ol className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to="/" className="breadcrumbs__link">
                {t.projectPage.home}
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to="/#projects" className="breadcrumbs__link">
                {t.projectPage.works}
              </Link>
            </li>
            <li className="breadcrumbs__item breadcrumbs__item--current" aria-current="page">
              <span className="breadcrumbs__current">{projectTitle}</span>
            </li>
          </ol>
        </nav>

        <nav className="project-pager" aria-label={t.a11y.projectPager}>
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="project-pager__link project-pager__link--prev">
              <DecorativeArrow direction="left" className="project-pager__arrow" />
              <span className="project-pager__text">
                <span className="project-pager__label">{t.projectPage.back}</span>
                <span className="project-pager__title">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span className="project-pager__placeholder" />
          )}

          <span className="project-pager__index">
            {String(currentIndex + 1).padStart(2, '0')}
            <span className="project-pager__index-sep">/</span>
            {String(total).padStart(2, '0')}
          </span>

          {next ? (
            <Link to={`/projects/${next.slug}`} className="project-pager__link project-pager__link--next">
              <span className="project-pager__text">
                <span className="project-pager__label">{t.projectPage.next}</span>
                <span className="project-pager__title">{next.title}</span>
              </span>
              <DecorativeArrow className="project-pager__arrow" />
            </Link>
          ) : (
            <span className="project-pager__placeholder" />
          )}
        </nav>
      </div>
    </div>
  )
}
