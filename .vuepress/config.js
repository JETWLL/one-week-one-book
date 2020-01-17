module.exports = {
  //页面顶部title
  title: '每周一书',
  //页面描述
  description: 'Just playing around',
  base: '/one-week-one-book/',

  themeConfig: {
    sidebar: {
      '/docs/fe/': [
        {
          title:'HTML',
          children:[
            'html/',
            'html/div'
          ]
        },
        {
          title:'CSS',
          children:[
            'css/',
            'css/a'
          ]
        },
      ],
      '/blog/': [
        {
          title:'HTML',
          collapsable: false,
          children:[
            'test1',
            'test2'
          ]
        },
        {
          title:'CSS',
          collapsable: false,
          children:[
            'test1',
            'test2'
          ]
        },
        {
          title:'JavaScript',
          collapsable: false,
          children:[
            'test1',
            'test2'
          ]
        }
      ],
      '/idea/': [
        {
          title:'人生感悟',
          children:[
            '论设定目标的重要性'
          ]
        }
      ],
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端技术', link: '/docs/fe/' },
      { text: '后端技术', link: '/rd/' },
      // { text: '读书笔记', link: '/blockchain/' },
      { text: '人生感悟', link: '/idea/' },
      { text: '财富自由', link: '/free/' },
    ]
  }
};
