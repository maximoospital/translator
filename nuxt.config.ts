// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

const repositoryName = 'translator' // Your GitHub repository subfolder name

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: `/${repositoryName}/`,
  },
  vite: {
    base: `/${repositoryName}/`,
  },

  routeRules: {
    '/': { prerender: true },
  },

  // Ensure compatibility date 
  compatibilityDate: '2024-08-11',
});


