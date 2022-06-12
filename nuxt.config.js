export default async () => {

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

    generate: async () => {
      const { $content } = require('@nuxt/content')
    
      const posts = await $content('content')
        .only(['path'])
        .fetch()
    
      return posts.map(post => post.path === '/index' ? '/' : '/content/' + post.path)
    }
  }
}