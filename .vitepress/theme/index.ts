// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import "./style.css";
import Annotation from "../components/annotation.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.use(FloatingVue);
    app.component("Annotation", Annotation);
  },
} satisfies Theme;
