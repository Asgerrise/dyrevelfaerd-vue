import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store/index.js";
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
    component: () =>
      import(/* webpackChunkName: "Subscribed" */ "../views/Subscribed.vue")
  },
  {
    path: "/otherpage",
    name: "Otherpage",
    component: () => import("../views/Otherpage.vue")
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "Details" */ "../views/Details.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Details" */ "../views/Login.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Admin.vue"),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.loggedIn) {
      next({
        name: "Login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
