<template>
  <navbar :pages="pages" :active-page="activePage" ></navbar>

  <router-view></router-view>

  <!-- <page-view v-if="pages.length > 0" :page="pages[activePage]"></page-view>

  <create-page @page-created="pageCreated" /> -->
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

    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index
    })
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