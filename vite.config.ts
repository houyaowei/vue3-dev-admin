import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname,"src")
    }
  },
  base: "/",
  server: {
    port: 3001,
    open: true
  },
  plugins: [vue()]
})
