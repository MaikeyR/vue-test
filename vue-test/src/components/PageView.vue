<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.pageContent }}</p>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default(rawProps) {
        return {
          pageTitle: 'No Page Title',
          pageContent: 'No Page Content'
        }
      }
    }
  }
}
</script>

<style scoped>
.emphasize {
  color: 33, 37, 41;
}
</style>