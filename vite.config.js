  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: "/portfolio",
    optimizeDeps: {
      include: ['react', 'react-dom']
    },
    mimeTypes: {
      'text/jsx': 'application/javascript'
    }
  })
