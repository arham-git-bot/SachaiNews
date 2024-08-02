import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsCategory from "../views/NewsCategory.vue"; // Import the new page component

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/news/:categoryId",
    name: "NewsCategory",
    component: NewsCategory,
    props: (route) => ({ categoryId: route.params.categoryId }),
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL || "/"),
  routes,
});

export default router;
