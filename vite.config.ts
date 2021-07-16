import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

function pathResolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve("src"),
    }
  },
  base: "/",
  server: {
    port: 3001,
    open: true
  },
  plugins: [vue()]
})
