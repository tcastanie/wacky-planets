// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  compatibilityDate: '2024-07-03',
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: ['@unocss/reset/tailwind.css'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  image: {
    quality: 80,
    format: ['avif', 'webp'],
  },
})
