import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "行程",
    icon: "fa-solid fa-compact-disc",
    link: "/time.md",
  },


  {
    text: "作品",
    icon: "fa-solid fa-compact-disc",
///    prefix: "/composition/",
    link: "/composition/",
///    children: [
///        {
///          text: "个人发行",
///          children: ["cd/README.md","ep/README.md","alone/README.md","accord/README.md","idea/README.md"],
///        },
///        {
///          text: "其他",
///         children: ["others/README.md"],
///       },
///  ],
  },


  {
    text: "演出",
    icon: "fa-solid fa-guitar",
    prefix: "/show/",
    children: [
      {
        text: "演唱会",
        children: ["Concert/2019/README.md","Concert/2016/README.md","Concert/2013/README.md","Concert/2010/README.md","Concert/2007/README.md","Concert/2004/README.md","Concert/2002/README.md"],
      },
      {
        text: "其他演出",
        children: ["live/README.md","business/README.md","public/README.md"],
      },
    ],
  },

  {
    text: "影视",
    icon: "fa-solid fa-film",
    prefix: "/video/",
    children: [
        { text: "电影", link: "movie/" },
        { text: "电视剧", link: "tv/" }
    ],
  },

  {
    text: "其他",
    icon: "fa-solid fa-bookmark",
    prefix: "/others/",
    children: ["trophy/","interview/","endorsement/"],
  },

  {
    text: "关于",
    icon: "fa-solid fa-bookmark",
    prefix: "/about/",
    children: ["index.md","thinks.md","link.md","history.md","contribute.md"],
  },

  {
    text: "资讯",
    icon: "fa-solid fa-newspaper",
    prefix: "/news/",
    children: [
      {
        text: "最新巡演（结束后归档至演出）",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },

  {
    text: "官方链接",
    icon: "fa-solid fa-bookmark",
    children: [
      {
        text: "周杰伦",
        children: [
            { text: "Instagram", icon: "fa-brands fa-instagram", link: "https://www.youtube.com/jaychou" },
            { text: "Youtube", icon: "fa-brands fa-youtube", link: "https://www.youtube.com/jaychou" },
            { text: "Facebook", icon: "fa-brands fa-facebook", link: "https://www.facebook.com/jay/" },
        ],
      },
      {
        text: "杰威尔音乐",
        children: [
            { text: "杰威尔音乐官方网站", icon: "ellipsis", link: "http://www.jvrmusic.com/" },
            { text: "微博", icon: "fa-brands fa-weibo", link: "http://weibo.com/jvrmusicofficial" },
            { text: "Bilibili", icon: "fa-brands fa-bilibili", link: "https://space.bilibili.com/1745584728" },
            { text: "快手", icon: "ellipsis", link: "https://www.kuaishou.com/profile/3xrz533z5e36wry" },
            { text: "抖音", icon: "fa-brands fa-tiktok", link: "https://v.douyin.com/i253Lmam/" },
            { text: "instagram", icon: "fa-brands fa-instagram", link: "https://www.youtube.com/jaychou" },
            { text: "Youtube", icon: "fa-brands fa-youtube", link: "https://www.youtube.com/@jvrmusic" },
            { text: "Facebook", icon: "fa-brands fa-facebook", link: "https://facebook.com/jvrmusicofficial" },
        ],
      },
    ],
  },

]);
