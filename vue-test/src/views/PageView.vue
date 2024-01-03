<template>
  <div v-if="page && page.pageTitle && page.pageContent" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.pageContent }}</p>
  </div>
</template>

<script>
export default {
  props: ['index'],
  inject: ['$pages'],

  created() {
    console.log(this.index);

    this.page = this.$pages.getStorePage(this.index);

  },

  data() {
    return {
      page: null
    }
  },

  watch: {

    index(newIndex, oldIndex) {
      this.page = this.$pages.getStorePage(newIndex);
    }
    
  }
}
</script>

<style scoped>
.emphasize {
  color: 33, 37, 41;
}
</style>