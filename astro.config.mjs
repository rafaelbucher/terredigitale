// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL de votre site en production
  site: 'https://terredigitale.netlify.app',
  
  // Configuration pour Netlify
  output: 'static', // Site statique (par défaut)
  
  // Configuration Vite pour améliorer le CSS
  vite: {
    css: {
      devSourcemap: true // Sourcemap CSS en dev
    },
    build: {
      assetsInlineLimit: 0, // Évite l'inlining des assets
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
});