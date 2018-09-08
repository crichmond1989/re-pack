const copy = require("./copy.js");
const ensureDir = require("./ensureDir.js");
const git = require("./git.js");
const npm = require("./npm.js");

module.exports = async (root) => {
    if (root) {
        await ensureDir(root);
        process.chdir(root);
    }

    await ensureDir("src");
    await ensureDir("src/api");
    await ensureDir("src/comps");

    //copy("src/api/server.js");
    await copy(".babelrc");
    //copy("webpack.config.js");

    await git();

    await npm();
}