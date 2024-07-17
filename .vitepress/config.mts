import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./docs",
  lastUpdated: true,
  title: "The ICTAZ Act, 2018",
  lang: "en-GB",
  description:
    "The Information and Communications Technology Association of Zambia Act, 2018",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Arrangement of Sections",
        items: [
          { text: "Part 1 » Preliminary Provisions", link: "/part-1" },
          {
            text: "Part 2 » The Information and Communications Technology Association of Zambia",
            link: "/part-2",
          },
          {
            text: "Part 3 » Executive Council of the Association",
            link: "/part-3",
          },
          { text: "Part 4 » Membership Registration Board", link: "/part-4" },
          {
            text: "Part 5 » Membership, Registration and Practising Certificate",
            link: "/part-5",
          },
          { text: "Part 6 » Regions and Branches", link: "/part-6" },
          {
            text: "Part 7 » Professional Ethics and Compliance Committee",
            link: "/part-7",
          },
          { text: "Part 8 » General Provisions", link: "/part-8" },
        ],
      },
      {
        text: "Schedules",
        items: [
          { text: "First Schedule", link: "/schedules/1" },
          { text: "Second Schedule", link: "/schedules/2" },
        ],
      },
      { text: "References", link: "/references" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/engineervix/zm-ictaz" },
    ],
    editLink: {
      pattern: "https://github.com/engineervix/zm-ictaz/edit/main/docs/:path",
    },
    footer: {
      message: 'Made with <a href="https://vitepress.dev">VitePress</a>.',
    },
    externalLinkIcon: true,
    search: {
      provider: "local",
    },
  },
  head: [["link", { rel: "stylesheet", href: "/extra.css" }]],
});
