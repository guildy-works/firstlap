// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    nitro: {
        prerender: {
            failOnError: false,
        },
    },
    app: {
        head: {
            htmlAttrs: { lang: 'ja', prefix: 'og: <https://ogp.me/ns#>' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'robots', name: 'robots', content: 'noindex' }
            ]
        },
        baseURL: '/firstlap/'
    },
    modules: [
        '@nuxt/image',
        '@vueuse/nuxt',
    ],
})