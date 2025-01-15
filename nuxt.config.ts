// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  ui: {
    fonts: false,
  },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-27',
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
