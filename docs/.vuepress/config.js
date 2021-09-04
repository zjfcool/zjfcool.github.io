module.exports = {
    lang: "zh-CN",
    title: "木水清风的笔记",
    description: '随时查阅的笔记',
    // plugins: [
    //     [
    //         '@vuepress/docsearch',
    //         {
    //             apiKey: '<API_KEY>',
    //             indexName: '<INDEX_NAME>',
    //             locales: {
    //                 '/': {
    //                     placeholder: 'Search Tip',
    //                 },
    //                 '/zh/': {
    //                     placeholder: '搜索笔记',
    //                 },
    //             },
    //         },
    //     ],
    // ],
    themeConfig: {
        repo: 'zjfcool/zjfcool.github.io',
        editLink: false,
        sidebar: {
            '/fe-note/engineering/': [
                {
                    isGroup: true,
                    text: 'CLI相关',
                    children: [
                        '/fe-note/engineering/cli.md'
                    ],
                },
            ],
            '/fe-note/tip/': [
                {
                    isGroup: true,
                    text: '小记',
                    children: [
                        '/fe-note/tip/echarts.md'
                    ],
                },
            ]
        },
        navbar: [
            {
                text: '前端笔记',
                children: [
                    { text: '面试', link: '/fe-note/interview/' },
                    { text: 'js基础', link: '/fe-note/js/' },
                    { text: 'Vue', link: '/fe-note/vue/' },
                    { text: 'React', link: '/fe-note/react/' },
                    { text: 'nodejs', link: '/fe-note/nodejs/' },
                    { text: '前端工程化', link: '/fe-note/engineering/' },
                    { text: '小记', link: '/fe-note/tip/' }
                ]
            },
            {
                text: "随笔",
                link: "/essay/"
            }
        ],

    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
    ]
}