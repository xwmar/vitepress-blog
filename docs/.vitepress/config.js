module.exports = {
    title: 'xWANG', // 网站标题
    description: 'Just playing around.', // 网站介绍
    base: '/',
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
            { text: 'React.js', link: '/react-js' },
            { text: '小程序', link: 'mini-program' },
            {
                text:
                    '面试题库',
                items: [
                    { text: 'H5C3', link: '/interview/interview-h5c3' },
                    { text: 'JavaScript', link: '/interview/interview-js' },
                    { text: 'ES6新特性', link: '/interview/interview-es6'},
                    { text: 'Vue.js', link: '/interview/interview-vue' }
                    
                ]
            },
            { text: '归档', link: '/pigeonhole' },
            { text: '关于', link: '/about' }
        ]
    }
}
