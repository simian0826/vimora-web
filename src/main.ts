import { createApp } from "vue";
import VueScrollTo from "vue-scrollto";
import ElementPlus from "element-plus";
//svg插件需要配置的代码
import "virtual:svg-icons-register";
import "uno.css";

//注册全局组件
import globalComponents from "@/components";
import en from "element-plus/dist/locale/en";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "./style/index.scss";
import App from "@/App.vue";
import { router } from "@/router";
import { setupStore } from "./store";
import { createPageGuard } from "@/router/guard";
async function bootstrap() {
  const app = createApp(App);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  // Configure store
  setupStore(app);
  register();
  //国际化
  app.use(ElementPlus, {
    locale: en,
  });
  app.use(globalComponents);
  app.use(router);
  app.use(VueScrollTo);
  app.mount("#app");
  createPageGuard(router);
}
bootstrap();
