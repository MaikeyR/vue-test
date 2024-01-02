<template>
  <div v-if="page && page.pageTitle && page.pageContent" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.pageContent }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params)

    this.page = this.$pages.getStorePage(this.$route.params.index);

    this.$watch(() => this.$route.params, (newParams, oldParams) => {
      this.page = this.$pages.getStorePage(newParams.index);
    })

  },

  data() {
    return {
      page: null
    }
  }
}
</script>

<style scoped>
.emphasize {
  color: 33, 37, 41;
}
</style>