import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { toRouterBasename } from './config'
import { ScrollToHash } from './components/ScrollToHash'
import { LocaleProvider } from './i18n/LocaleProvider'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { ThemeProvider } from './theme/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <BrowserRouter basename={toRouterBasename(import.meta.env.BASE_URL)}>
          <ScrollToHash />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  )
}
