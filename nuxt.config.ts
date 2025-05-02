// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  router: {
    base: process.env.NODE_ENV === 'Production' ? '/translator/' : '/',
  },

  compatibilityDate: '2024-08-11',
});
