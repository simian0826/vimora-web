/*
 * @Author: Mikin 37030978+hmj199771@users.noreply.github.com
 * @Date: 2025-02-11 13:46:57
 * @LastEditors: Mikin 37030978+hmj199771@users.noreply.github.com
 * @LastEditTime: 2025-02-11 13:50:16
 * @FilePath: /namer_app/Users/mj97/Desktop/Project/vimora/vimora-web/src/router/route/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

// export const RootRoute: RouteRecordRaw = {
//   path: "/",
//   name: "Root",
//   // redirect: PageEnum.BASE_HOME,
//   component: () => import("@/pages/home/index.vue"),
//   meta: {
//     title: "Root",
//   },
// };

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    redirect: "/home",
    component: Layout,
    meta: {
      title: "Root",
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/pages/home/index.vue"),
      },

      {
        path: "/aboutUs",
        name: "AboutUs",
        component: () => import("@/pages/aboutUs/index.vue"),
      },
      {
        path: "/projects",
        name: "Projects",
        component: () => import("@/pages/projects/index.vue"),
      },
      {
        path: "/projects/:id",
        name: "ProjectDetail",
        component: () => import("@/pages/projects/detail.vue"),
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("@/pages/products/index.vue"),
      },
      {
        path: "/products/:id",
        name: "ProductDetail",
        component: () => import("@/pages/products/detail.vue"),
      },

      {
        path: "/contact",
        name: "Contact",
        component: () => import("@/pages/contact/index.vue"),
      },
      {
        path: "/craftsmanship",
        name: "Craftsmanship",
        component: () => import("@/pages/craftsmanship/index.vue"),
      },
      {
        path: "/blogDetail",
        name: "BlogDetail",
        component: () => import("@/pages/blog/detail.vue"),
      },
      {
        path: "/privacyAgreement",
        name: "PrivacyAgreement",
        component: () => import("@/pages/privacyAgreement/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/pages/404/index.vue"),
    name: "404",
  },
  {
    path: "/:pathMath(.*)*",
    redirect: "/404",
    name: "Not Found",
  },
];
