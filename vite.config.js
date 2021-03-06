import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      comps: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      plugins: path.resolve(__dirname, 'src/plugins'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      views: path.resolve(__dirname, 'src/views'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      supportTs: false,
    }),
  ],
})
