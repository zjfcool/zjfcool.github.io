export const data = {
  "key": "v-2791cd83",
  "path": "/test/test.html",
  "title": "页面的标题",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "页面的标题",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "test/test.md",
  "git": {
    "updatedTime": 1616830028000,
    "contributors": [
      {
        "name": "zjfcool",
        "email": "2568696196@qq.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}

if (import.meta.hot) {
  import.meta.hot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}
