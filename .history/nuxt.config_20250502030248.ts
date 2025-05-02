import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // serve everything under /translator/
  app: {
    baseURL: '/translator/'
  },

  // prefix all webpack‐built assets with /translator/_nuxt/
  build: {
    publicPath: '/translator/_nuxt/'
  },

  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true },
  },

  // Ensure compatibility date 
  compatibilityDate: '2024-08-11',
})