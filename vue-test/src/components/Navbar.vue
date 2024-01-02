<template>
  <nav :class="[`navbar navbar-expand navbar-${theme} bg-${theme}`]">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link 
          v-for="(page, index) in publishedPages" 
          class="nav-item" 
          :key="index" 
          :page="page" 
          :index="index" 
          :active="activePage == index" 
          @activated="$emit('activated')"
        ></navbar-link>

        <li>
          <router-link 
            to="create" 
            class="nav-link" 
            aria-current="page"
          >Create Page</router-link>
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

  computed: {
    publishedPages() {
      return this.pages.filter(page => page.pagePublished)
    }
  },

  props: ['pages', 'activePage'],
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