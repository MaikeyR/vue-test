<template>
  <nav :class="[`navbar navbar-expand navbar-${theme} bg-${theme}`]">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(page, index) in pages" class="nav-item" :key="index">
          <navbar-link :page="page" :active="activePage == index" @click.prevent="navLinkClick(index)"></navbar-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary bg-dark" @click.prevent="changeTheme">Toggle Dark Mode</button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'

export default {
  components: {
    NavbarLink
  },
  created() {
    this.getTheme()
  },
  props: ['pages', 'activePage', 'navLinkClick'],
  data() {
    return {
      theme: 'dark'
    }
  },
  methods: {
    changeTheme() {
      let theme = 'light'
      if (this.theme === 'light') {
        theme = 'dark'
      }
      this.theme = theme
      this.storeTheme()
    },

    storeTheme() {
      localStorage.setItem('theme', this.theme)
    },

    getTheme() {
      let theme = localStorage.getItem('theme')

      if (theme) {
        this.theme = theme;
      }
    }
  }
}
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>