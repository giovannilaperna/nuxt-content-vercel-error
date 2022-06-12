<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  async asyncData({ $content, app, error }) {
    const posts = await $content('content')
      .only(['title', 'path'])
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404 })
      })
    return { posts }
  },
}
</script>