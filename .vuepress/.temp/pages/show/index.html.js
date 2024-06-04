import comp from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/index.html.vue"
const data = JSON.parse("{\"path\":\"/show/\",\"title\":\"演出\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"演出\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"show/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
