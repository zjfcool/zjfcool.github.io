import { Vuepress } from '@vuepress/client/lib/components/Vuepress'
import pageRoutes0 from 'E:/blog/docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js'
import pageRoutes1 from 'E:/blog/docs/.vuepress/.temp/internal/pageRoutes/v-15554e84.js'
import pageRoutes2 from 'E:/blog/docs/.vuepress/.temp/internal/pageRoutes/v-2791cd83.js'
import pageRoutes3 from 'E:/blog/docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js'

export const pagesRoutes = [
  ...pageRoutes0,
  ...pageRoutes1,
  ...pageRoutes2,
  ...pageRoutes3,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
