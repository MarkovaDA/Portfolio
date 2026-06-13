import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { toViteBase } from './src/config'

const siteBase = process.env.SITE_BASE ?? '/Portfolio'

export default defineConfig({
  plugins: [react()],
  base: toViteBase(siteBase),
})
