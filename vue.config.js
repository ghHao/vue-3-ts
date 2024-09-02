const {defineConfig} = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    publicPath: './',  // 生成文件的目录名称（要和baseUrl的生产环境路径一致）
    outputDir: 'dist', transpileDependencies: true, // 是否转义第三方依赖,构建速度受影响
    lintOnSave: false,   // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     * 打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     * map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     * */
    productionSourceMap: process.env.NODE_ENV !== 'production',

    chainWebpack(config) {
        // 路径替换
        config.resolve.alias
            .set('@', path.resolve('src'))
            .set('~', path.resolve('src/assets'))

        // 关于打包后资源各部分占比的配置相关
        // if (process.env.NODE_ENV === 'production') {
        //     const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        //     config.plugins.push(
        //         new BundleAnalyzerPlugin()
        //     );
        // }


        // 生产环境打包，进行文件压缩
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
            const CompressionPlugin = require('compression-webpack-plugin');
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            };
        }
        // 分析打包时间
        const ProgressBarPlugin = require('progress-bar-webpack-plugin');
        const chalk = require('chalk');
        return {
            plugins: [new ProgressBarPlugin({
                format: ' build [:bar] ' + chalk.red.bold(':percent') + ' (:elapsed seconds)',
                clear: true
            }),]
        };

    }, devServer: {
        // proxy: "http://localhost:9000",
        port: 9001, open: true,
    }
})
