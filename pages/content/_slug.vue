<template>
  <div>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  name: 'BlogSlug',
  async asyncData({ $content, params, error }) {
    const post = await $content('content', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404 })
      })
    return { post }
  },
}
</script>