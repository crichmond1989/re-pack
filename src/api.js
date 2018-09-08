const addScript = require("npm-add-script");

const copy = require("./copy.js");
const npm = require("./npm.js");

module.exports = async () => {
    await copy("src/api/index.js");

    await npm.add("express", "-S");
    await npm.add("nodemon", "-D");
    await npm.add("webpack-node-externals", "-D");

    addScript({ key: "debug", value: "nodemon dist/main.js", force: true });
    addScript({ key: "start", value: "node dist/main.js", force: true });
}