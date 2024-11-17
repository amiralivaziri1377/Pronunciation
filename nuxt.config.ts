// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false // Prevent incorrect character handling
        }
      }
    }
  },
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'manifest',
          href: '/manifest.json'
        }
      ]
    }
  },
  modules: ['@vite-pwa/nuxt'],
})
