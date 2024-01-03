<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">

        <div class="mb-3">
          <label for="" class="form-label">Page Title</label>
          <input type="text" class="form-control" v-model="pageTitle" />
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Page Content</label>
          <textarea type="text" class="form-control" rows="6" v-model="pageContent" ></textarea>
        </div>
      </div>

      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">Link Text</label>
          <input type="text" class="form-control" v-model="pageLinkText" />
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="pagePublished" />
            <label class="form-check-label" for="gridCheck">Published</label>
          </div>
        </div>

      </div>

      <div class="mb-3">
        <button class="btn btn-primary" @click.prevent="submitForm" :disabled="isFormInvalid">Create Page</button>
      </div>

    </div>
  </form>
</template>

<script setup>

import { defineProps, watch, ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router';

const route = useRouter()
const pages = inject('$pages')
const bus = inject('$bus')

const {index} = defineProps({
  index: {
    type: String
  }
})

const pageTitle = ref('');
const pageContent = ref('');
const pageLinkText = ref('');
const pagePublished = ref(true);

const submitForm = () => {
  if (pageTitle == '' || pageContent == '' || pageLinkText == '') {
    alert('All fields are required')
    return;
  }

  let newPage = {
    pageTitle: pageTitle.value,
    pageContent: pageContent.value,
    link: {
      text: pageLinkText.value
    },
    pagePublished: pagePublished.value
  }

  pages.createPage(newPage)

  bus.$emit('pageCreated', newPage)

  route.push({ path: '/pages' })
}

const isFormInvalid = computed(() => pageTitle == '' || pageContent == '' || pageLinkText == '')

watch(pageTitle, (newTitle, oldTitle) => {
  if (pageLinkText.value == oldTitle) {
    pageLinkText.value = newTitle
  }
})

</script>