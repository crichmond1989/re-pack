const api = require("./api.js");
const ensureDir = require("./ensureDir.js");
const git = require("./git.js");
const npm = require("./npm.js");
const react = require("./react.js");
const webpack = require("./webpack.js");

module.exports = async (root) => {
    if (root) {
        await ensureDir(root);
        process.chdir(root);
    }

    await git();
    await npm.init();

    await api();
    await react();
    await webpack();

    await npm.install();
}