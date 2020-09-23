module.exports = {
    devServer: {
        // 本地运行地址
        host: 'localhost',
        // 本地运行端口
        port: '3001',
        // 代理配置
        proxy: {
            // 匹配拦截路由
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}