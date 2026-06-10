import type { ProjectTranslation } from '../types'

export const projectsEn: Record<string, ProjectTranslation> = {
  'ecommerce-dashboard': {
    title: 'E-commerce Dashboard',
    description: 'Admin panel with sales analytics, product management, and real-time notifications.',
    fullDescription:
      'A full-featured e-commerce management panel: KPI dashboard, order tables, filters, and data export. The interface is optimized for daily manager workflows — quick actions, clear navigation, and responsive layout.',
    slots: {
      overview: {
        label: 'Main dashboard',
        summary: 'KPI overview: revenue, order count, and sales trends for the selected period.',
      },
      orders: {
        label: 'Order list',
        summary: 'Order table with status and date filters and quick manager actions.',
      },
      analytics: {
        label: 'Sales analytics',
        summary: 'Interactive charts for trend analysis and period-over-period comparison.',
      },
      mobile: {
        label: 'Mobile version',
        summary: 'Adapted panel interface for tablets and smartphones without losing features.',
      },
    },
  },
  'task-flow': {
    title: 'Task Flow',
    description: 'Minimalist task manager with drag-and-drop and team collaboration.',
    fullDescription:
      'Kanban board for teamwork: drag-and-drop cards, assignees, deadlines, and comments. Real-time sync via WebSocket, dark and light themes.',
    slots: {
      board: {
        label: 'Kanban board',
        summary: 'Task columns with drag-and-drop and instant status updates.',
      },
      card: {
        label: 'Task card',
        summary: 'Detailed card with description, deadline, and assigned member.',
      },
      team: {
        label: 'Team collaboration',
        summary: 'Real-time collaboration — changes are visible to the whole team.',
      },
    },
  },
  'weather-lens': {
    title: 'Weather Lens',
    description: 'Weather app with beautiful visualization and a 14-day forecast.',
    fullDescription:
      'Weather PWA with dynamic backgrounds for current conditions, hourly forecast, and home screen widgets. OpenWeather API data with caching and offline mode.',
    slots: {
      home: {
        label: 'Home screen',
        summary: 'Current weather, dynamic background, and key parameters on one screen.',
      },
      forecast: {
        label: '14-day forecast',
        summary: 'Two-week forecast with temperature and precipitation visualization.',
      },
      hourly: {
        label: 'Hourly forecast',
        summary: 'Hourly forecast with convenient time-of-day scrolling.',
      },
    },
  },
  'finance-tracker': {
    title: 'Finance Tracker',
    description: 'Personal finance tracker with categories, budgets, and expense visualization.',
    fullDescription:
      'Income and expense tracking app: categories, recurring transactions, monthly budgets, and charts. Data stored locally with CSV export.',
    slots: {
      dashboard: {
        label: 'Finance overview',
        summary: 'Summary of income, expenses, and balance for the current month.',
      },
      charts: {
        label: 'Expense charts',
        summary: 'Clear charts showing spending distribution by category.',
      },
      budget: {
        label: 'Category budgets',
        summary: 'Category limits and real-time overspend control.',
      },
      transactions: {
        label: 'Transaction list',
        summary: 'Operation history with search, filters, and quick add.',
      },
    },
  },
  'blog-platform': {
    title: 'Blog Platform',
    description: 'Blog platform with Markdown editor and SEO optimization.',
    fullDescription:
      'Headless CMS + author frontend: WYSIWYG/Markdown editor, tags, drafts, preview, and auto-generated OG meta. Static page generation for maximum load speed.',
    slots: {
      homepage: {
        label: 'Blog home',
        summary: 'Article feed with tags, search, and readability focus.',
      },
      article: {
        label: 'Article page',
        summary: 'Publication page with typography, table of contents, and metadata.',
      },
      editor: {
        label: 'Markdown editor',
        summary: 'Editor with live preview and convenient Markdown workflow.',
      },
    },
  },
  'design-system': {
    title: 'Design System',
    description: 'UI kit with documentation, Storybook, and reusable components.',
    fullDescription:
      'Design system for a product team: tokens, typography, 40+ components, accessibility guides, and Storybook with interactive examples. Light/dark theme support.',
    slots: {
      tokens: {
        label: 'Design tokens',
        summary: 'Palette, spacing, and radii — a unified system of visual constants.',
      },
      components: {
        label: 'Component catalog',
        summary: 'UI component catalog with variants and states.',
      },
      forms: {
        label: 'Forms & inputs',
        summary: 'Accessible input fields and form patterns.',
      },
      docs: {
        label: 'Documentation',
        summary: 'Guidelines for designers and developers in one place.',
      },
      themes: {
        label: 'Light & dark theme',
        summary: 'Light and dark theme switching without page reload.',
      },
    },
  },
  'chat-app': {
    title: 'Chat App',
    description: 'Messenger with rooms, file sharing, and typing indicators.',
    fullDescription:
      'Real-time chat for small teams: direct and group rooms, file uploads, emoji reactions, and typing status. JWT authentication, end-to-end encryption on the roadmap.',
    slots: {
      rooms: {
        label: 'Room list',
        summary: 'Chat list with last message preview and unread counter.',
      },
      conversation: {
        label: 'Conversation',
        summary: 'Message thread, reactions, and typing indicator.',
      },
      files: {
        label: 'File sharing',
        summary: 'Send and view attachments directly in the chat.',
      },
    },
  },
  'photo-gallery': {
    title: 'Photo Gallery',
    description: 'Photo gallery with lazy-load, lightbox, and album filters.',
    fullDescription:
      'Photo portfolio with masonry grid, fullscreen viewer, EXIF metadata, and tag filtering. Image optimization via srcset and blur placeholders on load.',
    slots: {
      grid: {
        label: 'Masonry grid',
        summary: 'Responsive photo grid with smooth lazy loading.',
      },
      lightbox: {
        label: 'Lightbox',
        summary: 'Fullscreen viewing with navigation between shots.',
      },
      albums: {
        label: 'Albums & filters',
        summary: 'Filter by albums and tags for quick search.',
      },
    },
  },
  'fitness-app': {
    title: 'Fitness App',
    description: 'Workout tracker with plans, progress, and activity calendar.',
    fullDescription:
      'Mobile web fitness app: exercise library, workout builder, rest timer, and progress stats. Health API integration for step sync.',
    slots: {
      workout: {
        label: 'Active workout',
        summary: 'Active workout screen with timer and set tracking.',
      },
      calendar: {
        label: 'Activity calendar',
        summary: 'Workout calendar and consistency visualization.',
      },
      stats: {
        label: 'Progress stats',
        summary: 'Progress charts for weights, reps, and activity.',
      },
      library: {
        label: 'Exercise library',
        summary: 'Exercise reference with descriptions and video demos.',
      },
    },
  },
  'map-explorer': {
    title: 'Map Explorer',
    description: 'Interactive map with markers, routes, and place search.',
    fullDescription:
      'Mapbox-based web map: marker clustering, route building, geolocation, and saved favorites. Offline tile support for mobile devices.',
    slots: {
      map: {
        label: 'Interactive map',
        summary: 'Map with markers, zoom, and custom layers.',
      },
      routes: {
        label: 'Route building',
        summary: 'Build and display routes between selected points.',
      },
      search: {
        label: 'Place search',
        summary: 'Address and place search with input suggestions.',
      },
      favorites: {
        label: 'Saved locations',
        summary: 'Saved locations with quick access from the list.',
      },
    },
  },
}
