import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/signup",
    component: () => import("../pages/Signup.vue"),
  },
  {
    path: "/home",
    component: () => import("../pages/Home.vue")
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
