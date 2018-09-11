const path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [{
    mode: "none",
    entry: "./src/api/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    target: "node",
    externals: [nodeExternals()]
}, {
    mode: "none",
    devtool: "source-map",
    entry: {
        home: "./src/pages/home.jsx"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader"
        }]
    },
    target: "web",
    plugins: [
        new CleanWebpackPlugin(["public/*"]),
        new CleanObsoleteChunks(),
        new HtmlWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}]