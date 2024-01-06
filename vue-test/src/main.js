import { createApp, VueElement } from "vue";
import App from "./App.vue";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from "./utils/events";
import router from "./router/routes";
import $pages from "./data";
import store from "./store";

const app = createApp(App)

app.use(router)
app.use(store)

app.provide('$pages', $pages)
app.provide('$bus', $bus)

app.mount("#app");

