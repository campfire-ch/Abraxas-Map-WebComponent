import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        // Use fixed filenames without hashes
        entryFileNames: 'frontend/abraxas-map-webcomponent.js',
        chunkFileNames: 'frontend/abraxas-map-webcomponent.js',
        assetFileNames: 'frontend/abraxas-map-webcomponent.[ext]',
      },
    },
  },
  base: "/",
})
