<template>
  <div>
    <button @click="getFoo">Get Foo</button>
    {{ foo }}
  </div>
</template>

<script>
export default {
  data: () => ({
    foo: null
  }),
  methods: {
    async getFoo() {
      const { data: { foo }} = await this.$axios.get('http://localhost:3000/rest/index')
      this.foo = foo
    }
  }
}
</script>