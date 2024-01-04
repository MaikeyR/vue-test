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
          :page-link-text="pageLinkText"
        ></navbar-link>

        <li>
          <router-link 
            to="/pages" 
            class="nav-link"
            active-class="active"
            aria-current="page"
          >Pages</router-link>
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
  inject: ['$pages', '$bus'],

  components: {
    NavbarLink
  },
  
  created() {
    this.getTheme();

    this.pages = this.$pages.getStorePages();

    this.$bus.$on('pageEdited', () => {
      this.pages = [...this.$pages.getStorePages()];
      console.log('Updated pages:', this.pages);
    });

    this.$bus.$on('pageCreated', () => {
      this.pages = [...this.$pages.getStorePages()];
      console.log('Created pages:', this.pages);
    });
  },

  computed: {
    publishedPages() {
      return this.pages.filter(page => page.pagePublished);
    },

    pageLinkText() {
      return this.publishedPages.map(page => page.link.text);
    }
  },

  data() {
    return {
      theme: 'dark',
      pages: []
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