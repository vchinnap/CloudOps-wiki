module.exports = {
    title: 'My Documentation Site',
    tagline: 'A Confluence replacement using Docusaurus',
    url: 'https://your-github-username.github.io',
    baseUrl: '/your-repo-name/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'your-github-username',
    projectName: 'your-repo-name',
    themeConfig: {
      navbar: {
        title: 'My Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/your-github-username/your-repo-name',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-github-username/your-repo-name',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl:
              'https://github.com/your-github-username/your-repo-name/edit/main/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
