module.exports = {
  title: 'Voices',
  tagline: 'Cultural immersion by discovering personal stories.',
  // Url options to deploy to github pages
  url: 'https://bakerfugu.github.io',
  baseUrl: '/voices-everywhere-cs147/',

  // Url options to deploy to stanford myth server
  // url: 'http://web.stanford.edu',
  // baseUrl: '/class/cs147/projects/ArtsandCulture/Voices/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'bakerfugu', // Usually your GitHub org/user name.
  projectName: 'voices-everywhere-cs147', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'voices',
      logo: {
        alt: 'Voices Everywhere Logo',
        src: 'img/favicon.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          //activeBasePath: "#our-journey",
          //href: '#our-journey',
          label: 'Our Journey',
          position: 'left',
        },
        {
          href: 'http://cs147.stanford.edu/',
          label: 'CS147',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/bakerfugu/voices-everywhere-cs147/',
        //   label: 'Source',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      // style: 'dark',
      // links: [
      //   {
      //     title: 'Our Work',
      //     items: [
      //       {
      //         label: 'Overview',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Final Prototype',
      //         to: 'docs/high-fidelity-prototype/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'CS147 Course Site',
      //         href: 'http://cs147.stanford.edu/',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://bakerfugu.github.io/voices-everywhere-cs147/',
      //       },
      //     ],
      //   },
      // ],
      // copyright: `Made for the CS147 course at Stanford. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/bakerfugu/voices-everywhere-cs147/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
