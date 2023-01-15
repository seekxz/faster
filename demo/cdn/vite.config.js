import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {Plugin as vitePluginCdnImport} from 'vite-plugin-cdn-import'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({open: true}),
    vitePluginCdnImport({
      modules: [
        {
          name: 'react',
          var: 'React',
          path: 'https://unpkg.com/react@18/umd/react.development.js',
        }
      ],
    })
  ],
})
