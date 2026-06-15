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
    slug: 'ecommerce-dashboard',
    title: 'E-commerce Dashboard',
    description: 'Админ-панель с аналитикой продаж, управлением товарами и real-time уведомлениями.',
    fullDescription:
      'Полноценная панель управления интернет-магазином: дашборд с KPI, таблицы заказов, фильтры и экспорт данных. Интерфейс оптимизирован для ежедневной работы менеджеров — быстрые действия, понятная навигация и адаптивная вёрстка.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    repoUrl: 'https://github.com/example/ecommerce-dashboard',
    publicUrl: 'https://ecommerce-demo.example.com',
    slots: [
      {
        id: 'overview',
        label: 'Главный дашборд',
        summary: 'Обзор KPI: выручка, количество заказов и динамика продаж за выбранный период.',
        techStack: {
          title: 'React',
          description: 'Компонентная архитектура дашборда: виджеты KPI, фильтры и таблицы собраны из переиспользуемых React-компонентов.',
        },
      },
      {
        id: 'orders',
        label: 'Список заказов',
        summary: 'Таблица заказов с фильтрами по статусу, дате и быстрыми действиями для менеджера.',
        techStack: {
          title: 'TypeScript',
          description: 'Строгая типизация моделей заказов, статусов и фильтров — меньше ошибок при работе с API и формами.',
        },
      },
      {
        id: 'analytics',
        label: 'Аналитика продаж',
        summary: 'Интерактивные графики для анализа трендов и сравнения показателей по периодам.',
        techStack: {
          title: 'Chart.js',
          description: 'Интерактивные графики продаж и динамики: line/bar charts с кастомными тултипами и адаптивной вёрсткой.',
        },
      },
      {
        id: 'mobile',
        label: 'Мобильная версия',
        summary: 'Адаптированный интерфейс панели для планшетов и смартфонов без потери функций.',
        techStack: {
          title: 'CSS Grid & Flexbox',
          description: 'Адаптивная сетка и breakpoints — панель корректно работает на планшетах и смартфонах без отдельного приложения.',
        },
      },
    ],
  },
  {
    slug: 'task-flow',
    title: 'Task Flow',
    description: 'Минималистичный таск-менеджер с drag-and-drop и совместной работой в команде.',
    fullDescription:
      'Kanban-доска для командной работы: перетаскивание карточек, назначение исполнителей, дедлайны и комментарии. Real-time синхронизация через WebSocket, тёмная и светлая темы.',
    tags: ['React', 'Node.js', 'WebSocket'],
    repoUrl: 'https://github.com/example/task-flow',
    publicUrl: 'https://taskflow.example.com',
    slots: [
      {
        id: 'board',
        label: 'Kanban-доска',
        summary: 'Колонки задач с drag-and-drop и мгновенным обновлением статусов.',
        techStack: {
          title: 'React DnD',
          description: 'Drag-and-drop карточек между колонками с оптимистичным обновлением UI и сохранением порядка на сервере.',
        },
      },
      {
        id: 'card',
        label: 'Карточка задачи',
        summary: 'Детальная карточка с описанием, дедлайном и назначенным исполнителем.',
        techStack: {
          title: 'Node.js',
          description: 'REST API для CRUD операций с задачами: создание, редактирование, назначение исполнителей и дедлайнов.',
        },
      },
      {
        id: 'team',
        label: 'Командная работа',
        summary: 'Совместная работа в реальном времени — изменения видны всей команде.',
        techStack: {
          title: 'WebSocket',
          description: 'Real-time синхронизация доски между участниками команды — изменения видны мгновенно без перезагрузки.',
        },
      },
    ],
  },
  {
    slug: 'weather-lens',
    title: 'Weather Lens',
    description: 'Приложение погоды с красивой визуализацией и прогнозом на 14 дней.',
    fullDescription:
      'PWA-приложение погоды с динамическими фонами под текущие условия, почасовым прогнозом и виджетами для домашнего экрана. Данные из OpenWeather API с кэшированием и offline-режимом.',
    tags: ['Vue', 'API', 'PWA'],
    repoUrl: 'https://github.com/example/weather-lens',
    publicUrl: 'https://weather-lens.example.com',
    slots: [
      {
        id: 'home',
        label: 'Главный экран',
        summary: 'Текущая погода, динамический фон и ключевые параметры на одном экране.',
        techStack: {
          title: 'Vue 3',
          description: 'Composition API и реактивные computed-свойства для отображения текущей погоды и динамического фона.',
        },
      },
      {
        id: 'forecast',
        label: 'Прогноз на 14 дней',
        summary: 'Прогноз на две недели с визуализацией температуры и осадков.',
        techStack: {
          title: 'OpenWeather API',
          description: 'Запросы к внешнему API с кэшированием ответов и обработкой ошибок сети.',
        },
      },
      {
        id: 'hourly',
        label: 'Почасовой прогноз',
        summary: 'Почасовой прогноз с удобной прокруткой по времени суток.',
        techStack: {
          title: 'PWA',
          description: 'Service Worker и manifest — приложение устанавливается на домашний экран и работает offline.',
        },
      },
    ],
  },
  {
    slug: 'finance-tracker',
    title: 'Finance Tracker',
    description: 'Личный финансовый трекер с категориями, бюджетами и визуализацией расходов.',
    fullDescription:
      'Приложение для учёта доходов и расходов: категории, повторяющиеся транзакции, месячные бюджеты и диаграммы. Данные хранятся локально с возможностью экспорта в CSV.',
    tags: ['React', 'D3.js', 'IndexedDB'],
    repoUrl: 'https://github.com/example/finance-tracker',
    publicUrl: 'https://finance.example.com',
    slots: [
      {
        id: 'dashboard',
        label: 'Обзор финансов',
        summary: 'Сводка доходов, расходов и баланса за текущий месяц.',
        techStack: {
          title: 'React',
          description: 'Dashboard с агрегированными суммами доходов и расходов, обновляемый при каждой новой транзакции.',
        },
      },
      {
        id: 'charts',
        label: 'Диаграммы расходов',
        summary: 'Наглядные диаграммы распределения трат по категориям.',
        techStack: {
          title: 'D3.js',
          description: 'Кастомные pie и bar charts для визуализации расходов по категориям с анимацией переходов.',
        },
      },
      {
        id: 'budget',
        label: 'Бюджеты по категориям',
        summary: 'Лимиты по категориям и контроль перерасхода в реальном времени.',
        techStack: {
          title: 'IndexedDB',
          description: 'Локальное хранение транзакций и бюджетов в браузере — данные доступны без сервера.',
        },
      },
      {
        id: 'transactions',
        label: 'Список транзакций',
        summary: 'История операций с поиском, фильтрами и быстрым добавлением.',
        techStack: {
          title: 'CSV Export',
          description: 'Экспорт истории операций в CSV через Blob API для импорта в Excel или Google Sheets.',
        },
      },
    ],
  },
  {
    slug: 'blog-platform',
    title: 'Blog Platform',
    description: 'Платформа для ведения блога с Markdown-редактором и SEO-оптимизацией.',
    fullDescription:
      'Headless CMS + фронтенд для авторов: WYSIWYG/Markdown редактор, теги, черновики, превью и автогенерация OG-мета. Статическая генерация страниц для максимальной скорости загрузки.',
    tags: ['Next.js', 'MDX', 'Tailwind'],
    repoUrl: 'https://github.com/example/blog-platform',
    publicUrl: 'https://blog.example.com',
    slots: [
      {
        id: 'homepage',
        label: 'Главная блога',
        summary: 'Лента статей с тегами, поиском и акцентом на читаемость.',
        techStack: {
          title: 'Next.js',
          description: 'Static Site Generation для главной и списка статей — максимальная скорость загрузки и SEO.',
        },
      },
      {
        id: 'article',
        label: 'Страница статьи',
        summary: 'Страница публикации с типографикой, оглавлением и метаданными.',
        techStack: {
          title: 'MDX',
          description: 'Статьи пишутся в Markdown с возможностью встраивать React-компоненты прямо в контент.',
        },
      },
      {
        id: 'editor',
        label: 'Редактор Markdown',
        summary: 'Редактор с live-preview и удобной работой с Markdown.',
        techStack: {
          title: 'Tailwind CSS',
          description: 'Utility-first стилизация редактора, превью и типографики статей с единой дизайн-системой.',
        },
      },
    ],
  },
  {
    slug: 'design-system',
    title: 'Design System',
    description: 'UI-kit с документацией, Storybook и переиспользуемыми компонентами.',
    fullDescription:
      'Дизайн-система для продуктовой команды: токены, типографика, 40+ компонентов, accessibility-гайды и Storybook с интерактивными примерами. Поддержка light/dark тем.',
    tags: ['React', 'Storybook', 'Figma'],
    repoUrl: 'https://github.com/example/design-system',
    publicUrl: 'https://design.example.com',
    slots: [
      {
        id: 'tokens',
        label: 'Дизайн-токены',
        summary: 'Палитра, отступы и радиусы — единая система визуальных констант.',
        techStack: {
          title: 'Design Tokens',
          description: 'CSS-переменные для цветов, отступов и радиусов — единый источник правды для всех компонентов.',
        },
      },
      {
        id: 'components',
        label: 'Каталог компонентов',
        summary: 'Каталог UI-компонентов с вариантами и состояниями.',
        techStack: {
          title: 'Storybook',
          description: 'Интерактивная документация компонентов с controls, variants и accessibility-проверками.',
        },
      },
      {
        id: 'forms',
        label: 'Формы и инпуты',
        summary: 'Набор доступных полей ввода и паттернов для форм.',
        techStack: {
          title: 'React Aria',
          description: 'Accessible form controls с поддержкой клавиатуры, screen readers и ARIA-атрибутов.',
        },
      },
      {
        id: 'docs',
        label: 'Документация',
        summary: 'Гайдлайны для дизайнеров и разработчиков в одном месте.',
        techStack: {
          title: 'Figma',
          description: 'Синхронизация макетов Figma с кодом — дизайнеры и разработчики работают из одного источника.',
        },
      },
      {
        id: 'themes',
        label: 'Светлая и тёмная тема',
        summary: 'Переключение светлой и тёмной темы без перезагрузки.',
        techStack: {
          title: 'CSS Custom Properties',
          description: 'Переключение light/dark через data-theme и CSS-переменные без дублирования стилей.',
        },
      },
    ],
  },
  {
    slug: 'chat-app',
    title: 'Chat App',
    description: 'Мессенджер с комнатами, файлами и индикаторами набора текста.',
    fullDescription:
      'Real-time чат для небольших команд: личные и групповые комнаты, загрузка файлов, emoji-реакции и статус «печатает…». Аутентификация через JWT, end-to-end шифрование сообщений в roadmap.',
    tags: ['React', 'Socket.io', 'PostgreSQL'],
    repoUrl: 'https://github.com/example/chat-app',
    publicUrl: 'https://chat.example.com',
    slots: [
      {
        id: 'rooms',
        label: 'Список комнат',
        summary: 'Список чатов с превью последнего сообщения и счётчиком непрочитанного.',
        techStack: {
          title: 'Socket.io',
          description: 'WebSocket-соединение для мгновенной доставки сообщений и обновления списка комнат.',
        },
      },
      {
        id: 'conversation',
        label: 'Диалог',
        summary: 'Лента сообщений, реакции и индикатор набора текста.',
        techStack: {
          title: 'React',
          description: 'Виртуализированный список сообщений с автопрокруткой и индикатором «печатает…».',
        },
      },
      {
        id: 'files',
        label: 'Обмен файлами',
        summary: 'Отправка и просмотр вложений прямо в диалоге.',
        techStack: {
          title: 'PostgreSQL',
          description: 'Хранение метаданных файлов и истории сообщений в реляционной БД с полнотекстовым поиском.',
        },
      },
    ],
  },
  {
    slug: 'photo-gallery',
    title: 'Photo Gallery',
    description: 'Галерея фотографий с lazy-load, lightbox и фильтрами по альбомам.',
    fullDescription:
      'Фото-портfolio с masonry-сеткой, полноэкранным просмотром, EXIF-метаданными и фильтрацией по тегам. Оптимизация изображений через srcset и blur-placeholder при загрузке.',
    tags: ['React', 'CSS Grid', 'Cloudinary'],
    repoUrl: 'https://github.com/example/photo-gallery',
    publicUrl: 'https://gallery.example.com',
    slots: [
      {
        id: 'grid',
        label: 'Masonry-сетка',
        summary: 'Адаптивная сетка фотографий с плавной подгрузкой изображений.',
        techStack: {
          title: 'CSS Grid',
          description: 'Masonry-подобная сетка фотографий с auto-fill и разными aspect-ratio без JavaScript-библиотек.',
        },
      },
      {
        id: 'lightbox',
        label: 'Lightbox',
        summary: 'Полноэкранный просмотр с навигацией между снимками.',
        techStack: {
          title: 'React Portal',
          description: 'Полноэкранный просмотр через portal — overlay поверх страницы с focus trap и ESC-закрытием.',
        },
      },
      {
        id: 'albums',
        label: 'Альбомы и фильтры',
        summary: 'Фильтрация по альбомам и тегам для быстрого поиска.',
        techStack: {
          title: 'Cloudinary',
          description: 'CDN для изображений с on-the-fly ресайзом, WebP-конвертацией и blur-placeholder.',
        },
      },
    ],
  },
  {
    slug: 'fitness-app',
    title: 'Fitness App',
    description: 'Трекер тренировок с планами, прогрессом и календарём активности.',
    fullDescription:
      'Мобильное веб-приложение для фитнеса: библиотека упражнений, конструктор тренировок, таймер отдыха и статистика прогресса. Интеграция с Health API для синхронизации шагов.',
    tags: ['React Native Web', 'Recharts', 'PWA'],
    repoUrl: 'https://github.com/example/fitness-app',
    publicUrl: 'https://fitness.example.com',
    slots: [
      {
        id: 'workout',
        label: 'Активная тренировка',
        summary: 'Экран активной тренировки с таймером и учётом подходов.',
        techStack: {
          title: 'React Native Web',
          description: 'Кроссплатформенный UI для таймера, счётчика подходов и списка упражнений.',
        },
      },
      {
        id: 'calendar',
        label: 'Календарь активности',
        summary: 'Календарь тренировок и визуализация регулярности занятий.',
        techStack: {
          title: 'Recharts',
          description: 'Heatmap и bar charts активности по дням — визуализация регулярности тренировок.',
        },
      },
      {
        id: 'stats',
        label: 'Статистика прогресса',
        summary: 'Графики прогресса по весам, повторениям и активности.',
        techStack: {
          title: 'Health API',
          description: 'Синхронизация шагов и активности с HealthKit / Google Fit через Web API.',
        },
      },
      {
        id: 'library',
        label: 'Библиотека упражнений',
        summary: 'Справочник упражнений с описанием и видео-демонстрацией.',
        techStack: {
          title: 'PWA',
          description: 'Offline-доступ к библиотеке упражнений через Service Worker и кэширование assets.',
        },
      },
    ],
  },
  {
    slug: 'map-explorer',
    title: 'Map Explorer',
    description: 'Интерактивная карта с маркерами, маршрутами и поиском мест.',
    fullDescription:
      'Веб-карта на базе Mapbox: кластеризация маркеров, построение маршрутов, геолокация и сохранение избранных мест. Поддержка offline-тайлов для мобильных устройств.',
    tags: ['Mapbox GL', 'TypeScript', 'GeoJSON'],
    repoUrl: 'https://github.com/example/map-explorer',
    publicUrl: 'https://map.example.com',
    slots: [
      {
        id: 'map',
        label: 'Интерактивная карта',
        summary: 'Карта с маркерами, масштабированием и кастомными слоями.',
        techStack: {
          title: 'Mapbox GL JS',
          description: 'WebGL-рендеринг карты с кастомными стилями, слоями и плавным zoom/pan.',
        },
      },
      {
        id: 'routes',
        label: 'Построение маршрутов',
        summary: 'Построение и отображение маршрута между выбранными точками.',
        techStack: {
          title: 'Mapbox Directions API',
          description: 'Расчёт маршрутов между точками с отображением distance/duration на карте.',
        },
      },
      {
        id: 'search',
        label: 'Поиск мест',
        summary: 'Поиск адресов и мест с подсказками при вводе.',
        techStack: {
          title: 'Geocoding API',
          description: 'Autocomplete поиск адресов и POI с debounce и кэшированием результатов.',
        },
      },
      {
        id: 'favorites',
        label: 'Избранные локации',
        summary: 'Сохранённые локации с быстрым доступом из списка.',
        techStack: {
          title: 'GeoJSON',
          description: 'Хранение избранных точек в формате GeoJSON FeatureCollection для экспорта и импорта.',
        },
      },
    ],
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
  { name: 'Next.js', level: 70 },
  { name: 'Webpack', level: 90 },
  { name: 'Git', level: 90 },
  { name: 'Реактивное программирование', level: 92 },
  { name: 'Адаптивная вёрстка', level: 100 },
  { name: 'GraphQL', level: 75 },
  { name: 'Webdesign', level: 70 },
]

