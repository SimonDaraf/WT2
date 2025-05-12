import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/geo-info/',
  server: {
    proxy: {
      '/geo-info/api/v1/data': {
        target: 'https://cscloud6-189.lnu.se',
        changeOrigin: true
      }
    }
  }
})
