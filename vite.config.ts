import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        // Use fixed filenames without hashes
        entryFileNames: 'assets/abraxas-map-webcomponent.js',
        chunkFileNames: 'assets/abraxas-map-webcomponent.js',
        assetFileNames: 'assets/abraxas-map-webcomponent.[ext]',
      },
    },
  },
  base: "/",
})
