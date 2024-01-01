<template>
  <navbar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"></navbar>

  <!-- <page-view v-if="pages.length > 0" :page="pages[activePage]"></page-view> -->

  <create-page @page-created="pageCreated" />
</template>

<script>
import PageView from './components/PageView.vue'
import Navbar from './components/Navbar.vue'
import CreatePage from './components/CreatePage.vue'

export default {
  components: {
    Navbar,
    PageView,
    CreatePage
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
    },
    pageCreated(pageObject) {
      this.pages.push(pageObject)
      console.log(this.pages)
    }
  }
}
</script>