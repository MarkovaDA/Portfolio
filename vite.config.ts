import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { toViteBase } from './src/config'

export default defineConfig({
  plugins: [react()],
  base: toViteBase(),
})
