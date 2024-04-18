// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'ja', prefix: 'og: <https://ogp.me/ns#>' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  },
  modules: [
    '@nuxt/image', // @nuxt/image モジュールをインストール
  ],
})