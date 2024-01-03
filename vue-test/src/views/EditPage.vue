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
          @click.prevent="submitForm"
        >Cancel</button>
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

const {index} = defineProps({
  index: {
    type: String
  }
})

const page = pages.getStorePage(index);
console.log(index);

const pageTitle = ref(page.pageTitle);
const pageContent = ref(page.pageContent);
const pageLinkText = ref(page.link.text);
const pagePublished = ref(page.pagePublished);


const submitForm = () => {
  if (pageTitle == '' || pageContent == '' || pageLinkText == '') {
    alert('All fields are required')
    return;
  }

  let editPage = {
    pageTitle: pageTitle.value,
    pageContent: pageContent.value,
    link: {
      text: pageLinkText.value
    },
    pagePublished: pagePublished.value
  }

  pages.editPage(editPage)

  bus.$emit('pageEdited', editPage)

  route.push({ path: '/pages' })
}

const isFormInvalid = computed(() => pageTitle == '' || pageContent == '' || pageLinkText == '')

watch(pageTitle, (newTitle, oldTitle) => {
  if (pageLinkText.value == oldTitle) {
    pageLinkText.value = newTitle
  }
})

</script>