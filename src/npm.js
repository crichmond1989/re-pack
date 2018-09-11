const fs = require("fs-extra");
const spawn = require("./spawn.js");

const npmAdd = (...args) => {
    return npmInstall(...args, "--package-lock-only");
}

const npmInit = async () => {
    const exists = await fs.pathExists("package.json");

    if (exists)
        return;

    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

    return await spawn(npmCommand, "init", "-y");
}

const npmInstall = (...args) => {
    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

    return spawn(npmCommand, "install", ...args);
};

module.exports = {
    add: npmAdd,
    init: npmInit,
    install: npmInstall
};