import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { toRouterBasename } from './config'
import { ScrollToHash } from './components/ScrollToHash'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  return (
    <BrowserRouter basename={toRouterBasename(import.meta.env.BASE_URL)}>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}
