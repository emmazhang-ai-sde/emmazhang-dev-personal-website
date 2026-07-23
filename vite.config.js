import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 5173 is taken by another local project; this site runs on 5174
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174,
    strictPort: true,
  },
})
