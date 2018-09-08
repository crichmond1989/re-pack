const copy = require("./copy.js");
const npm = require("./npm.js");

module.exports = async () => {
    await copy("src/api/index.js");

    await npm.add("express", "-S");
    await npm.add("webpack-node-externals", "-D");
}