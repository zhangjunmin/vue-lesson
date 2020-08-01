/**
 * webpack 配置信息 (安装webpack webpack-cli)
 * 1 配置入口文件，输出文件 
 * 2 编译 vue(vue-loader vue-template-compiler,style-loader)，js(babel-loader,@babel/core)，css(css-loader,style-loader) 文件
 * 3 生成 html html-webpack-plugin
 * 4 开启服务 webpack-dev-server,cross-env
 */

 const path = require('path')
 const VueLoaderPlugin = require('vue-loader/lib/plugin')
 const HtmlPlugin = require('html-webpack-plugin')

 const isDev = process.env.NODE_ENV === 'development'
 const webpack = require('webpack')
 const config = {
    // 编译目标
    target: 'web',
    // 入口文件
    entry: path.join(__dirname, 'src/main.js'),
    // 输出文件
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.js/,
                loader: 'babel-loader'
            },{
                test: /\.css/,
                loader:['style-loader', 'css-loader']
            },
            // 如果css中用了icon字体必须
            {
              test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
              loader: 'file-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev? '"development"': '"production"'
            }
        }),
        // 生成html
        new HtmlPlugin(),
        new VueLoaderPlugin()
    ]
 }
if (isDev) {
    // 配置HTTP服务器信息
    config.devServer = {
        host: '0.0.0.0',
        port: 8080,
        overlay: {
            errors: true
        }
    }
}
 module.exports = config

