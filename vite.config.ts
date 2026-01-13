import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['>0.2%', 'not dead', 'not op_mini all', 'ie 11'], 
      renderLegacyChunks: true,
      polyfills: true
    }),
  ],
})
