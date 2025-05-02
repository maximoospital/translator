// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  router: {
    base: '/translator/'
  },

  routeRules: {
    '/': { prerender: true },
  },

  // Ensure compatibility date 
  compatibilityDate: '2024-08-11',
});


