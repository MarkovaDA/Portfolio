import type { Messages } from '../types'

export const en: Messages = {
  meta: {
    description: 'Portfolio — developer, designer, creator of digital products',
  },
  a11y: {
    language: 'Language selection',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    scrollDown: 'Scroll down',
    breadcrumbs: 'Breadcrumbs',
    projectPager: 'Project navigation',
    projectScreens: 'Project screens',
    backToTop: 'Back to top',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    cta: 'Get in touch',
  },
  hero: {
    badge: 'Open to new projects',
    name: 'Darya Markova',
    role: 'Frontend Developer',
    tagline: 'Programming as life',
    viewProjects: 'View projects',
    writeMe: 'Contact me',
    yearsExperience: 'Years of experience',
    projectsCount: 'Projects',
    happyClients: 'Happy clients',
  },
  about: {
    label: 'About',
    title: 'Who I am and what I do',
    paragraphs: [
      'Glad you are here. I am Darya, a frontend developer. To me, an interface is not just markup from a design file — it is a conversation with the user: clear, calm, and free of unnecessary noise.',
      'I turn design into working web applications — with attention to detail, smooth motion, and reliable performance on any device. I care that a product is not only beautiful, but genuinely easy to use.',
      'My stack includes React, TypeScript, JavaScript, and modern CSS; I also work with Angular, Vue, and RxJS. I am open to new approaches and tools when they help deliver cleaner, faster, and more enjoyable results.',
    ],
    highlights: [
      'UX focus — every pixel matters',
      'Clean code — readability and maintainability',
      'Performance — fast loading and smooth animations',
    ],
  },
  projects: {
    label: 'Portfolio',
    title: 'Work',
    desc: (count) =>
      `${count} projects — pick a work to open the detail page with screens and solutions.`,
  },
  skills: {
    label: 'Skills',
    title: 'Technologies and tools',
  },
  contact: {
    label: 'Contact',
    title: "Let's work together",
    desc: 'Have a project idea or just want to say hello? Drop me a line — I will reply soon.',
  },
  footer: {
    madeWith: 'Made with ♥',
    backToTop: 'Back to top',
  },
  projectPage: {
    home: 'Home',
    works: 'Work',
    back: 'Previous',
    next: 'Next',
    repo: 'Repository',
    demo: 'View demo',
    screensTitle: 'Screens & solutions',
    screenshot: 'Screenshot',
  },
}
