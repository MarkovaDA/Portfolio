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
      'I am Darya, a frontend engineer with extensive experience in the IT industry. I take an unconventional approach to my work: combining different domains, trying new tools, and finding solutions where familiar patterns are no longer enough.',
      'I combine classical algorithmic programming with data visualization tools. I am especially interested in geolocation and map-based projects; I have built my own UI kit and am skilled in layout and markup.',
      'When it helps, I use AI tools and vibe coding to speed up development and test ideas faster — without compromising quality.',
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
