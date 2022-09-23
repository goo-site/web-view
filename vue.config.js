const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,

    // 修改端口号
    devServer: {
        host: 'localhost',
        port: 8080
    }
})
