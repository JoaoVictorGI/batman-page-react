import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [reactRouter()],
})
