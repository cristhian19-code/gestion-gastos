const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Learning Frontend',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'JS',
        link: '/js/',
      },
      {
        text: 'CSS',
        link: '/css/'
      },
      {
        text: 'Reactjs',
        link: '/react/'
      },
      {
        text: 'Nodejs',
        link: '/node/'
      },
      {
        text: 'Blockchain',
        link: '/blockchain/'
      },
    ],
    sidebar: {
      '/js/': [
        '',
        'arreglos',
        'funciones',
        'iteradores',
        'array-methods'
      ],
      '/css/': [
        ''
      ],
      '/node/':[
        ''
      ],
      '/react/': [
        '',
        'javascript-moderno'
      ],
      '/blockchain/': [
        '',
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
