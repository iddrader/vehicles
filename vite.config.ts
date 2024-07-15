import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
