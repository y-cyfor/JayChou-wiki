import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://www.jaychou.wiki/",
  author: {
    name: "JayChou's wiki",
    url: "https://www.jaychou.wiki/",  
  },
  license: "GPL3.0",
  iconAssets: "fontawesome-with-brands",
  logo: "src/.vuepress/public/logo.svg",
  repo: "y-cyfor/JayChou-wiki",
  docsDir: "",
  print: false,
  fullscreen: true,
  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "",
  displayFooter: true,

  // 加密配置
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // 多语言配置
  metaLocales: {
    editLink: "编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    icon: {
      assets: "fontawesome-with-brands"
    },
    // 启用主题自带的评论插件
     //  comment: {
     //    provider: "Waline",
     //    serverURL: "https://comment.jaychou.wiki/",
     //    dark: "auto",//暗黑模式：自动
     //    commentSorting: "hottest",//排序方式：自动
     //    pageSize: 20,//分页条数
     //  },

    //搜索插件
    slimsearch: {
      indexContent: true, //搜索全文
      autoSuggestions: false, //搜索建议
      queryHistoryCount: 5, //搜索历史数
    },
    components: {
      components: ["Badge", "VPCard"],
    },

    // markdown: {
        //   align: true,
        //   attrs: true,
        //   codeTabs: true,
        //   component: true,
        //   demo: true,
        //   figure: true,
        //   imgLazyload: true,
        //   imgSize: true,
        //   include: true,
        //   mark: true,
        //   stylize: [
         //    {
         //      matcher: "Recommended",
        //       replacer: ({ tag }) => {
         //        if (tag === "em")
         //          return {
         //            tag: "Badge",
             //        attrs: { type: "tip" },
             //        content: "Recommended",
            //       };
           //    },
          //   },
         //  ],
        //   sub: true,
         //  sup: true,
        //   tabs: true,
        //   tasklist: true,
       //    vPre: true,
      
      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
          //  mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
        //   revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
         //  },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
        // },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});