// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "nuxt-vue3-google-signin", "@nuxt/content", "@nuxt/ui"],
  // plugins: [
  //   '~/plugins/googleSheets.ts',
  // ],

  googleSignIn: {
    clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID
  },

  // runtimeConfig: {
  //   googleSignIn: {
  //     clientId: '16671652789-fpuei108kjp32unp0vdgtvmekdkpskn1.apps.googleusercontent.com',
  //   },
  // },

  i18n: {
    strategy: 'prefix_and_default', // https://v8.i18n.nuxtjs.org/guide/routing-strategies#prefix_and_default


    detectBrowserLanguage: { // https://v8.i18n.nuxtjs.org/guide/browser-language-detection
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },

    defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
    langDir: 'locales', // https://v8.i18n.nuxtjs.org/guide/directory-structure#langdir
    locales: [ // https://v8.i18n.nuxtjs.org/guide/seo
      {
        code: 'en',
        iso: 'en-US', // Will be used as "catchall" locale by default
        file: 'en.json'
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.ts'
      }
    ],
    baseUrl: process.env.NUXT_BASE_URL, // https://v8.i18n.nuxtjs.org/guide/seo#requirements

    experimental: {
      localeDetector: './localeDetector.ts',
      autoImportTranslationFunctions: true,
      switchLocalePathLinkSSR: true
    },

    compilation: {
      strictMessage: false,
      escapeHtml: true
    },


    // different domains
    // https://v8.i18n.nuxtjs.org/guide/different-domains


  },

  experimental: {
    // jsTsFormatResource: true
  },

  vite: {
    // Prevent reload by optimizing dependency before discovery
    optimizeDeps: {
      include: ['@unhead/vue']
    }
  },


})
