import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { constantRoutes } from "./route/index";
const routes: Array<RouteRecordRaw> = [...constantRoutes];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0, let: 0 };
  },
});
