<template>
  <h3>Pages List</h3>
  <div class="text-end">
    <router-link
      to="/pages/create"
      class="btn btn-primary btn-sm"
    >New Page</router-link>
  </div>

  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link</th>
        <th>Published</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page, index) in $pages.getStorePages()"
        :key="index"
        @click="toPage(index)"
      >
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.pagePublished ? 'Yes' : 'No' }}</td>
      </tr>
    </tbody>      
  </table>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const $pages = inject('$pages')
const $router = useRouter()

const toPage = (index) => {
  $router.push({ path: `/pages/${index}/edit` })
}



</script>

<style scoped>
.table.table-hover tr:hover {
  cursor: pointer;  
}
</style>