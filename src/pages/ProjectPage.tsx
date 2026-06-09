import { Navigate, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { ProjectToolbar } from '../components/ProjectToolbar'
import type { Project, ProjectSlot as ProjectSlotData } from '../data'
import { getProjectBySlug, projects } from '../data'

function ProjectIntro({ project, index }: { project: Project; index: number }) {
  return (
    <header className="project-intro">
      <span className="project-intro__index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h1 className="project-intro__title">{project.title}</h1>
      <p className="project-intro__desc">{project.fullDescription}</p>

      <ul className="project-intro__tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-intro__links">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="project-intro__link"
        >
          Репозиторий
        </a>
        <a
          href={project.publicUrl}
          target="_blank"
          rel="noreferrer"
          className="project-intro__link project-intro__link--accent"
        >
          Смотреть демо
        </a>
      </div>
    </header>
  )
}

function ProjectSlot({ slot, index }: { slot: ProjectSlotData; index: number }) {
  return (
    <figure className="project-slot">
      <div className="project-slot__frame" data-slot={index + 1}>
        {slot.image ? (
          <img src={slot.image} alt={slot.label} className="project-slot__image" />
        ) : (
          <span className="project-slot__placeholder">Скриншот</span>
        )}
      </div>
      <figcaption className="project-slot__caption">{slot.label}</figcaption>
    </figure>
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
        <ProjectToolbar
          projectTitle={project.title}
          currentIndex={currentIndex}
          total={projects.length}
          prev={prev}
          next={next}
        />

        <div className="project-page__layout">
          <div className="project-page__content">
            <ProjectIntro project={project} index={currentIndex} />

            <section className="project-page__slots" aria-label="Экраны проекта">
              <h2 className="project-page__slots-title">Экраны и решения</h2>
              {project.slots.map((slot, index) => (
                <ProjectSlot key={slot.id} slot={slot} index={index} />
              ))}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}
