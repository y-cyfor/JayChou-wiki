import { defineClientConfig } from "vuepress/client";
import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.47_@waline+client@3.2.1_markdown-it@14.1.0_mermaid@10.9.1_vuepress@2.0.0-rc.12/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.33_vuepress@2.0.0-rc.12/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"

import "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.33_vuepress@2.0.0-rc.12/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/CYFOR/Desktop/zjl/wiki/jaychou-wiki/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.47_@waline+client@3.2.1_markdown-it@14.1.0_mermaid@10.9.1_vuepress@2.0.0-rc.12/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});