const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    entry: "./web/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            path: __dirname + '/dist',
            template: "./web/index.html"
        })
    ],
    experiments: {
        asyncWebAssembly: true
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    }
}
