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
          href: '@/static/manifest.json' // Make sure this matches the path of your manifest file
        }
      ]
    }
  },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Pronunciation App',
      short_name: 'Pronounce',
      description: 'A fun app for children to learn pronunciation!',
      lang: 'en',
      theme_color: '#ffffff',
      background_color: '#f3f4f6',
      display: 'standalone',
      icons: [
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ],
      screenshots: [
        {
          src: '/screenshot-desktop.png',
          sizes: '1920x1080', // Replace with your desktop screenshot dimensions
          type: 'image/png',
          form_factor: 'wide'
        },
        {
          src: '/screenshot-mobile.png',
          sizes: '1080x1920', // Replace with your mobile screenshot dimensions
          type: 'image/png',
          form_factor: 'narrow'
        }
      ]
    }
  }
})
