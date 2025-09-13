// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL de votre site en production
  site: 'https://terredigitale.netlify.app', // Remplacez par votre URL Netlify
  
  // Configuration pour Netlify
  output: 'static', // Site statique (par défaut)
  
  // Configuration Vite pour améliorer le CSS
  vite: {
    css: {
      devSourcemap: true // Sourcemap CSS en dev
    },
    build: {
      cssCodeSplit: false, // Garder le CSS ensemble
      assetsInlineLimit: 0
    }
  }
});