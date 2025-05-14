import { defineUserConfig } from 'vuepress'
import { gitPlugin } from '@vuepress/plugin-git'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "JayChou's wiki | 周杰伦百科资料集",
  description: "周杰伦 音乐🎵、演出🎤、影视🎬 资料集",
  head: [

    // 51la
    ['script', {  
      async: true,  
      charset: 'UTF-8',
      id: 'LA_COLLECT',
      src: 'https://sdk.51.la/js-sdk-pro.min.js?id=3Ia9UlIRxpjIS8Tl&ck=3Ia9UlIRxpjIS8Tl&autoTrack=true&hashMode=true' // 51la统计代码
    }],
    
    // 百度统计
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

   // 爱站统计
   [
    'script', {}, `
    var _hmt = _mtj || [];
    (function() {
    var mtj = document.createElement("script");
    mtj.src = "https://node91.aizhantj.com:21233/tjjs/?k=7votjtbsa5w";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mtj, s);
    })();          
   `
   ],

   // 统计鸟
   [
    'script', {}, `
      !function () {
        "use strict";
        var w = window, d = document, u = "//api.tongjiniao.com/c?_=781176123153158144", 
            s = document.createElement("script"), r = document.getElementsByTagName("script")[0];
        s.type = "text/javascript";
        s.setAttribute("charset", "UTF-8");
        s.async = !0;
        s.src = u;
        r.parentNode.insertBefore(s, r);
      }();
    `
  ],

   // bing Clarity
   [
    'script', {}, `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/rfqukwd2rq?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script");
    `
    ],

   // 头条验证
   [
    'meta',
    {
      name: 'bytedance-verification-code',
      content: 'PcImPjP5O5m6B/Yff7yL'
    }
  ],
  
  // 神马验证
  [
    'meta',
    {
      name: 'shenma-site-verification',
      content: '1f167fba3ad9e62981fc5ddebd8633d5_1746609734'
    }
  ],

 ],
  theme,
   plugins: [
    gitPlugin({
      // 配置项
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});