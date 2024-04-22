import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import css from 'vite-plugin-css'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react(), reactRefresh()],
  server: {
    port: 3001,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
