export default async () => {

    const getRoutes = async () => {
      const { $content } = require('@nuxt/content')
      const dynamicRoutes = await $content('content').only(['slug']).fetch()
      return dynamicRoutes.map(myroute => myroute.slug === '/index' ? '/' : '/content/' + myroute.slug)
    }

  return {

    target: "static",
    ssr: "true",
  
    modules: [
  
      ['@nuxtjs/axios', {
        debug: (process.env.URL) ? false : true,
        baseURL:  (process.env.URL) ? `https://${process.env.URL}` : 'http://localhost:3000',
        proxyHeaders: true
      }],
  
      '@nuxt/content',
    ],
  
  
    serverrestMiddleware: process.env.URL ? [] : [
      '~/rest/index.js',
    ],
  
    build: {
      quiet: false
    },

    generate: await getRoutes()
  }
}