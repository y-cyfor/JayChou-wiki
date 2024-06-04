import comp from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/news/index.html.vue"
const data = JSON.parse("{\"path\":\"/news/\",\"title\":\"News\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"News\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/news/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"JayChou's wiki | 周杰伦资料集\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"News\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"JayChou's wiki\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"News\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
