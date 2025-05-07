import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://cscloud6-189.lnu.se',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/geo-info/api/v1/data')
      }
    }
  }
})
