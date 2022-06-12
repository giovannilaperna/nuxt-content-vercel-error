export default {

  target: "static",
  ssr: "true",

  modules: [

    ['@nuxt/content'],

    ['@nuxtjs/axios', {
      debug: (process.env.URL) ? false : true,
      baseURL:  (process.env.URL) ? `https://${process.env.URL}` : 'http://localhost:3000',
      proxyHeaders: true
    }],
  ],


  serverrestMiddleware: process.env.URL ? [] : [
    '~/rest/test.js',
  ],

  generate: {
    async routes () {
      return models
    }
  },

  build: {
    quiet: false
  }
}