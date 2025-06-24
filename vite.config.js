import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/Portfolio/', // très important pour GitHub Pages
  plugins: [react()]
})
