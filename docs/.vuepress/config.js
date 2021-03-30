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
        navbar: [
            {
                text: '前端笔记',
                children: [
                    { text: '面试', link: '/fe_note/interview/' },
                    { text: 'Vue', link: '/fe_note/vue/' },
                    { text: 'React', link: '/fe_note/react/' },
                    { text: 'js基础', link: '/fe_note/js/' }
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