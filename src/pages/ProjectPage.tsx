import { Link, Navigate, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import type { ProjectSlot as ProjectSlotData } from '../data'
import { getProjectBySlug, projects } from '../data'

function ProjectSlot({ slot, index }: { slot: ProjectSlotData; index: number }) {
  return (
    <article className="project-slot">
      <figure className="project-slot__screenshot">
        <div className="project-slot__frame" data-slot={index + 1}>
          {slot.image ? (
            <img src={slot.image} alt={slot.label} className="project-slot__image" />
          ) : (
            <span className="project-slot__placeholder">Скриншот</span>
          )}
        </div>
        <figcaption className="project-slot__caption">{slot.label}</figcaption>
      </figure>

      <div className="project-slot__stack">
        <span className="project-slot__stack-label">Технологический стек</span>
        <p className="project-slot__stack-title">{slot.techStack.title}</p>
        <p className="project-slot__stack-desc">{slot.techStack.description}</p>
      </div>
    </article>
  )
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <Layout>
      <main className="project-page">
        <div className="project-page__layout">
          <aside className="project-page__sidebar">
            <Link to="/#projects" className="project-page__back">
              ← Все проекты
            </Link>

            <p className="project-page__index">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>

            <h1 className="project-page__title">{project.title}</h1>

            <p className="project-page__description">{project.fullDescription}</p>

            <ul className="project-page__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <dl className="project-page__meta">
              <div className="project-page__meta-row">
                <dt>Репозиторий</dt>
                <dd>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    {project.repoUrl}
                  </a>
                </dd>
              </div>
              <div className="project-page__meta-row">
                <dt>Публичный URL</dt>
                <dd>
                  <a href={project.publicUrl} target="_blank" rel="noreferrer">
                    {project.publicUrl}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="project-page__nav">
              {prev ? (
                <Link to={`/projects/${prev.slug}`} className="project-page__nav-link">
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/projects/${next.slug}`} className="project-page__nav-link project-page__nav-link--next">
                  {next.title} →
                </Link>
              )}
            </div>
          </aside>

          <div className="project-page__slots">
            {project.slots.map((slot, index) => (
              <ProjectSlot key={slot.id} slot={slot} index={index} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
