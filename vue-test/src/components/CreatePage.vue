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
          <textarea type="text" class="form-control" rows="6" v-model="pageContent" />
        </div>
      </div>

      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">Link Text</label>
          <input type="text" class="form-control" v-model="pageLinkText" />
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Link URL</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="pageLinkUrl" />
            <span class="input-group-text">.html</span>
          </div>
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="pagePublished" />
            <label class="form-check-label" for="gridCheck">Published</label>
          </div>
        </div>

      </div>

      <div class="mb-3">
        <button class="btn btn-primary" @click.prevent="SubmitForm" :disabled="isFormInvalid">Create Page</button>
      </div>

    </div>
  </form>
</template>

<script>
export default {
  emits: {
    pageCreated(pageTitle, pageContent, link) {
      if (pageTitle == '' || pageContent == '' || !link || link.text == '' || link.url == '') {
        return false;
      }
      return true;
    }
  },

  computed: {
    isFormInvalid() {
      return this.pageTitle == '' || this.pageContent == '' || this.pageLinkText == '' || this.pageLinkUrl == ''
    }
  },

  data() {
    return {
      pageTitle: '',
      pageContent: '',
      pageLinkText: '',
      pageLinkUrl: '',
      pagePublished: true
    }
  },

  methods: {
    SubmitForm() {
      if (this.pageTitle == '' || this.pageContent == '' || this.pageLinkText == '' || this.pageLinkUrl == '') {
        alert('All fields are required')
        return;
      }

      this.$emit('pageCreated', {
        pageTitle: this.pageTitle,
        pageContent: this.pageContent,
        link: {
          text: this.pageLinkText,
          url: this.pageLinkUrl + '.html'
        },
        pagePublished: this.pagePublished
      });

      this.pageTitle = '';
      this.pageContent = '';
      this.pageLinkText = '';
      this.pageLinkUrl = '';
      this.pagePublished = true
    }
  },

  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.pageLinkText == oldTitle) {
        this.pageLinkText = newTitle;
        this.pageLinkUrl = newTitle.toLowerCase().replace(/ /g, '-');
      }
    }
  }
}
</script>

