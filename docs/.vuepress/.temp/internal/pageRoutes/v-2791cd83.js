import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-2791cd83",
    path: "/test/test.html",
    component: Vuepress,
    meta: { title: "页面的标题" },
  },
  {
    path: "/test/test.md",
    redirect: "/test/test.html",
  },
]
