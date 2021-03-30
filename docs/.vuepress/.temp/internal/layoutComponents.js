import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/zjfcool.github.io/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/zjfcool.github.io/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
