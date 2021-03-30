export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/logo.png",
    "actions": [
      {
        "text": "去查阅 →",
        "link": "/",
        "type": "primary"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
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
