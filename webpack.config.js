//引入path模块
var path = require("path");
//引入自动加载页面的插件
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //打包输入输出
    entry: path.join(__dirname, "./src/js/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    //配置自动加载
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html"
        })
    ],
    //配置loader规则
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|bmp)$/,
                use: ["url-loader"]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
                exclude: /node_module/
            }
        ]
    }

}