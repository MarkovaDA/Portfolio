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
    slug: 'cargo-auctions',
    title: 'Cargo Auctions',
    description: 'SPA для грузовых аукционов в рамках тестового задания для одной из логистических компаний: список с фильтрами, карточка аукциона, история ставок и отдельный экран ставки',
    fullDescription: 'Cargo Auctions — фронтенд-приложение для работы с грузовыми аукционами. Пользователь может просматривать список торгов (таблица или карточки), фильтровать и пагинировать результаты, открывать карточку аукциона с деталями и историей ставок, а также ставить ставку по отдельной ссылке',
    tags: ['React 19 + React DOM', 'Vite 8', 'MUI 9', 'TanStack Router', 'TanStack Query', 'Zustand', 'Open API', 'FSD'],
    repoUrl: 'https://github.com/MarkovaDA/CargoAuctions',
    publicUrl: 'https://markovada.github.io/CargoAuctions',
    slots: [
      {
        id: 'main',
        label: 'Главный экран приложения',
        summary: 'Интерфейс состоит из таблицы со списком аукционов с фильтрами и пагинацией',
        image: 'images/cargoauctions-maindemo.png',
        techStack: {
          title: 'React, TypeScript, Vite, Zustand',
          description: 'Технологический стек: React, TypeScript, Vite, Zustand',
        }
      },
      {
        id: 'auctiondetailed-page',
        label: 'Экран детальной информации о аукционе',
        summary: 'Интерфейс состоит из карточки аукциона с деталями и историей ставок',
        image: 'images/cargoauction-detailedpage.png',
        techStack: {
          title: 'React, TypeScript, Vite, Zustand',
          description: 'Технологический стек: React, TypeScript, Vite, Zustand',
        }
      },
      {
        id: 'auctionsetbid-page',
        label: 'Экран установки ставки',
        summary: 'Интерфейс состоит из формы установки ставки',
        image: 'images/cargoauctions-setbid.png',
        techStack: {
          title: 'React, TypeScript, Vite, Zustand',
          description: 'Технологический стек: React, TypeScript, Vite, Zustand',
        }
      },
      {
        id: 'auctionhistory-page',
        label: 'Экран истории ставок',
        summary: 'Интерфейс состоит из таблицы со списком ставок',
        image: 'images/cargoauction-historypage.png',
        techStack: {
          title: 'React, TypeScript, Vite, Zustand',
          description: 'Технологический стек: React, TypeScript, Vite, Zustand',
        }
      }
    ],
  },
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
    slug: 'planet-model',
    title: '3D-модель Земли',
    description: 'Интерактивная 3D-сцена на Three.js и Vite для просмотра модели планеты Земля',
    fullDescription: `
      EarthPlanetModel — веб-приложение для интерактивного просмотра 3D-модели Земли в браузере. Проект построен на Three.js и Vite: планета отображается в космической сцене со звёздным фоном, слоем облаков и освещением, имитирующим солнце. Пользователь может вращать камеру вокруг планеты и управлять авто-вращением.
      <p>
        <br />
        <b>
          Основные возможности:
        </b>
      </p>
      <ul>
        <li>Интерактивная 3D-сцена на Three.js</li>
        <li>Текстурированная модель Земли с нормалями и бликами</li>
        <li>Отдельный слой облаков с независимым вращением</li>
        <li>Звёздный фон</li>
        <li>Вращение камеры вокруг планеты мышью и колесом прокрутки</li>
        <li>Панель управления: авто-вращение и скорость</li>
      </ul>
    `,
    tags: ['Three.js', 'Vite', 'TypeScript'],
    repoUrl: 'https://github.com/MarkovaDA/ThreeJSPlanet/',
    publicUrl: 'https://markovada.github.io/ThreeJSPlanet/',
    slots: [{
      id: 'main',
      label: 'Главный экран приложения',
      summary: 'Интерфейс состоит из 3D-сцены и панели управления',
      image: 'images/planet-model-demo.png',
      techStack: {
        title: 'Three.js, Vite, TypeScript',
        description: 'Технологический стек: Three.js + Vite + TypeScript',
      }
    }],
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
  {
    slug: 'calendar',
    title: 'Calendar',
    description: 'Традиционный виджет `Календарь`',
    publicUrl: 'https://markovada.github.io/VueCalendarApp/',
    repoUrl: 'https://github.com/MarkovaDA/VueCalendarApp/',
    tags: ['Vue.js', 'Vue CLI', 'Vue Test Utils'],
    slots: [
      {
        id: 'main',
        label: 'Главный и единственный экран календаря',
        summary: 'Интерфейс состоит из календаря и кнопок управления им',
        image: 'images/vue-calendar-demo.png',  
        techStack: {
          title: 'Vue 3, Vite 8, JavaScript, CSS, Vitest',
          description: 'Технологический стек: Vue 3 + JavaScript + Vitest',
        },
      }
    ],
    fullDescription: `
      Одностраничное веб-приложение-календарь на Vue 3 и Vite. Показывает текущий месяц, выделяет сегодняшний день и позволяет переключаться между месяцами. Интерфейс в стиле Material Design, с поддержкой тёмной темы.
    `,
  },
  {
    slug: 'next-js-demo',
    title: 'Next.js Learning Project',
    description: 'Учебный проект на Next.js',
    fullDescription: `
      Учебный проект на Next.js
    `,
    tags: ['Next.js', 'React', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/MarkovaDA/NextJSPages',
    publicUrl: 'https://markovada.github.io/NextJSPages/',
    slots: [{
      id: 'main',
      label: 'Главный экран приложения',
      summary: 'Интерфейс состоит из отдельных страниц - учебных разделов',
      image: 'images/nextjs-learning-project-demo.png',
      techStack: {
        title: 'Next.js, React, TypeScript, Vite',
        description: 'Технологический стек: Next.js + React + TypeScript + Vite',
      }
    }],
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

