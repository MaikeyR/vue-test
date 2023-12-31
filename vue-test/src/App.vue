<template>
  <navbar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"></navbar>

  <page-view v-if="pages.length > 0" :page="pages[activePage]"></page-view>
</template>

<script>
import PageView from './components/PageView.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
    PageView
  },

  data() {
    return {
      activePage: '0',
      pages: []
    }
  },
  created() {
    this.getPages();
  },
  methods: {
    async getPages() {
      let response = await fetch('/pages.json')
      let data = await response.json()

      this.pages = data
    }
  }
}
</script>