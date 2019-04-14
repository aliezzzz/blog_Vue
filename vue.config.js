const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: false, //关闭production模式的sourcemap
    publicPath: '/', //部署服务器根目录
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
            }
        },
        plugins: [
            //清除控制台
            new UglifyJsPlugin({
                uglifyOptions: {
                   compress: {
                       warnings: false,
                        drop_debugger: true,
                       drop_console: true
                   }
               }
            })
        ]
    },
    devServer: {
        compress: true,
        disableHostCheck: true, // That solved it
    }
}
