import { Link } from 'react-router-dom'
import { DecorativeArrow } from './DecorativeArrow'
import { projects } from '../data'

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Портфолио</span>
          <h2 className="section__title">Работы</h2>
          <p className="section__desc">
            {projects.length} проектов — выберите работу, чтобы открыть страницу с деталями и слотами.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-strip"
            >
              <span className="project-strip__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="project-strip__body">
                <h3 className="project-strip__title">{project.title}</h3>
                <p className="project-strip__desc">{project.description}</p>
                <ul className="project-strip__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <DecorativeArrow className="project-strip__arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
