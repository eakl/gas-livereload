import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { inlineSource } from '@eakl/vite-plugin-inline-source'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  logLevel: 'info',
  build: {
    outDir: resolve(__dirname, '../../build'),
    emptyOutDir: false,
    cssCodeSplit: false,
    minify: 'esbuild',
    sourcemap: false
  },
  server: {
    strictPort: true,
    https: {
      key: resolve(__dirname, '../../certs/key.pem'),
      cert: resolve(__dirname, '../../certs/cert.pem')
    }
  },
  plugins: [
    svelte({
      configFile: resolve(__dirname, './svelte.config.js')
    }),
    inlineSource()
  ]
})
