import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/README.vue")),
  "/essay/": defineAsyncComponent(() => import(/* webpackChunkName: "v-7c80db8b" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/essay/README.vue")),
  "/fe_subtotal/interview/": defineAsyncComponent(() => import(/* webpackChunkName: "v-30be311c" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_subtotal/interview/README.vue")),
  "/fe_subtotal/js/": defineAsyncComponent(() => import(/* webpackChunkName: "v-27b6c3e2" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_subtotal/js/README.vue")),
  "/fe_subtotal/react/": defineAsyncComponent(() => import(/* webpackChunkName: "v-cae25d98" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_subtotal/react/README.vue")),
  "/fe_subtotal/vue/": defineAsyncComponent(() => import(/* webpackChunkName: "v-61b189e6" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_subtotal/vue/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/404.html.vue")),
}
