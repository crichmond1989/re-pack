const fs = require("fs-extra");

const copy = require("./copy.js");
const spawn = require("./spawn.js");

const gitInit = async () => {
    const exists = await fs.pathExists(".git");

    if (exists)
        return;

    return await spawn("git", "init");
}

module.exports = async () => {
    await gitInit();
    await copy(".gitignore", "gitignore.temp");
}