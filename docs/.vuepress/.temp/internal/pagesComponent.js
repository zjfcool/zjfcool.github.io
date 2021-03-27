import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"E:/blog/docs/.vuepress/.temp/pages/README.vue")),
  "/test/": defineAsyncComponent(() => import(/* webpackChunkName: "v-15554e84" */"E:/blog/docs/.vuepress/.temp/pages/test/README.vue")),
  "/test/test.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-2791cd83" */"E:/blog/docs/.vuepress/.temp/pages/test/test.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"E:/blog/docs/.vuepress/.temp/pages/404.html.vue")),
}
