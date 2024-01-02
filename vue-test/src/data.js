const pagesKey = 'pages';

let pageJSON = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJSON);

export default {
  getStorePages() {
    return pagesStore;
  },
  getStorePage(index) {
    return pagesStore[index];
  }
}