import { defineUserConfig } from "vuepress"
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'
//import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js"


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "杰周wiki",
  //JayChou's wiki | 周杰伦百科资料集
  description: "音乐🎵、演出🎤、影视🎬 资料集",
  head: [
    ['script', {  
      async: true,  
      charset: 'UTF-8',
      id: 'LA_COLLECT',
      src: 'https://sdk.51.la/js-sdk-pro.min.js?id=3Ia9UlIRxpjIS8Tl&ck=3Ia9UlIRxpjIS8Tl&autoTrack=true&hashMode=true' // 51la统计代码
    }],
    // ['script', { src: 'https://hm.baidu.com/hm.js?2b95f3f7f21f3597d1a53a438c2e539d' }],// 百度统计代码简单用法
    [
    'script', {}, `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2b95f3f7f21f3597d1a53a438c2e539d";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();          
    `
    ],
  ],
  theme,
  //plugins: [
  //  searchProPlugin({
  //    indexContent: true,
  //  }),
 // ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
