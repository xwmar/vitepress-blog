module.exports = {
    base: '',
    title: 'xWANG', // 网站标题
    description: 'Just playing around.', // 网站介绍
    markdown: {
        // lineNumbers: true, // 显示代码块行号
        // extractHeaders: [ 'h2', 'h3', 'h4' ]
    },
    themeConfig: {
        docsDir: 'docs',
        lastUpdated: '最后更新时间',
        // 头部导航
        nav: [
            {
                text: 'Vue',
                items: [
                    { text: 'vue3入门', link: '/vue3' }
                ]
            },
            { text: 'React.js', link: '/react-js' },
            { text: '小程序', link: 'mini-program' },
            {
                text:
                    '面试题库',
                items: [
                    { text: 'HTML', link: '/interview/interview-html' },
                    { text: 'CSS', link: '/interview/interview-css' },
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
