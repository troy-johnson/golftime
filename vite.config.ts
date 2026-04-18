import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Custom plugin to handle Figma asset imports (figma:asset/...)
function figmaAssetPlugin() {
  return {
    name: 'vite-plugin-figma-assets',
    enforce: 'pre',
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        return { id: source, moduleSide: false }
      }
      return null
    },
    load(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Placeholder image - should be replaced with actual assets
        // Returns empty string which will show as broken image
        // Replace these with real URLs or local files as needed
        return 'export default ""'
      }
      return null
    }
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/chronogolf': {
        target: 'https://www.chronogolf.com',
        changeOrigin: true,
        rewrite: path => path.replace('/api/chronogolf', '/marketplace/v2/teetimes'),
      },
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
