const fs = require("fs-extra");
const spawn = require("./spawn.js");

const npmInit = async () => {
    const exists = await fs.pathExists("package.json");

    if (exists)
        return;

    console.log("npm init -y");

    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

    return await spawn(npmCommand, ["init", "-y"]);
}

const npmInstall = (package) => {
    console.log(`Install: ${package}`);

    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

    return spawn(npmCommand, ["install", package]);
};

module.exports = async () => {
    await npmInit();
    await npmInstall("hello.world");
}