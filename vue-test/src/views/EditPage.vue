<template>
  <div>
    <h4>Edit {{ page.pageTitle }}</h4>
  </div>

  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">

        <div class="mb-3">
          <label for="" class="form-label">Page Title</label>
          <input 
            type="text" 
            class="form-control" 
            v-model="page.pageTitle"
          />
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Page Content</label>
          <textarea 
            type="text" 
            class="form-control" 
            rows="6" 
            v-model="page.pageContent"
          ></textarea>
        </div>
      </div>

      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">Link Text</label>
          <input 
            type="text" 
            class="form-control" 
            v-model="page.link.text" 
          />
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="page.pagePublished" />
            <label class="form-check-label" for="gridCheck">Published</label>
          </div>
        </div>

      </div>

      <div class="mb-3">
        <button class="btn btn-primary" 
          @click.prevent="submitForm" 
          :disabled="isFormInvalid"
        >Edit</button>
        <button class="btn btn-secondary"
          @click.prevent="goToPageList"
        >Cancel</button>
        <button class="btn btn-danger"
          @click.prevent="deletePage"
        >Delete</button>
      </div>
    </div>
  </form>
</template>

<script setup>

import { defineProps, computed, watch, ref } from 'vue'
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const route = useRouter()
const pages = inject('$pages')
const bus = inject('$bus')

const {index} = defineProps(['index'])

const page = pages.getStorePage(index);
console.log(index);

const submitForm = () => {
  if (!page.pageTitle || !page.pageContent || !page.link.text) {
    alert('All fields are required')
    return;
  }

  pages.editPage(index, page)

  bus.$emit('pageEdited', { index, page })

  goToPageList()
}

const deletePage = () => {
  pages.deletePage(index)
  goToPageList()
}

const goToPageList = () => {
  route.push({ path: '/pages' })
}

console.log(page.pageTitle, page.pageContent, page.link.text);

const isFormInvalid = computed(() => !page.pageTitle || !page.pageContent || !page.link.text)

</script>