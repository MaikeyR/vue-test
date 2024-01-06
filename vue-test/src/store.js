import { createStore } from 'vuex';

const storedTheme = localStorage.getItem('theme');

const store = createStore({
  state() {
    return {
      theme: storedTheme || 'light'
    };
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
    }
  },
});

export default store;