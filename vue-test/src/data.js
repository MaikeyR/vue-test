const pagesKey = 'pages';

let pageJSON = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJSON);

export default {
  getStorePages() {
    return pagesStore;
  },

  getStorePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;

    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
  },

  createPage(page) {
    pagesStore.push(page);

    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
  }
}