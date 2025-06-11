import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posted/": [
    "sns",
    "time",
  ],
  "/about/": [
    "",
    "thinks",
    "history",
    "contribute",
  ],
  "/composition/": [
    {
      text: "周杰伦作品全收录",
      prefix: "",
      collapsible: false,
      children: [
        "",
        {
          text: "💿录音室专辑",
          prefix: "cd",
          collapsible: true,
          children: [
            {
              text: "《最伟大的作品》",
              prefix: "22",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《周杰伦的床边故事》",
              prefix: "16",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《哎呦不错哦》",
              prefix: "14",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《十二新作》",
              prefix: "12",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《惊叹号！》",
              prefix: "11",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《跨时代》",
              prefix: "10",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《魔杰座》",
              prefix: "08",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《我很忙》",
              prefix: "07",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《依然范特西》",
              prefix: "06",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《11月的肖邦》",
              prefix: "05",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《七里香》",
              prefix: "04",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
            {
              text: "《叶惠美》",
              prefix: "03",
              collapsible: true,
              children: [
                {
                  text: "专辑介绍",
                  link: "README.md",
                    },
                    {
                      text: "专辑版本",
                      link: "public.md",
                        },
                  ],
                },
              {
                text: "《八度空间》",
                prefix: "02",
                collapsible: true,
                children: [
                  {
                    text: "专辑介绍",
                    link: "README.md",
                      },
                      {
                        text: "专辑版本",
                        link: "public.md",
                          },
                    ],
                  },
              {
                text: "《范特西》",
                prefix: "01",
                collapsible: true,
                children: [
                  {
                    text: "专辑介绍",
                    link: "README.md",
                      },
                      {
                        text: "专辑版本",
                        link: "public.md",
                          },
                    ],
                  },
                {
                  text: "《Jay同名专辑》",
                  prefix: "00",
                  collapsible: true,
                  children: [
                    {
                      text: "专辑介绍",
                      link: "README.md",
                        },
                        {
                          text: "专辑版本",
                          link: "public.md",
                            },
                      ],
                    },
              ],
            },
            {
              text: "🎤现场专辑",
              prefix: "live",
              collapsible: true,
              children: [
                {
                  text: "地表最强世界巡回演唱会",
                  prefix: "2016",
                  collapsible: true,
                  children: [
                    "",
                      ],
                    }
    
                  ],
                },
                {
                  text: "EP",
                  prefix: "ep",
                  collapsible: true,
                  children: [
                    {
                      text: "霍元甲",
                      prefix: "2016",
                      collapsible: true,
                      children: [
                        "",
                          ],
                        }
        
                      ],
                    },
                    {
                      text: "单曲",
                      prefix: "single",
                      collapsible: true,
                      children: [
                          {
                            text: "圣诞星",
                            link: "christmas-star.md",
                              }
                          ],
                        },
                        {
                          text: "未收录",
                          prefix: "accord",
                          collapsible: true,
                          children: [
                                "",
                              ],
                            },
                            {
                              text: "创意专辑",
                              prefix: "idea",
                              collapsible: true,
                              children: [
                                {
                                  text: "The Crew 乐酷 概念合辑",
                                  prefix: "2016",
                                  collapsible: true,
                                  children: [
                                    "",
                                      ],
                                    }
                    
                                  ],
                                },
                                {
                                  text: "原声带",
                                  prefix: "others",
                                  collapsible: true,
                                  children: [
                                    {
                                      text: "不能说的秘密电影原声带",
                                      prefix: "2016",
                                      collapsible: true,
                                      children: [
                                        "",
                                          ],
                                        }
                        
                                      ],
                                    },
                                    {
                                      text: "写给其他歌手",
                                      prefix: "others",
                                      collapsible: true,
                                      children: [
                                        "",
                                          ],
                                        },
                                        {
                                          text: "钢琴曲",
                                          prefix: "piano",
                                          collapsible: true,
                                          children: [
                                            {
                                              text: "即兴曲",
                                              link: "improvisation.md",
                                                }
                                              ],
                                            },
          ],
        }
      ],
  "/show/": [
    {
      text: "周杰伦演出收录",
      prefix: "",
      collapsible: false,
      children: [
        {
          text: "个人演唱会",
          prefix: "Concert",
          collapsible: true,
          expanded: true,
          children: [
            {
              text: "个唱总结",
              link: "README.md",
                },
            {
              text: "嘉年华（2019-至今）",
              link: "2019carnival/",
                },
            {
              text: "地表最强（2016-2019）",
              link: "2016Invincible/",
                },
            {
              text: "魔天伦（2013-2016）",
              link: "2013OpusJay/",
                },
            {
              text: "超时代（2010-2013）",
              link: "2010TheEra/",
                },
            {
              text: "2007WorldTours（2007-2009）",
              link: "2007WorldTours/",
                },
            {
              text: "无与伦比（2004-2006）",
              link: "2004incomparable/",
                },
            {
              text: "TheOne（2002-2003）",
              link: "2002TheOne/",
                },
            {
              text: "Fantasy（2001）",
              link: "2001Fantasy/",
                },
              ],
            },
            {
              text: "音乐节",
              link:"live/README.md",
                },
                {
                  text: "商业演出",
                  link:"business/README.md",
                    },
                    {
                      text: "公益演出",
                      link:"public/README.md",
                        },
          ],
        }
      ],
  "/video/": [
    {
      text: "参演影视作品",
      prefix: "",
      collapsible: false,
      children: [
        {
          text: "参演电影",
          link:"movie/README.md",
            },
            {
              text: "参演电视剧",
              link:"tv/README.md",
                },
          ],
        }
      ],
  "/others/": [
    {
      text: "奖项纪录",
      link:"trophy/README.md",
        },
        {
          text: "专访访谈",
          link:"interview/README.md",
            },
            {
              text: "品牌代言",
              link:"endorsement/README.md",
                },
                 ],
  "/culture/": [
    {
      text: "推荐访问",
      link:"link.md",
        },
        {
          text: "歌迷组织",
          link:"org.md",
            },
            {
              text: "加入伦吧",
              link:"join_us.md",
                },
      ],
    }
);
