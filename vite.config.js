import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://ravi2978.github.io/website/
const base = process.env.CI ? '/website/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
