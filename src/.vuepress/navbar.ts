import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "行程",
    icon: "fa-solid fa-compact-disc",
    prefix: "/posted/",
    children: [
        { text: "社交动态", link: "sns.md" },
        { text: "行程", link: "time.md" }
    ],
  },


  {
    text: "作品",
    icon: "fa-solid fa-compact-disc",
    link: "/composition/",
  },


  {
    text: "演出",
    icon: "fa-solid fa-guitar",
    prefix: "/show/",
    children: [
      {
        text: "演唱会",
        children: [
          {
            text: "嘉年华",
            link:"Concert/2019carnival/README.md"
          },
          {
            text: "地表最强",
            link:"Concert/2016Invincible/README.md"
          },
          {
            text: "摩天伦",
            link:"Concert/2013OpusJay/README.md"
          },
          {
            text: "超时代",
            link:"Concert/2010TheEra/README.md"
          },
          {
            text: "2007WorldTours",
            link:"Concert/2007WorldTours/README.md"
          },
          {
            text: "无与伦比",
            link:"Concert/2004incomparable/README.md"
          },
          {
            text: "TheOne",
            link:"Concert/2002TheOne/README.md"
          },
          {
            text: "Fantasy",
            link:"Concert/2001Fantasy/README.md"
          },
        ],
      },
      {
        text: "其他演出",
        children: ["live/README.md","business/README.md","public/README.md"],
      },
    ],
  },
  {
    text: "巡演专题",
    icon: "fa-solid fa-newspaper",
    prefix: "/show/Concert/2019carnival/",
    children: [
      {
        text: "嘉年华厦门站（2025）",
        link: "2025XiaMen.md",
      },
      {
        text: "嘉年华香港站（2025）",
        link: "2025HongKong.md",
      },
      {
        text: "嘉年华济南站（2025）",
        link: "2025JiNan.md",
      },
      {
        text: "嘉年华武汉站（首轮）",
        link: "2025WuHan.md",
      },
      {
        text: "嘉年华上海站（2025）",
        link: "2025shanghai.md",
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
    text: "歌迷",
    icon: "fa-solid fa-bookmark",
    prefix: "/culture/",
    children: ["link.md","org.md","join_us.md",],
  },
  {
    text: "关于",
    icon: "fa-solid fa-bookmark",
    prefix: "/about/",
    children: ["index.md","thinks.md","history.md","contribute.md"],
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
