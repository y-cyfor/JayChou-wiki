export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"home"} }],
  ["/composition/", { loader: () => import(/* webpackChunkName: "composition_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/index.html.js"), meta: {"t":"全部作品清单"} }],
  ["/about/contribute.html", { loader: () => import(/* webpackChunkName: "about_contribute.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/contribute.html.js"), meta: {"t":"贡献指南"} }],
  ["/about/history.html", { loader: () => import(/* webpackChunkName: "about_history.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/history.html.js"), meta: {"t":"更新历史"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"t":"关于本站"} }],
  ["/about/thinks.html", { loader: () => import(/* webpackChunkName: "about_thinks.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/about/thinks.html.js"), meta: {"t":"致谢"} }],
  ["/culture/join_us.html", { loader: () => import(/* webpackChunkName: "culture_join_us.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/culture/join_us.html.js"), meta: {"t":"加入伦吧歌迷会"} }],
  ["/culture/link.html", { loader: () => import(/* webpackChunkName: "culture_link.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/culture/link.html.js"), meta: {"t":"推荐访问"} }],
  ["/culture/org.html", { loader: () => import(/* webpackChunkName: "culture_org.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/culture/org.html.js"), meta: {"t":"歌迷组织"} }],
  ["/culture/pink.html", { loader: () => import(/* webpackChunkName: "culture_pink.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/culture/pink.html.js"), meta: {"t":"粉色计划"} }],
  ["/posted/sns.html", { loader: () => import(/* webpackChunkName: "posted_sns.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/posted/sns.html.js"), meta: {"t":"社交动态"} }],
  ["/posted/time.html", { loader: () => import(/* webpackChunkName: "posted_time.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/posted/time.html.js"), meta: {"t":"最新行程"} }],
  ["/show/", { loader: () => import(/* webpackChunkName: "show_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/index.html.js"), meta: {"t":"全部演出记录清单"} }],
  ["/video/", { loader: () => import(/* webpackChunkName: "video_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/video/index.html.js"), meta: {"t":"影视作品"} }],
  ["/composition/accord/", { loader: () => import(/* webpackChunkName: "composition_accord_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/accord/index.html.js"), meta: {"t":"未收录"} }],
  ["/composition/alone/", { loader: () => import(/* webpackChunkName: "composition_alone_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/alone/index.html.js"), meta: {"t":"单曲"} }],
  ["/composition/ep/", { loader: () => import(/* webpackChunkName: "composition_ep_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/ep/index.html.js"), meta: {"t":"EP"} }],
  ["/composition/idea/", { loader: () => import(/* webpackChunkName: "composition_idea_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/idea/index.html.js"), meta: {"t":"创意专辑"} }],
  ["/composition/ost/", { loader: () => import(/* webpackChunkName: "composition_ost_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/ost/index.html.js"), meta: {"t":"写OST 影视原声带"} }],
  ["/composition/others/", { loader: () => import(/* webpackChunkName: "composition_others_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/others/index.html.js"), meta: {"t":"写给其他歌手的作品"} }],
  ["/others/endorsement/", { loader: () => import(/* webpackChunkName: "others_endorsement_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/endorsement/index.html.js"), meta: {"t":"品牌代言"} }],
  ["/others/interview/", { loader: () => import(/* webpackChunkName: "others_interview_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/interview/index.html.js"), meta: {"t":"专访访谈"} }],
  ["/others/trophy/", { loader: () => import(/* webpackChunkName: "others_trophy_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/trophy/index.html.js"), meta: {"t":"奖项纪录"} }],
  ["/show/business/", { loader: () => import(/* webpackChunkName: "show_business_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/business/index.html.js"), meta: {"t":"商业演出"} }],
  ["/show/Concert/", { loader: () => import(/* webpackChunkName: "show_Concert_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/index.html.js"), meta: {"t":"个人演唱会"} }],
  ["/show/live/", { loader: () => import(/* webpackChunkName: "show_live_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/live/index.html.js"), meta: {"t":"音乐节"} }],
  ["/show/public/", { loader: () => import(/* webpackChunkName: "show_public_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/public/index.html.js"), meta: {"t":"公益演出"} }],
  ["/video/movie/", { loader: () => import(/* webpackChunkName: "video_movie_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/video/movie/index.html.js"), meta: {"t":"参与电影 （主创/主演/参演）"} }],
  ["/video/tv/", { loader: () => import(/* webpackChunkName: "video_tv_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/video/tv/index.html.js"), meta: {"t":"参与电视剧 （主创/主演/参演）"} }],
  ["/composition/cd/00/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_00_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/00/public.html.js"), meta: {"t":"《Jay》版本和专辑内页"} }],
  ["/composition/cd/00/", { loader: () => import(/* webpackChunkName: "composition_cd_00_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/00/index.html.js"), meta: {"t":"《Jay》专辑介绍"} }],
  ["/composition/cd/01/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_01_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/01/public.html.js"), meta: {"t":"《范特西》版本和专辑内页"} }],
  ["/composition/cd/01/", { loader: () => import(/* webpackChunkName: "composition_cd_01_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/01/index.html.js"), meta: {"t":"《范特西》专辑介绍"} }],
  ["/composition/cd/02/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_02_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/02/public.html.js"), meta: {"t":"《八度空间》版本和专辑内页"} }],
  ["/composition/cd/02/", { loader: () => import(/* webpackChunkName: "composition_cd_02_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/02/index.html.js"), meta: {"t":"《八度空间》专辑介绍"} }],
  ["/composition/cd/03/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_03_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/03/public.html.js"), meta: {"t":"《叶惠美》版本和专辑内页"} }],
  ["/composition/cd/03/", { loader: () => import(/* webpackChunkName: "composition_cd_03_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/03/index.html.js"), meta: {"t":"《叶惠美》专辑介绍"} }],
  ["/composition/cd/04/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_04_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/04/public.html.js"), meta: {"t":"《七里香》版本和专辑内页"} }],
  ["/composition/cd/04/", { loader: () => import(/* webpackChunkName: "composition_cd_04_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/04/index.html.js"), meta: {"t":"《七里香》专辑介绍"} }],
  ["/composition/cd/05/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_05_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/05/public.html.js"), meta: {"t":"《11月的肖邦》版本和专辑内页"} }],
  ["/composition/cd/05/", { loader: () => import(/* webpackChunkName: "composition_cd_05_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/05/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/06/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_06_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/06/public.html.js"), meta: {"t":"《依然范特西》版本和专辑内页"} }],
  ["/composition/cd/06/", { loader: () => import(/* webpackChunkName: "composition_cd_06_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/06/index.html.js"), meta: {"t":"《依然范特西》专辑介绍"} }],
  ["/composition/cd/07/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_07_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/07/public.html.js"), meta: {"t":"《我很忙》版本和专辑内页"} }],
  ["/composition/cd/07/", { loader: () => import(/* webpackChunkName: "composition_cd_07_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/07/index.html.js"), meta: {"t":"《我很忙》专辑介绍"} }],
  ["/composition/cd/08/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_08_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/08/public.html.js"), meta: {"t":"《魔杰座》版本和专辑内页"} }],
  ["/composition/cd/08/", { loader: () => import(/* webpackChunkName: "composition_cd_08_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/08/index.html.js"), meta: {"t":"《魔杰座》专辑介绍"} }],
  ["/composition/cd/10/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_10_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/10/public.html.js"), meta: {"t":"《跨时代》版本和专辑内页"} }],
  ["/composition/cd/10/", { loader: () => import(/* webpackChunkName: "composition_cd_10_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/10/index.html.js"), meta: {"t":"专辑介绍"} }],
  ["/composition/cd/11/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_11_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/11/public.html.js"), meta: {"t":"《惊叹号》版本和专辑内页"} }],
  ["/composition/cd/11/", { loader: () => import(/* webpackChunkName: "composition_cd_11_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/11/index.html.js"), meta: {"t":"《惊叹号》专辑介绍"} }],
  ["/composition/cd/12/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_12_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/12/public.html.js"), meta: {"t":"《十二新作》版本和专辑内页"} }],
  ["/composition/cd/12/", { loader: () => import(/* webpackChunkName: "composition_cd_12_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/12/index.html.js"), meta: {"t":"《十二新作》专辑介绍"} }],
  ["/composition/cd/14/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_14_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/14/public.html.js"), meta: {"t":"《哎呦不错哦》版本和专辑内页"} }],
  ["/composition/cd/14/", { loader: () => import(/* webpackChunkName: "composition_cd_14_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/14/index.html.js"), meta: {"t":"《哎呦不错哦》专辑介绍"} }],
  ["/composition/cd/16/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_16_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/16/public.html.js"), meta: {"t":"《周杰伦的床边故事》版本和专辑内页"} }],
  ["/composition/cd/16/", { loader: () => import(/* webpackChunkName: "composition_cd_16_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/16/index.html.js"), meta: {"t":"《周杰伦的床边故事》专辑介绍"} }],
  ["/composition/cd/22/public.html", { loader: () => import(/* webpackChunkName: "composition_cd_22_public.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/22/public.html.js"), meta: {"t":"《最伟大的作品》版本和专辑内页"} }],
  ["/composition/cd/22/", { loader: () => import(/* webpackChunkName: "composition_cd_22_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/composition/cd/22/index.html.js"), meta: {"t":"《最伟大的作品》专辑介绍"} }],
  ["/show/Concert/2002TheOne/", { loader: () => import(/* webpackChunkName: "show_Concert_2002TheOne_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2002TheOne/index.html.js"), meta: {"t":"2002 TheOne巡回演唱会"} }],
  ["/show/Concert/2004incomparable/", { loader: () => import(/* webpackChunkName: "show_Concert_2004incomparable_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2004incomparable/index.html.js"), meta: {"t":"2004 无与伦比世界巡回演唱会"} }],
  ["/show/Concert/2007WorldTours/", { loader: () => import(/* webpackChunkName: "show_Concert_2007WorldTours_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2007WorldTours/index.html.js"), meta: {"t":"2007 世界巡回演唱会"} }],
  ["/show/Concert/2010TheEra/", { loader: () => import(/* webpackChunkName: "show_Concert_2010TheEra_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2010TheEra/index.html.js"), meta: {"t":"2010 超时代世界巡回演唱会"} }],
  ["/show/Concert/2013OpusJay/", { loader: () => import(/* webpackChunkName: "show_Concert_2013OpusJay_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2013OpusJay/index.html.js"), meta: {"t":"2013 魔天伦世界巡回演唱会"} }],
  ["/show/Concert/2016Invincible/", { loader: () => import(/* webpackChunkName: "show_Concert_2016Invincible_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2016Invincible/index.html.js"), meta: {"t":"2016 地表最强世界巡回演唱会"} }],
  ["/show/Concert/2019carnival/2024Malaysia.html", { loader: () => import(/* webpackChunkName: "show_Concert_2019carnival_2024Malaysia.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2019carnival/2024Malaysia.html.js"), meta: {"t":"2024嘉年华世界巡回演唱会-马来西亚站"} }],
  ["/show/Concert/2019carnival/2024nanjing.html", { loader: () => import(/* webpackChunkName: "show_Concert_2019carnival_2024nanjing.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2019carnival/2024nanjing.html.js"), meta: {"t":"2024嘉年华世界巡回演唱会-南京站"} }],
  ["/show/Concert/2019carnival/2024shenzhen.html", { loader: () => import(/* webpackChunkName: "show_Concert_2019carnival_2024shenzhen.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2019carnival/2024shenzhen.html.js"), meta: {"t":"2024嘉年华世界巡回演唱会-深圳站"} }],
  ["/show/Concert/2019carnival/2024Singapore.html", { loader: () => import(/* webpackChunkName: "show_Concert_2019carnival_2024Singapore.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2019carnival/2024Singapore.html.js"), meta: {"t":"2024嘉年华世界巡回演唱会-新加坡站"} }],
  ["/show/Concert/2019carnival/", { loader: () => import(/* webpackChunkName: "show_Concert_2019carnival_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/show/Concert/2019carnival/index.html.js"), meta: {"t":"2019 嘉年华世界巡回演唱会"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/culture/", { loader: () => import(/* webpackChunkName: "culture_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/culture/index.html.js"), meta: {"t":"Culture"} }],
  ["/posted/", { loader: () => import(/* webpackChunkName: "posted_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/posted/index.html.js"), meta: {"t":"Posted"} }],
  ["/others/", { loader: () => import(/* webpackChunkName: "others_index.html" */"C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/src/.vuepress/.temp/pages/others/index.html.js"), meta: {"t":"Others"} }],
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
