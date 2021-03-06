module.exports = {
  title: "Qredo Help Center",
  tagline: "Knowledge Base and Customer Support for Qredos",
  url: "https://thronecloud.github.io",
  baseUrl: "/",
  favicon: "/img/favicon.ico",
  organizationName: "qredo", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    defaultDarkMode: false,
    algolia: {
      apiKey: "f0598b74cf278ea9e04592f0d7db3736",
      indexName: "thronecloud",
    },
    navbar: {
      logo: {
        alt: "Qredo Logo",
        src: "/img/qredo-logo-help-center-horizontal.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "What is Qredo",
              to: "docs/",
            },
            {
              label: "Getting Started with Qredo",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Qredo",
              href: "https://www.qredo.com/",
            },
            {
              label: "Apache Milagro",
              href: "https://milagro.apache.org/users.html",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/QredoNetwork",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/qredo/documentation",
            },
          ],
        },
      ],
      logo: {
        src: '/img/qredo-logo-horizontal.png',
      },
      productLinks: {
        siteMap: '',
        termsOfUse: '',
        privacyCenter: '',
        contactUs: '',
        qredoHome: 'https://www.qredo.com/home',
      },
      copyright: `Copyright &copy; ${new Date().getFullYear()} Qredo Support.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "Qredo Network",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/qredo/documentation/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/qredo/documentation/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
