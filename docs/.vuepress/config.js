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
        navbar: [
            {
                text: '前端笔记',
                children: [
                    { text: '面试小计', link: '/fe_subtotal/interview/' },
                    { text: 'Vue', link: '/fe_subtotal/vue/' },
                    { text: 'React', link: '/fe_subtotal/react/' },
                    { text: 'js基础', link: '/fe_subtotal/js/' }
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