<template>
  <div>
    {{ foo }}
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data: { foo }} = await app.$axios.get('/rest/test')
    return { foo }
  }
}
</script>