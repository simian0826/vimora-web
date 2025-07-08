import { ConfigEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";
import legacy from "@vitejs/plugin-legacy";
import UnoCSS from "unocss/vite";

import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// const resolve = (dir) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    // root: "/",
    // publicPath: "/",
    base: "./",
    plugins: [
      vue(),
      UnoCSS(),

      viteMockServe({
        mockPath: "@/../mock",
        localEnabled: command === "serve", //开发阶段能使用mock
      }),
      //svg 插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src./assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      legacy({
        targets: ["chrome < 60", "edge < 15"],
        renderLegacyChunks: true,
      }),
    ],
    server: {
      hmr: {
        overlay: false,
      },
      host: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      cors: true,
      port: 5173,
      origin: "http://localhost:5173",
      proxy: {
        "/vimora": {
          target: "http://147.93.114.202:8117",
          changeOrigin: true,
          secure: false,
          headers: {
            Referer: "http://147.93.114.202:8117",
            Origin: "http://147.93.114.202:8117",
          },
        },
      },
    },
    build: {
      // assetsDir: "./", // 这里替换成你想要的公共路径
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@import "@/style/variable.scss";`,
        },
      },
      postcss: {
        plugins: [
          postcsspxtoviewport8plugin({
            unitToConvert: "px",
            viewportWidth: 390,
            viewportHeight: 844,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            minPixelValue: 1,
            mediaQuery: true,
            replace: true,
            exclude: [/^(?!.*mobile).*$/, /(landscape)/],
            landscape: false,
            landscapeUnit: "vw",
            landscapeWidth: 1100,
          }),
        ],
      },
    },
  };
};
