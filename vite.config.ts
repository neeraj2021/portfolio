import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
