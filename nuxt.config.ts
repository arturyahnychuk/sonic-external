// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    "nuxt-gtag",
    '@nuxtjs/supabase'
  ],
  // gtag: {
  //   id: 'G-9KD5QQN9RT'
  // },
  nitro: {
    preset: 'cloudflare-pages',
  },
  supabase: {

    redirectOptions: {
      login: '/auth/login',
      callback: '/auth/profile',
      exclude: ['/*', '/pricing', '/about', "/blog/*", "/auth/login"]
    }
  },
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    public: {
      BACKEND_URL_BASE: process.env.BACKEND_URL_BASE || 'http://127.0.0.1:8000'
    }
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
