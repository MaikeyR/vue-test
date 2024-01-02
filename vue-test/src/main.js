import { createApp, VueElement } from "vue";
import App from "./App.vue";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from "./utils/events";
import router from "./router/routes";
import $pages from "./data";

const app = createApp(App)

app.use(router)

app.config.globalProperties.$pages = $pages
app.config.globalProperties.$bus = $bus

app.mount("#app");

