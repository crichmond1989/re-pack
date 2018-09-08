const addScript = require("npm-add-script");

const copy = require("./copy.js");
const npm = require("./npm.js");

module.exports = async () => {
    await copy(".babelrc");
    await copy("webpack.config.js");

    await npm.add("babel-core", "-D");
    await npm.add("babel-loader@7", "-D");
    await npm.add("babel-preset-env", "-D");
    await npm.add("babel-preset-react", "-D");
    await npm.add("clean-webpack-plugin", "-D");
    await npm.add("css-loader", "-D");
    await npm.add("html-webpack-plugin", "-D");
    await npm.add("mini-css-extract-plugin", "-D");
    await npm.add("webpack", "-D");
    await npm.add("webpack-clean-obsolete-chunks", "-D");
    await npm.add("webpack-command", "-D");

    addScript({ key: "build", value: "webpack", force: true });
    addScript({ key: "ci", value: "webpack -p", force: true });
}