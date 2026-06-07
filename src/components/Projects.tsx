import { Link } from 'react-router-dom'
import { projects } from '../data'

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Портфолио</span>
          <h2 className="section__title">Работы</h2>
          <p className="section__desc">
            {projects.length} проектов — нажмите на карточку, чтобы открыть страницу с деталями и слотами.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-card project-card--link"
            >
              <div className="project-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="project-card__more">Подробнее →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
