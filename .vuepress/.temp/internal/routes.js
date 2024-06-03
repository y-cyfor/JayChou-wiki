export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"home"} }],
  ["/time.html", { loader: () => import(/* webpackChunkName: "time.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/time.html.js"), meta: {"t":"最新行程"} }],
  ["/about/contribute.html", { loader: () => import(/* webpackChunkName: "about_contribute.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/contribute.html.js"), meta: {"t":"贡献指南"} }],
  ["/about/history.html", { loader: () => import(/* webpackChunkName: "about_history.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/history.html.js"), meta: {"t":"更新历史"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"t":"关于本站"} }],
  ["/about/link.html", { loader: () => import(/* webpackChunkName: "about_link.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/link.html.js"), meta: {"t":"推荐访问"} }],
  ["/about/thinks.html", { loader: () => import(/* webpackChunkName: "about_thinks.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/thinks.html.js"), meta: {"t":"致谢"} }],
  ["/composition/", { loader: () => import(/* webpackChunkName: "composition_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/index.html.js"), meta: {"t":"全部作品清单"} }],
  ["/show/", { loader: () => import(/* webpackChunkName: "show_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/index.html.js"), meta: {"t":""} }],
  ["/composition/accord/", { loader: () => import(/* webpackChunkName: "composition_accord_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/accord/index.html.js"), meta: {"t":"未收录"} }],
  ["/composition/alone/", { loader: () => import(/* webpackChunkName: "composition_alone_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/alone/index.html.js"), meta: {"t":"单曲"} }],
  ["/composition/ep/", { loader: () => import(/* webpackChunkName: "composition_ep_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/ep/index.html.js"), meta: {"t":"EP"} }],
  ["/composition/idea/", { loader: () => import(/* webpackChunkName: "composition_idea_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/idea/index.html.js"), meta: {"t":"创意专辑"} }],
  ["/composition/others/", { loader: () => import(/* webpackChunkName: "composition_others_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/others/index.html.js"), meta: {"t":"写给其他歌手的作品"} }],
  ["/others/endorsement/", { loader: () => import(/* webpackChunkName: "others_endorsement_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/endorsement/index.html.js"), meta: {"t":"品牌代言"} }],
  ["/others/interview/", { loader: () => import(/* webpackChunkName: "others_interview_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/interview/index.html.js"), meta: {"t":"专访访谈"} }],
  ["/others/trophy/", { loader: () => import(/* webpackChunkName: "others_trophy_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/trophy/index.html.js"), meta: {"t":"奖项纪录"} }],
  ["/show/business/", { loader: () => import(/* webpackChunkName: "show_business_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/business/index.html.js"), meta: {"t":"商业演出"} }],
  ["/show/Concert/", { loader: () => import(/* webpackChunkName: "show_Concert_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/index.html.js"), meta: {"t":""} }],
  ["/show/live/", { loader: () => import(/* webpackChunkName: "show_live_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/live/index.html.js"), meta: {"t":"音乐节"} }],
  ["/show/public/", { loader: () => import(/* webpackChunkName: "show_public_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/public/index.html.js"), meta: {"t":"公益演出"} }],
  ["/video/movie/", { loader: () => import(/* webpackChunkName: "video_movie_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/video/movie/index.html.js"), meta: {"t":"参与电影 （主创/主演/参演）"} }],
  ["/video/tv/", { loader: () => import(/* webpackChunkName: "video_tv_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/video/tv/index.html.js"), meta: {"t":"参与电视剧 （主创/主演/参演）"} }],
  ["/composition/cd/00/", { loader: () => import(/* webpackChunkName: "composition_cd_00_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/00/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/01/", { loader: () => import(/* webpackChunkName: "composition_cd_01_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/01/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/02/", { loader: () => import(/* webpackChunkName: "composition_cd_02_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/02/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/03/", { loader: () => import(/* webpackChunkName: "composition_cd_03_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/03/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/04/", { loader: () => import(/* webpackChunkName: "composition_cd_04_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/04/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/05/", { loader: () => import(/* webpackChunkName: "composition_cd_05_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/05/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/06/", { loader: () => import(/* webpackChunkName: "composition_cd_06_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/06/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/07/", { loader: () => import(/* webpackChunkName: "composition_cd_07_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/07/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/08/", { loader: () => import(/* webpackChunkName: "composition_cd_08_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/08/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/10/", { loader: () => import(/* webpackChunkName: "composition_cd_10_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/10/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/11/", { loader: () => import(/* webpackChunkName: "composition_cd_11_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/11/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/12/", { loader: () => import(/* webpackChunkName: "composition_cd_12_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/12/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/14/", { loader: () => import(/* webpackChunkName: "composition_cd_14_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/14/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/16/", { loader: () => import(/* webpackChunkName: "composition_cd_16_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/16/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/22/", { loader: () => import(/* webpackChunkName: "composition_cd_22_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/22/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/show/Concert/2002/", { loader: () => import(/* webpackChunkName: "show_Concert_2002_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2002/index.html.js"), meta: {"t":"2002 TheOne巡回演唱会"} }],
  ["/show/Concert/2004/", { loader: () => import(/* webpackChunkName: "show_Concert_2004_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2004/index.html.js"), meta: {"t":"2004 无与伦比世界巡回演唱会"} }],
  ["/show/Concert/2007/", { loader: () => import(/* webpackChunkName: "show_Concert_2007_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2007/index.html.js"), meta: {"t":"2007 世界巡回演唱会"} }],
  ["/show/Concert/2010/", { loader: () => import(/* webpackChunkName: "show_Concert_2010_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2010/index.html.js"), meta: {"t":"2010 超时代世界巡回演唱会"} }],
  ["/show/Concert/2013/", { loader: () => import(/* webpackChunkName: "show_Concert_2013_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2013/index.html.js"), meta: {"t":"2013 魔天伦世界巡回演唱会"} }],
  ["/show/Concert/2016/", { loader: () => import(/* webpackChunkName: "show_Concert_2016_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2016/index.html.js"), meta: {"t":"2016 地表最强世界巡回演唱会"} }],
  ["/show/Concert/2019/", { loader: () => import(/* webpackChunkName: "show_Concert_2019_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2019/index.html.js"), meta: {"t":"2019 嘉年华世界巡回演唱会"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/others/", { loader: () => import(/* webpackChunkName: "others_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/index.html.js"), meta: {"t":"Others"} }],
  ["/video/", { loader: () => import(/* webpackChunkName: "video_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/video/index.html.js"), meta: {"t":"Video"} }],
  ["/composition/cd/", { loader: () => import(/* webpackChunkName: "composition_cd_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/index.html.js"), meta: {"t":"Cd"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
