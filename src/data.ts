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
  },
  {
    slug: 'file-manager',
    title: 'File Manager',
    description: 'Файловый менеджер, реализованный на React',
    fullDescription: `
     Учебный React-проект, совмещающий в себе функции проводника файлов: слева дерево папок, справа содержимое выбранной директории, между ними изменяемый разделитель. 
     Можно создавать файлы и папки через контекстное меню.
     <p>
      <br />
      <b>
        Основные возможности:
      </b>
     </p>
     <ul>
        <li>Дерево папок (TreeView):
        Отображение вложенной структуры проекта.
        Раскрытие и сворачивание папок по клику.
        Выделение выбранного узла.
        Поддержка клавиатуры: активация узла через Enter и Space.
        Иконки для папок и файлов (Material UI Icons) с цветовой индикацией по типу файла.
        </li>
        <li>Проводник файлов (FileExplorer):
        Показ содержимого выбранной папки в виде плиток.
        Отображение пустого состояния, если в папке нет элементов.
        Иконки файлов и папок, согласованные с деревом слева.
        </li>
        <li>Контекстное меню:
        Открывается по правому клику в области проводника.
        Пункты: «Создать файл» и «Создать папку».
        Закрывается по клику вне меню или по Escape.
        Реализовано через хук useContextMenu.
        </li>
        <li>Создание файлов и папок:
        Имя вводится через стандартный window.prompt.
        Проверка на пустое имя.
        Проверка на дубликаты в текущей папке (без учёта регистра).
        Новые элементы сразу появляются в дереве и в списке файлов.
        </li>
        <li>Разделитель панелей (SplitView):
        Экран делится на левую и правую области.
        Ширину левой панели можно менять перетаскиванием разделителя.
        Заданы минимальные размеры панелей, чтобы интерфейс оставался читаемым.
        </li>
      </ul>
    `,
    tags: ['React', 'Vite', 'TypeScript', 'Material UI'],
    repoUrl: 'https://github.com/MarkovaDA/Navigator/',
    publicUrl: 'https://markovada.github.io/Navigator/',
    slots: [{
      id: 'main',
      label: 'Главный экран приложения',
      summary: 'Интерфейс состоит из двух областей. Слева — дерево папок, справа — содержимое выбранной папки. Разделитель между ними можно перетаскивать. Правый клик в правой панели — создать файл или папку.',
      image: 'images/navigator-demo.png',
      techStack: {
        title: 'TypeScript, Pixi.JS, CanvasKit, Skia, Vite',
        description: 'Технологический стек: React + TypeScript + Vite'
      }
    }],
  },
  {
    slug: 'barbie-model',
    title: '3D Barbie Model',
    description: 'Интерактивная 3D-сцена на Three.js и Vite для просмотра 3D-модели Barbie',
    fullDescription: `
    ThreeJSBarbieModel — веб-приложение для интерактивного просмотра 3D-моделей Barbie и других женских персонажей в браузере. Проект построен на Three.js и Vite и имитирует витринную сцену: персонаж стоит на белом подиуме в затемнённом пространстве с мягким освещением, а пользователь может вращать камеру вокруг модели и переключать режимы движения.
    <br />
    <p>
      <i>*Проект находится в стадии разработки</i>
    </p>
    <p>
        <b>
          Основные возможности:
        </b>
      </p>
      <ul>
        <li>Интерактивная 3D-сцена на Three.js</li>
        <li>Vite для сборки проекта</li>
        <li>Имитация витринной сцены с персонажем на подиуме</li>
        <li>Вращение камеры вокруг модели</li>
        <li>Переключение режимов движения персонажа</li>
        <li>Поддержка GLB-моделей</li>
        <li>Система материалов для модели</li>
        <li>Анимация ходьбы персонажа</li>
        <li>Пайплайн подготовки моделей для Mixamo</li>
    `,
    tags: ['Three.js', 'Vite', 'HTML'],
    repoUrl: 'https://github.com/MarkovaDA/ThreeJSBarbieModel/',
    publicUrl: 'https://markovada.github.io/ThreeJSBarbieModel/',
    slots: [{
      id: 'main',
      label: 'Главный экран приложения',
      summary: 'Интерфейс состоит из 3D-сцены и панели управления',
      image: 'images/barbie-model-demo.png',
      techStack: {
        title: 'TypeScript, Pixi.JS, CanvasKit, Skia, Vite',
        description: 'Технологический стек: Three.js + HTML + Vite',
      }
    }]
  },
  {
    slug: 'worklog',
    title: 'WorkLog',
    description: 'Веб-приложение для учёта выполненных работ на строительном объекте',
    fullDescription: `
        Система позволяет вести записи с датой, типом работ, объёмом, единицей измерения и исполнителем: просматривать в таблице, фильтровать и сортировать по дате, добавлять, редактировать и удалять записи. Справочник типов работ подгружается из JSON.
        Локально можно запускать через npm или Docker Compose; в production на GitHub Pages доступен только фронтенд с демо-данными.
      `,
      tags: ['React', 'TypeScript', 'Material UI', 'Node.js' , 'Express', 'SQLite' , 'Drizzle ORM', 'Vite'],
      repoUrl: 'https://markovada.github.io/Loogbook/',
      publicUrl: 'https://markovada.github.io/Loogbook/',
      slots: [
        {
          id: 'main',
          label: 'Главный экран приложения',
          summary: 'Интерфейс состоит из таблицы с записями и справочника типов работ',
          image: 'images/worklog-main-demo.png',
          techStack: {
            title: 'React, TypeScript, Material UI, Node.js, Express, SQLite, Drizzle ORM, Vite',
            description: 'Технологический стек: React + TypeScript + Material UI + Node.js + Express + SQLite + Drizzle ORM + Vite',
          }
      }, 
      {
          id: 'add',
          label: 'Форма добавления новой записи',
          summary: 'Форма добавления новой записи с полями для ввода даты, типа работ, объёма, единицы измерения и исполнителя',
          image: 'images/worklog-add-form-demo.png',
          techStack: {
            title: 'React, TypeScript, Material UI, Node.js, Express, SQLite, Drizzle ORM, Vite',
            description: 'Технологический стек: React + TypeScript + Material UI + Node.js + Express + SQLite + Drizzle ORM + Vite',
          }
      }
    ],
  },
  {
    slug: 'travel-app',
    title: 'Travel App',
    description: 'Веб-редактор для путешественника, позволяющий выделять страны и ставить маркеры на карте, задавать им названия, цвета и описания. Данные сохраняются локально в браузере пользователя.',
    fullDescription: `
      Одностраничное веб-приложение для работы с интерактивной картой. 
      Пользователь может создавать и редактировать области стран, добавлять маркеры с иконками и подписями, 
      управлять масштабом карты через контекстное меню и панель управления.
    `,
    tags: ['JavaScript', 'JQuery', 'IndexedDB', 'OpenStreetMap', 'OpenLayers', 'Webpack'],
    repoUrl: 'https://github.com/MarkovaDA/TravelApp',
    publicUrl: 'https://markovada.github.io/TravelApp/',
    slots: [{
      id: 'main',
      label: 'Главный экран приложения',
      summary: 'Интерфейс состоит из карты и панели управления',
      image: 'images/travelapp-main-demo.png',  
      techStack: {
        title: 'JavaScript, JQuery, IndexedDB, OpenStreetMap, OpenLayers, Webpack',
        description: 'Технологический стек: JavaScript + JQuery + IndexedDB + OpenStreetMap + OpenLayers + Webpack',
      }
    }],
  },
  {
    slug: 'landing-page',
    title: 'Landing Page',
    description: 'Пример лэндинг-страницы',
    fullDescription: `
      Адаптивный лендинг «Клуб четырёх коней» по макету Figma: вёрстка HTML/CSS/JS, карусели, бегущая строка и анимации при скролле. 
    `,
    slots: [],
    repoUrl: 'https://github.com/MarkovaDA/LandingPageDemo',
    publicUrl: 'https://markovada.github.io/LandingPageDemo/',
    tags: ['HTML5', 'CSS3 (модульные файлы, Flexbox, Grid, CSS-переменные, media queries)', 'Vanilla JavaScript'],
  },
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
  { name: 'GraphQL', level: 75 },
  { name: 'Next.js', level: 70 },
  { name: 'Webpack', level: 90 },
  { name: 'Vite', level: 95 },
  { name: 'Git', level: 90 },
  { name: 'Docker', level: 100 },
  { name: 'Реактивное программирование', level: 92 },
  { name: 'Адаптивная вёрстка', level: 100 },
  { name: 'Webdesign', level: 85 },
  { name: 'Storybook', level: 90 },
  { name: 'Material UI', level: 100 }
]

