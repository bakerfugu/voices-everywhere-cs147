module.exports = {
  title: 'Voices Everywhere',
  tagline: 'Hear locals\' stories, from exactly where they happened.',
  url: 'https://bakerfugu.github.io',
  baseUrl: '/voices-everywhere-cs147/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/easter-island-illustration-vector.png',
  organizationName: 'bakerfugu', // Usually your GitHub org/user name.
  projectName: 'voices-everywhere-cs147', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Voices Everywhere',
      logo: {
        alt: 'Voices Everywhere Logo',
        src: 'img/easter-island-illustration-vector.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Our Work',
          position: 'left',
        },
        {
          href: 'http://cs147.stanford.edu/',
          label: 'CS147',
          position: 'right',
        },
        {
          href: 'https://github.com/bakerfugu/voices-everywhere-cs147/',
          label: 'Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Our Work',
          items: [
            {
              label: 'Overview',
              to: 'docs/',
            },
            {
              label: 'Final Prototype',
              to: 'docs/high-fidelity-prototype/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'CS147 Course Site',
              href: 'http://cs147.stanford.edu/',
            },
            {
              label: 'GitHub',
              href: 'https://bakerfugu.github.io/voices-everywhere-cs147/',
            },
          ],
        },
      ],
      copyright: `Made for the CS147 course at Stanford. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/bakerfugu/voices-everywhere-cs147/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
