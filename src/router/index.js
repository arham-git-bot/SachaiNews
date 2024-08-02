import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from "../views/Category.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/category",
    name: "Category",
    component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
