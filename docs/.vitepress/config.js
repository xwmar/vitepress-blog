module.exports = {
    title: 'Hello VitePress', // 网站标题
    description: 'Just playing around.', // 网站介绍
    themeConfig: {
        docsDir: 'docs',
        lastUpdated: '最后更新时间',
        // 头部导航
        nav: [
            {
                text: 'Vue',
                items: [
                    { text: 'vue3入门', link: '/vue3' },
                    { text: 'demo1', link: '/course1'},
                    {text: 'demo2', link: '/course2'}
                ]
            },
            { text: '归档', link: '/pigeonhole' },
            { text: '关于', link: '/about' }
        ]
    }
}
