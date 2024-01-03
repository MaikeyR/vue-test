import { createRouter, createWebHashHistory } from "vue-router";
import PageView from "../views/PageView.vue";
import CreatePage from "../views/CreatePage.vue";
import Pages from "../views/Pages.vue";
import PageList from "../views/PagesList.vue";
import EditPage from "../views/EditPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "pages/0"
    },
    {
      path: "/pages",
      component: Pages,
      children: [
        {
          path: "",
          name: "pages",
          component: PageList
        },
        {
          path: "create",
          name: "create",
          component: CreatePage,
        },
        {
          path: ":index/edit",
          name: "edit",
          component: EditPage,
          props: true
        },
        {
          path: ":index",
          name: "page",
          component: PageView,
          props: true
        }
      ]
    },

  ]
});

export default router;