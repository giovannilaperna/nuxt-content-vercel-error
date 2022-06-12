export default {

  target: "static",
  ssr: "true",

  modules: [

    ['@nuxtjs/axios', {
      debug: (process.env.URL) ? false : true,
      baseURL:  (process.env.URL) ? `${process.env.URL}` : 'http://localhost:3000',
      proxyHeaders: true
    }],

    '@nuxt/content',
  ],


  serverrestMiddleware: process.env.URL ? [] : [
    '~/rest/index.js',
  ],

  build: {
    quiet: false
  }
}