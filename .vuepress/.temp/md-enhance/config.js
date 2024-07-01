import { defineClientConfig } from "vuepress/client";
import CodeTabs from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.37_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Mermaid from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/reveal.js@5.1.0/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_mermaid@10.9.1_reveal.js@5.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
