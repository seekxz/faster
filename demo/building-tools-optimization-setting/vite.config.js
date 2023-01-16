import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // config code split
        manualChunks(id) {
          // id is the full path of the file
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  plugins: [
    react(),
    // legacy({
    //   targets: ['ie >= 11'],
    // }),
  ],
})
