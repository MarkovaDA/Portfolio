export interface ProjectSlot {
  id: string
  label: string
  summary: string
  image?: string
  techStack: {
    title: string
    description: string
  }
}

export interface Project {
  slug: string
  title: string
  description: string
  fullDescription: string
  tags: string[]
  repoUrl: string
  publicUrl: string
  slots: ProjectSlot[]
}

export interface Skill {
  name: string
  level: number
}

export const siteConfig = {
  name: 'Portfolio',
  email: 'dmarkova.business@gmail.com',
  github: 'https://github.com/MarkovaDA/',
  telegram: 'https://t.me/darya_todreams',
  linkedin: 'https://www.linkedin.com/in/darya-markova/',
}

export const projects: Project[] = [
  {
    slug: 'drawing-board',
    title: 'Drawing Board',
    description: 'Виртуальная доска для рисования наподобие Miro',
    fullDescription: `Интерактивное веб-приложение на TypeScript + Pixi.js + CanvasKit (Skia) для рисования и редактирования сцен с экспортом в PDF.
      <p>
        <br />
        <b>
          Функции приложения:
        </b>
      </p>

      <ul>
        <li>отображает несколько подготовленных сцен (демо, фигуры, линии);</li>
        <li>поддерживает переключение сцен вручную и автопереключение;</li>
        <li>позволяет перетаскивать объекты мышью; </li>
        <li> добавляет случайные фигуры на активную сцену;</li>
        <li>очищает холст;</li>
        <li>экспортирует текущую сцену в PDF;</li>
        <li>синхронизирует правую панель предпросмотра со сценой Pixi;</li>
        <li>поддерживает взаимодействие (drag) и с правой Skia-панели через проксирование pointer-событий.</li>
      </ul>
    `,
    tags: [
      'TypeScript', 'Pixi.JS', 'CanvasKit', 'Skia', 'Vite'
    ],
    repoUrl: 'https://github.com/MarkovaDA/SBoardTestTask',
    publicUrl: 'https://markovada.github.io/SBoardTestTask/',
    slots: [{
      id: 'main',
      label: 'Главный экран приложения',
      summary: 'Интерфейс состоит из панели управления сверху и двух canvas-панелей снизу: интерактивная сцена Pixi слева и её превью Skia справа. Доступны экспорт в PDF, добавление/очистка фигур и переключение сцен.',
      image: 'images/sboard-demo.png',
      techStack: {
        title: 'TypeScript, Pixi.JS, CanvasKit, Skia, Vite',
        description: 'Технологический стек: TypeScript + Vite, графика на Pixi.js и CanvasKit (Skia PDF)'
      }
    }],
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 100 },
  { name: 'HTML / CSS', level: 100 },
  { name: 'React', level: 95 },
  { name: 'Angular', level: 95 },
  { name: 'Vue.js', level: 95 },
  { name: 'UI / UX Design', level: 95 },
  { name: 'Three.js', level: 75 },
  { name: 'Node.js', level: 80 },
  { name: 'Next.js', level: 70 },
  { name: 'Webpack', level: 90 },
  { name: 'Git', level: 90 },
  { name: 'Реактивное программирование', level: 92 },
  { name: 'Адаптивная вёрстка', level: 100 },
  { name: 'GraphQL', level: 75 },
  { name: 'Webdesign', level: 70 },
]

