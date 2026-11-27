// Prototype — published on GitHub Pages at https://jkosheleva.github.io/dxfeed-docusaurus-demo/
const config = {
  title: 'dxFeed Knowledge Base',
  tagline: 'Developer documentation and market data guides',
  favicon: 'img/favicon.svg',

  // GitHub Pages: https://<organizationName>.github.io/<projectName>/
  url: 'https://jkosheleva.github.io',
  baseUrl: '/dxfeed-docusaurus-demo/',
  organizationName: 'jkosheleva',
  projectName: 'dxfeed-docusaurus-demo',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        blog: false,
        theme: {customCss: require.resolve('./src/css/custom.css')},
      },
    ],
  ],

  // Offline full-text search: no external service, index is built with the site.
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'dxFeed KB',
      logo: {alt: 'dxFeed', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Documentation'},
        {to: '/review', label: 'Structure review', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Knowledge Base', to: '/docs/about'},
            {label: 'Review notes', to: '/review'},
          ],
        },
      ],
      copyright: 'dxFeed KB · Docusaurus prototype · Not for production',
    },
    prism: {additionalLanguages: ['java', 'javascript', 'json', 'bash', 'python', 'csharp', 'cpp']},
  },
};

module.exports = config;
