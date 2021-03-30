import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/README.vue")),
  "/essay/": defineAsyncComponent(() => import(/* webpackChunkName: "v-7c80db8b" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/essay/README.vue")),
  "/fe_note/interview/": defineAsyncComponent(() => import(/* webpackChunkName: "v-17930044" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_note/interview/README.vue")),
  "/fe_note/js/": defineAsyncComponent(() => import(/* webpackChunkName: "v-4a5f1350" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_note/js/README.vue")),
  "/fe_note/react/": defineAsyncComponent(() => import(/* webpackChunkName: "v-89fbb9f4" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_note/react/README.vue")),
  "/fe_note/vue/": defineAsyncComponent(() => import(/* webpackChunkName: "v-0188d95f" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/fe_note/vue/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"E:/zjfcool.github.io/docs/.vuepress/.temp/pages/404.html.vue")),
}
