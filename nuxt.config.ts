// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'My Nuxt 3 PWA',
      short_name: 'Nuxt PWA',
      description: 'A Nuxt 3 Progressive Web Application',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
})
