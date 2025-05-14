# 贡献指南
如果你有兴趣参与到本项目，无论是新增内容还是勘误，都欢迎你使用以下方式提交。
> 发送内容请注明你的昵称、头像、主页（任何社交平台都可以），方便在致谢中列出。

## 如果你不懂任何技术
可以通过以下方式，发送对相关内容页面的疏漏、错误或内容补充，也可以提出站内尚未维护的资料或对本站的建议。
- E-mail：cyfor@foxmail.com
- 本站任意页面底部评论区
- 找到你所在[伦吧歌迷会](/culture/join_us.md)的管理，提交内容或要求参与项目

## 如果你熟悉Git、前端、Markdown
- 直接联系上述邮箱，参与到本项目的建设中
- 在[Github](https://github.com/y-cyfor/JayChou-wiki)找到这个开源项目，你可以提交 Issues或 Pull Request 等待项目合并更新内容<br>（尽量不要吧，因为git我不怎么会....~~其实完全不会~~）

## 启动本地开发服务器
Step1 安装代码编辑器（推荐VScode）

Step2 克隆项目代码到本地
>https://github.com/y-cyfor/JayChou-wiki.git

>SSH：git@github.com:y-cyfor/JayChou-wiki.git 

Step3 在项目根目录打开终端，运行`pnpm install`安装依赖包
::: tip 提示
`vuepress-theme-hope`要求`Node.js`版本>= 20.6.0，`PNPM`版本>= 7，请确保你的电脑已安装以上版本。
如本地报错，可前往[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/faq/troubleshooting.html)查找解决方案
:::

Step4 在项目根目录打开终端，运行`pnpm docs:dev`启动本地开发服务器，打开http://localhost:8080/即可浏览项目

Step5 修改本地`md`文件，浏览器自动热更新内容预览
::: caution 警告
VuePress更新频繁，易造成依赖冲突，请不要执行`update`操作等待我更新 
:::

## 贡献规范
### 页面结构

::: details 演出（演唱会）页面结构
``` markdown
--- head信息（关键词与描述）---

# 演出通用名

![演出海报](链接 "图片信息") 

## 基本信息
### 时间地点
- 时间：
- 场馆：
- 正式名：
<!-- 官方名，可能带赞助商 -->

### 制作单位
一般以海报为准，包含：
- 主办单位：
- 协办单位：
- 艺人经纪：
<!-- 一般为杰威尔音乐，大陆阶段性可能主体为巨室音乐，早起为阿尔法音乐 -->
- 节目制作：
<!-- 一般为巨炮娱乐，根据时间线分巨炮娱乐国际集团和巨炮文化有限公司等不同名 -->
- 工程统筹：
- 票务代理：
<!-- 大陆地区名称标准：大麦网、猫眼电影、票星球、永乐票务、中国票务在线、 -->
- 冠名：
- 赞助：
- 其他非标准命名单位：

### 批文
<!-- .vuepress\styles\index.scss中让Ai自定义了一个图片左右滚动效果，如有大量图片时，使用以下方式引用 -->
<div class="image-scroll-container">
  <div class="image-scroll-wrapper">
    <div class="image-scroll-content">
        <figure>
            <img src="图片链接" alt="图片标签" />
            <figcaption>图片显示名</figcaption>
        </figure>
    </div>
  </div>
</div>

## 票务快照
<!-- 近期能找到原始售票页面的为票务快照，历史久远的为票务信息 -->
### 座位图
![座位图](链接 "图片信息")
### 开票信息
- 售票平台：
    - 初始开售时可售票总张数：
    <!-- 等可被找到的有价值信息 -->

- 首次开票：
    - 时间：
    - 公告

- 限售政策
- 退票政策

### 售票平台截图
<!-- 售票平台的快照和在售票平台公布的主办方公告等信息 -->
同上的图片容器

## 歌单

## 官摄
同上图片容器
```
:::

::: details 演出（其他）页面结构
``` markdown    
```
:::

::: details CD（单曲）页面结构
``` markdown    
```
:::

::: details CD（专辑）页面结构
``` markdown    
```
:::

::: details CD（其他）页面结构
``` markdown    
```
:::

### 项目自定义样式
#### 图片容器
因为vuepress-theme-hope自带主题仅支持图片预览效果，即点击放大缩小，不支持左右滚动，在单个页面或页面内某个段落引用图片较多的时候排版有些乱，所以我在`src\.vuepress\styles\index.scss`自定义了一个图片容器，实现图片左右滚动效果，使用方法如下：
``` html
<div class="image-scroll-container">
  <div class="image-scroll-wrapper">
    <div class="image-scroll-content">
        <figure>
            <img src="图片链接" alt="图片标签" />
            <figcaption>图片显示名</figcaption>
        </figure>
    </div>
  </div>
</div>