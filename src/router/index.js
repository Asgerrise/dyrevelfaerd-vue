import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/subscribed",
    name: "Subscribed",
    component: () => import("../views/Subscribed.vue")
  },
  {
    path: "/otherpage",
    name: "Otherpage",
    component: () => import("../views/Otherpage.vue")
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () => import("../views/Details.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
