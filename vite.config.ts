import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/e5190a93-6f39-463c-b529-7d1069a9304a/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5248,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5248,
    },
  },
})
