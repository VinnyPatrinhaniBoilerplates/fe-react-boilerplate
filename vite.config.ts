import { resolve } from 'path';
import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
  // optimizeDeps: {
  //   include: ['sort-by', ' match-sorter', 'localforage'], // Pre-bundle specific heavy dependencies
  //   // exclude: ['some-large-unneeded-lib'], // Exclude unnecessary packages
  // },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
      plugins: [
        visualizer({ filename: 'dist-stats/visualizer.html' }) as PluginOption,
      ],
    },
  },
})
