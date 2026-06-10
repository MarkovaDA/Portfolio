import type { Messages } from '../types'

export const en: Messages = {
  meta: {
    description: 'Portfolio — developer, designer, creator of digital products',
  },
  a11y: {
    language: 'Language selection',
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
    name: 'Daria Markova',
    role: 'Frontend Developer',
    tagline: 'Programming as life',
    viewProjects: 'View projects',
    writeMe: 'Contact me',
    yearsExperience: 'years of experience',
    projectsCount: 'projects',
    happyClients: 'happy clients',
  },
  about: {
    label: 'About',
    title: 'Who I am and what I do',
    paragraphs: [
      'I am a frontend developer focused on building intuitive interfaces and great user experiences. I strive for clean code, follow best practices, and continuously learn new technologies to create products people enjoy using.',
      'My goal is to turn design mockups into interactive web applications that not only look flawless but also perform fast, reliably, and consistently across all devices.',
      'I work with leading frontend frameworks — React, Angular, Vue, RxJS — and languages JavaScript, TypeScript, and modern CSS. I also use the latest AI tools and vibe coding when needed.',
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
