const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: '',
    transpileDependencies: true, // 是否转义第三方依赖,构建速度受影响
    outputDir: 'dist',
    lintOnSave: false,
    productionSourceMap: false,
    // chainWebpack: (config) => {
    //     config.plugin('define').tap((definitions) => {
    //         Object.assign(definitions[0], {
    //             __VUE_OPTIONS_API__: 'true',
    //             __VUE_PROD_DEVTOOLS__: 'false',
    //             __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    //         })
    //         return definitions
    //     })
    // },
    devServer: {
        // proxy: "http://localhost:9000",
        port: 9001,
        open: true,
    }
})
